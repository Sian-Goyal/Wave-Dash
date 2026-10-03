// Player Class (Flying Rocket / Ship Mode) for Neon Dash

class Player {
    constructor(startX = 100, startY = 300) {
        this.startX = startX;
        this.startY = startY;

        // Position & Dimensions
        this.x = startX;
        this.y = startY;
        this.width = 44;
        this.height = 32;

        // Physics variables for Flight
        this.vx = 0;
        this.vy = 0;
        this.baseVx = 330; // base horizontal scrolling speed (slightly faster for flight)
        this.speedMultiplier = 1.0;
        
        // Flight tuning constants
        this.gravityValue = 1800; // downward pull pixels/sec^2
        this.thrustForce = -3800; // upward acceleration pixels/sec^2 (must overcome gravity)
        this.gravityInverse = false;
        
        // Active hold states
        this.isHoldingThrust = false;

        // State flags
        this.isGrounded = false;
        this.isDead = false;
        this.hasWon = false;
        this.attempts = 1;
        this.coinsCollected = 0;

        // Practice Mode State
        this.practiceMode = false;
        this.checkpoints = [];

        // Cosmetics
        this.color1 = '#00f3ff'; // Primary neon color
        this.color2 = '#ffffff'; // Detail/Cockpit color
        
        // Rotation angle matching pitch trajectory
        this.angle = 0;
        
        // Ship skin model style
        this.modelStyle = localStorage.getItem('wave_dash_ship_model') || 'arrow';

        // Load custom colors from localStorage
        this.loadCustomColors();

        this.magnetTimer = 0;
        this.shieldActive = false;
        this.boostTimer = 0;
        this.baseSpeedMultiplier = 1.0;
        this.trailStyle = localStorage.getItem('wave_dash_equipped_trail') || 'default';
    }

    loadCustomColors() {
        try {
            const c1 = localStorage.getItem('neon_dash_color1');
            const c2 = localStorage.getItem('neon_dash_color2');
            if (c1) this.color1 = c1;
            if (c2) this.color2 = c2;
        } catch (e) {
            console.error("Failed to load custom colors", e);
        }
    }

    saveCustomColors(c1, c2) {
        this.color1 = c1;
        this.color2 = c2;
        try {
            localStorage.setItem('neon_dash_color1', c1);
            localStorage.setItem('neon_dash_color2', c2);
        } catch (e) {
            console.error("Failed to save custom colors", e);
        }
    }

    updateRotation(dt) {
        if (this.isDead) return;

        // Calculate pitch angle based on trajectory
        // Point up when going up, point down when falling
        const horizontalSpeed = this.baseVx * this.speedMultiplier;
        
        // Scale pitch angle to clamp within about -35 to +35 degrees
        let targetAngle = Math.atan2(this.vy, horizontalSpeed) * 0.85;

        // Smoothly interpolate current angle toward target pitch
        const rotationSmoothness = 16;
        this.angle += (targetAngle - this.angle) * rotationSmoothness * dt;
    }

