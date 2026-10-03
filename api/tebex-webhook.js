// Tebex Webhook Handler - Vercel Serverless Function
// This endpoint receives payment notifications from Tebex and credits tickets to the player's Firebase account.

const FIREBASE_DB_URL = "https://wave-dash-game-default-rtdb.firebaseio.com";

// Map package names to ticket amounts
const TICKET_PACKAGES = {
    "100 tickets": 100,
    "500 tickets": 500,
    "1000 tickets": 1000,
    "100": 100,
    "500": 500,
    "1000": 1000
};

// Map Tebex package IDs directly to ticket amounts
const TICKET_PACKAGES_BY_ID = {
    "7645509": 100,
    "7645511": 500,
    "7645512": 1000
};

module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const payload = req.body;

        // Log the webhook for debugging
        console.log("Tebex Webhook received:", JSON.stringify(payload));

        // Tebex sends a validation ping - respond with 200
        if (payload.type === 'validation.webhook') {
            console.log("Webhook validation ping received");
            return res.status(200).json({ id: payload.id });
        }

        // Handle payment completed event
        if (payload.type === 'payment.completed') {
            const subject = payload.subject;

            if (!subject) {
                console.error("No subject in webhook payload");
                return res.status(400).json({ error: 'Invalid payload' });
            }

            // Get the player's username from the customer field
            const customer = subject.customer;
            const username = customer?.username?.id || customer?.username || null;

            if (!username) {
                console.error("No username found in payment:", subject.transaction_id);
                return res.status(400).json({ error: 'No username provided' });
            }

            // Calculate total tickets from all products in this payment
            let totalTickets = 0;
            const products = subject.products || [];

            for (const product of products) {
                const prodId = String(product.id || product.package_id || '');
                if (TICKET_PACKAGES_BY_ID[prodId]) {
                    totalTickets += TICKET_PACKAGES_BY_ID[prodId] * (product.quantity || 1);
                    continue;
                }
                const productName = (product.name || '').toLowerCase().trim();
                // Match against known packages
                for (const [packageName, tickets] of Object.entries(TICKET_PACKAGES)) {
                    if (productName.includes(packageName.toLowerCase())) {
                        totalTickets += tickets * (product.quantity || 1);
                        break;
                    }
                }
            }

            if (totalTickets === 0) {
                console.error("No matching ticket package found for products:", products);
                return res.status(400).json({ error: 'No matching ticket package' });
            }

            // Fetch the current user profile from Firebase
            const cleanURL = FIREBASE_DB_URL.endsWith('/') ? FIREBASE_DB_URL.slice(0, -1) : FIREBASE_DB_URL;
            const userPath = `${cleanURL}/users/${username.toLowerCase()}.json`;

            const userResponse = await fetch(userPath);
            const userData = await userResponse.json();

            if (!userData) {
                console.error("User not found in database:", username);
                return res.status(404).json({ error: 'User not found' });
            }

            // Add the tickets to the user's existing coin balance
            const currentCoins = userData.coins || 0;
            const newCoins = currentCoins + totalTickets;

            // Update only the coins field in Firebase
            await fetch(userPath, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ coins: newCoins })
            });

            // Log the successful transaction
            const transactionLog = {
                transactionId: subject.transaction_id,
                username: username,
                ticketsAdded: totalTickets,
                previousBalance: currentCoins,
                newBalance: newCoins,
                timestamp: new Date().toISOString(),
                paymentAmount: subject.payment_amount
            };

            // Save transaction log to Firebase
            await fetch(`${cleanURL}/transactions/${subject.transaction_id}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(transactionLog)
            });

            console.log(`SUCCESS: Credited ${totalTickets} tickets to ${username}. Balance: ${currentCoins} -> ${newCoins}`);

            return res.status(200).json({
                success: true,
                username: username,
                ticketsAdded: totalTickets,
                newBalance: newCoins
            });
        }

        // Handle payment declined/refunded - revoke tickets
        if (payload.type === 'payment.declined' || payload.type === 'payment.refunded') {
            const subject = payload.subject;
            const customer = subject?.customer;
            const username = customer?.username?.id || customer?.username || null;

            if (username) {
                console.log(`Payment ${payload.type} for user: ${username}, transaction: ${subject.transaction_id}`);

                // Look up the original transaction to know how many tickets to revoke
                const cleanURL = FIREBASE_DB_URL.endsWith('/') ? FIREBASE_DB_URL.slice(0, -1) : FIREBASE_DB_URL;
                const txnResponse = await fetch(`${cleanURL}/transactions/${subject.transaction_id}.json`);
                const txnData = await txnResponse.json();

                if (txnData && txnData.ticketsAdded) {
                    const userPath = `${cleanURL}/users/${username.toLowerCase()}.json`;
                    const userResponse = await fetch(userPath);
                    const userData = await userResponse.json();

                    if (userData) {
                        const currentCoins = userData.coins || 0;
                        const newCoins = Math.max(0, currentCoins - txnData.ticketsAdded);

                        await fetch(userPath, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ coins: newCoins })
                        });

                        console.log(`REVOKED: ${txnData.ticketsAdded} tickets from ${username} due to ${payload.type}`);
                    }
                }
            }

            return res.status(200).json({ success: true });
        }

        // For any other event type, acknowledge it
        return res.status(200).json({ success: true });

    } catch (error) {
        console.error("Webhook processing error:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