    die(particleSystem, audioSystem, contactX = null, contactY = null) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('autoplay') === '1') {
            return; // God Mode ONLY during autoplay recording
        }
        if (this.isDead || this.hasWon) return;

        this.isDead = true;
        this.vy = 0;
        this.vx = 0;
        this.isHoldingThrust = false;
        this.deathTime = Date.now();

        // Visual death explosion
        if (particleSystem) {
            const expX = contactX !== null ? contactX : (this.x + this.width / 2);
            const expY = contactY !== null ? contactY : (this.y + this.height / 2);
            particleSystem.emitDeathExplosion(
                expX,
                expY,
                this.color1,
                this.color2
            );
        }

        // Sound trigger
        if (audioSystem) {
            audioSystem.playDeathSound();
        }

        if (this.practiceMode) {
            setTimeout(() => {
                this.respawn(particleSystem);
            }, 1200);
        }
    }

    respawn(particleSystem) {
        if (this.practiceMode && this.checkpoints.length > 0) {
            this.restoreLatestCheckpoint(particleSystem);
        } else {
            // Full reset from start
            this.x = this.startX;
            this.y = this.startY;
            this.vy = 0;
            this.gravityInverse = false;
            this.speedMultiplier = 1.0;
            this.baseSpeedMultiplier = 1.0;
            this.magnetTimer = 0;
            this.shieldActive = false;
            this.boostTimer = 0;
            this.isDead = false;
            this.isGrounded = false;
            this.isHoldingThrust = false;
            this.attempts++;
            this.coinsCollected = 0;
            this.angle = 0;

            if (window.activeLevelInstance) {
                window.activeLevelInstance.resetCoins();
            }

            if (window.GameEngineInstance) {
                window.GameEngineInstance.ghostIndex = 0;
            }
        }

        if (this.practiceMode && window.GameEngineInstance) {
            window.GameEngineInstance.gameState = 'playing';
            if (window.GameEngineInstance.audio) {
                window.GameEngineInstance.audio.startMusic();
            }
        }

        if (particleSystem) {
            particleSystem.clear();
        }
    }

    win() {
        if (this.hasWon || this.isDead) return;
        this.hasWon = true;
        this.vx = 0;
        this.vy = 0;
        this.isHoldingThrust = false;

        const winEvent = new CustomEvent('levelComplete');
        window.dispatchEvent(winEvent);
    }

    // -------------------------------------------------------------
    // PRACTICE MODE CHECKPOINTS
    // -------------------------------------------------------------

    createCheckpoint(level) {
        if (this.isDead || this.hasWon) return;

        const checkpoint = {
            x: this.x,
            y: this.y,
            vy: this.vy,
            gravityInverse: this.gravityInverse,
            speedMultiplier: this.speedMultiplier,
            coinsCollected: this.coinsCollected,
            angle: this.angle,
            isGrounded: this.isGrounded,
            coinStates: level.coins.map(c => c.collected)
        };

        this.checkpoints.push(checkpoint);
        return this.checkpoints.length;
    }

    restoreLatestCheckpoint(particleSystem) {
        if (this.checkpoints.length === 0) return;

        const cp = this.checkpoints[this.checkpoints.length - 1];
        
        this.x = cp.x;
        this.y = cp.y;
        this.vy = cp.vy;
        this.gravityInverse = cp.gravityInverse;
        this.speedMultiplier = cp.speedMultiplier;
        this.baseSpeedMultiplier = cp.speedMultiplier;
        this.magnetTimer = 0;
        this.shieldActive = false;
        this.boostTimer = 0;
        this.coinsCollected = cp.coinsCollected;
        this.angle = cp.angle;
        this.isGrounded = cp.isGrounded;
        this.isDead = false;
        this.isHoldingThrust = false;

        if (window.activeLevelInstance) {
            window.activeLevelInstance.restoreCoinStates(cp.coinStates);
        }

        if (particleSystem) {
            particleSystem.emitPortalRing(this.x + this.width / 2, this.y + this.height / 2, '#39ff14');
        }
    }

    clearCheckpoints() {
        this.checkpoints = [];
    }

    removeLastCheckpoint() {
        if (this.checkpoints.length > 0) {
            this.checkpoints.pop();
            return true;
        }
        return false;
    }

    // -------------------------------------------------------------
    // RENDERING THE SPACESHIP
    // -------------------------------------------------------------

    draw(ctx, quality = 'high') {
        if (this.isDead) return;

        ctx.save();
        
        // Dynamic shield glow for high quality
        if (quality === 'high') {
            ctx.shadowColor = this.color1;
            ctx.shadowBlur = 18;
        }

        // Translate to spaceship center
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.angle);

        // 1. Animated engine flame (scale and flicker)
        if (this.isHoldingThrust) {
            ctx.save();
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#ff3300';
            
            const flicker = 0.8 + Math.random() * 0.4;
            const flameGrad = ctx.createLinearGradient(-this.width / 2 - 4, 0, -this.width * 1.5, 0);
            flameGrad.addColorStop(0, '#ffffff');
            flameGrad.addColorStop(0.2, '#ffcc00');
            flameGrad.addColorStop(0.5, '#ff3300');
            flameGrad.addColorStop(1, 'rgba(255, 51, 0, 0)');
            
            ctx.fillStyle = flameGrad;
            ctx.beginPath();
            ctx.moveTo(-this.width / 2 - 4, -8);
            ctx.lineTo(-this.width * 1.2 * flicker, 0);
            ctx.lineTo(-this.width / 2 - 4, 8);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        // 2. Main Aerodynamic Fuselage (Body)

        // --- CUSTOM PHOTO SHIP ---
        const shipImg = this.customShipImage || window._customShipImage;
        if (this.modelStyle === 'custom' && shipImg) {
            // Draw the user's photo clipped into a circle, scaled to ship size
            const r = Math.max(this.width, this.height) / 2;
            ctx.save();
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(shipImg, -r, -r, r * 2, r * 2);
            ctx.restore();
            // Neon outline ring around photo
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.strokeStyle = this.color1;
            ctx.lineWidth = 3;
            if (quality === 'high') { ctx.shadowColor = this.color1; ctx.shadowBlur = 10; }
            ctx.stroke();

            // Draw glowing cyan neon bubble shield if invulnerable
            if (this.invulnerableTimer > 0) {
                ctx.beginPath();
                ctx.arc(0, 0, r * 1.5, 0, Math.PI * 2);
                ctx.strokeStyle = '#00f3ff';
                ctx.lineWidth = 2.5;
                if (quality === 'high') {
                    ctx.shadowColor = '#00f3ff';
                    ctx.shadowBlur = 15;
                }
                ctx.stroke();
            }

            ctx.restore(); // restore the transform
            return;
        }

        const bodyGrad = ctx.createLinearGradient(-this.width / 2, 0, this.width / 2, 0);
        bodyGrad.addColorStop(0, '#1d1d29'); // Dark metallic base
        bodyGrad.addColorStop(1, this.color1); // Primary skin color at nose
        ctx.fillStyle = bodyGrad;
        
        ctx.strokeStyle = this.color2;
        ctx.lineWidth = 2.5;

        if (this.modelStyle === 'classic') {
            // Retro Glider (Geometry Dash arrow shape)
            ctx.beginPath();
            ctx.moveTo(this.width / 2, 0); // Nose tip
            ctx.lineTo(-this.width / 2, -this.height * 0.46); // Top wing tip
            ctx.lineTo(-this.width / 4, 0); // Center tail indent
            ctx.lineTo(-this.width / 2, this.height * 0.46); // Bottom wing tip
            ctx.closePath();
            ctx.fill();
            
            ctx.shadowBlur = 0;
            ctx.stroke();

            // Retro Cockpit center decal details
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(this.width / 6, 0);
            ctx.lineTo(-this.width / 8, -this.height * 0.15);
            ctx.lineTo(-this.width / 4, 0);
            ctx.lineTo(-this.width / 8, this.height * 0.15);
            ctx.closePath();
            ctx.fill();
        } 
        else if (this.modelStyle === 'ufo') {
            // Cyberpunk UFO Disc
            ctx.beginPath();
            ctx.ellipse(0, 0, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.shadowBlur = 0;
            ctx.stroke();

            // UFO rivets details
            ctx.fillStyle = this.color2;
            for (let i = -2; i <= 2; i++) {
                ctx.beginPath();
                ctx.arc(i * 7, 0, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // Central Cockpit Dome
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(0, -this.height * 0.22, 6, 0, Math.PI * 2);
            ctx.fill();
        } 
        else {
            // Default Jetliner Arrow Jet
            ctx.beginPath();
            ctx.moveTo(this.width / 2, 0);
            ctx.lineTo(-this.width / 4, -this.height / 5);
            ctx.lineTo(-this.width / 2, -this.height / 2);
            ctx.lineTo(-this.width / 3, 0);
            ctx.lineTo(-this.width / 2, this.height / 2);
            ctx.lineTo(-this.width / 4, this.height / 5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Thrusters side pods
            ctx.fillStyle = '#2d2d3d';
            ctx.beginPath();
            ctx.arc(-this.width / 4, -this.height / 3.5, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(-this.width / 4, this.height / 3.5, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Cockpit glass canopy details
            const glassGrad = ctx.createLinearGradient(-this.width / 8, 0, this.width / 4, 0);
            glassGrad.addColorStop(0, '#00f3ff');
            glassGrad.addColorStop(0.5, '#ffffff');
            glassGrad.addColorStop(1, '#00b8ff');

            ctx.fillStyle = glassGrad;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(this.width / 3.5, 0);
            ctx.lineTo(-this.width / 10, -this.height / 4.8);
            ctx.lineTo(-this.width / 10, this.height / 4.8);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Blinking wingtip navigators
            const lightPulse = Math.sin(Date.now() / 120) > 0;
            ctx.fillStyle = lightPulse ? '#39ff14' : '#ff0055';
            ctx.beginPath();
            ctx.arc(-this.width / 2, -this.height / 2, 3, 0, Math.PI * 2);
            ctx.arc(-this.width / 2, this.height / 2, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw glowing cyan neon bubble shield if invulnerable
        if (this.invulnerableTimer > 0) {
            ctx.beginPath();
            ctx.arc(0, 0, Math.max(this.width, this.height) * 0.8, 0, Math.PI * 2);
            ctx.strokeStyle = '#00f3ff';
            ctx.lineWidth = 2.5;
            if (quality === 'high') {
                ctx.shadowColor = '#00f3ff';
                ctx.shadowBlur = 15;
            }
            ctx.stroke();
        }

        // Draw glowing green shield bubble if active
        if (this.shieldActive) {
            ctx.beginPath();
            ctx.arc(0, 0, Math.max(this.width, this.height) * 0.9, 0, Math.PI * 2);
            ctx.strokeStyle = '#00ff87';
            ctx.lineWidth = 3;
            if (quality === 'high') {
                ctx.shadowColor = '#00ff87';
                ctx.shadowBlur = 15;
            }
            ctx.stroke();
        }

        ctx.restore();
    }
}

window.PlayerClass = Player;
