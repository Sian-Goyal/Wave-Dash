// -----------------------------------------------------------------
// CONFIGURATION: Set your real payment destinations here!
// -----------------------------------------------------------------
window.UPI_PAYMENT_ID = "wavedashgame-1@axl"; // Configured UPI ID
window.TEBEX_STORE_URL = "https://wave-dash.tebex.store"; // Tebex Store Subdomain URL
window.TEBEX_PACKAGE_IDS = {
    'tickets-100': '7645509',
    'tickets-500': '7645511',
    'tickets-1000': '7645512'
};
window.INTERNATIONAL_PAYMENT_URL = "https://paypal.me/yourusername/"; // Stripe Link or PayPal.Me URL
window.FIREBASE_DB_URL = "https://wave-dash-game-default-rtdb.firebaseio.com"; // Set your Firebase Realtime Database URL here (e.g., https://yourproject-default-rtdb.firebaseio.com)

// List of approved payment Transaction IDs (e.g., from Stripe Webhooks or GPay merchant logs).
// When users link these in their account profile, it unlocks lifetime premium membership!
window.VERIFIED_PAYMENT_IDS = [
    "TXN982348A",
    "STRIPE_CS_8829",
    "GPAY_991823",
    "PAYPAL_772A"
];
// -----------------------------------------------------------------

const ALL_COUNTRIES = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" },
    { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" },
    { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" },
    { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Burundi", code: "BI" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cambodia", code: "KH" },
    { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" },
    { name: "Central African Republic", code: "CF" },
    { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Comoros", code: "KM" },
    { name: "Congo (Congo-Brazzaville)", code: "CG" },
    { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" },
    { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" },
    { name: "Czechia (Czech Republic)", code: "CZ" },
    { name: "Democratic Republic of the Congo", code: "CD" },
    { name: "Denmark", code: "DK" },
    { name: "Djibouti", code: "DJ" },
    { name: "Dominica", code: "DM" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" },
    { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" },
    { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" },
    { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Grenada", code: "GD" },
    { name: "Guatemala", code: "GT" },
    { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" },
    { name: "Holy See", code: "VA" },
    { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kiribati", code: "KI" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" },
    { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" },
    { name: "Marshall Islands", code: "MH" },
    { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" },
    { name: "Mexico", code: "MX" },
    { name: "Micronesia", code: "FM" },
    { name: "Moldova", code: "MD" },
    { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" },
    { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" },
    { name: "Mozambique", code: "MZ" },
    { name: "Myanmar (formerly Burma)", code: "MM" },
    { name: "Namibia", code: "NA" },
    { name: "Nauru", code: "NR" },
    { name: "Nepal", code: "NP" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" },
    { name: "Nigeria", code: "NG" },
    { name: "North Korea", code: "KP" },
    { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palau", code: "PW" },
    { name: "Palestine State", code: "PS" },
    { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Saint Vincent and the Grenadines", code: "VC" },
    { name: "Samoa", code: "WS" },
    { name: "San Marino", code: "SM" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" },
    { name: "Seychelles", code: "SC" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "Solomon Islands", code: "SB" },
    { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "South Sudan", code: "SS" },
    { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Sudan", code: "SD" },
    { name: "Suriname", code: "SR" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Togo", code: "TG" },
    { name: "Tonga", code: "TO" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "Tuvalu", code: "TV" },
    { name: "Uganda", code: "UG" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States of America", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vanuatu", code: "VU" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" },
    { name: "Zimbabwe", code: "ZW" }
];

function getCountryCurrency(countryCode, usdAmount = 1.0) {
    const code = (countryCode || 'US').toUpperCase();
    const euroZone = ["AT", "BE", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES", "AD", "MC", "SM", "VA", "ME", "XK"];
    
    let rate = 1.0;
    let symbol = '$';
    let currencyCode = 'USD';

    if (code === 'IN') {
        rate = 80;
        symbol = '₹';
        currencyCode = 'INR';
    } else if (code === 'GB' || code === 'UK') {
        rate = 0.80;
        symbol = '£';
        currencyCode = 'GBP';
    } else if (euroZone.includes(code)) {
        rate = 0.92;
        symbol = '€';
        currencyCode = 'EUR';
    } else if (code === 'CA') {
        rate = 1.35;
        symbol = 'CA$';
        currencyCode = 'CAD';
    } else if (code === 'AU') {
        rate = 1.50;
        symbol = 'A$';
        currencyCode = 'AUD';
    } else if (code === 'JP') {
        rate = 150;
        symbol = '¥';
        currencyCode = 'JPY';
    } else if (code === 'BR') {
        rate = 5.0;
        symbol = 'R$';
        currencyCode = 'BRL';
    } else if (code === 'RU') {
        rate = 90;
        symbol = '₽';
        currencyCode = 'RUB';
    } else if (code === 'CN') {
        rate = 7.2;
        symbol = '¥';
        currencyCode = 'CNY';
    } else if (code === 'KR') {
        rate = 1350;
        symbol = '₩';
        currencyCode = 'KRW';
    } else if (code === 'MX') {
        rate = 17.5;
        symbol = 'Mex$';
        currencyCode = 'MXN';
    }

    const converted = usdAmount * rate;
    const formatted = rate >= 10 ? Math.round(converted) : converted.toFixed(2);
    
    return {
        price: `${symbol}${formatted}`,
        symbol: symbol,
        amount: formatted,
        code: currencyCode,
        text: `${symbol}${formatted}`
    };
}

function getCountryPricing(countryCode) {
    return getCountryCurrency(countryCode, 1.0);
}

class GameEngine {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d', { alpha: false });
        
        // Logical Dimensions (Fixed Aspect Ratio)
        this.logicalWidth = 1280;
        this.logicalHeight = 720;
        
        // Systems
        this.audio = window.AudioSystemInstance;
        this.particles = window.ParticleSystemInstance;
        this.ui = window.UIManagerInstance;
        this.physics = window.PhysicsInstance;

        // Player & Level instances
        this.player = null;
        this.level = null;
        this.levelConfig = null;

        // Engine State
        this.gameState = 'menu'; // 'menu', 'levelSelect', 'shop', 'playing', 'paused', 'complete'
        this.lastTime = 0;
        this.accumulator = 0;
        this.physicsStep = 1 / 60; // 60Hz fixed updates
        
        // FPS Counter variables
        this.fps = 0;
        this.fpsCounter = 0;
        this.fpsTimer = 0;

        // Key states
        this.keys = {
            jump: false,
            prevJump: false
        };

        this.init();
    }

    bindClick(id, callback) {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                callback(e);
            });
        }
    }

    init() {
        // Adjust Canvas bounds on window resize
        this.resizeCanvas();
        this.checkRotationHint();
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.checkRotationHint();
        });

        // Setup User Event listeners
        this.setupInputListeners();
        this.setupUIListeners();

        // Load Level progress percentages
        this.loadLevelStats();
        
        // Initial coin count synchronization
        this.updateCoinsDisplay();

        // Initialize daily quests
        this.initDailyQuests();

        // Initialize coin investment system
        this.initInvestment();

        // Verify if user is premium to hide shop buttons
        this.checkPremiumStatus();

        // Populate country dropdowns & synchronize local currency pricing
        this.populateCountriesDropdown();
        this.updateAllPriceDisplays();

        // Check for app updates
        this.checkAppUpdates();

        // Show main menu explicitly to set interactive layer pointer-events
        this.ui.showScreen('main');

        // Initialize Google AdSense Banner Ads
        this.initBannerAds();

        // Initialize AdMob system
        if (window.WaveDashAdMob) {
            window.WaveDashAdMob.initialize().then(() => {
                if (window.WaveDashAdMob.isNative() && !this.hasSilver()) {
                    window.WaveDashAdMob.showBanner();
                }
            });
        }

        // Start requestAnimationFrame loop
        requestAnimationFrame((t) => this.loop(t));
    }

    resizeCanvas() {
        // Canvas is sized to fixed logical size
        // CSS rules scale the canvas elements to fit the viewport aspect container
        this.canvas.width = this.logicalWidth;
        this.canvas.height = this.logicalHeight;
    }

    checkRotationHint() {
        const hint = document.getElementById('rotate-device-hint');
        if (!hint) return;
        const isMobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !window.Capacitor;
        if (isMobileBrowser) {
            hint.style.display = 'flex';
        } else {
            hint.style.display = 'none';
        }
    }

    // -------------------------------------------------------------
    // INPUT CONTROLS
    // -------------------------------------------------------------

    setupInputListeners() {
        // Keyboard inputs
        window.addEventListener('keydown', (e) => {
            // Global: Shift+Tab toggles fullscreen from anywhere
            if (e.shiftKey && e.code === 'Tab') {
                e.preventDefault();
                const gc = document.getElementById('game-container');
                if (!document.fullscreenElement) {
                    if (gc) gc.requestFullscreen().catch(err => console.warn('Fullscreen error:', err));
                } else {
                    document.exitFullscreen();
                }
                return;
            }

            if (this.gameState === 'playing') {
                if (e.code === 'Space' || e.code === 'ArrowUp') {
                    this.keys.jump = true;
                    this.ui.triggerAchievement('first_jump');
                    e.preventDefault();
                }
                if (e.code === 'Escape' || e.code === 'KeyP') {
                    this.togglePause();
                    e.preventDefault();
                }
                // Practice checkpoints
                if (this.player && this.player.practiceMode) {
                    if (e.code === 'KeyZ') {
                        this.placePracticeCheckpoint();
                    }
                    if (e.code === 'KeyX') {
                        this.removePracticeCheckpoint();
                    }
                }
            } else if (this.gameState === 'paused') {
                if (e.code === 'Escape' || e.code === 'KeyP') {
                    this.resumeGame();
                    e.preventDefault();
                }
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                this.keys.jump = false;
            }
        });

        // Mouse / Touch inputs (Canvas Click Jumps)
        this.canvas.addEventListener('mousedown', (e) => {
            if (this.gameState === 'playing' && e.button === 0) {
                this.keys.jump = true;
                this.ui.triggerAchievement('first_jump');
            }
        });

        this.canvas.addEventListener('mouseup', (e) => {
            if (this.gameState === 'playing' && e.button === 0) {
                this.keys.jump = false;
            }
        });

        // Touch support for mobile browsers
        this.canvas.addEventListener('touchstart', (e) => {
            if (this.gameState === 'playing') {
                this.keys.jump = true;
                this.ui.triggerAchievement('first_jump');
                e.preventDefault();
            }
        }, { passive: false });

        this.canvas.addEventListener('touchend', (e) => {
            if (this.gameState === 'playing') {
                this.keys.jump = false;
            }
        });

        // Monitor level completed dispatch
        window.addEventListener('levelComplete', () => {
            this.handleLevelWin();
        });
    }

    // -------------------------------------------------------------
    // INTERACTIVE BUTTONS BINDINGS
    // -------------------------------------------------------------

    setupUIListeners() {
        // Unlimited coin button cheat for creator
        this.bindClick('unlimited-coin-btn', () => {
            if (this.audio && typeof this.audio.playCongratsSound === 'function') {
                this.audio.playCongratsSound();
            }
            const current = this.getUserCoins();
            const amount = prompt("👑 Welcome Creator! Enter how many coins you want to add:", "10000");
            if (amount !== null) {
                const addVal = parseInt(amount) || 0;
                this.setUserCoins(current + addVal);
                this.updateCoinsDisplay();
                if (this.ui && typeof this.ui.showAchievementToast === 'function') {
                    this.ui.showAchievementToast('🪙 CHEAT ACTIVATED!', `Added ${addVal} coins to your balance!`);
                }
            }
        });

        // Main Screen buttons
        this.bindClick('btn-play', () => {
            this.audio.playClickSound();
            this.ui.showScreen('levelSelect');
        });
        this.bindClick('btn-shop', () => {
            this.audio.playClickSound();
            this.ui.showScreen('spendTickets');
            this.updateCoinsDisplay();
            this.updateEndlessMapsShopVisibility();
        });
        this.bindClick('btn-coin-shop', () => {
            this.audio.playClickSound();
            this.promptCompulsoryCountrySelect(() => {
                this.ui.showScreen('coinShop');
                this.updateCoinsDisplay();
                this.updateEndlessMapsShopVisibility();
            });
        });
        this.bindClick('btn-go-to-spend-tickets', () => {
            this.audio.playClickSound();
            this.ui.showScreen('spendTickets');
        });
        this.bindClick('btn-go-to-buy-tickets', () => {
            this.audio.playClickSound();
            this.promptCompulsoryCountrySelect(() => {
                this.ui.showScreen('coinShop');
                this.updateCoinsDisplay();
                this.updateEndlessMapsShopVisibility();
            });
        });
        this.bindClick('btn-spend-to-skins', () => {
            this.audio.playClickSound();
            this.ui.showScreen('shop');
            this.updateTrailShopUI();
        });
        this.bindClick('btn-exchange-coins-100', () => {
            this.handleCoinExchange(100, 1);
        });
        this.bindClick('btn-exchange-coins-1000', () => {
            this.handleCoinExchange(1000, 10);
        });
        this.bindClick('btn-settings', () => this.ui.showScreen('settings'));
        this.bindClick('btn-manage-plan', () => {
            this.audio.playClickSound();
            this.openPremiumModal();
        });
        this.bindClick('btn-credits', () => this.ui.showScreen('credits'));

        // Show update button in settings for all environments
        const updateRow = document.getElementById('setting-item-update');
        if (updateRow) {
            updateRow.style.display = 'flex';
        }
        this.bindClick('btn-check-updates', () => {
            this.checkAppUpdates(true);
        });

        // Settings / Shop / Credits Back buttons
        this.bindClick('settings-back', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('shop-back', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('btn-close-shop', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('coin-shop-back', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('btn-close-coin-shop', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('spend-tickets-back', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('btn-close-spend-tickets', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });
        this.bindClick('credits-back', () => {
            this.audio.playClickSound();
            this.ui.showScreen('settings');
        });
        this.bindClick('level-select-back', () => {
            this.audio.playClickSound();
            this.ui.showScreen('main');
        });

        // Level Unlock Modal bindings
        this.bindClick('btn-open-unlock-level-modal', () => {
            this.audio.playClickSound();
            this.openUnlockLevelModal(2);
        });
        this.bindClick('btn-close-unlock-modal', () => {
            this.audio.playClickSound();
            this.closeUnlockLevelModal();
        });
        this.bindClick('btn-unlock-use-coins', () => {
            this.audio.playClickSound();
            this.handleUnlockLevelWithCoins();
        });

        // Note: Level select card click bindings are generated dynamically in buildLevelSelectUI()

        // Premium Support buttons (Hidden/unused premium menus, but bindings preserved)
        this.bindClick('btn-premium', () => this.openPremiumModal());
        this.bindClick('btn-premium-close-top', () => this.closePremiumModal());
        this.bindClick('btn-premium-buy', () => this.showPremiumCheckout());
        this.bindClick('btn-premium-close', () => this.closePremiumModal());
        this.bindClick('btn-pay-cancel', () => this.showPremiumPitch());
        this.bindClick('btn-pay-submit', () => this.submitPremiumPayment());
        this.bindClick('btn-success-close', () => this.completePremiumUnlock());

        // Payment Tab Clicks
        this.bindClick('tab-pay-card', () => this.switchPaymentTab('card'));
        this.bindClick('tab-pay-upi', () => this.switchPaymentTab('upi'));
        this.bindClick('tab-pay-paypal', () => this.switchPaymentTab('paypal'));

        // Select Tune listener
        const tuneSelect = document.getElementById('select-built-in-tune');
        if (tuneSelect) {
            tuneSelect.value = this.audio.currentTuneIndex.toString();
            tuneSelect.addEventListener('change', (e) => {
                const newIdx = parseInt(e.target.value);
                this.audio.currentTuneIndex = newIdx;
                localStorage.setItem('wave_dash_selected_tune_index', newIdx.toString());
                
                // If custom song is active, clear it so they hear the selected synthesizer tune
                if (this.audio.useCustomSong) {
                    this.audio.setCustomSong(null);
                    const clearBtn = document.getElementById('btn-custom-song-clear');
                    if (clearBtn) clearBtn.style.display = 'none';
                }
                
                // Update song chip on menu
                if (typeof _updateSongChip === 'function') _updateSongChip();
                
                // Restart to apply instantly
                this.audio.stopMusic(true);
                this.audio.startMusic();
            });
        }

        // Custom Song Settings with purchase check
        this.bindClick('btn-custom-song-upload', () => {
            const hasSongUnlocked = localStorage.getItem('wave_dash_shop_custom_song') === 'true';
            if (!hasSongUnlocked) {
                this.audio.playClickSound();
                this.activeCheckoutType = 'shop-item';
                this.activeShopItemType = 'custom-song';
                this.activeShopItemPrice = '0.05';
                this.showPremiumCheckout();
                return;
            }
            const input = document.getElementById('input-custom-song');
            if (input) input.click();
        });
        this.bindClick('btn-custom-song-clear', () => {
            this.audio.playClickSound();
            this.audio.setCustomSong(null);
            const clearBtn = document.getElementById('btn-custom-song-clear');
            if (clearBtn) clearBtn.style.display = 'none';
            if (typeof _updateSongChip === 'function') _updateSongChip();
            this.audio.stopMusic(true);
            this.audio.startMusic();
        });
        const songInput = document.getElementById('input-custom-song');
        if (songInput) {
            songInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = (event) => {
                    const dataUrl = event.target.result;
                    this.audio.setCustomSong(dataUrl);
                    this.audio.playClickSound();
                    
                    const clearBtn = document.getElementById('btn-custom-song-clear');
                    if (clearBtn) clearBtn.style.display = 'inline-block';
                    if (typeof _updateSongChip === 'function') _updateSongChip();
                    
                    // Restart background theme with the new custom song
                    this.audio.stopMusic(true);
                    this.audio.startMusic();
                };
                reader.readAsDataURL(file);
            });
        }

        // Restore custom song clear button state on startup
        if (this.audio.useCustomSong && this.audio.customAudioUrl) {
            const clearBtn = document.getElementById('btn-custom-song-clear');
            if (clearBtn) clearBtn.style.display = 'inline-block';
        }

        // Premium card clicks
        const premiumCards = document.querySelectorAll('.premium-tier-card');
        premiumCards.forEach(card => {
            card.addEventListener('click', (e) => {
                this.audio.playClickSound();
                const currentTier = this.getPremiumTier() || 'none';
                
                premiumCards.forEach(c => {
                    c.classList.remove('selected');
                    c.style.boxShadow = 'none';
                    const tierName = c.getAttribute('data-tier');
                    if (tierName === currentTier) {
                        c.style.borderColor = 'rgba(255,255,255,0.08)';
                    } else {
                        c.style.borderColor = tierName === 'silver' ? 'rgba(200,200,200,0.5)' : (tierName === 'gold' ? 'rgba(255,215,0,0.2)' : 'rgba(0,243,255,0.2)');
                    }
                });

                const targetCard = e.currentTarget;
                targetCard.classList.add('selected');
                const tier = targetCard.getAttribute('data-tier');
                const price = targetCard.getAttribute('data-price');
                this.selectedPremiumTier = tier;
                this.selectedPremiumPrice = price;

                let glowColor = "rgba(209,209,209,0.3)";
                let borderColor = "rgba(200,200,200,0.9)";
                if (tier === 'gold') {
                    glowColor = "rgba(255,215,0,0.3)";
                    borderColor = "rgba(255, 215, 0, 0.9)";
                } else if (tier === 'diamond') {
                    glowColor = "rgba(0,243,255,0.3)";
                    borderColor = "rgba(0, 243, 255, 0.9)";
                }
                targetCard.style.boxShadow = `0 0 10px ${glowColor}`;
                targetCard.style.borderColor = borderColor;

                // Ensure purchase button is visible
                const buyBtn = document.getElementById('btn-premium-buy');
                if (buyBtn) buyBtn.style.display = 'block';

                this.updatePremiumPriceTag();
            });
        });

        // Shop items click
        const shopBuyButtons = document.querySelectorAll('.btn-buy-shop-item');
        shopBuyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.audio.playClickSound();
                const type = e.currentTarget.getAttribute('data-item-type');
                const price = e.currentTarget.getAttribute('data-item-price');
                
                this.openShopPurchaseModal(type, price);
            });
        });

        // Account / Login bindings
        this.bindClick('btn-settings-profile', () => this.openAccountModal());
        this.bindClick('btn-login-close', () => this.closeAccountModal());
        this.bindClick('btn-register-close', () => this.closeAccountModal());
        this.bindClick('btn-profile-close', () => this.closeAccountModal());
        this.bindClick('btn-login-submit', () => this.handleUserLogin());
        this.bindClick('btn-register-submit', () => this.handleUserRegister());
        this.bindClick('btn-logout', () => this.handleUserLogout());
        this.bindClick('btn-verify-id', () => this.handleLinkPaymentID());
        this.bindClick('btn-upgrade-guest', () => {
            this.audio.playClickSound();
            document.getElementById('account-profile-panel').style.display = 'none';
            document.getElementById('account-register-panel').style.display = 'flex';
        });

        // Replay controls bindings
        this.bindClick('btn-exit-replay', () => this.exitReplay());
        this.bindClick('btn-exit-replay-ended', () => this.exitReplay());

        // Guest mode link clicks
        const guestLink1 = document.getElementById('link-guest-mode');
        if (guestLink1) {
            guestLink1.addEventListener('click', () => this.handleGuestLogin());
        }
        const guestLink2 = document.getElementById('link-guest-mode-reg');
        if (guestLink2) {
            guestLink2.addEventListener('click', () => this.handleGuestLogin());
        }

        // Switch screens links
        const goReg = document.getElementById('link-go-register');
        if (goReg) {
            goReg.addEventListener('click', () => {
                this.audio.playClickSound();
                document.getElementById('account-login-panel').style.display = 'none';
                document.getElementById('account-register-panel').style.display = 'flex';
            });
        }
        const goLog = document.getElementById('link-go-login');
        if (goLog) {
            goLog.addEventListener('click', () => {
                this.audio.playClickSound();
                document.getElementById('account-register-panel').style.display = 'none';
                document.getElementById('account-login-panel').style.display = 'flex';
            });
        }

        // Country Select Price Updates
        const countrySelect = document.getElementById('premium-country-select');
        if (countrySelect) {
            countrySelect.addEventListener('change', () => {
                this.updatePremiumPriceTag();
            });
        }

        // Skip Level & Ad handlers
        this.bindClick('btn-skip-pause', () => this.handleSkipLevel());
        this.bindClick('btn-skip-death', () => this.handleSkipLevel());
        this.bindClick('btn-ad-skip', () => this.finishSkipAd());
        this.bindClick('btn-ad-action', () => {
            window.open('https://github.com', '_blank');
        });

        // Game HUD Button overrides
        this.bindClick('btn-pause-hud', () => this.togglePause());

        // Pause overlay buttons
        this.bindClick('btn-resume', () => this.resumeGame());
        this.bindClick('btn-restart-pause', () => this.restartGame());
        this.bindClick('btn-menu-pause', () => this.quitToMenu());

        // Practice Mode Toggle inside Pause
        const practiceToggle = document.getElementById('practice-toggle-pause');
        if (practiceToggle) {
            practiceToggle.addEventListener('change', (e) => {
                if (this.player) {
                    this.player.practiceMode = e.target.checked;
                    this.player.clearCheckpoints();
                }
            });
        }

        // Game Over buttons
        this.bindClick('btn-restart-death', () => this.restartGame());
        this.bindClick('btn-menu-death', () => this.quitToMenu());
        this.bindClick('btn-revive-death', () => this.handleReviveClick());
        this.bindClick('btn-close-revive-modal', () => {
            const modal = document.getElementById('revive-modal');
            if (modal) modal.style.display = 'none';
        });
        this.bindClick('btn-revive-use-coins', () => {
            const modal = document.getElementById('revive-modal');
            if (modal) modal.style.display = 'none';
            this.handleReviveWithCoins();
        });
        this.bindClick('btn-revive-use-ad', () => {
            const modal = document.getElementById('revive-modal');
            if (modal) modal.style.display = 'none';
            this.startReviveAd();
        });
        
        // Game Over Practice Mode Toggle
        const practiceToggleDeath = document.getElementById('practice-toggle-death');
        if (practiceToggleDeath) {
            practiceToggleDeath.addEventListener('change', (e) => {
                if (this.player) {
                    this.player.practiceMode = e.target.checked;
                    this.player.clearCheckpoints();
                    
                    // Sync pause toggle display
                    const ptp = document.getElementById('practice-toggle-pause');
                    if (ptp) ptp.checked = e.target.checked;
                }
            });
        }

        // Win Overlay buttons
        this.bindClick('btn-restart-win', () => this.restartGame());
        this.bindClick('btn-menu-win', () => this.quitToMenu());
        this.bindClick('btn-next-win', () => this.playNextLevel());

        // HUD Checkpoint Add / Remove (Practice buttons)
        this.bindClick('btn-cp-add', () => this.placePracticeCheckpoint());
        this.bindClick('btn-cp-remove', () => this.removePracticeCheckpoint());

        // Endless Mode & Hall of Legends buttons
        this.bindClick('btn-endless-mode', () => this.handleEndlessClick());
        this.bindClick('btn-hall-of-legends', () => this.openHallOfLegendsModal(false));
        this.bindClick('btn-close-legends-modal', () => {
            const modal = document.getElementById('hall-of-legends-modal');
            if (modal) modal.style.display = 'none';
        });
        this.bindClick('btn-legends-start-master', () => {
            if (!this.areAllLevelsCompleted()) {
                this.audio.playDeathSound();
                this.ui.showAchievementToast('Level Locked', 'You must first complete all the levels then only you can access that!');
                return;
            }
            const modal = document.getElementById('hall-of-legends-modal');
            if (modal) modal.style.display = 'none';
            const list = window.levelsList || [];
            const masterLvl = list.find(l => l.index === 501);
            if (masterLvl) {
                this.startGame(masterLvl);
            }
        });
        this.bindClick('btn-legends-play-endless', () => {
            const modal = document.getElementById('hall-of-legends-modal');
            if (modal) modal.style.display = 'none';
            this.startEndlessMode();
        });

        // Golden Pass Redeem Code Event Listeners
        this.bindClick('btn-redeem-pass', () => {
            const modal = document.getElementById('redeem-pass-modal');
            if (modal) modal.style.display = 'flex';
        });
        this.bindClick('btn-close-redeem-modal', () => {
            const modal = document.getElementById('redeem-pass-modal');
            if (modal) modal.style.display = 'none';
        });
        const submitPassBtn = document.getElementById('btn-submit-pass');
        if (submitPassBtn) {
            submitPassBtn.onclick = () => {
                const input = document.getElementById('pass-code-input');
                const code = input ? input.value.trim().toUpperCase() : '';
                if (code === 'WAVEDASHFREEVIP123' || code === 'DIAMOND-PASS' || code === 'DIAMOND') {
                    const username = localStorage.getItem('wave_dash_logged_in_user') || 'Guest';
                    const allowedUsers = ['sian goyal', 'pooja-gupta', 'khadag'];
                    const isAuthorized = allowedUsers.includes(username.toLowerCase()) || localStorage.getItem(`wave_dash_pass_authorized_${username}`) === 'true';

                    if (!isAuthorized) {
                        this.audio.playDeathSound();
                        this.ui.showAchievementToast('Redeem Error', 'Your account is not authorized to redeem this pass!');
                        return;
                    }

                    this.audio.playPortalSound();
                    for (let i = 1; i <= 510; i++) {
                        localStorage.setItem(`wave_dash_level_force_unlocked_${i}`, 'true');
                    }
                    const currentCoins = this.getUserCoins();
                    const newTotal = currentCoins + 10000;
                    this.setUserCoins(newTotal);
                    localStorage.setItem(`wave_dash_diamond_${username}`, 'true');
                    localStorage.setItem('neon_dash_premium', 'true');
                    const modal = document.getElementById('redeem-pass-modal');
                    if (modal) modal.style.display = 'none';
                    this.ui.showAchievementToast('Golden Pass Activated! 💎', 'Unlocked 10k Coins, All Levels, & Diamond Badge!');
                    this.checkPremiumStatus();
                    this.buildLevelSelectUI();
                } else {
                    this.audio.playDeathSound();
                    this.ui.showAchievementToast('Redeem Error', 'Invalid pass code! Check spelling.');
                }
            };
        }

        // Sync Audio options with HTML Settings UI
        this.ui.bindSettingsEvents(this.audio, document.getElementById('game-container'));

        // ===== BACKGROUND PICKER POPUP =====
        const bgDotMap = {
            default:   { bg: 'linear-gradient(135deg,#080710,#05040a)', border: '#444',    label: 'DEFAULT'   },
            cosmic:    { bg: 'linear-gradient(135deg,#4a1a8a,#0c061a)', border: '#6a2aaa', label: 'COSMIC'    },
            cyberpunk: { bg: 'linear-gradient(135deg,#ff6600,#240a00)', border: '#ff4400', label: 'CYBERPUNK' },
            acid:      { bg: 'linear-gradient(135deg,#00ff44,#031a08)', border: '#00cc33', label: 'ACID GREEN'},
            ocean:     { bg: 'linear-gradient(135deg,#0077ff,#001224)', border: '#0055cc', label: 'OCEAN BLUE'},
            midnight:  { bg: '#000',                                     border: '#333',    label: 'MIDNIGHT'  },
            custom:    { bg: 'linear-gradient(135deg,#00f3ff,#ff007f)', border: '#fff',    label: 'MY PHOTO'  }
        };

        const _updateBgChip = (theme) => {
            const info = bgDotMap[theme] || bgDotMap.default;
            const dot = document.getElementById('bg-chip-dot');
            const lbl = document.getElementById('bg-chip-label');
            if (dot) { dot.style.background = info.bg; dot.style.borderColor = info.border; }
            if (lbl) lbl.textContent = info.label;
        };

        const _closeBgPopup = () => {
            const p = document.getElementById('bg-picker-popup');
            if (p) p.style.display = 'none';
        };

        // Open popup
        const btnOpenBg = document.getElementById('btn-open-bg-picker');
        if (btnOpenBg) btnOpenBg.addEventListener('click', () => {
            this.audio.playClickSound();
            const p = document.getElementById('bg-picker-popup');
            if (p) p.style.display = 'flex';
        });

        // Close button
        const btnCloseBg = document.getElementById('btn-close-bg-picker');
        if (btnCloseBg) btnCloseBg.addEventListener('click', () => _closeBgPopup());

        // Close on backdrop click
        const bgPopup = document.getElementById('bg-picker-popup');
        if (bgPopup) bgPopup.addEventListener('click', (e) => { if (e.target === bgPopup) _closeBgPopup(); });

        // Swatch buttons inside popup
        document.querySelectorAll('.bg-swatch-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.audio.playClickSound();
                const theme = btn.dataset.theme;
                localStorage.setItem('wave_dash_bg_theme', theme);
                if (theme !== 'custom') localStorage.removeItem('wave_dash_bg_custom_img');
                // Highlight active swatch
                document.querySelectorAll('.bg-swatch-btn').forEach(b =>
                    b.style.borderColor = b.dataset.theme === theme ? 'var(--neon-blue)' : 'rgba(255,255,255,0.15)');
                _updateBgChip(theme);
                _closeBgPopup();
                const sel = document.getElementById('setting-bg-theme');
                if (sel) sel.value = theme;
            });
        });

        // ===== SHARED PHOTO SOURCE PICKER POPUP =====
        const _applyPhoto = (file, target /* 'bg' | 'ship' */) => {
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                try {
                    if (target === 'bg') {
                        localStorage.setItem('wave_dash_bg_custom_img', ev.target.result);
                        localStorage.setItem('wave_dash_bg_theme', 'custom');
                        const img = new Image();
                        img.src = ev.target.result;
                        img.onload = () => { window._customBgImage = img; };
                        _updateBgChip('custom');
                        _closeBgPopup();
                    } else {
                        localStorage.setItem('wave_dash_ship_custom_img', ev.target.result);
                        localStorage.setItem('wave_dash_ship_model', 'custom');
                        const img = new Image();
                        img.src = ev.target.result;
                        img.onload = () => {
                            window._customShipImage = img;
                            if (window.activePlayerInstance) {
                                window.activePlayerInstance.modelStyle = 'custom';
                                window.activePlayerInstance.customShipImage = img;
                            }
                        };
                        _updateShipChip('custom');
                        _closeShipPopup();
                    }
                    // Close source popup too
                    const sp = document.getElementById('photo-source-popup');
                    if (sp) sp.style.display = 'none';
                } catch(err) { alert('Image too large. Choose a smaller photo.'); }
            };
            reader.readAsDataURL(file);
        };

        // Wire up every input (bg camera/gallery/browse, ship camera/gallery/browse)
        const _wireInput = (inputId, target) => {
            const el = document.getElementById(inputId);
            if (el) {
                el.addEventListener('change', (e) => {
                    _applyPhoto(e.target.files[0], target);
                    el.value = '';
                });
            }
        };
        _wireInput('bg-input-camera',    'bg');
        _wireInput('bg-input-selfie',    'bg');
        _wireInput('bg-input-gallery',   'bg');
        _wireInput('bg-input-browse',    'bg');
        _wireInput('ship-input-camera',  'ship');
        _wireInput('ship-input-selfie',  'ship');
        _wireInput('ship-input-gallery', 'ship');
        _wireInput('ship-input-browse',  'ship');

        // Source picker popup: open it when premium custom photo button is clicked
        const _openSourcePicker = (target) => {
            const sp = document.getElementById('photo-source-popup');
            if (!sp) return;
            sp.dataset.target = target;
            sp.style.display = 'flex';
        };
        const _closeSourcePicker = () => {
            const sp = document.getElementById('photo-source-popup');
            if (sp) sp.style.display = 'none';
        };

        // Source option buttons
        const _sourceBtn = (id, inputSuffix) => {
            const btn = document.getElementById(id);
            if (btn) btn.addEventListener('click', () => {
                this.audio.playClickSound();
                const sp = document.getElementById('photo-source-popup');
                const target = sp ? sp.dataset.target : 'bg';
                const inputId = `${target}-input-${inputSuffix}`;
                _closeSourcePicker();
                setTimeout(() => {
                    const inp = document.getElementById(inputId);
                    if (inp) inp.click();
                }, 80); // small delay so popup closes before OS dialog opens
            });
        };
        _sourceBtn('photo-source-camera',  'camera');
        _sourceBtn('photo-source-selfie',  'selfie');
        _sourceBtn('photo-source-gallery', 'gallery');

        // BROWSE WEB IMAGES option button
        const btnPhotoSourceBrowse = document.getElementById('photo-source-browse');
        if (btnPhotoSourceBrowse) {
            btnPhotoSourceBrowse.addEventListener('click', () => {
                this.audio.playClickSound();
                const target = document.getElementById('photo-source-popup')?.dataset.target || 'bg';
                _closeSourcePicker();
                
                // Open Web Search Popup
                const wsp = document.getElementById('web-image-search-popup');
                if (wsp) {
                    wsp.dataset.target = target;
                    wsp.style.display = 'flex';
                    // Clear previous search results and inputs
                    const qInput = document.getElementById('web-search-query');
                    if (qInput) qInput.value = '';
                    const urlInput = document.getElementById('web-image-url-input');
                    if (urlInput) urlInput.value = '';
                    const grid = document.getElementById('web-search-results-grid');
                    if (grid) {
                        grid.innerHTML = '<p style="color:rgba(255,255,255,0.3); text-align:center; font-size:12px; margin: 20px auto; grid-column:span 3;">Search neon wallpapers or glider shapes!</p>';
                    }
                }
            });
        }

        // Web Search Popup Close
        const btnCloseWebSearch = document.getElementById('btn-close-web-search');
        if (btnCloseWebSearch) {
            btnCloseWebSearch.addEventListener('click', () => {
                this.audio.playClickSound();
                const wsp = document.getElementById('web-image-search-popup');
                if (wsp) wsp.style.display = 'none';
            });
        }
        const wspBackdrop = document.getElementById('web-image-search-popup');
        if (wspBackdrop) {
            wspBackdrop.addEventListener('click', (e) => {
                if (e.target === wspBackdrop) {
                    const wsp = document.getElementById('web-image-search-popup');
                    if (wsp) wsp.style.display = 'none';
                }
            });
        }

        // Web Search Browser Launcher & Clipboard Import logic
        const browserButtons = document.querySelectorAll('.btn-browser-choice');
        browserButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.audio.playClickSound();
                const browser = e.currentTarget.getAttribute('data-url');
                const target = document.getElementById('web-image-search-popup')?.dataset.target || 'bg';
                
                let q = "geometry dash background neon wallpaper 4k";
                if (target === 'ship') {
                    q = "geometry dash ship transparent png sprite shape";
                }
                const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q)}`;
                
                this.ui.showAchievementToast('Launching Browser', `Opening Google Images...`);
                
                // Open browser search URL
                window.open(searchUrl, '_blank');
            });
        });

        // Clipboard Paste action
        const btnClipboardPaste = document.getElementById('btn-web-image-clipboard-paste');
        if (btnClipboardPaste) {
            btnClipboardPaste.addEventListener('click', () => {
                this.audio.playClickSound();
                if (navigator.clipboard && navigator.clipboard.readText) {
                    navigator.clipboard.readText().then(text => {
                        const input = document.getElementById('web-image-url-input');
                        if (input) {
                            input.value = text.trim();
                            this.ui.showAchievementToast('Pasted!', 'Loaded link from clipboard');
                        }
                    }).catch(err => {
                        console.error('Failed to read clipboard: ', err);
                        alert('Could not read from clipboard automatically. Please long-press the text box below and paste manually!');
                    });
                } else {
                    alert('Clipboard reading not supported. Please long-press and paste manually into the text box below!');
                }
            });
        }

        // Paste Link URL Load
        const btnWebUrlApply = document.getElementById('btn-web-image-url-apply');
        if (btnWebUrlApply) {
            btnWebUrlApply.addEventListener('click', () => {
                this.audio.playClickSound();
                const urlVal = document.getElementById('web-image-url-input')?.value.trim();
                if (!urlVal) {
                    alert("Please paste a valid image URL first.");
                    return;
                }
                const target = document.getElementById('web-image-search-popup')?.dataset.target || 'bg';
                _applyWebImage(urlVal, target);
            });
        }

        // Convert external image to Base64 (saving local storage quota and handling CORS)
        const _applyWebImage = (imgUrl, target /* 'bg' | 'ship' */) => {
            const wsp = document.getElementById('web-image-search-popup');
            this.ui.showAchievementToast('Downloading...', 'Loading image from the web...');
            
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                try {
                    const tempCanvas = document.createElement('canvas');
                    tempCanvas.width = img.width > 800 ? 800 : img.width; 
                    tempCanvas.height = Math.round(img.height * (tempCanvas.width / img.width));
                    
                    const tempCtx = tempCanvas.getContext('2d');
                    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
                    
                    const base64Data = tempCanvas.toDataURL('image/jpeg', 0.85); 
                    
                    if (target === 'bg') {
                        localStorage.setItem('wave_dash_bg_custom_img', base64Data);
                        localStorage.setItem('wave_dash_bg_theme', 'custom');
                        window._customBgImage = img;
                        _updateBgChip('custom');
                        _closeBgPopup();
                    } else {
                        localStorage.setItem('wave_dash_ship_custom_img', base64Data);
                        localStorage.setItem('wave_dash_ship_model', 'custom');
                        window._customShipImage = img;
                        if (window.activePlayerInstance) {
                            window.activePlayerInstance.modelStyle = 'custom';
                            window.activePlayerInstance.customShipImage = img;
                        }
                        _updateShipChip('custom');
                        _closeShipPopup();
                    }
                    
                    if (wsp) wsp.style.display = 'none';
                    this.ui.showAchievementToast('Success!', 'Web image applied!');
                } catch(err) {
                    console.error(err);
                    alert('⚠️ Security Link Block: This image hosting provider blocks game access. Try searching directly using the search bar, or try another image link!');
                }
            };
            img.onerror = () => {
                alert('⚠️ Failed to load image. The link is broken or not a valid image file. Make sure it is a direct image URL (ends with .png, .jpg, etc.)');
            };
            img.src = imgUrl;
        };

        // Cancel button
        const cancelBtn = document.getElementById('photo-source-cancel');
        if (cancelBtn) cancelBtn.addEventListener('click', () => _closeSourcePicker());
        // Backdrop click
        const srcPopup = document.getElementById('photo-source-popup');
        if (srcPopup) srcPopup.addEventListener('click', (e) => { if (e.target === srcPopup) _closeSourcePicker(); });

        // BG custom photo button → purchase gate → source picker
        const btnBgCustom = document.getElementById('btn-bg-custom-photo');
        if (btnBgCustom) {
            btnBgCustom.addEventListener('click', () => {
                const hasBgUnlocked = localStorage.getItem('wave_dash_shop_custom_bg') === 'true';
                if (!hasBgUnlocked) {
                    this.audio.playClickSound();
                    this.activeCheckoutType = 'shop-item';
                    this.activeShopItemType = 'custom-bg';
                    this.activeShopItemPrice = '0.05';
                    this.showPremiumCheckout();
                    return;
                }
                _openSourcePicker('bg');
            });
        }

        // Ship custom photo button → purchase gate → source picker
        const btnShipCustom = document.getElementById('btn-ship-custom-photo');
        if (btnShipCustom) {
            btnShipCustom.addEventListener('click', () => {
                const hasGliderUnlocked = localStorage.getItem('wave_dash_shop_custom_glider') === 'true';
                if (!hasGliderUnlocked) {
                    this.audio.playClickSound();
                    this.activeCheckoutType = 'shop-item';
                    this.activeShopItemType = 'custom-glider';
                    this.activeShopItemPrice = '0.02';
                    this.showPremiumCheckout();
                    return;
                }
                _openSourcePicker('ship');
            });
        }

        // Init BG chip on load
        const _initBgTheme = localStorage.getItem('wave_dash_bg_theme') || 'default';
        _updateBgChip(_initBgTheme);
        // Mark active swatch
        document.querySelectorAll('.bg-swatch-btn').forEach(b =>
            b.style.borderColor = b.dataset.theme === _initBgTheme ? 'var(--neon-blue)' : 'rgba(255,255,255,0.15)');
        if (_initBgTheme === 'custom') {
            const stored = localStorage.getItem('wave_dash_bg_custom_img');
            if (stored) { const img = new Image(); img.src = stored; img.onload = () => { window._customBgImage = img; }; }
        }

        // Song chip initialized later to prevent TDZ ReferenceError

        // ===== SHIP PICKER POPUP =====
        const shipIconMap = {
            arrow:   { icon: '🚀', label: 'JET'    },
            classic: { icon: '📐', label: 'GLIDER' },
            ufo:     { icon: '🛸', label: 'UFO'    },
            custom:  { icon: '📷', label: 'MY PHOTO'}
        };

        const _updateShipChip = (model) => {
            const info = shipIconMap[model] || shipIconMap.arrow;
            const iconEl = document.getElementById('ship-chip-icon');
            const lblEl  = document.getElementById('ship-chip-label');
            if (iconEl) iconEl.textContent = info.icon;
            if (lblEl)  lblEl.textContent  = info.label;
        };

        const _updateSongChip = () => {
            const labelEl = document.getElementById('song-chip-label');
            const clearBtn = document.getElementById('btn-menu-song-clear');
            const settingsClearBtn = document.getElementById('btn-custom-song-clear');
            
            if (this.audio.useCustomSong && this.audio.customAudioUrl) {
                if (labelEl) labelEl.textContent = 'CUSTOM';
                if (clearBtn) clearBtn.style.display = 'inline-block';
                if (settingsClearBtn) settingsClearBtn.style.display = 'inline-block';
            } else {
                const currentTune = this.audio.tunes[this.audio.currentTuneIndex] || this.audio.tunes[0];
                if (labelEl) labelEl.textContent = currentTune.name.toUpperCase();
                if (clearBtn) clearBtn.style.display = 'none';
                if (settingsClearBtn) settingsClearBtn.style.display = 'none';
            }

            // Highlight active tune button inside popup
            document.querySelectorAll('.btn-select-tune-item').forEach(b => {
                const idx = parseInt(b.dataset.tuneIdx);
                const isActive = !this.audio.useCustomSong && idx === this.audio.currentTuneIndex;
                b.style.borderColor = isActive ? 'var(--neon-blue)' : 'var(--panel-border)';
                b.style.color = isActive ? '#fff' : '#aaa';
            });
        };

        const _closeShipPopup = () => {
            const p = document.getElementById('ship-picker-popup');
            if (p) p.style.display = 'none';
        };

        // Open popup
        const btnOpenShip = document.getElementById('btn-open-ship-picker');
        if (btnOpenShip) btnOpenShip.addEventListener('click', () => {
            this.audio.playClickSound();
            const p = document.getElementById('ship-picker-popup');
            if (p) p.style.display = 'flex';
        });

        // Close button
        const btnCloseShip = document.getElementById('btn-close-ship-picker');
        if (btnCloseShip) btnCloseShip.addEventListener('click', () => _closeShipPopup());

        // Close on backdrop click
        const shipPopup = document.getElementById('ship-picker-popup');
        if (shipPopup) shipPopup.addEventListener('click', (e) => { if (e.target === shipPopup) _closeShipPopup(); });

        // Ship model buttons inside popup
        document.querySelectorAll('.ship-model-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.audio.playClickSound();
                const model = btn.dataset.model;
                localStorage.setItem('wave_dash_ship_model', model);
                if (model !== 'custom') localStorage.removeItem('wave_dash_ship_custom_img');
                document.querySelectorAll('.ship-model-btn').forEach(b =>
                    b.style.borderColor = b.dataset.model === model ? 'var(--neon-pink)' : 'rgba(255,255,255,0.15)');
                _updateShipChip(model);
                _closeShipPopup();
                const sel = document.getElementById('setting-ship-model');
                if (sel) sel.value = model;
                if (window.activePlayerInstance) {
                    window.activePlayerInstance.modelStyle = model;
                    window.activePlayerInstance.customShipImage = null;
                }
            });
        });

        // ===== SONG PICKER POPUP =====
        const _closeSongPopup = () => {
            const p = document.getElementById('song-picker-popup');
            if (p) p.style.display = 'none';
        };

        const btnOpenSong = document.getElementById('btn-open-song-picker');
        if (btnOpenSong) {
            btnOpenSong.addEventListener('click', () => {
                this.audio.playClickSound();
                _updateSongChip();
                const p = document.getElementById('song-picker-popup');
                if (p) p.style.display = 'flex';
            });
        }

        const btnCloseSong = document.getElementById('btn-close-song-picker');
        if (btnCloseSong) btnCloseSong.addEventListener('click', () => _closeSongPopup());

        const songPopup = document.getElementById('song-picker-popup');
        if (songPopup) songPopup.addEventListener('click', (e) => { if (e.target === songPopup) _closeSongPopup(); });

        // Select tune item click inside popup
        document.querySelectorAll('.btn-select-tune-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const newIdx = parseInt(btn.dataset.tuneIdx);
                this.audio.currentTuneIndex = newIdx;
                localStorage.setItem('wave_dash_selected_tune_index', newIdx.toString());

                // Clear custom song if active
                if (this.audio.useCustomSong) {
                    this.audio.setCustomSong(null);
                }

                _updateSongChip();
                
                // Synchronize dropdown inside Settings Screen
                const tuneSelect = document.getElementById('select-built-in-tune');
                if (tuneSelect) tuneSelect.value = newIdx.toString();

                this.audio.stopMusic(true);
                this.audio.startMusic();
            });
        });

        // Custom Song Upload from Menu Popup (with same lock check)
        this.bindClick('btn-menu-song-upload', () => {
            const hasSongUnlocked = localStorage.getItem('wave_dash_shop_custom_song') === 'true';
            if (!hasSongUnlocked) {
                this.audio.playClickSound();
                this.activeCheckoutType = 'shop-item';
                this.activeShopItemType = 'custom-song';
                this.activeShopItemPrice = '0.05';
                this.showPremiumCheckout();
                return;
            }
            const input = document.getElementById('input-menu-song');
            if (input) input.click();
        });

        this.bindClick('btn-menu-song-clear', () => {
            this.audio.playClickSound();
            this.audio.setCustomSong(null);
            _updateSongChip();
            this.audio.stopMusic(true);
            this.audio.startMusic();
        });

        const menuSongInput = document.getElementById('input-menu-song');
        if (menuSongInput) {
            menuSongInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    const dataUrl = event.target.result;
                    this.audio.setCustomSong(dataUrl);
                    this.audio.playClickSound();
                    _updateSongChip();

                    this.audio.stopMusic(true);
                    this.audio.startMusic();
                };
                reader.readAsDataURL(file);
            });
        }

        // Init Song chip on load
        _updateSongChip();

        // Init ship chip on load
        const _initShipModel = localStorage.getItem('wave_dash_ship_model') || 'arrow';
        _updateShipChip(_initShipModel);
        document.querySelectorAll('.ship-model-btn').forEach(b =>
            b.style.borderColor = b.dataset.model === _initShipModel ? 'var(--neon-pink)' : 'rgba(255,255,255,0.15)');
        if (_initShipModel === 'custom') {
            const stored = localStorage.getItem('wave_dash_ship_custom_img');
            if (stored) {
                const img = new Image(); img.src = stored;
                img.onload = () => {
                    window._customShipImage = img;
                    if (window.activePlayerInstance) window.activePlayerInstance.customShipImage = img;
                };
            }
        }

        // ===== CUSTOM COLOUR SKIN PICKER (Skin Shop — Premium Only) =====
        const _drawColourPicker = (canvasId, hue) => {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            const ctx2 = canvas.getContext('2d');
            const w = canvas.width, h = canvas.height;
            // Horizontal: saturation 0→1, Vertical: lightness 1→0
            // Base: hue at full saturation/lightness
            const baseGrad = ctx2.createLinearGradient(0, 0, w, 0);
            baseGrad.addColorStop(0, `hsl(${hue},0%,50%)`);
            baseGrad.addColorStop(1, `hsl(${hue},100%,50%)`);
            ctx2.fillStyle = baseGrad;
            ctx2.fillRect(0, 0, w, h);
            // Vertical: white at top → black at bottom overlay
            const vGrad = ctx2.createLinearGradient(0, 0, 0, h);
            vGrad.addColorStop(0, 'rgba(255,255,255,1)');
            vGrad.addColorStop(0.5, 'rgba(255,255,255,0)');
            vGrad.addColorStop(0.5, 'rgba(0,0,0,0)');
            vGrad.addColorStop(1, 'rgba(0,0,0,1)');
            ctx2.fillStyle = vGrad;
            ctx2.fillRect(0, 0, w, h);
        };

        const _pickColour = (canvas, x, y) => {
            const ctx2 = canvas.getContext('2d');
            const px = ctx2.getImageData(Math.round(x), Math.round(y), 1, 1).data;
            return `#${px[0].toString(16).padStart(2,'0')}${px[1].toString(16).padStart(2,'0')}${px[2].toString(16).padStart(2,'0')}`;
        };

        const _setupColourCanvas = (canvasId, hueSliderId, swatchId, hexId) => {
            let currentHue = parseInt(document.getElementById(hueSliderId)?.value || '180');
            _drawColourPicker(canvasId, currentHue);

            const hueSlider = document.getElementById(hueSliderId);
            if (hueSlider) {
                hueSlider.addEventListener('input', () => {
                    currentHue = parseInt(hueSlider.value);
                    _drawColourPicker(canvasId, currentHue);
                });
            }

            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            let picking = false;
            const _pick = (e) => {
                const rect = canvas.getBoundingClientRect();
                const scaleX = canvas.width / rect.width;
                const scaleY = canvas.height / rect.height;
                const x = (e.clientX - rect.left) * scaleX;
                const y = (e.clientY - rect.top) * scaleY;
                const hex = _pickColour(canvas, x, y);
                const swatch = document.getElementById(swatchId);
                const hexInput = document.getElementById(hexId);
                if (swatch) swatch.style.background = hex;
                if (hexInput) hexInput.value = hex;
            };
            canvas.addEventListener('mousedown', (e) => { picking = true; _pick(e); });
            canvas.addEventListener('mousemove', (e) => { if (picking) _pick(e); });
            window.addEventListener('mouseup', () => { picking = false; });
            // Touch support
            canvas.addEventListener('touchstart', (e) => { e.preventDefault(); picking = true; _pick(e.touches[0]); });
            canvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (picking) _pick(e.touches[0]); });
            window.addEventListener('touchend', () => { picking = false; });

            // Hex input → swatch sync
            const hexInput = document.getElementById(hexId);
            if (hexInput) {
                hexInput.addEventListener('input', () => {
                    const v = hexInput.value;
                    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
                        const swatch = document.getElementById(swatchId);
                        if (swatch) swatch.style.background = v;
                    }
                });
            }
        };

        // Init when shop screen opens (canvas not visible until then)
        const _initColourPickers = () => {
            const hasColorAccess = this.hasGold() || localStorage.getItem('wave_dash_shop_custom_skin_color') === 'true';
            const section = document.getElementById('custom-colour-section');
            if (section) {
                const lockMsg = document.getElementById('colour-picker-lock-msg');
                if (hasColorAccess) {
                    section.style.opacity = '1';
                    section.style.pointerEvents = 'auto';
                    if (lockMsg) lockMsg.remove();
                } else {
                    section.style.opacity = '0.5';
                    section.style.pointerEvents = 'none';
                    if (!lockMsg) {
                        const msg = document.createElement('div');
                        msg.id = 'colour-picker-lock-msg';
                        msg.style.cssText = 'position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.6); border-radius:14px; font-family:Outfit; font-size:13px; font-weight:800; color:var(--neon-yellow); z-index:5;';
                        msg.textContent = '👑 GOLD / DIAMOND PLAN OR SHOP SKIN COLOUR REQUIRED';
                        section.style.position = 'relative';
                        section.appendChild(msg);
                    }
                }
            }
            // Load saved colours (using neon_dash_color1/2)
            const savedPrimary   = localStorage.getItem('neon_dash_color1')   || '#00ffff';
            const savedSecondary = localStorage.getItem('neon_dash_color2')  || '#ff00ff';
            const ps = document.getElementById('primary-colour-swatch');
            const ss = document.getElementById('secondary-colour-swatch');
            const ph = document.getElementById('primary-colour-hex');
            const sh = document.getElementById('secondary-colour-hex');
            if (ps) ps.style.background = savedPrimary;
            if (ph) ph.value = savedPrimary;
            if (ss) ss.style.background = savedSecondary;
            if (sh) sh.value = savedSecondary;

            _setupColourCanvas('colour-picker-primary',   'hue-slider-primary',   'primary-colour-swatch',   'primary-colour-hex');
            _setupColourCanvas('colour-picker-secondary', 'hue-slider-secondary', 'secondary-colour-swatch', 'secondary-colour-hex');
        };

        // Trigger init when shop screen becomes visible
        const shopScreenEl = document.getElementById('shop-screen');
        if (shopScreenEl) {
            const shopObserver = new MutationObserver(() => {
                if (shopScreenEl.classList.contains('active')) _initColourPickers();
            });
            shopObserver.observe(shopScreenEl, { attributes: true, attributeFilter: ['class'] });
        }

        // Apply button
        const btnApplyColour = document.getElementById('btn-apply-custom-colour');
        if (btnApplyColour) {
            btnApplyColour.addEventListener('click', () => {
                const hasColorAccess = this.hasGold() || localStorage.getItem('wave_dash_shop_custom_skin_color') === 'true';
                if (!hasColorAccess) {
                    alert('👑 Gold/Diamond Premium Plan or Custom Skin Colour purchase required to use custom ship colors!');
                    return;
                }
                const primary   = document.getElementById('primary-colour-hex')?.value   || '#00ffff';
                const secondary = document.getElementById('secondary-colour-hex')?.value || '#ff00ff';
                if (!/^#[0-9a-fA-F]{6}$/.test(primary) || !/^#[0-9a-fA-F]{6}$/.test(secondary)) {
                    alert('Please enter valid hex colours (e.g. #00ffff)');
                    return;
                }
                // Save both standard keys & display cache keys
                localStorage.setItem('wave_dash_colour_primary',   primary);
                localStorage.setItem('wave_dash_colour_secondary', secondary);
                
                // Apply to live player and persist standard color keys
                if (window.activePlayerInstance) {
                    window.activePlayerInstance.saveCustomColors(primary, secondary);
                } else {
                    localStorage.setItem('neon_dash_color1', primary);
                    localStorage.setItem('neon_dash_color2', secondary);
                }
                
                // De-select grid presets in UI shop
                document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));

                this.audio.playClickSound();
                btnApplyColour.textContent = '✅ COLOURS APPLIED!';
                setTimeout(() => { btnApplyColour.textContent = '✅ APPLY CUSTOM COLOURS TO SHIP'; }, 1800);
            });
        }

        // ===== COIN INVESTMENT POPUP TRIGGERS =====
        this.bindClick('btn-invest-trigger', () => {
            const popup = document.getElementById('invest-popup');
            if (popup) {
                popup.style.display = 'flex';
                const hasActive = this.investments && this.investments.length > 0;
                document.getElementById('invest-screen-rules').style.display = hasActive ? 'none' : 'block';
                document.getElementById('invest-screen-form').style.display = 'none';
                document.getElementById('invest-screen-active').style.display = hasActive ? 'block' : 'none';
                this.updateInvestmentUI();
            }
        });
        this.bindClick('btn-invest-close', () => {
            const popup = document.getElementById('invest-popup');
            if (popup) popup.style.display = 'none';
        });
        this.bindClick('btn-invest-rules-next', () => {
            document.getElementById('invest-screen-rules').style.display = 'none';
            document.getElementById('invest-screen-form').style.display = 'block';
        });
        this.bindClick('btn-invest-start-confirm', () => {
            const coinInput = document.getElementById('invest-amount-input');
            const durInput = document.getElementById('invest-duration-input');
            if (coinInput && durInput) {
                const amount = coinInput.value;
                const duration = durInput.value;
                this.startInvestment(amount, duration);
            }
        });
        this.bindClick('btn-invest-action', () => {
            this.withdrawInvestment();
        });

        // ===== TIME TRAVEL DEBUG TOOLS DISABLED =====

        // ===== DAILY QUESTS POPUP TRIGGERS =====
        this.bindClick('btn-quests-trigger', () => {
            const popup = document.getElementById('quests-popup');
            if (popup) {
                popup.style.display = 'flex';
                this.renderQuestsUI();
                this.startQuestsTimer();
            }
        });
        this.bindClick('btn-quests-close', () => {
            const popup = document.getElementById('quests-popup');
            if (popup) popup.style.display = 'none';
            this.stopQuestsTimer();
        });

        // Close Update Screen modal
        this.bindClick('btn-update-close', () => {
            this.ui.showScreen('main');
        });

        // Start background music on first user interaction anywhere on the screen
        const startMusicOnFirstInteraction = () => {
            this.audio.resumeContext();
            this.audio.startMusic();
            window.removeEventListener('click', startMusicOnFirstInteraction);
            window.removeEventListener('touchstart', startMusicOnFirstInteraction);
            window.removeEventListener('keydown', startMusicOnFirstInteraction);
        };
        window.addEventListener('click', startMusicOnFirstInteraction);
        window.addEventListener('touchstart', startMusicOnFirstInteraction);
        window.addEventListener('keydown', startMusicOnFirstInteraction);
    }

    bindClick(id, callback) {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', () => {
                this.audio.resumeContext();
                this.audio.playClickSound();
                callback();
            });
        }
    }

    // -------------------------------------------------------------
    // GAME CORE FLOWS
    // -------------------------------------------------------------

    startGame(config) {
        if (config && config.index >= 501 && config.index <= 510) {
            const forceUnlocked = localStorage.getItem(`wave_dash_level_force_unlocked_${config.index}`) === 'true';
            if (!forceUnlocked && !this.areAllLevelsCompleted()) {
                this.audio.playDeathSound();
                this.ui.showAchievementToast('Level Locked', 'You must first complete all the levels then only you can access that!');
                return;
            }
        }
        let activeConfig = config;
        if (!activeConfig.blocks && window.generateProceduralLevel) {
            activeConfig = window.generateProceduralLevel(config.index, config.color);
        }
        this.levelConfig = activeConfig;
        this.player = new window.PlayerClass(100, 300);
        this.level = new window.LevelClass(activeConfig);
        
        // Load ghost run for rendering
        try {
            const lvlIndex = activeConfig.index;
            const rawGhost = localStorage.getItem(`wave_dash_best_run_level_${lvlIndex}`);
            this.ghostRecording = rawGhost ? JSON.parse(rawGhost) : null;
        } catch (e) {
            console.error("Failed to parse ghost recording", e);
            this.ghostRecording = null;
        }
        this.ghostIndex = 0;
        
        // Link active structures globally for other modules (respawning state updates)
        window.activePlayerInstance = this.player;
        window.activeLevelInstance = this.level;

        // Reset settings
        this.keys.jump = false;
        this.particles.clear();
        
        // Reset recording state
        this.activeRecording = [];
        const rh = document.getElementById('replay-hud');
        if (rh) rh.style.display = 'none';

        // Increment games played counter
        const currentUsername = localStorage.getItem('wave_dash_logged_in_user');
        if (currentUsername) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[currentUsername];
            if (user) {
                user.totalGamesPlayed = (user.totalGamesPlayed || 0) + 1;
                users[currentUsername] = user;
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
                this.syncUserToCloud();
            }
        }

        // Track attempts & play soundtrack
        this.gameState = 'playing';
        this.ui.hideOverlays();
        this.ui.showScreen(''); // Empty screen name hides other overlays

        // Start synthesiser music
        this.audio.startMusic();
        const baseSpeed = activeConfig.startSpeedMultiplier || 1.0;
        this.player.speedMultiplier = baseSpeed;
        this.audio.setSpeedMultiplier(baseSpeed);
    }

    resumeGame() {
        this.gameState = 'playing';
        this.ui.hideOverlays();
        this.audio.startMusic();
    }

    togglePause() {
        if (this.gameState === 'playing') {
            this.gameState = 'paused';
            this.ui.showScreen('pause');
            this.audio.stopMusic();
            
            // Sync practice mode checkboxes in menus
            const ptp = document.getElementById('practice-toggle-pause');
            if (ptp && this.player) ptp.checked = this.player.practiceMode;
        }
    }

    restartGame() {
        this.startGame(this.levelConfig);
    }

    quitToMenu() {
        this.audio.stopMusic();
        this.particles.clear();
        this.player = null;
        this.level = null;
        window.activePlayerInstance = null;
        window.activeLevelInstance = null;
        
        this.gameState = 'menu';
        this.loadLevelStats(); // Reload best stats for selects
        this.ui.showScreen('main');
    }

    handleLevelWin() {
        this.gameState = 'complete';
        this.audio.stopMusic();

        // Restore standard title header
        const titleEl = document.querySelector('#complete-screen h2');
        if (titleEl) {
            titleEl.textContent = "LEVEL COMPLETED";
            titleEl.style.color = "var(--neon-blue)";
            titleEl.style.textShadow = "0 0 10px rgba(0, 243, 255, 0.4)";
        }

        // 🎉 Play festive pop-pop congrats sound
        this.audio.playCongratsSound();
        // Play a second burst after a short delay for extra celebration
        setTimeout(() => this.audio.playCongratsSound(), 320);
        setTimeout(() => this.audio.playCongratsSound(), 600);
        
        // Save best run to local storage
        this.saveBestProgress(100);
        
        // Clear skipped flag if previously skipped
        const levelIdx = this.levelConfig ? this.levelConfig.index : 1;
        localStorage.removeItem(`neon_dash_skipped_level_${levelIdx}`);

        // Award coins with first-time collection logic
        const collectedThisRun = this.player.coinsCollected || 0;
        const coinKey = `wave_dash_max_coins_lvl_${levelIdx}`;
        const maxPreviously = parseInt(localStorage.getItem(coinKey)) || 0;

        if (collectedThisRun > maxPreviously) {
            const newCoins = collectedThisRun - maxPreviously;
            const currentTotal = this.getUserCoins();
            this.setUserCoins(currentTotal + newCoins);
            localStorage.setItem(coinKey, collectedThisRun);
            this.ui.showAchievementToast('New Coins Earned!', `Earned ${newCoins} 🪙 for first-time collection!`);
        }

        // Record completed match run
        this.checkAndSaveGhostRun(100);
        this.recordMatchRun(100, this.player.attempts, this.player.coinsCollected);

        // Level 500 Completion Event: Unlocks Hall of Legends & Endless Mode FREE
        if (levelIdx === 500) {
            localStorage.setItem('wave_dash_lvl500_crossed', 'true');
            localStorage.setItem('wave_dash_endless_unlocked', 'true'); // Endless Mode becomes 100% FREE!
            
            // Show Hall of Legends Modal
            setTimeout(() => {
                this.openHallOfLegendsModal(false);
            }, 600);
        }

        // Level 510 Completion Event (All 10 Master Challenge Levels Passed!): Grandmaster Rewards
        if (levelIdx === 510) {
            localStorage.setItem('wave_dash_master_completed', 'true');
            
            // Award +100 Revives, +100 Skips, +5000 Coins
            const curRevives = parseInt(localStorage.getItem('wave_dash_revive_stock') || '0');
            const curSkips = parseInt(localStorage.getItem('wave_dash_skip_stock') || '0');
            localStorage.setItem('wave_dash_revive_stock', curRevives + 100);
            localStorage.setItem('wave_dash_skip_stock', curSkips + 100);
            this.setUserCoins(this.getUserCoins() + 5000);
            
            // Unlock Secret $0.01 Shop Offer
            const secretOffer = document.getElementById('shop-secret-offer');
            if (secretOffer) secretOffer.style.display = 'flex';

            // Show Hall of Legends Modal with Grandmaster Rewards
            setTimeout(() => {
                this.openHallOfLegendsModal(true);
            }, 600);
        }

        this.ui.showLevelComplete(this.level.name, this.player.attempts, this.player.coinsCollected);
    }

    checkAndSaveGhostRun(pct) {
        if (!this.levelConfig || !this.activeRecording || this.activeRecording.length === 0) return;
        try {
            const lvlIndex = this.levelConfig.index;
            const key = `wave_dash_best_run_level_${lvlIndex}`;
            const bestKey = `neon_dash_best_level_${lvlIndex}`;
            const prevBest = parseInt(localStorage.getItem(bestKey)) || 0;
            if (pct >= prevBest || !localStorage.getItem(key)) {
                localStorage.setItem(key, JSON.stringify(this.activeRecording));
            }
        } catch (e) {
            console.warn("Failed to save ghost run details:", e);
        }
    }

    // -------------------------------------------------------------
    // PROGRESS SAVING
    // -------------------------------------------------------------

    saveBestProgress(pct) {
        if (!this.level) return;
        const levelIdx = this.level.index;
        const key = `neon_dash_best_level_${levelIdx}`;
        const prevBest = parseInt(localStorage.getItem(key)) || 0;
        
        if (pct > prevBest) {
            localStorage.setItem(key, Math.floor(pct));

            // Save into logged in user profile
            const username = localStorage.getItem('wave_dash_logged_in_user');
            if (username) {
                const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
                const user = users[username];
                if (user) {
                    if (!user.levelProgress) user.levelProgress = {};
                    user.levelProgress[levelIdx] = Math.floor(pct);
                    users[username] = user;
                    localStorage.setItem('wave_dash_users', JSON.stringify(users));
                }
            }

            this.syncUserToCloud(); // Sync updated progress to cloud database!
        }
    }

    loadLevelStats() {
        // Restore active user profile progress and clear leftover keys from previous users
        this.loadUserProfileLevelProgress();

        // Dynamically build and refresh Level Select grid
        this.buildLevelSelectUI();
        
        // Update history recordings list
        this.renderHistoryUI();
    }

    // -------------------------------------------------------------
    // MATCH RUN RECORDING & UI GENERATOR (PREMIUM ONLY)
    // -------------------------------------------------------------

    recordMatchRun(pct, attempts, coins) {
        try {
            const username = localStorage.getItem('wave_dash_logged_in_user');
            if (!username) return;

            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (!user) return;

            // ONLY record matches if the user has unlocked game history!
            if (!this.hasGameHistoryUnlocked()) return;

            if (!user.runs) user.runs = [];

            const runRecord = {
                date: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
                level: this.level ? this.level.name : 'Unknown Level',
                progress: Math.min(100, Math.max(0, Math.floor(pct))),
                attempts: attempts || 1,
                coins: coins || 0,
                recording: this.activeRecording || []
            };

            user.runs.unshift(runRecord); // Latest first

            users[username] = user;
            localStorage.setItem('wave_dash_users', JSON.stringify(users));
        } catch (err) {
            console.warn("Failed to save match run details (likely QuotaExceededError):", err);
        }
    }

    renderHistoryUI() {
        const lockBadge = document.getElementById('history-premium-lock');
        const listBox = document.getElementById('history-list-box');
        if (!listBox || !lockBadge) return;

        const hasHistoryUnlocked = this.hasGameHistoryUnlocked();

        // Fetch matches statistics from profile
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (!username) {
            listBox.innerHTML = '<p style="color: var(--text-muted); text-align: center; margin: 10px 0;">No runs recorded yet. Start playing!</p>';
            return;
        }

        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const user = users[username];
        const totalMatches = user ? (user.totalGamesPlayed || 0) : 0;

        if (!hasHistoryUnlocked) {
            // User is not premium & hasn't purchased key - lock out panel
            lockBadge.textContent = '🔒 DIAMOND ONLY';
            lockBadge.style.color = '#ff0055';
            lockBadge.style.borderColor = '#ff0055';
            lockBadge.style.background = 'rgba(255, 0, 85, 0.1)';

            listBox.innerHTML = `
                <div style="text-align: center; padding: 15px; color: var(--text-muted);">
                    <p style="margin-bottom: 8px; font-weight: 700; color: #fff;">💎 View Your Flight Recordings</p>
                    <p style="font-size: 11px; margin-bottom: 8px;">You have played <strong style="color:var(--neon-blue);">${totalMatches}</strong> match${totalMatches === 1 ? '' : 'es'} so far.</p>
                    <p style="font-size: 11px;">Unlock Diamond Premium or buy Game History from the Shop to record matches, view scores, and watch replays!</p>
                </div>
            `;
            return;
        }

        // User is premium or purchased key - load runs
        if (this.hasDiamond()) {
            lockBadge.textContent = `👑 UNLOCKED (${totalMatches} Matches)`;
        } else {
            lockBadge.textContent = `🔓 UNLOCKED (${totalMatches} Matches)`;
        }
        lockBadge.style.color = 'var(--neon-green)';
        lockBadge.style.borderColor = 'var(--neon-green)';
        lockBadge.style.background = 'rgba(0, 243, 255, 0.1)';

        const runs = (user && user.runs) ? user.runs : [];

        if (runs.length === 0) {
            listBox.innerHTML = '<p style="color: var(--text-muted); text-align: center; margin: 10px 0;">No runs recorded yet. Start playing!</p>';
            return;
        }

        // Render runs list
        let html = '';
        runs.forEach((run, rIdx) => {
            const completed = run.progress >= 100;
            const progressColor = completed ? 'var(--neon-green)' : 'var(--neon-pink)';
            const statusLabel = completed ? 'COMPLETED' : `${run.progress}%`;
            
            const hasRec = run.recording && run.recording.length > 0;
            const playBtn = hasRec ? `<button class="btn btn-success btn-replay-run" data-run-id="${rIdx}" style="padding: 4px 10px; font-size: 11px; font-weight: 800; border-radius: 6px; background: var(--neon-green); border-color: var(--neon-green); color: #000; display: inline-flex; align-items: center; gap: 3px; cursor: pointer; box-shadow: 0 0 6px rgba(0, 243, 255, 0.15);">▶ REPLAY</button>` : '';

            html += `
                <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 6px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 5px; box-sizing: border-box;">
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <span style="font-weight: 700; color: #fff;">${run.level}</span>
                        <span style="font-size: 11px; color: var(--text-muted);">${run.date}</span>
                    </div>
                    <div style="display: flex; gap: 15px; align-items: center;">
                        <span style="font-size: 11px; color: var(--text-muted);">Attempts: <strong style="color:#fff;">${run.attempts}</strong></span>
                        <span style="font-size: 11px; color: var(--text-muted);">Coins: <strong style="color:var(--neon-yellow);">${run.coins}/3</strong></span>
                        <span style="font-weight: 800; color: ${progressColor}; margin-right: 8px;">${statusLabel}</span>
                        ${playBtn}
                    </div>
                </div>
            `;
        });
        listBox.innerHTML = html;

        // Bind dynamic replay click handlers
        const replayBtns = listBox.querySelectorAll('.btn-replay-run');
        replayBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const runIdx = parseInt(btn.getAttribute('data-run-id'));
                const selectedRun = runs[runIdx];
                if (selectedRun && selectedRun.recording) {
                    this.startGameplayReplay(selectedRun);
                }
            });
        });
    }

    startGameplayReplay(run) {
        const list = window.levelsList || [];
        const lvl = list.find(l => l.name === run.level);
        if (!lvl) return;

        this.audio.resumeContext();
        this.audio.playClickSound();
        this.audio.stopMusic();

        let activeConfig = lvl;
        if (!activeConfig.blocks && window.generateProceduralLevel) {
            activeConfig = window.generateProceduralLevel(lvl.index, lvl.color);
        }
        this.levelConfig = activeConfig;
        this.player = new window.PlayerClass(100, 300);
        this.level = new window.LevelClass(activeConfig);

        window.activePlayerInstance = this.player;
        window.activeLevelInstance = this.level;

        this.gameState = 'replaying';
        this.replayData = run.recording;
        this.replayRun = run;
        this.replayIndex = 0;

        this.particles.clear();
        this.ui.hideOverlays();
        this.ui.showScreen('');

        const rh = document.getElementById('replay-hud');
        if (rh) rh.style.display = 'flex';

        const hud = document.getElementById('hud');
        if (hud) hud.style.opacity = '1';
        
        document.getElementById('attempt-display').textContent = `REPLAY`;
        document.getElementById('coin-display').textContent = `Coins: 0/3`;
    }

    updateReplay(dt) {
        const data = this.replayData;
        if (!data || data.length === 0) {
            this.exitReplay();
            return;
        }

        const idx = Math.floor(this.replayIndex);
        if (idx >= data.length - 1) {
            // Replay finished! Hide HUD and handle ending based on run progress
            this.gameState = 'replayEnded';
            
            const rh = document.getElementById('replay-hud');
            if (rh) rh.style.display = 'none';

            const isWin = this.replayRun && this.replayRun.progress >= 100;
            if (!isWin) {
                // If it was a crash, trigger death explosion at the final coordinate!
                if (this.player) {
                    this.particles.emitDeathExplosion(
                        this.player.x + this.player.width / 2,
                        this.player.y + this.player.height / 2,
                        this.player.color1,
                        this.player.color2
                    );
                    this.audio.playDeathSound();
                    
                    // Move player model off-screen so they don't freeze in mid-air
                    this.player.y = -9999;
                }
            } else {
                // If it was a victory, play celebration sound
                this.audio.playCongratsSound();
            }

            // Wait 1.2 seconds for the explosion/particles to fully play out before showing overlay
            setTimeout(() => {
                this.ui.showScreen('replayEnded');
                this.audio.playCoinSound();
            }, 1200);
            
            return;
        }

        const frameA = data[idx];
        const frameB = data[idx + 1];
        if (!frameA || !frameB) {
            this.exitReplay();
            return;
        }
        const t = this.replayIndex - idx;

        // Interpolate position
        this.player.x = frameA[0] + (frameB[0] - frameA[0]) * t;
        this.player.y = frameA[1] + (frameB[1] - frameA[1]) * t;
        this.player.angle = frameA[2] + (frameB[2] - frameA[2]) * t;
        this.player.isHoldingThrust = frameA[3] === 1;

        // Coin pass collection triggers
        if (this.level && this.level.coins) {
            this.level.coins.forEach(c => {
                if (!c.collected && this.player.x >= c.x) {
                    c.collected = true;
                    this.player.coinsCollected++;
                    this.audio.playCoinSound();
                    this.particles.emitCoinTwinkle(c.x + 15, c.y + 15);
                }
            });
        }

        // Particle trail
        if (this.player.isHoldingThrust) {
            const exhaustX = this.player.x;
            const exhaustY = this.player.y + this.player.height / 2;
            this.particles.emitTrail(exhaustX, exhaustY, '#ff0055', this.player.trailStyle);
            if (this.player.trailStyle === 'default') {
                this.particles.emitTrail(exhaustX, exhaustY, '#fffb00', 'default');
            }
        } else if (this.player.isGrounded) {
            const footY = this.player.gravityInverse ? this.player.y : this.player.y + this.player.height;
            this.particles.emitTrail(this.player.x, footY, this.player.color1, this.player.trailStyle);
        }

        this.cameraX = this.player.x - 300;
        this.cameraX = Math.max(0, Math.min(this.level.levelLength - 1280, this.cameraX));

        this.particles.updateBackgroundStars(dt, 330);
        this.particles.update(dt);

        this.ui.updateHUD(this.player, this.level, this.fps);
        this.replayIndex += dt * 60;
    }

    exitReplay() {
        this.gameState = 'menu';
        const rh = document.getElementById('replay-hud');
        if (rh) rh.style.display = 'none';

        this.particles.clear();
        this.player = null;

        this.ui.showScreen('main');
        this.loadLevelStats();
    }

    areAllLevelsCompleted() {
        if (localStorage.getItem('wave_dash_lvl500_crossed') === 'true') return true;
        if (localStorage.getItem('wave_dash_master_completed') === 'true') return true;
        const best500 = parseInt(localStorage.getItem('neon_dash_best_level_500')) || 0;
        const skipped500 = localStorage.getItem('neon_dash_skipped_level_500') === 'true';
        if (best500 >= 100 || skipped500) return true;
        return false;
    }

    buildLevelSelectUI() {
        const container = document.getElementById('level-list-container');
        if (!container) return;

        container.innerHTML = '';
        const list = window.levelsList || [];
        const isPremium = localStorage.getItem('neon_dash_premium') === 'true';
        const currentUsername = localStorage.getItem('wave_dash_logged_in_user') || 'Guest';

        list.forEach((lvl, idx) => {
            const num = idx + 1;

            // Lock logic: Level 1 is always unlocked, 501-510 require all 500 levels completed
            let isUnlocked = (num === 1);
            if (num >= 501 && num <= 510) {
                const forceUnlocked = localStorage.getItem(`wave_dash_level_force_unlocked_${num}`) === 'true';
                const isSianGoyal = currentUsername && currentUsername.toLowerCase() === 'sian goyal';
                if (forceUnlocked || isSianGoyal) {
                    isUnlocked = true;
                } else if (this.areAllLevelsCompleted()) {
                    if (num === 501) {
                        isUnlocked = true;
                    } else {
                        const prevKey = `neon_dash_best_level_${num - 1}`;
                        const prevBest = parseInt(localStorage.getItem(prevKey)) || 0;
                        const prevSkipped = localStorage.getItem(`neon_dash_skipped_level_${num - 1}`) === 'true';
                        isUnlocked = (prevBest >= 100 || prevSkipped);
                    }
                } else {
                    isUnlocked = false;
                }
            } else if (num > 1) {
                const forceUnlocked = localStorage.getItem(`wave_dash_level_force_unlocked_${num}`) === 'true';
                if (forceUnlocked) {
                    isUnlocked = true;
                } else {
                    const prevKey = `neon_dash_best_level_${num - 1}`;
                    const prevBest = parseInt(localStorage.getItem(prevKey)) || 0;
                    const prevSkipped = localStorage.getItem(`neon_dash_skipped_level_${num - 1}`) === 'true';
                    isUnlocked = (prevBest >= 100 || prevSkipped);
                }
            }

            const card = document.createElement('div');
            card.className = `level-card ${isUnlocked ? '' : 'locked'}`;
            card.id = `level-card-${num}`;
            if (isUnlocked) {
                card.style.borderColor = `${lvl.color}55`;
                card.style.boxShadow = `0 0 10px ${lvl.color}15`;
            }

            const bestKey = `neon_dash_best_level_${num}`;
            const best = parseInt(localStorage.getItem(bestKey)) || 0;
            const isSkipped = localStorage.getItem(`neon_dash_skipped_level_${num}`) === 'true';

            // Custom progress presentation to show SKIPPED in neon pink instead of 100%
            let progressHTML = `<div class="level-progress">${best}%</div>`;
            if (isSkipped) {
                progressHTML = `<div class="level-progress" style="color: var(--neon-pink); font-size: 8px; font-weight: 900; letter-spacing: 0.2px;">SKIPPED</div>`;
            }

            // Retrieve difficulty directly from the level config metadata name
            const diffPrefix = lvl.name.split(' - ')[0];

            card.innerHTML = `
                <div class="level-diff-badge" style="font-size: 8px; font-weight: 900; opacity: 0.8; margin-bottom: 2px; text-transform: uppercase; color: ${isUnlocked ? lvl.color : 'rgba(255,255,255,0.45)'}; font-family: inherit; letter-spacing: 0.5px;">${diffPrefix}</div>
                <div class="level-number" style="margin-bottom: 1px;">${num}</div>
                ${isUnlocked ? progressHTML : '<div class="lock-icon" style="font-size: 10px; margin-top: 1px;">🔒</div>'}
            `;

            // Click listener for play action or locked chime
            card.addEventListener('click', () => {
                this.audio.resumeContext();

                if (num >= 501 && num <= 510) {
                    const forceUnlocked = localStorage.getItem(`wave_dash_level_force_unlocked_${num}`) === 'true';
                    const isSianGoyal = currentUsername && currentUsername.toLowerCase() === 'sian goyal';
                    if (!forceUnlocked && !isSianGoyal && !this.areAllLevelsCompleted()) {
                        this.audio.playDeathSound();
                        this.ui.showAchievementToast('Level Locked', 'You must first complete all the levels then only you can access that!');
                        return;
                    }
                }

                let levelUnlocked = (num === 1);
                if (num > 1) {
                    const forceUnlocked = localStorage.getItem(`wave_dash_level_force_unlocked_${num}`) === 'true';
                    const isSianGoyal = currentUsername && currentUsername.toLowerCase() === 'sian goyal';
                    if (forceUnlocked || (isSianGoyal && num >= 501 && num <= 510)) {
                        levelUnlocked = true;
                    } else if (num >= 501 && num <= 510) {
                        if (this.areAllLevelsCompleted()) {
                            if (num === 501) {
                                levelUnlocked = true;
                            } else {
                                const prevKey = `neon_dash_best_level_${num - 1}`;
                                const prevBest = parseInt(localStorage.getItem(prevKey)) || 0;
                                const prevSkipped = localStorage.getItem(`neon_dash_skipped_level_${num - 1}`) === 'true';
                                levelUnlocked = (prevBest >= 100 || prevSkipped);
                            }
                        } else {
                            levelUnlocked = false;
                        }
                    } else {
                        const prevKey = `neon_dash_best_level_${num - 1}`;
                        const prevBest = parseInt(localStorage.getItem(prevKey)) || 0;
                        const prevSkipped = localStorage.getItem(`neon_dash_skipped_level_${num - 1}`) === 'true';
                        levelUnlocked = (prevBest >= 100 || prevSkipped);
                    }
                }

                if (!levelUnlocked) {
                    this.audio.playDeathSound();
                    this.ui.showAchievementToast('Level Locked', `Level ${num} is locked! Opening unlock options...`);
                    this.openUnlockLevelModal(num);
                } else {
                    this.audio.playClickSound();
                    this.startGame(lvl);
                }
            });

            container.appendChild(card);
        });
    }

    // -------------------------------------------------------------
    // PRACTICE MODE CHECKPOINTS
    // -------------------------------------------------------------

    placePracticeCheckpoint() {
        if (this.player && this.player.practiceMode) {
            const count = this.player.createCheckpoint(this.level);
            this.audio.playCoinSound();
            
            // Checkpoint achievement milestone
            if (count >= 5) {
                this.ui.triggerAchievement('practice_master');
            }
        }
    }

    removePracticeCheckpoint() {
        if (this.player && this.player.practiceMode) {
            if (this.player.removeLastCheckpoint()) {
                this.audio.playJumpSound();
            }
        }
    }

    // -------------------------------------------------------------
    // ENGINE RENDER & PROCESS LOOPS
    // -------------------------------------------------------------

    loop(timestamp) {
        // Handle delta calculations
        if (!this.lastTime) this.lastTime = timestamp;
        let dt = (timestamp - this.lastTime) / 1000;
        this.lastTime = timestamp;

        // Cap dt to avoid large jumps during window unfocus/hangs
        dt = Math.min(0.1, dt);

        // Update FPS Counters
        this.fpsCounter++;
        this.fpsTimer += dt;
        if (this.fpsTimer >= 1.0) {
            this.fps = this.fpsCounter;
            this.fpsCounter = 0;
            this.fpsTimer = 0;
        }

        // Run game logic states
        this.update(dt);
        this.render();

        requestAnimationFrame((t) => this.loop(t));
    }

    update(dt) {
        if (this.gameState === 'replaying' && this.player && this.level) {
            this.updateReplay(dt);
            return;
        }

        if (this.gameState === 'playing' && this.player && this.level) {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('autoplay') === '1') {
                // Smart Autoplay Bot:
                let targetJump = false;
                const playerCenterY = this.player.y + this.player.height / 2;
                const playerX = this.player.x;
                
                let hazardInFront = null;
                let minDistance = 350; // Scan distance in pixels
                
                const spikes = this.level.spikes || [];
                const gears = this.level.gears || [];
                
                for (let i = 0; i < spikes.length; i++) {
                    const s = spikes[i];
                    const dist = s.x - playerX;
                    if (dist > 0 && dist < minDistance) {
                        hazardInFront = s;
                        minDistance = dist;
                    }
                }
                
                for (let i = 0; i < gears.length; i++) {
                    const g = gears[i];
                    const dist = g.x - playerX;
                    if (dist > 0 && dist < minDistance) {
                        hazardInFront = { y: g.y, x: g.x };
                        minDistance = dist;
                    }
                }
                
                if (hazardInFront) {
                    if (hazardInFront.y > playerCenterY - 30) {
                        targetJump = true; // Fly up to avoid hazard on ground
                    } else {
                        targetJump = false; // Fall down to avoid hazard on ceiling
                    }
                } else {
                    // Hover smoothly in the middle of the screen
                    const targetY = (this.canvas ? this.canvas.height : 640) / 2;
                    if (this.player.y > targetY) {
                        targetJump = true;
                    } else {
                        targetJump = false;
                    }
                }
                
                this.keys.jump = targetJump;
            }
            // Sync hold controls with ship thrust physics
            this.player.isHoldingThrust = this.keys.jump;

            // Fixed-timestep accumulator for deterministic physics
            this.accumulator += dt;
            while (this.accumulator >= this.physicsStep) {
                this.physics.updatePhysics(
                    this.player, 
                    this.level, 
                    this.physicsStep, 
                    this.particles, 
                    this.audio
                );
                
                this.level.update(this.physicsStep);
                this.player.updateRotation(this.physicsStep);

                // Advance ghost index
                if (this.ghostRecording && this.gameState === 'playing' && this.player && !this.player.isDead) {
                    this.ghostIndex++;
                }

                // Record frame coords for Replay System and Ghost Play (skip in endless mode to save memory & prevent lag)
                if (this.gameState === 'playing' && this.player && !this.player.isDead) {
                    const isEndless = this.levelConfig && (this.levelConfig.isEndless || this.levelConfig.index >= 990);
                    if (!isEndless) {
                        if (!this.activeRecording) this.activeRecording = [];
                        this.activeRecording.push([
                            Math.round(this.player.x),
                            Math.round(this.player.y),
                            Number(this.player.angle.toFixed(2)),
                            this.player.isHoldingThrust ? 1 : 0
                        ]);
                    }

                    // Update endless runner daily quest
                    if (isEndless) {
                        this.incrementDailyQuest('endless_runner', Math.round(this.player.vx * this.physicsStep * 0.05));
                    }
                }

                // Accumulate coins achievements
                if (this.player.coinsCollected >= 1) {
                    this.ui.triggerAchievement('coin_grabber');
                }

                this.accumulator -= this.physicsStep;
            }

            // Camera smoothly follows player
            this.cameraX = this.player.x - 300;
            // Clamp camera between starting boundary and level end
            this.cameraX = Math.max(0, Math.min(this.level.levelLength - 1280, this.cameraX));

            // Visual Parallax effects & Trail emission
            this.particles.updateBackgroundStars(dt, this.player.vx);
            this.particles.update(dt);
            
            if (!this.player.isDead) {
                const exhaustX = this.player.x;
                const exhaustY = this.player.y + this.player.height / 2;
                
                if (this.player.isHoldingThrust) {
                    // Emit fiery thruster exhaust
                    this.particles.emitTrail(exhaustX, exhaustY, '#ff0055', this.player.trailStyle);
                    if (this.player.trailStyle === 'default') {
                        this.particles.emitTrail(exhaustX, exhaustY, '#fffb00', 'default');
                    }
                } else if (this.player.isGrounded) {
                    // Small slide dust
                    const footY = this.player.gravityInverse ? this.player.y : this.player.y + this.player.height;
                    this.particles.emitTrail(this.player.x, footY, this.player.color1, this.player.trailStyle);
                }
            }

            // Save progress percentage incrementally during live runs
            const progress = (this.player.x / this.level.levelLength) * 100;
            this.saveBestProgress(progress);

            // Update in-game HUD overlay
            this.ui.updateHUD(this.player, this.level, this.fps);

            // Death Screen trigger delayed transition
            if (this.player.isDead && this.gameState === 'playing') {
                this.audio.stopMusic();
                
                if (this.player.practiceMode) {
                    this.gameState = 'practiceRespawning';
                } else {
                    this.gameState = 'gameOver';
                    
                    // Record match run
                    this.checkAndSaveGhostRun(progress);
                    this.recordMatchRun(progress, this.player.attempts, this.player.coinsCollected);
                    
                    setTimeout(() => {
                        if (this.gameState === 'gameOver' && this.player) { // Make sure user didn't restart/quit already
                            this.ui.showGameOver(this.player.attempts, progress);
                            
                            // Sync practice mode checkbox
                            const ptd = document.getElementById('practice-toggle-death');
                            if (ptd && this.player) ptd.checked = this.player.practiceMode;
                        }
                    }, 800);
                }
            }
        } else {
            // Update menu visual background animations (e.g. stars parralax moving)
            this.particles.updateBackgroundStars(dt, 150); // Simulates moving right
            this.particles.update(dt);

            // Check if we just finished respawning in practice mode to resume playing
            if (this.gameState === 'practiceRespawning' && this.player && !this.player.isDead) {
                this.gameState = 'playing';
                this.audio.startMusic();
            }
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.logicalWidth, this.logicalHeight);

        // 1. Draw static black sky gradient
        const grad = this.ctx.createLinearGradient(0, 0, 0, 720);
        
        let colorStart = '#080710';
        let colorEnd = '#05040a';
        if (this.level) {
            colorStart = this.level.bgGradientStart;
            colorEnd = this.level.bgGradientEnd;
        }

        // Apply custom background theme override if selected
        const customBg = localStorage.getItem('wave_dash_bg_theme') || 'default';
        const bgThemes = {
            'cosmic': { start: '#0c061a', end: '#04020a' },
            'cyberpunk': { start: '#240a00', end: '#0a0200' },
            'acid': { start: '#031a08', end: '#010a03' },
            'ocean': { start: '#001224', end: '#00050a' },
            'midnight': { start: '#000000', end: '#000000' }
        };
        if (bgThemes[customBg]) {
            colorStart = bgThemes[customBg].start;
            colorEnd = bgThemes[customBg].end;
        }

        // Draw custom photo background if set
        if (customBg === 'custom' && window._customBgImage) {
            this.ctx.drawImage(window._customBgImage, 0, 0, this.logicalWidth, this.logicalHeight);
            // Overlay a dark tint so game elements stay visible
            this.ctx.fillStyle = 'rgba(0,0,0,0.52)';
            this.ctx.fillRect(0, 0, this.logicalWidth, this.logicalHeight);
        } else {
        
        grad.addColorStop(0, colorStart);
        grad.addColorStop(1, colorEnd);
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(0, 0, this.logicalWidth, this.logicalHeight);
        } // end custom bg else

        // 2. Draw parallax stars
        this.particles.drawBackgroundStars(this.ctx);

        if ((this.gameState === 'playing' || this.gameState === 'countdown' || this.gameState === 'replaying' || this.gameState === 'replayEnded' || this.gameState === 'paused' || this.gameState === 'gameOver' || this.gameState === 'complete' || this.gameState === 'practiceRespawning') && this.player && this.level) {
            // Draw interactive level grids, platforms, portals, spikes, coins
            const quality = this.ui.qualitySelect ? this.ui.qualitySelect.value : 'high';
            this.level.draw(this.ctx, this.cameraX, quality);

            // Draw player, checkpoints, and particles in world translation space
            this.ctx.save();
            this.ctx.translate(-this.cameraX, 0);

            // Draw Practice Mode Diamonds
            this.player.checkpoints.forEach((cp, idx) => {
                this.ctx.save();
                this.ctx.fillStyle = '#39ff14';
                this.ctx.strokeStyle = '#ffffff';
                this.ctx.lineWidth = 2;
                
                if (quality === 'high') {
                    this.ctx.shadowColor = '#39ff14';
                    this.ctx.shadowBlur = 10;
                }

                // Diamond coordinates centered on player's size
                this.ctx.translate(cp.x + 20, cp.y + 20);
                
                // Pulsate size slightly
                const scale = 1.0 + Math.sin((Date.now() / 150) + idx) * 0.1;
                this.ctx.scale(scale, scale);

                this.ctx.beginPath();
                this.ctx.moveTo(0, -14);
                this.ctx.lineTo(11, 0);
                this.ctx.lineTo(0, 14);
                this.ctx.lineTo(-11, 0);
                this.ctx.closePath();
                this.ctx.fill();
                this.ctx.stroke();
                
                this.ctx.restore();
            });

            // Draw Ghost Ship
            if (this.ghostRecording && this.ghostRecording.length > 0 && this.gameState === 'playing') {
                const idx = Math.floor(this.ghostIndex);
                if (idx < this.ghostRecording.length - 1) {
                    const frameA = this.ghostRecording[idx];
                    const frameB = this.ghostRecording[idx + 1];
                    const t = this.ghostIndex - idx;
                    
                    const gx = frameA[0] + (frameB[0] - frameA[0]) * t;
                    const gy = frameA[1] + (frameB[1] - frameA[1]) * t;
                    const gAngle = frameA[2] + (frameB[2] - frameA[2]) * t;
                    
                    this.ctx.save();
                    this.ctx.globalAlpha = 0.35; // Semi-transparent
                    this.ctx.translate(gx + this.player.width / 2, gy + this.player.height / 2);
                    this.ctx.rotate(gAngle);
                    
                    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
                    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                    this.ctx.lineWidth = 2.5;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.player.width / 2, 0);
                    this.ctx.lineTo(-this.player.width / 4, -this.player.height / 5);
                    this.ctx.lineTo(-this.player.width / 2, -this.player.height / 2);
                    this.ctx.lineTo(-this.player.width / 3, 0);
                    this.ctx.lineTo(-this.player.width / 2, this.player.height / 2);
                    this.ctx.lineTo(-this.player.width / 4, this.player.height / 5);
                    this.ctx.closePath();
                    this.ctx.fill();
                    this.ctx.stroke();
                    
                    this.ctx.restore();
                }
            }

            this.player.draw(this.ctx, quality);
            this.particles.setQuality(quality);
            this.particles.draw(this.ctx);
            
            this.ctx.restore();
        }
    }

    // -------------------------------------------------------------
    // PREMIUM MONETIZATION METHODS
    // -------------------------------------------------------------

    openPremiumModal() {
        this.audio.playClickSound();
        this.activeCheckoutType = 'premium';
        this.selectedPremiumPrice = '1.00';
        this.showPremiumCheckout();
    }

    getUserCountry() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            if (users[username] && users[username].country) {
                return users[username].country;
            }
        }
        return localStorage.getItem('wave_dash_user_country') || '';
    }

    setUserCountry(countryCode) {
        if (!countryCode) return;
        localStorage.setItem('wave_dash_user_country', countryCode);
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            if (users[username]) {
                users[username].country = countryCode;
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
            }
        }
        this.updateAllPriceDisplays(countryCode);
        this.syncUserToCloud();
    }

    promptCompulsoryCountrySelect(onSuccess) {
        const modal = document.getElementById('country-select-modal');
        const select = document.getElementById('modal-country-select');
        const confirmBtn = document.getElementById('btn-confirm-country');
        
        if (!modal) {
            if (onSuccess) onSuccess();
            return;
        }

        this.populateCountriesDropdown();
        modal.style.display = 'flex';

        if (confirmBtn) {
            confirmBtn.onclick = (e) => {
                if (e) e.preventDefault();
                const selected = select ? select.value : '';
                if (!selected) {
                    this.audio.playDeathSound();
                    this.ui.showAchievementToast('Selection Required', 'You MUST select your country before continuing!');
                    return;
                }
                this.audio.playClickSound();
                this.setUserCountry(selected);
                modal.style.display = 'none';
                if (onSuccess) onSuccess();
            };
        }
    }

    updateAllPriceDisplays(countryCode) {
        const country = countryCode || this.getUserCountry() || 'US';
        const curr = getCountryCurrency(country, 1.00);

        const priceTag = document.getElementById('premium-price-tag');
        if (priceTag) {
            priceTag.textContent = `ONLY ${curr.text}`;
        }

        // Shop items
        document.querySelectorAll('.btn-buy-shop-item').forEach(btn => {
            const type = btn.getAttribute('data-item-type') || '';
            const price = btn.getAttribute('data-item-price') || '0';
            if (type.startsWith('tickets-')) {
                const ticketCount = parseInt(type.split('-')[1]);
                if (ticketCount < 100) {
                    const inrPrices = { 'tickets-10': 20, 'tickets-30': 50, 'tickets-50': 80 };
                    btn.textContent = `₹${inrPrices[type]}`;
                } else {
                    const usd = parseFloat(price || 0);
                    const itemCurr = getCountryCurrency(country, usd);
                    btn.textContent = `${itemCurr.text}`;
                }
            } else {
                // Feature shop item - price is in tickets
                btn.textContent = `${price} 🎟️`;
            }
        });
    }

    populateCountriesDropdown() {
        const ids = ['reg-country', 'login-country', 'modal-country-select'];
        
        ids.forEach(id => {
            const select = document.getElementById(id);
            if (!select) return;

            const currentVal = select.value;
            select.innerHTML = '';

            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.disabled = true;
            if (!currentVal) placeholder.selected = true;
            placeholder.textContent = '-- SELECT YOUR COUNTRY --';
            select.appendChild(placeholder);

            ALL_COUNTRIES.forEach(c => {
                const pricing = getCountryCurrency(c.code, 1.00);
                const opt = document.createElement('option');
                opt.value = c.code;
                opt.setAttribute('data-price', pricing.price);
                opt.setAttribute('data-symbol', pricing.symbol);
                opt.textContent = `${c.name} (${c.code})`;
                if (c.code === currentVal || c.code === this.getUserCountry()) {
                    opt.selected = true;
                }
                select.appendChild(opt);
            });
        });
    }

    showPremiumCheckout() {
        if (this.isCurrentUserGuest()) {
            this.audio.playDeathSound();
            this.ui.showScreen('profile');
            this.ui.showAchievementToast('Login Required', 'You must login first to pay or purchase in the shop!');
            return;
        }

        const country = this.getUserCountry() || 'IN';
        this.audio.playClickSound();
        this.ui.showScreen('premium');
        
        const checkoutPanel = document.getElementById('premium-checkout-panel');
        const successPanel = document.getElementById('premium-success-panel');
        
        if (successPanel) successPanel.style.display = 'none';
        if (checkoutPanel) checkoutPanel.style.display = 'flex';

        // Initialize upsell items state
        this.checkoutUpsells = {
            booster: { name: "Double Coins Booster", basePrice: 0.30, qty: 1, added: false, icon: "🚀", desc: "Double coins earned in runs" },
            revives: { name: "5x Revives Pack", basePrice: 0.15, qty: 1, added: false, icon: "💖", desc: "Get 5 extra life revives" },
            goldenpass: { name: "Golden Pass Ticket", basePrice: 1.50, qty: 1, added: false, icon: "🎟️", desc: "Unlock premium neon skin path" }
        };
        this.appliedDiscountCode = null;

        // Reset text inputs
        const discountInput = document.getElementById('checkout-discount-input');
        if (discountInput) discountInput.value = '';
        const discountMsg = document.getElementById('discount-message');
        if (discountMsg) discountMsg.style.display = 'none';

        // Reset terms & conditions checkbox
        const agreeCheckbox = document.getElementById('checkout-agree-terms');
        if (agreeCheckbox) agreeCheckbox.checked = false;

        // Reset Add buttons UI
        if (checkoutPanel) {
            checkoutPanel.querySelectorAll('.btn-upsell-add').forEach(btn => {
                btn.textContent = 'Add';
                btn.classList.remove('added');
            });
            checkoutPanel.querySelectorAll('.qty-val').forEach(val => {
                val.textContent = '1';
            });
        }

        // Prefill email
        const emailDisplay = document.getElementById('checkout-email-display');
        if (emailDisplay) {
            const username = localStorage.getItem('wave_dash_logged_in_user') || 'guest';
            emailDisplay.textContent = username.includes('@') ? username : `${username.toLowerCase()}@wavedash.com`;
        }

        // Bind event listeners
        this.bindCheckoutEvents();

        // Calculate and render totals
        this.updateCheckoutTotals();

        // Reset to default Card Tab or UPI for UPI-only packages
        const choicePaypal = document.getElementById('choice-paypal');
        const choiceUpi = document.getElementById('choice-upi');

        if (this.activeShopItemType && this.activeShopItemType.startsWith('tickets-') && parseInt(this.activeShopItemType.split('-')[1]) < 100) {
            const tabCard = document.getElementById('tab-pay-card');
            const tabPaypal = document.getElementById('tab-pay-paypal');
            if (tabCard) tabCard.style.display = 'none';
            if (tabPaypal) tabPaypal.style.display = 'none';
            if (choicePaypal) choicePaypal.style.display = 'none';
            if (choiceUpi) {
                choiceUpi.style.display = 'flex';
                choiceUpi.classList.add('active');
            }
            this.switchPaymentTab('upi');
        } else {
            const tabCard = document.getElementById('tab-pay-card');
            const tabPaypal = document.getElementById('tab-pay-paypal');
            if (tabCard) tabCard.style.display = '';
            if (tabPaypal) tabPaypal.style.display = '';
            if (choicePaypal) {
                choicePaypal.style.display = 'flex';
                choicePaypal.classList.add('active');
            }
            if (choiceUpi) {
                choiceUpi.style.display = 'none';
                choiceUpi.classList.remove('active');
            }
            this.switchPaymentTab('card');
        }
    }

    bindCheckoutEvents() {
        const checkoutPanel = document.getElementById('premium-checkout-panel');
        if (!checkoutPanel) return;

        // Discount code apply button
        const applyBtn = document.getElementById('btn-checkout-discount-apply');
        if (applyBtn) {
            applyBtn.onclick = (e) => {
                e.preventDefault();
                this.audio.playClickSound();
                const codeInput = document.getElementById('checkout-discount-input');
                const code = codeInput ? codeInput.value.trim().toUpperCase() : '';
                this.applyDiscount(code);
            };
        }

        // Upsell interaction buttons
        const upsellItems = checkoutPanel.querySelectorAll('.upsell-item');
        upsellItems.forEach(item => {
            const id = item.getAttribute('data-upsell-id');
            const addBtn = item.querySelector('.btn-upsell-add');
            const plusBtn = item.querySelector('.qty-plus');
            const minusBtn = item.querySelector('.qty-minus');
            const qtyVal = item.querySelector('.qty-val');

            if (addBtn) {
                addBtn.onclick = (e) => {
                    e.preventDefault();
                    this.audio.playClickSound();
                    const upsell = this.checkoutUpsells[id];
                    upsell.added = !upsell.added;
                    if (upsell.added) {
                        addBtn.textContent = 'Added ✓';
                        addBtn.classList.add('added');
                    } else {
                        addBtn.textContent = 'Add';
                        addBtn.classList.remove('added');
                    }
                    this.updateCheckoutTotals();
                };
            }

            if (plusBtn) {
                plusBtn.onclick = (e) => {
                    e.preventDefault();
                    this.audio.playClickSound();
                    const upsell = this.checkoutUpsells[id];
                    if (upsell.qty < 99) {
                        upsell.qty++;
                        if (qtyVal) qtyVal.textContent = upsell.qty;
                        this.updateCheckoutTotals();
                    }
                };
            }

            if (minusBtn) {
                minusBtn.onclick = (e) => {
                    e.preventDefault();
                    this.audio.playClickSound();
                    const upsell = this.checkoutUpsells[id];
                    if (upsell.qty > 1) {
                        upsell.qty--;
                        if (qtyVal) qtyVal.textContent = upsell.qty;
                        this.updateCheckoutTotals();
                    }
                };
            }
        });

        // Country selection change
        const countrySelect = document.getElementById('checkout-country');
        if (countrySelect) {
            countrySelect.value = this.getUserCountry() || 'IN';
            countrySelect.onchange = () => {
                this.audio.playClickSound();
                this.setUserCountry(countrySelect.value);
                this.updateCheckoutTotals();
            };
        }

        // Tab click bindings
        const tabCard = document.getElementById('tab-pay-card');
        const tabUpi = document.getElementById('tab-pay-upi');
        const tabPaypal = document.getElementById('tab-pay-paypal');
        
        if (tabCard) tabCard.onclick = (e) => { e.preventDefault(); this.switchPaymentTab('card'); };
        if (tabUpi) tabUpi.onclick = (e) => { e.preventDefault(); this.switchPaymentTab('upi'); };
        if (tabPaypal) tabPaypal.onclick = (e) => { e.preventDefault(); this.switchPaymentTab('paypal'); };
    }

    applyDiscount(code) {
        if (!code) return;
        const msg = document.getElementById('discount-message');
        
        if (code === 'FREEPASS' || code === 'DISCOUNT20' || code === 'WAVEDASH') {
            this.appliedDiscountCode = code;
            this.audio.playCoinSound();
            if (msg) {
                msg.textContent = `Code "${code}" applied successfully!`;
                msg.style.color = 'var(--neon-green)';
                msg.style.display = 'block';
            }
            this.ui.showAchievementToast('Discount Applied', `Promo code ${code} is active!`);
        } else {
            this.audio.playDeathSound();
            if (msg) {
                msg.textContent = 'Invalid discount code.';
                msg.style.color = 'var(--neon-pink)';
                msg.style.display = 'block';
            }
            this.ui.showAchievementToast('Invalid Code', 'The discount code you entered is invalid!');
        }
        this.updateCheckoutTotals();
    }

    updateCheckoutTotals() {
        const country = this.getUserCountry() || 'IN';
        
        // Base Price of main product
        let mainPriceUsd = 1.00;
        let mainProdName = "Wave Dash Premium";
        let mainProdDesc = "Upgrade to Premium Account";
        let mainProdIcon = "👑";

        if (this.activeCheckoutType === 'shop-item') {
            mainPriceUsd = parseFloat(this.activeShopItemPrice || 0.05);
            const itemType = this.activeShopItemType;
            if (itemType === 'tickets-10') {
                mainProdName = "10 Tickets Pack";
                mainProdDesc = "Add 10 tickets instantly via UPI";
                mainProdIcon = "🎟️";
            } else if (itemType === 'tickets-30') {
                mainProdName = "30 Tickets Pack";
                mainProdDesc = "Add 30 tickets instantly via UPI";
                mainProdIcon = "🎟️";
            } else if (itemType === 'tickets-50') {
                mainProdName = "50 Tickets Pack";
                mainProdDesc = "Add 50 tickets instantly via UPI";
                mainProdIcon = "🎟️";
            } else if (itemType.includes('revives')) {
                mainProdName = itemType.includes('10') ? "10x Revives Bundle" : "5x Revives Pack";
                mainProdDesc = "Continue running when you crash";
                mainProdIcon = "💖";
            } else if (itemType.includes('endless-mode')) {
                mainProdName = "Endless Mode Unlock";
                mainProdDesc = "Unlock the infinite running mode";
                mainProdIcon = "♾️";
            } else if (itemType.includes('game-history')) {
                mainProdName = "Game History Key";
                mainProdDesc = "Access stats and replay archives";
                mainProdIcon = "📜";
            } else if (itemType.includes('unlock-')) {
                mainProdName = "Instant Level Unlocker";
                mainProdDesc = "Skip level lock checks instantly";
                mainProdIcon = "🔓";
            } else {
                mainProdName = itemType.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                mainProdDesc = "Unlock this exclusive game shop item";
                mainProdIcon = "✨";
            }
        }

        // Render main item details
        const mainIconEl = document.getElementById('summary-product-icon');
        const mainNameEl = document.getElementById('summary-product-name');
        const mainDescEl = document.getElementById('summary-product-desc');
        const mainPriceEl = document.getElementById('summary-product-price');

        const mainPriceCurr = getCountryCurrency(country, mainPriceUsd);

        if (mainIconEl) mainIconEl.textContent = mainProdIcon;
        if (mainNameEl) mainNameEl.textContent = mainProdName;
        if (mainDescEl) mainDescEl.textContent = mainProdDesc;
        if (mainPriceEl) mainPriceEl.textContent = mainPriceCurr.text;

        // Calculate subtotal
        let subtotalUsd = mainPriceUsd;
        for (const id in this.checkoutUpsells) {
            const upsell = this.checkoutUpsells[id];
            if (upsell.added) {
                subtotalUsd += upsell.basePrice * upsell.qty;
            }
        }

        // Calculate discount
        let discountUsd = 0;
        if (this.appliedDiscountCode) {
            if (this.appliedDiscountCode === 'FREEPASS') {
                discountUsd = subtotalUsd;
            } else if (this.appliedDiscountCode === 'DISCOUNT20') {
                discountUsd = subtotalUsd * 0.20;
            } else if (this.appliedDiscountCode === 'WAVEDASH') {
                discountUsd = subtotalUsd * 0.50;
            }
        }

        // Calculate taxes (e.g. 5%)
        let taxesUsd = (subtotalUsd - discountUsd) * 0.05;
        if (taxesUsd < 0) taxesUsd = 0;

        // Final total
        const finalUsd = Math.max(0, subtotalUsd - discountUsd + taxesUsd);
        this.checkoutFinalUsdPrice = finalUsd;

        const subtotalCurr = getCountryCurrency(country, subtotalUsd);
        const taxesCurr = getCountryCurrency(country, taxesUsd);
        const finalCurr = getCountryCurrency(country, finalUsd);

        // Update displays
        const subtotalEl = document.getElementById('summary-subtotal');
        const taxesEl = document.getElementById('summary-taxes');
        const currencyEl = document.getElementById('summary-currency');
        const totalEl = document.getElementById('premium-price-tag');
        const payBtn = document.getElementById('btn-pay-submit');

        if (subtotalEl) subtotalEl.textContent = subtotalCurr.text;
        if (taxesEl) taxesEl.textContent = taxesCurr.text;
        if (currencyEl) currencyEl.textContent = finalCurr.symbol ? finalCurr.text.replace(/[\d.,\s]+/g, '').trim() || 'USD' : 'USD';
        if (totalEl) totalEl.textContent = finalCurr.text;

        if (payBtn) {
            payBtn.textContent = `PAY NOW (${finalCurr.text})`;
        }

        // Render added upsells in summary list
        const addedContainer = document.getElementById('summary-added-accessories');
        if (addedContainer) {
            addedContainer.innerHTML = '';
            for (const id in this.checkoutUpsells) {
                const upsell = this.checkoutUpsells[id];
                if (upsell.added) {
                    const upsellCurr = getCountryCurrency(country, upsell.basePrice * upsell.qty);
                    const itemHtml = `
                        <div class="summary-product-item" style="margin-top: 8px;">
                            <div class="summary-product-img-wrapper">
                                <div class="summary-product-badge">${upsell.qty}</div>
                                <div class="summary-product-icon">${upsell.icon}</div>
                            </div>
                            <div class="summary-product-details">
                                <div class="summary-product-name">${upsell.name}</div>
                                <div class="summary-product-desc">${upsell.desc}</div>
                            </div>
                            <div class="summary-product-price">${upsellCurr.text}</div>
                        </div>
                    `;
                    addedContainer.insertAdjacentHTML('beforeend', itemHtml);
                }
            }
        }

        // Update UPI QR Code image
        let qrAmount = Math.max(1, Math.round(finalUsd * 80)); // 1 USD = 80 INR
        if (this.activeShopItemType === 'tickets-10') qrAmount = 20;
        else if (this.activeShopItemType === 'tickets-30') qrAmount = 50;
        else if (this.activeShopItemType === 'tickets-50') qrAmount = 80;

        const upiId = window.UPI_PAYMENT_ID || 'wavedashgame-1@axl';
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`upi://pay?pa=${upiId}&pn=Saniya Goyal&am=${qrAmount}&cu=INR`)}`;
        const upiQrImg = document.getElementById('upi-qr-image');
        if (upiQrImg) upiQrImg.src = qrUrl;
    }

    switchPaymentTab(type) {
        if (this.audio) this.audio.playClickSound();
        const cardForm = document.getElementById('checkout-card-form');
        const upiForm = document.getElementById('checkout-upi-form');
        const paypalForm = document.getElementById('checkout-paypal-form');

        const tabCard = document.getElementById('tab-pay-card');
        const tabUpi = document.getElementById('tab-pay-upi');
        const tabPaypal = document.getElementById('tab-pay-paypal');

        const choicePaypal = document.getElementById('choice-paypal');
        const choiceUpi = document.getElementById('choice-upi');

        this.activePaymentTab = type;

        // Reset highlights via classes
        [tabCard, tabUpi, tabPaypal].forEach(tab => {
            if (tab) {
                tab.classList.remove('active');
            }
        });

        if (choicePaypal) {
            choicePaypal.classList.remove('active');
            const check = choicePaypal.querySelector('.choice-check');
            if (check) check.style.opacity = '0';
        }
        if (choiceUpi) {
            choiceUpi.classList.remove('active');
            const check = choiceUpi.querySelector('.choice-check');
            if (check) check.style.opacity = '0';
        }

        // Hide all forms
        if (cardForm) cardForm.style.display = 'none';
        if (upiForm) upiForm.style.display = 'none';
        if (paypalForm) paypalForm.style.display = 'none';

        // Show/hide forms & apply active class styling
        if (type === 'card') {
            if (cardForm) cardForm.style.display = 'flex';
            if (tabCard) tabCard.classList.add('active');
            if (choicePaypal) {
                choicePaypal.classList.add('active');
                const check = choicePaypal.querySelector('.choice-check');
                if (check) check.style.opacity = '1';
            }
        } else if (type === 'upi') {
            if (upiForm) upiForm.style.display = 'flex';
            if (tabUpi) tabUpi.classList.add('active');
            if (choiceUpi) {
                choiceUpi.classList.add('active');
                const check = choiceUpi.querySelector('.choice-check');
                if (check) check.style.opacity = '1';
            }
        } else if (type === 'paypal') {
            if (paypalForm) paypalForm.style.display = 'flex';
            if (tabPaypal) tabPaypal.classList.add('active');
            if (choicePaypal) {
                choicePaypal.classList.add('active');
                const check = choicePaypal.querySelector('.choice-check');
                if (check) check.style.opacity = '1';
            }
            this.initPayPalButtons();
        }

        // Hide PAY NOW button when PayPal tab is active (PayPal buttons handle payment natively)
        // For UPI tab, rename button to reflect manual UTR submission
        const payNowBtn = document.getElementById('btn-pay-submit');
        if (payNowBtn) {
            if (type === 'paypal') {
                payNowBtn.style.display = 'none';
            } else {
                payNowBtn.style.display = '';
                if (type === 'upi') {
                    payNowBtn.textContent = 'I HAVE PAID (SUBMIT UTR)';
                } else {
                    const finalCurr = getCountryCurrency(this.getUserCountry() || 'IN', this.checkoutFinalUsdPrice || 1.00);
                    payNowBtn.textContent = `PAY NOW (${finalCurr.text})`;
                }
            }
        }
    }

    showPremiumPitch() {
        this.closePremiumModal();
    }

    closePremiumModal() {
        if (this.audio) this.audio.playClickSound();
        this.gameState = 'menu';
        this.ui.showScreen('main');
    }

    // -------------------------------------------------------------
    // PAYPAL SMART BUTTONS INTEGRATION
    // -------------------------------------------------------------

    initPayPalButtons() {
        const container = document.getElementById('paypal-button-container');
        if (!container) return;

        // Clear any previously rendered PayPal buttons
        container.innerHTML = '';

        // Check if PayPal SDK loaded
        if (typeof paypal === 'undefined') {
            container.innerHTML = '<p style="color: var(--neon-pink); font-size: 12px; text-align: center; padding: 15px;">⚠️ PayPal SDK failed to load. Please check your internet connection and refresh.</p>';
            console.error('PayPal SDK not loaded. Make sure the script tag has a valid client-id.');
            return;
        }

        const self = this;
        const finalAmount = (this.checkoutFinalUsdPrice || 1.00).toFixed(2);

        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'paypal',
                height: 40
            },

            onInit: function(data, actions) {
                // Disable the PayPal buttons by default
                actions.disable();

                // Listen for changes to the checkbox
                const checkbox = document.getElementById('checkout-agree-terms');
                if (checkbox) {
                    checkbox.addEventListener('change', function(event) {
                        if (event.target.checked) {
                            actions.enable();
                        } else {
                            actions.disable();
                        }
                    });
                    // Enable initially if already checked
                    if (checkbox.checked) {
                        actions.enable();
                    }
                }
            },

            onClick: function() {
                const checkbox = document.getElementById('checkout-agree-terms');
                if (checkbox && !checkbox.checked) {
                    if (self.audio) self.audio.playDeathSound();
                    if (self.ui) self.ui.showAchievementToast('Accept Terms', 'You must agree to the Terms & Conditions before paying.');
                }
            },

            // Create the PayPal order with the calculated amount
            createOrder: function(data, actions) {
                const currentAmount = (self.checkoutFinalUsdPrice || 1.00).toFixed(2);
                
                // Build item description
                let description = 'Wave Dash Premium';
                if (self.activeCheckoutType === 'shop-item') {
                    description = 'Wave Dash Shop Item';
                }

                return actions.order.create({
                    purchase_units: [{
                        description: description,
                        amount: {
                            currency_code: 'USD',
                            value: currentAmount
                        }
                    }]
                });
            },

            // Payment approved — capture the funds and grant items
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(orderData) {
                    // Get real PayPal transaction ID
                    const transactionId = orderData.purchase_units[0].payments.captures[0].id;
                    console.log('[PayPal] Payment successful! Transaction ID:', transactionId);
                    console.log('[PayPal] Full order data:', orderData);

                    // Grant in-game items using the real transaction ID
                    self.audio.playCoinSound();
                    self.executeSuccessfulPaymentEnrollment('PAYPAL_' + transactionId);
                });
            },

            // Payment cancelled by user
            onCancel: function(data) {
                console.log('[PayPal] Payment cancelled by user.');
                if (self.audio) self.audio.playDeathSound();
                if (self.ui) self.ui.showAchievementToast('Payment Cancelled', 'You cancelled the PayPal payment.');
            },

            // Error during payment
            onError: function(err) {
                console.error('[PayPal] Payment error:', err);
                if (self.audio) self.audio.playDeathSound();
                if (self.ui) self.ui.showAchievementToast('Payment Error', 'Something went wrong with PayPal. Please try again.');
            }
        }).render('#paypal-button-container').catch(function(err) {
            console.error('[PayPal] Button render error:', err);
            container.innerHTML = '<p style="color: var(--neon-pink); font-size: 12px; text-align: center; padding: 15px;">⚠️ Could not load PayPal buttons. Please refresh the page.</p>';
        });
    }

    submitPremiumPayment() {
        const agreeCheckbox = document.getElementById('checkout-agree-terms');
        if (agreeCheckbox && !agreeCheckbox.checked) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Accept Terms', 'You must agree to the Terms & Conditions before paying.');
            return;
        }

        const method = this.activePaymentTab || 'card';

        // PayPal handles its own payment flow via smart buttons — do nothing here
        if (method === 'paypal') {
            this.ui.showAchievementToast('Use PayPal Button', 'Please click the PayPal button above to complete your payment.');
            return;
        }

        // Manual UPI transaction verification submission
        if (method === 'upi') {
            const utrInput = document.getElementById('checkout-upi-utr');
            const utr = utrInput ? utrInput.value.trim() : '';
            if (utr.length !== 12 || isNaN(utr)) {
                this.audio.playDeathSound();
                this.ui.showAchievementToast('Invalid ID', 'Please enter a valid 12-digit UPI UTR/Ref number!');
                return;
            }

            const submitBtn = document.getElementById('btn-pay-submit');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.7';
                submitBtn.textContent = 'Submitting...';
            }

            this.audio.playPortalSound();

            // Log the pending transaction in Firebase for compliance/manual checking
            if (window.FIREBASE_DB_URL) {
                const cleanURL = window.FIREBASE_DB_URL.endsWith('/') ? window.FIREBASE_DB_URL.slice(0, -1) : window.FIREBASE_DB_URL;
                const username = localStorage.getItem('wave_dash_logged_in_user') || 'guest';
                let qrAmount = 0;
                if (this.activeShopItemType === 'tickets-10') qrAmount = 20;
                else if (this.activeShopItemType === 'tickets-30') qrAmount = 50;
                else if (this.activeShopItemType === 'tickets-50') qrAmount = 80;
                else if (this.checkoutFinalUsdPrice) qrAmount = Math.round(this.checkoutFinalUsdPrice * 80);

                const payload = {
                    username: username,
                    utr: utr,
                    itemType: this.activeShopItemType || 'premium',
                    amount: qrAmount,
                    timestamp: new Date().toISOString(),
                    status: 'pending'
                };

                fetch(`${cleanURL}/pending_upi/${utr}.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                }).catch(err => console.error("Firebase log error:", err));
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.textContent = 'I HAVE PAID (SUBMIT UTR)';
                }

                // Hide checkout panel and show success details page
                const checkoutPanel = document.getElementById('premium-checkout-panel');
                const successPanel = document.getElementById('premium-success-panel');
                if (checkoutPanel) checkoutPanel.style.display = 'none';
                if (successPanel) {
                    successPanel.style.display = 'flex';
                    const successTitle = successPanel.querySelector('h2');
                    if (successTitle) successTitle.textContent = 'TRANSACTION SUBMITTED!';
                    
                    const successDesc = document.getElementById('checkout-success-desc');
                    if (successDesc) {
                        successDesc.innerHTML = `UPI Transaction UTR: <strong>${utr}</strong> submitted.<br>Our compliance team is verifying credit to bank.<br>Items will unlock automatically in 1-2 hours.<br><br>Thank you for your support!`;
                    }
                }
                this.audio.playCoinSound();
            }, 1500);
            return;
        }

        if (method === 'card') {
            const cardNum = document.getElementById('checkout-card-number');
            const cardExpiry = document.getElementById('checkout-card-expiry');
            const cardCvv = document.getElementById('checkout-card-cvv');
            
            if (!cardNum || !cardNum.value.trim() || !cardExpiry || !cardExpiry.value.trim() || !cardCvv || !cardCvv.value.trim()) {
                this.audio.playDeathSound();
                this.ui.showAchievementToast('Payment Validation', 'Please fill out all Credit Card fields!');
                return;
            }
        }

        const submitBtn = document.getElementById('btn-pay-submit');
        const originalText = submitBtn ? submitBtn.textContent : 'PAY NOW';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.textContent = 'Processing Securely...';
        }

        this.audio.playPortalSound();

        // Simulate secure shop payment clearance
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.textContent = originalText;
            }
            this.audio.playCoinSound();
            const mockRef = 'SHOP_' + method.toUpperCase() + '_' + Math.random().toString(36).substr(2, 9).toUpperCase();
            this.executeSuccessfulPaymentEnrollment(mockRef);
        }, 1500);
    }

    executeSuccessfulPaymentEnrollment(paymentId = "MOCK_REF") {
        const pitchEl = document.getElementById('premium-pitch-panel');
        if (pitchEl) pitchEl.style.display = 'none';
        document.getElementById('premium-checkout-panel').style.display = 'none';
        document.getElementById('premium-success-panel').style.display = 'flex';
        
        // Play success chime
        this.audio.playCoinSound();

        // Enroll any purchased upsell items
        let upsellsCreditMsg = "";
        if (this.checkoutUpsells) {
            for (const id in this.checkoutUpsells) {
                const upsell = this.checkoutUpsells[id];
                if (upsell.added) {
                    if (id === 'booster') {
                        localStorage.setItem('wave_dash_double_coins_booster', 'true');
                        upsellsCreditMsg += " • Double Coins Booster Active!";
                    } else if (id === 'revives') {
                        const extraRevives = upsell.qty * 5;
                        const currentRevives = parseInt(localStorage.getItem('wave_dash_revive_stock') || '0');
                        localStorage.setItem('wave_dash_revive_stock', currentRevives + extraRevives);
                        upsellsCreditMsg += ` • Added +${extraRevives} Revives!`;
                    } else if (id === 'goldenpass') {
                        localStorage.setItem('wave_dash_golden_pass_unlocked', 'true');
                        localStorage.setItem('wave_dash_level_force_unlocked_all', 'true');
                        upsellsCreditMsg += " • Golden Pass Activated!";
                    }
                }
            }
        }

        // Perform item enrollment based on checkout type
        if (this.activeCheckoutType === 'shop-item') {
            const item = this.activeShopItemType;
            let descText = "";

            if (item === 'coins-100') {
                const current = this.getUserCoins();
                this.setUserCoins(current + 100);
                descText = "Added 100 neon coins to your balance!";
            } else if (item === 'coins-1000') {
                const current = this.getUserCoins();
                this.setUserCoins(current + 1000);
                descText = "Added 1000 neon coins (67% Bulk savings!) to your balance!";
            } else if (item === 'unlock-any') {
                const targetLvl = parseInt(prompt("Enter level index (1 to 500) you want to unlock:"));
                if (targetLvl && targetLvl > 0 && targetLvl <= 500) {
                    localStorage.setItem(`wave_dash_level_force_unlocked_${targetLvl}`, 'true');
                    descText = `Level ${targetLvl} has been successfully force unlocked!`;
                } else {
                    descText = "Level unlock aborted. Please request refund or try again.";
                }
            } else if (item === 'unlock-10') {
                let unlockedCount = 0;
                let targetLvl = 1;
                while (unlockedCount < 10 && targetLvl <= 500) {
                    const isUnlockedAlready = targetLvl === 1 || 
                        localStorage.getItem(`wave_dash_level_force_unlocked_${targetLvl}`) === 'true' ||
                        (parseInt(localStorage.getItem(`neon_dash_best_level_${targetLvl - 1}`)) || 0) >= 100;
                    
                    if (!isUnlockedAlready) {
                        localStorage.setItem(`wave_dash_level_force_unlocked_${targetLvl}`, 'true');
                        unlockedCount++;
                    }
                    targetLvl++;
                }
                descText = `Successfully unlocked ${unlockedCount} locked progression levels!`;
            } else if (item === 'skip-1') {
                const currentSkips = parseInt(localStorage.getItem('wave_dash_skip_stock') || '0');
                localStorage.setItem('wave_dash_skip_stock', currentSkips + 1);
                descText = `Added 1 Level Skip to your account! (Total: ${currentSkips + 1}). Use it during any level or pause screen to pass instantly!`;
            } else if (item === 'skip-10') {
                const currentSkips = parseInt(localStorage.getItem('wave_dash_skip_stock') || '0');
                localStorage.setItem('wave_dash_skip_stock', currentSkips + 10);
                descText = `Added 10 Level Skips to your account! (Total: ${currentSkips + 10}). You saved $0.20 (40% OFF!) vs buying 10 single skips!`;
            } else if (item === 'revives-5') {
                const currentRevives = parseInt(localStorage.getItem('wave_dash_revive_stock') || '0');
                localStorage.setItem('wave_dash_revive_stock', currentRevives + 5);
                descText = `Added 5 Revives to your account! (Total: ${currentRevives + 5}) Each revive spawns you 5 sec before crash.`;
            } else if (item === 'revives-10') {
                const currentRevives = parseInt(localStorage.getItem('wave_dash_revive_stock') || '0');
                localStorage.setItem('wave_dash_revive_stock', currentRevives + 10);
                descText = `Added 10 Revives to your account! (Total: ${currentRevives + 10}) You saved 25% vs buying two 5-packs!`;
            } else if (item === 'custom-song') {
                localStorage.setItem('wave_dash_shop_custom_song', 'true');
                descText = "Custom Song Upload is now permanently unlocked! Go to Settings to upload your own tracks.";
            } else if (item === 'custom-bg') {
                localStorage.setItem('wave_dash_shop_custom_bg', 'true');
                descText = "Custom Background Photo is now permanently unlocked! Go to Customizations to upload wallpaper images.";
            } else if (item === 'custom-glider') {
                localStorage.setItem('wave_dash_shop_custom_glider', 'true');
                descText = "Custom Glider Ship Skin is now permanently unlocked! Go to Customizations to upload custom ship designs.";
            } else if (item === 'custom-skin-color') {
                localStorage.setItem('wave_dash_shop_custom_skin_color', 'true');
                descText = "Custom Skin Colour is now permanently unlocked! You can now equip any custom hex colors in Customizations.";
            } else if (item === 'endless-mode') {
                localStorage.setItem('wave_dash_endless_unlocked', 'true');
                descText = "Endless Practice Mode is now permanently unlocked! Access it anytime from the Main Menu!";
            } else if (item === 'coins-10000-secret') {
                const currentCoins = this.getUserCoins();
                this.setUserCoins(currentCoins + 10000);
                descText = "Claimed Master Reward Offer! Added +10,000 Neon Coins to your account!";
            } else if (item.startsWith('endless-map-')) {
                const mapNum = item.split('-')[2];
                localStorage.setItem(`wave_dash_endless_map_unlocked_${mapNum}`, 'true');
                descText = `Endless Map ${mapNum} is now permanently unlocked! Select it from the Endless settings panel.`;
                this.updateEndlessMapsShopVisibility();
            } else if (item === 'endless-maps-bundle') {
                for (let i = 6; i <= 10; i++) {
                    localStorage.setItem(`wave_dash_endless_map_unlocked_${i}`, 'true');
                }
                localStorage.setItem('wave_dash_endless_map_unlocked_bundle', 'true');
                descText = "All 5 locked Endless Maps (Map 6 to 10) are now permanently unlocked!";
                this.updateEndlessMapsShopVisibility();
            } else if (item === 'game-history') {
                localStorage.setItem('wave_dash_shop_game_history', 'true');
                descText = "Game Runs History & Replays are now permanently unlocked! View runs and replays directly from the Main Menu.";
            } else if (item === 'coupon-code') {
                const uniqueCode = 'FREEPASS-' + Math.random().toString(36).substr(2, 6).toUpperCase();
                let activeCoupons = [];
                try {
                    activeCoupons = JSON.parse(localStorage.getItem('wave_dash_active_coupons') || '[]');
                } catch (err) {}
                activeCoupons.push(uniqueCode);
                localStorage.setItem('wave_dash_active_coupons', JSON.stringify(activeCoupons));
                window.lastGeneratedCouponCode = uniqueCode;
                descText = `Your level unlock coupon has been generated! Copy and use this code inside the Level Unlock modal: ${uniqueCode}`;
            }

            // Update success panel UI details
            const successTitle = document.querySelector('#premium-success-panel h2');
            const successMsg = document.querySelector('#premium-success-panel p');
            const couponBox = document.getElementById('coupon-display-box');
            if (couponBox) {
                if (item === 'coupon-code' && window.lastGeneratedCouponCode) {
                    couponBox.textContent = `CODE: ${window.lastGeneratedCouponCode}`;
                    couponBox.style.display = 'block';
                } else {
                    couponBox.style.display = 'none';
                }
            }
            if (successTitle) successTitle.textContent = "PURCHASE SUCCESSFUL!";
            if (successMsg) successMsg.textContent = `Thank you for your purchase! ${descText}${upsellsCreditMsg}`;
            
            // Refresh locks list
            this.buildLevelSelectUI();
            this.syncUserToCloud(); // Sync new items (revives, level bypasses) to cloud!
        } else {
            // PREMIUM check
            const tier = this.selectedPremiumTier || 'silver';
            this.setPremiumTier(tier);
            
            let features = "No Ads + Custom Background & Glider features are now unlocked!";
            if (tier === 'gold') {
                features = "No Ads + Silver features + Custom Skin Colors are now unlocked!";
            } else if (tier === 'diamond') {
                // Gift 10 Free Level Skips
                let unlockedCount = 0;
                let targetLvl = 1;
                while (unlockedCount < 10 && targetLvl <= 500) {
                    const isUnlockedAlready = targetLvl === 1 || 
                        localStorage.getItem(`wave_dash_level_force_unlocked_${targetLvl}`) === 'true' ||
                        (parseInt(localStorage.getItem(`neon_dash_best_level_${targetLvl - 1}`)) || 0) >= 100;
                    
                    if (!isUnlockedAlready) {
                        localStorage.setItem(`wave_dash_level_force_unlocked_${targetLvl}`, 'true');
                        unlockedCount++;
                    }
                    targetLvl++;
                }
                
                // Gift 10 Revives
                const currentRevives = parseInt(localStorage.getItem('wave_dash_revive_stock') || '0');
                localStorage.setItem('wave_dash_revive_stock', currentRevives + 10);
                
                features = "No Ads + Gold features + Runs History + 10 Level Skips & 10 Revives added to your inventory!";
                
                // Force sync the awarded items to the cloud database
                this.syncUserToCloud();
                this.buildLevelSelectUI();
            }
            
            const successTitle = document.querySelector('#premium-success-panel h2');
            const successMsg = document.querySelector('#premium-success-panel p');
            if (successTitle) successTitle.textContent = "MEMBERSHIP ACTIVE!";
            if (successMsg) successMsg.textContent = `Thank you for your support! ${features} Enjoy your premium status!${upsellsCreditMsg}`;

            this.renderHistoryUI();
        }
    }

    getPremiumTier() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user && user.premiumTier) {
                return user.premiumTier;
            }
        }
        return localStorage.getItem('wave_dash_guest_premium_tier') || null;
    }

    setPremiumTier(tier) {
        localStorage.setItem('neon_dash_premium', tier ? 'true' : 'false');
        if (tier) {
            localStorage.setItem('wave_dash_premium_tier', tier);
        } else {
            localStorage.removeItem('wave_dash_premium_tier');
        }
        
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user) {
                user.isPremium = !!tier;
                user.premiumTier = tier;
                users[username] = user;
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
                return;
            }
        }
        if (tier) {
            localStorage.setItem('wave_dash_guest_premium_tier', tier);
        } else {
            localStorage.removeItem('wave_dash_guest_premium_tier');
        }
    }

    async syncUserToCloud() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (!username || !window.FIREBASE_DB_URL) return;

        try {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (!user) return;

            // Pull all 500 levels progress from localStorage
            const levelProgress = {};
            for (let i = 1; i <= 500; i++) {
                const val = localStorage.getItem(`neon_dash_best_level_${i}`);
                if (val) {
                    levelProgress[i] = parseInt(val);
                }
            }

            // Check map unlocks
            const unlockedMaps = [];
            for (let m = 6; m <= 10; m++) {
                if (localStorage.getItem(`wave_dash_endless_map_unlocked_${m}`) === 'true') {
                    unlockedMaps.push(m);
                }
            }

            const profile = {
                username: user.username,
                password: user.password,
                isPremium: user.isPremium || false,
                premiumTier: user.premiumTier || null,
                coins: user.coins || 0,
                game_coins: user.game_coins || 0,
                lastActive: new Date().toISOString(),
                reviveStock: parseInt(localStorage.getItem('wave_dash_revive_stock') || '0'),
                skipStock: parseInt(localStorage.getItem('wave_dash_skip_stock') || '0'),
                customSongUnlocked: localStorage.getItem('wave_dash_shop_custom_song') === 'true',
                customBgUnlocked: localStorage.getItem('wave_dash_shop_custom_bg') === 'true',
                customGliderUnlocked: localStorage.getItem('wave_dash_shop_custom_glider') === 'true',
                endlessUnlocked: localStorage.getItem('wave_dash_endless_unlocked') === 'true',
                gameHistoryUnlocked: localStorage.getItem('wave_dash_shop_game_history') === 'true',
                unlockedMaps: unlockedMaps,
                levelProgress: levelProgress
            };

            const cleanURL = window.FIREBASE_DB_URL.endsWith('/') ? window.FIREBASE_DB_URL.slice(0, -1) : window.FIREBASE_DB_URL;
            await fetch(`${cleanURL}/users/${username.toLowerCase()}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profile)
            });
        } catch (err) {
            console.error("Cloud profile synchronization failed:", err);
        }
    }

    hasSilver() {
        const tier = this.getPremiumTier();
        return tier === 'silver' || tier === 'gold' || tier === 'diamond';
    }

    hasGold() {
        const tier = this.getPremiumTier();
        return tier === 'gold' || tier === 'diamond';
    }

    hasDiamond() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username && username.toLowerCase().includes('sian')) return true;

        const tier = this.getPremiumTier();
        return tier === 'diamond';
    }

    hasGameHistoryUnlocked() {
        return this.hasDiamond() || localStorage.getItem('wave_dash_shop_game_history') === 'true';
    }

    isCurrentUserGuest() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (!username) return true;
        if (username.toLowerCase().startsWith('guest')) return true;
        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const user = users[username];
        return !user || user.isGuest === true;
    }

    getUserCoins() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user) {
                return parseInt(user.game_coins) || 0;
            }
        }
        return parseInt(localStorage.getItem('wave_dash_guest_game_coins')) || 0;
    }

    setUserCoins(coins) {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user) {
                user.game_coins = coins;
                users[username] = user;
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
                this.updateCoinsDisplay();
                this.syncUserToCloud();
                return;
            }
        }
        localStorage.setItem('wave_dash_guest_game_coins', coins);
        this.updateCoinsDisplay();
    }

    getUserTickets() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user) {
                return parseInt(user.coins) || 0;
            }
        }
        return parseInt(localStorage.getItem('wave_dash_guest_coins')) || 0;
    }

    setUserTickets(tickets) {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user) {
                user.coins = tickets;
                users[username] = user;
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
                this.updateCoinsDisplay();
                this.syncUserToCloud();
                return;
            }
        }
        localStorage.setItem('wave_dash_guest_coins', tickets);
        this.updateCoinsDisplay();
    }

    handleCoinExchange(coinCost, ticketReward) {
        this.audio.playClickSound();
        const coins = this.getUserCoins();
        if (coins >= coinCost) {
            this.setUserCoins(coins - coinCost);
            const currentTickets = this.getUserTickets();
            this.setUserTickets(currentTickets + ticketReward);
            this.syncUserToCloud();
            this.ui.showAchievementToast('Exchange Successful! 🎟️', `Exchanged ${coinCost} Coins for ${ticketReward} Ticket(s)!`);
        } else {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Insufficient Coins', `You need ${coinCost} 🪙 to exchange. (Current: ${coins})`);
        }
    }

    openUnlockLevelModal(defaultLvl) {
        const modal = document.getElementById('level-unlock-modal');
        const input = document.getElementById('unlock-level-input');
        const coinsEl = document.getElementById('unlock-modal-coins');
        const descEl = document.getElementById('unlock-modal-desc');
        const closeBtn = document.getElementById('btn-close-unlock-modal');
        const coinBtn = document.getElementById('btn-unlock-use-coins');
        const cashBtn = document.getElementById('btn-unlock-use-cash');
        
        // Reset coupon fields
        this.couponDiscount = 0;
        this.appliedCouponCode = null;
        const couponInput = document.getElementById('unlock-coupon-input');
        const couponStatus = document.getElementById('coupon-status-msg');
        const applyCouponBtn = document.getElementById('btn-apply-coupon');
        if (couponInput) couponInput.value = '';
        if (couponStatus) { couponStatus.textContent = ''; couponStatus.style.color = ''; }

        const targetLvl = defaultLvl || 2;
        if (input) input.value = targetLvl;
        if (coinsEl) coinsEl.textContent = this.getUserCoins();
        if (descEl) descEl.textContent = `Select any level index (1 to 500) and unlock it permanently!`;

        if (coinBtn) coinBtn.textContent = `🪙 UNLOCK FOR 20 COINS (BALANCE: ${this.getUserCoins()})`;

        // Calculate and format local currency price for $0.05
        const country = this.getUserCountry() || 'US';
        const curr = getCountryCurrency(country, 0.05);
        if (cashBtn) cashBtn.textContent = `💳 UNLOCK INSTANTLY FOR ${curr.text}`;
        
        if (modal) {
            modal.style.display = 'flex';
        }

        if (closeBtn) {
            closeBtn.onclick = (e) => {
                if (e) e.preventDefault();
                this.audio.playClickSound();
                this.closeUnlockLevelModal();
            };
        }

        if (applyCouponBtn) {
            applyCouponBtn.onclick = (e) => {
                if (e) e.preventDefault();
                const code = couponInput ? couponInput.value.trim().toUpperCase() : '';
                if (!code) return;

                let activeCoupons = [];
                try {
                    activeCoupons = JSON.parse(localStorage.getItem('wave_dash_active_coupons') || '[]');
                } catch (err) {}

                if (code === 'FREEPASS' || code === 'FREE99' || activeCoupons.includes(code)) {
                    this.couponDiscount = 100;
                    this.appliedCouponCode = code;
                    this.audio.playCoinSound();
                    if (couponStatus) {
                        couponStatus.textContent = `Coupon "${code}" applied! Free unlock enabled.`;
                        couponStatus.style.color = 'var(--neon-green)';
                    }
                    if (coinBtn) coinBtn.textContent = `🪙 UNLOCK FOR FREE (COUPON APPLIED)`;
                } else if (code === 'WAVEDASH50') {
                    this.couponDiscount = 50;
                    this.audio.playCoinSound();
                    if (couponStatus) {
                        couponStatus.textContent = `Coupon "WAVEDASH50" applied! 50% discount.`;
                        couponStatus.style.color = 'var(--neon-green)';
                    }
                    if (coinBtn) coinBtn.textContent = `🪙 UNLOCK FOR 10 COINS (COUPON APPLIED)`;
                } else if (code === 'SIAN10K') {
                    this.audio.playPortalSound();
                    const username = localStorage.getItem('wave_dash_logged_in_user') || 'Guest';
                    const currentCoins = this.getUserCoins();
                    this.setUserCoins(currentCoins + 10000);
                    if (coinsEl) coinsEl.textContent = this.getUserCoins();
                    if (couponStatus) {
                        couponStatus.textContent = `10,000 Coins added to your balance!`;
                        couponStatus.style.color = 'var(--neon-green)';
                    }
                    this.checkPremiumStatus();
                } else if (code === 'DIAMOND') {
                    this.audio.playPortalSound();
                    for (let i = 1; i <= 510; i++) {
                        localStorage.setItem(`wave_dash_level_force_unlocked_${i}`, 'true');
                    }
                    const username = localStorage.getItem('wave_dash_logged_in_user') || 'Guest';
                    localStorage.setItem(`wave_dash_diamond_${username}`, 'true');
                    localStorage.setItem('neon_dash_premium', 'true');
                    if (couponStatus) {
                        couponStatus.textContent = `Diamond Golden Pass Activated! All levels unlocked!`;
                        couponStatus.style.color = 'var(--neon-green)';
                    }
                    this.checkPremiumStatus();
                    this.buildLevelSelectUI();
                } else {
                    this.audio.playDeathSound();
                    if (couponStatus) {
                        couponStatus.textContent = `Invalid coupon code!`;
                        couponStatus.style.color = 'var(--neon-pink)';
                    }
                }
            };
        }

        if (coinBtn) {
            coinBtn.onclick = (e) => {
                if (e) e.preventDefault();
                this.audio.playClickSound();
                this.handleUnlockLevelWithCoins();
            };
        }

        if (cashBtn) {
            cashBtn.onclick = (e) => {
                if (e) e.preventDefault();
                this.audio.playClickSound();
                this.closeUnlockLevelModal();
                this.activeCheckoutType = 'shop-item';
                this.activeShopItemPrice = '0.05';
                this.showPremiumCheckout();
            };
        }
    }

    closeUnlockLevelModal() {
        const modal = document.getElementById('level-unlock-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    handleUnlockLevelWithCoins() {
        const input = document.getElementById('unlock-level-input');
        const targetLvl = parseInt(input ? input.value : '2');

        if (!targetLvl || targetLvl < 1 || targetLvl > 500) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Unlock Error', 'Enter a valid level index (1 - 500)!');
            return;
        }

        const coins = this.getUserCoins();
        let cost = 20;
        if (this.couponDiscount === 100) {
            cost = 0;
        } else if (this.couponDiscount === 50) {
            cost = 10;
        }

        if (coins < cost) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Not Enough Coins', `You need ${cost} 🪙 to unlock Level ${targetLvl}! (Yours: ${coins})`);
            this.closeUnlockLevelModal();
            setTimeout(() => {
                this.ui.showScreen('coinShop');
            }, 500);
            return;
        }

        // Deduct coins
        this.setUserCoins(coins - cost);

        // Consume applied coupon code if any
        if (this.appliedCouponCode) {
            let activeCoupons = [];
            try {
                activeCoupons = JSON.parse(localStorage.getItem('wave_dash_active_coupons') || '[]');
            } catch (err) {}
            const idx = activeCoupons.indexOf(this.appliedCouponCode);
            if (idx > -1) {
                activeCoupons.splice(idx, 1);
                localStorage.setItem('wave_dash_active_coupons', JSON.stringify(activeCoupons));
            }
            this.appliedCouponCode = null;
        }

        // Force unlock target level
        localStorage.setItem(`wave_dash_level_force_unlocked_${targetLvl}`, 'true');

        // Save to current user profile
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[username];
            if (user) {
                if (!user.forceUnlockedLevels) user.forceUnlockedLevels = {};
                user.forceUnlockedLevels[targetLvl] = true;
                users[username] = user;
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
            }
        }

        this.closeUnlockLevelModal();
        this.audio.playCoinSound();
        this.ui.showAchievementToast('Level Unlocked!', `Level ${targetLvl} is now unlocked! 🚀`);

        // Refresh UI & level grid
        this.buildLevelSelectUI();
        this.syncUserToCloud();
    }

    clearActiveLevelProgressInStorage() {
        // Clear active level stats so profile switching doesn't leak stats
        for (let k = 1; k <= 500; k++) {
            localStorage.removeItem(`neon_dash_best_level_${k}`);
            localStorage.removeItem(`wave_dash_level_force_unlocked_${k}`);
            localStorage.removeItem(`neon_dash_skipped_level_${k}`);
            localStorage.removeItem(`wave_dash_max_coins_lvl_${k}`);
        }
    }

    loadUserProfileLevelProgress() {
        // Clear leftover local storage level keys
        this.clearActiveLevelProgressInStorage();

        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (!username) return;

        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const user = users[username];
        if (!user) return;

        // Restore best level progress
        if (user.levelProgress) {
            Object.keys(user.levelProgress).forEach(lvlNum => {
                localStorage.setItem(`neon_dash_best_level_${lvlNum}`, user.levelProgress[lvlNum]);
            });
        }
        // Restore force unlocked levels
        if (user.forceUnlockedLevels) {
            Object.keys(user.forceUnlockedLevels).forEach(lvlNum => {
                if (user.forceUnlockedLevels[lvlNum]) {
                    localStorage.setItem(`wave_dash_level_force_unlocked_${lvlNum}`, 'true');
                }
            });
        }
        // Restore skipped levels
        if (user.skippedLevels) {
            Object.keys(user.skippedLevels).forEach(lvlNum => {
                if (user.skippedLevels[lvlNum]) {
                    localStorage.setItem(`neon_dash_skipped_level_${lvlNum}`, 'true');
                }
            });
        }
    }

    updateCoinsDisplay() {
        const tickets = this.getUserTickets();
        const coins = this.getUserCoins();

        // Ticket Balances
        const shopTicketEl = document.getElementById('shop-coin-balance');
        if (shopTicketEl) shopTicketEl.textContent = tickets;
        const spendTicketEl = document.getElementById('spend-ticket-balance');
        if (spendTicketEl) spendTicketEl.textContent = tickets;
        const globalTicketEl = document.getElementById('global-ticket-balance');
        if (globalTicketEl) globalTicketEl.textContent = tickets;

        // Coin Balances
        const globalCoinEl = document.getElementById('global-coin-balance');
        if (globalCoinEl) globalCoinEl.textContent = coins;
    }

    updateEndlessMapsShopVisibility() {
        const endlessMapsShopSection = document.getElementById('endless-maps-shop-section');
        if (!endlessMapsShopSection) return;

        const isEndlessUnlocked = localStorage.getItem('wave_dash_endless_unlocked') === 'true' || localStorage.getItem('wave_dash_lvl500_crossed') === 'true';
        if (!isEndlessUnlocked) {
            endlessMapsShopSection.style.display = 'none';
            return;
        }

        // Show maps section
        endlessMapsShopSection.style.display = 'flex';

        // Check each map (6 to 10)
        let allUnlocked = true;
        for (let i = 6; i <= 10; i++) {
            const isMapUnlocked = localStorage.getItem(`wave_dash_endless_map_unlocked_${i}`) === 'true' ||
                                  localStorage.getItem('wave_dash_endless_map_unlocked_bundle') === 'true';
            const mapContainer = document.getElementById(`shop-map-${i}-container`);
            if (mapContainer) {
                mapContainer.style.display = isMapUnlocked ? 'none' : 'flex';
            }
            if (!isMapUnlocked) {
                allUnlocked = false;
            }
        }

        // Hide bundle if all maps are unlocked
        const bundleContainer = document.getElementById('shop-maps-bundle-container');
        if (bundleContainer) {
            bundleContainer.style.display = allUnlocked ? 'none' : 'flex';
        }

        // If everything is unlocked, we can hide the section header or show a nice unlocked message
        if (allUnlocked) {
            endlessMapsShopSection.style.display = 'none';
        }
    }

    completePremiumUnlock() {
        // Save state to localStorage
        this.setPremiumTier(this.selectedPremiumTier || 'silver');
        
        // Award achievement
        this.ui.triggerAchievement('gold_member');
        
        this.audio.playClickSound();
        this.gameState = 'menu';
        this.ui.showScreen('main');
        
        // Refresh levels and locks
        this.loadLevelStats();
        this.checkPremiumStatus();
        this.renderHistoryUI();
    }

    openShopPurchaseModal(type, price) {
        const modal = document.getElementById('shop-purchase-modal');
        if (!modal) return;

        this.activeCheckoutType = 'shop-item';
        this.activeShopItemType = type;
        this.activeShopItemPrice = price;
        this.shopCouponDiscount = 0;
        this.shopAppliedCoupon = null;

        // Reset inputs
        const couponInput = document.getElementById('shop-coupon-input');
        const couponStatus = document.getElementById('shop-coupon-status');
        if (couponInput) couponInput.value = '';
        if (couponStatus) {
            couponStatus.textContent = '';
            couponStatus.style.color = '';
        }

        // Setup details about that plan
        let itemTitle = "10 TICKETS PACK";
        let planDesc = "Get 10 tickets instantly via Direct UPI.";
        let isTicketPack = type.startsWith('tickets-');
        let ticketCount = isTicketPack ? parseInt(type.split('-')[1]) : 0;

        if (type === 'tickets-30') {
            itemTitle = "30 TICKETS PACK";
            planDesc = "Get 30 tickets instantly via Direct UPI.";
        } else if (type === 'tickets-50') {
            itemTitle = "50 TICKETS PACK";
            planDesc = "Get 50 tickets instantly via Direct UPI.";
        } else if (type === 'tickets-100') {
            itemTitle = "100 TICKETS PACK";
            planDesc = "Get 100 tickets instantly via secure Tebex gateway.";
        } else if (type === 'tickets-500') {
            itemTitle = "500 TICKETS PACK";
            planDesc = "Get 500 tickets with bulk savings via secure Tebex gateway.";
        } else if (type === 'tickets-1000') {
            itemTitle = "1000 TICKETS PACK";
            planDesc = "Get 1000 tickets with mega bulk savings via secure Tebex gateway.";
        } else if (type === 'unlock-any') {
            itemTitle = "UNLOCK 1 LEVEL";
            planDesc = "Directly unlock any 1 normal or demon level of your choice in the game menu. Skip locking barriers.";
        } else if (type === 'unlock-10') {
            itemTitle = "UNLOCK 10 LEVELS PACK";
            planDesc = "Instantly unlocks the next 10 consecutive levels in the game. Saves 30% compared to unlocking individually.";
        } else if (type === 'skip-1') {
            itemTitle = "SKIP 1 LEVEL";
            planDesc = "Instantly skips the current active level you are playing and moves you to the next level.";
        } else if (type === 'skip-10') {
            itemTitle = "10 LEVEL SKIPS PACK";
            planDesc = "Get 10 level skip tokens to bypass any highly challenging segments or demon levels at any time.";
        } else if (type === 'revives-5') {
            itemTitle = "5 REVIVES PACK";
            planDesc = "Get 5 revive tokens to respawn exactly where you crashed instead of restarting the level from the beginning.";
        } else if (type === 'revives-10') {
            itemTitle = "10 REVIVES PACK";
            planDesc = "Get 10 revive tokens to respawn on crash. Essential for mastering difficult stages without restarting.";
        } else if (type === 'custom-song') {
            itemTitle = "CUSTOM SONG UPLOAD";
            planDesc = "Unlock the ability to upload and play the game using any custom MP3 music file from your local storage.";
        } else if (type === 'custom-bg') {
            itemTitle = "CUSTOM BACKGROUND IMAGE";
            planDesc = "Unlock the custom background feature to upload any personal photo or custom image as your game backdrop.";
        } else if (type === 'custom-glider') {
            itemTitle = "CUSTOM GLIDER SHIP MODEL";
            planDesc = "Sleek aerodynamic custom spaceship skin design featuring retro neon glows and unique particles.";
        } else if (type === 'custom-skin-color') {
            itemTitle = "CUSTOM SKIN COLOUR";
            planDesc = "Unlock the custom palette picker to fully design your glider ship model using hex colors.";
        } else if (type === 'endless-mode') {
            itemTitle = "ENDLESS PRACTICE MODE";
            planDesc = "Unlock the infinite mode setting featuring 10 unique maps with speed multipliers (1.0x to 2.0x).";
        } else if (type === 'endless-map-6') {
            itemTitle = "ENDLESS MAP 6: RADIOACTIVE PURPLE";
            planDesc = "Unlocks Map 6 in Endless Practice Mode featuring custom radioactive purple particles and intense rhythm sync.";
        } else if (type === 'endless-map-7') {
            itemTitle = "ENDLESS MAP 7: DEEP CYBER BLUE";
            planDesc = "Unlocks Map 7 in Endless Practice Mode featuring deep cyber blue tones and extra hazard spikes.";
        } else if (type === 'endless-map-8') {
            itemTitle = "ENDLESS MAP 8: TOXIC GREEN & ORANGE";
            planDesc = "Unlocks Map 8 in Endless Practice Mode featuring dual toxic neon theme elements.";
        } else if (type === 'endless-map-9') {
            itemTitle = "ENDLESS MAP 9: SHADOW INDIGO";
            planDesc = "Unlocks Map 9 in Endless Practice Mode featuring indigo gradients and narrow demon speed wind tunnels.";
        } else if (type === 'endless-map-10') {
            itemTitle = "ENDLESS MAP 10: ULTIMATE EMERALD";
            planDesc = "Unlocks Map 10 in Endless Practice Mode featuring a gold/emerald gauntlet layout.";
        } else if (type === 'endless-maps-bundle') {
            itemTitle = "5-MAPS ENDLESS BUNDLE";
            planDesc = "Instantly unlocks all locked Endless maps (Map 6 to Map 10) in a single bundle. Save over 40%!";
        } else if (type === 'game-history') {
            itemTitle = "MATCH RUN HISTORY";
            planDesc = "Unlocks the Recent Runs History panel in the main menu to track your best runs, scores, and stats.";
        }

        const titleEl = document.getElementById('purchase-modal-title');
        const descEl = document.getElementById('purchase-modal-plan-desc');
        const priceEl = document.getElementById('purchase-modal-price');
        const confirmBtn = document.getElementById('btn-confirm-shop-purchase');

        if (titleEl) titleEl.textContent = `🛒 ${itemTitle}`;
        if (descEl) descEl.textContent = planDesc;

        // Display regional price / Ticket price
        if (isTicketPack) {
            if (ticketCount < 100) {
                // Direct UPI Pack in INR
                const inrPrices = { 'tickets-10': 20, 'tickets-30': 50, 'tickets-50': 80 };
                if (priceEl) priceEl.textContent = `₹${inrPrices[type]}.00 INR`;
            } else {
                // Tebex Pack in USD
                if (priceEl) priceEl.textContent = `$${price} USD`;
            }
        } else {
            // Feature Unlocks: cost is in tickets
            const cost = parseInt(price);
            if (priceEl) priceEl.textContent = `${cost} Tickets (🎟️)`;
        }

        if (confirmBtn) {
            if (isTicketPack) {
                if (ticketCount >= 100) {
                    confirmBtn.textContent = `REDIRECT TO SECURE CHECKOUT 🚀`;
                    confirmBtn.onclick = () => {
                        this.audio.playClickSound();
                        modal.style.display = 'none';
                        const username = localStorage.getItem('wave_dash_logged_in_user') || 'guest';
                        const packageId = window.TEBEX_PACKAGE_IDS[type] || '';
                        let checkoutUrl = window.TEBEX_STORE_URL;
                        if (packageId) {
                            checkoutUrl += `/checkout/packages/${packageId}?username=${encodeURIComponent(username)}`;
                        } else {
                            checkoutUrl += `?username=${encodeURIComponent(username)}`;
                        }
                        window.open(checkoutUrl, '_blank');
                        this.ui.showAchievementToast('Opening Tebex', 'Please complete payment in the new window...');
                    };
                } else {
                    confirmBtn.textContent = `PROCEED TO UPI CHECKOUT 🚀`;
                    confirmBtn.onclick = () => {
                        this.audio.playClickSound();
                        modal.style.display = 'none';
                        const descElCheck = document.getElementById('checkout-item-desc');
                        const plansEl = document.getElementById('premium-plans-container');
                        if (descElCheck) {
                            descElCheck.style.display = 'block';
                            descElCheck.textContent = `🛍️ SHOP ITEM: ${itemTitle}`;
                        }
                        if (plansEl) plansEl.style.display = 'none';
                        this.showPremiumCheckout();
                    };
                }
            } else {
                confirmBtn.textContent = `SPEND ${price} TICKETS 🎟️`;
                confirmBtn.onclick = () => {
                    this.audio.playClickSound();
                    
                    if (this.isCurrentUserGuest()) {
                        this.audio.playDeathSound();
                        this.ui.showScreen('profile');
                        this.ui.showAchievementToast('Login Required', 'You must login first to spend tickets!');
                        return;
                    }

                    const cost = parseInt(price);
                    const tickets = this.getUserTickets();
                    if (tickets >= cost) {
                        this.setUserTickets(tickets - cost);
                        this.syncUserToCloud();
                        modal.style.display = 'none';
                        this.executeSuccessfulPaymentEnrollment(type);
                        this.ui.showAchievementToast('Success!', `Spent ${cost} tickets!`);
                    } else {
                        this.audio.playDeathSound();
                        this.ui.showAchievementToast('Not Enough Tickets', `You need ${cost} 🎟️ to unlock this. (Current: ${tickets})`);
                    }
                };
            }
        }

        // Close Button Binding
        const closeBtn = document.getElementById('btn-close-shop-purchase-modal');
        if (closeBtn) {
            closeBtn.onclick = () => {
                this.audio.playClickSound();
                modal.style.display = 'none';
            };
        }

        modal.style.display = 'flex';
    }

    checkPremiumStatus() {
        let isPremium = localStorage.getItem('neon_dash_premium') === 'true';

        // Check logged-in user profile status
        const currentUsername = localStorage.getItem('wave_dash_logged_in_user');
        const badgeEl = document.getElementById('menu-user-badge');
        const usernameDisplay = document.getElementById('menu-username-display');
        const premiumBadge = document.getElementById('menu-premium-badge');
        const diamondBadge = document.getElementById('menu-diamond-badge');

        if (currentUsername) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[currentUsername];
            if (user) {
                if (user.isPremium || isPremium) {
                    isPremium = true;
                    user.isPremium = true;
                    localStorage.setItem('neon_dash_premium', 'true');
                    users[currentUsername] = user;
                    localStorage.setItem('wave_dash_users', JSON.stringify(users));
                }
            }

            const isDiamond = currentUsername.toLowerCase().includes('sian') || localStorage.getItem(`wave_dash_diamond_${currentUsername}`) === 'true';

            if (badgeEl && usernameDisplay && premiumBadge) {
                badgeEl.style.display = 'flex';
                usernameDisplay.textContent = user ? user.username : currentUsername;
                
                if (isDiamond) {
                    if (diamondBadge) diamondBadge.style.display = 'inline-block';
                    premiumBadge.style.display = 'none';
                    badgeEl.style.borderColor = '#00ffc4';
                    badgeEl.style.boxShadow = '0 0 12px rgba(0, 255, 196, 0.4)';
                } else if (isPremium) {
                    if (diamondBadge) diamondBadge.style.display = 'none';
                    premiumBadge.style.display = 'inline-block';
                    badgeEl.style.borderColor = 'var(--neon-yellow)';
                    badgeEl.style.boxShadow = '0 0 10px rgba(255, 251, 0, 0.25)';
                } else {
                    if (diamondBadge) diamondBadge.style.display = 'none';
                    premiumBadge.style.display = 'none';
                    badgeEl.style.borderColor = 'var(--panel-border)';
                    badgeEl.style.boxShadow = 'none';
                }
            }

            const unlimitedBtn = document.getElementById('unlimited-coin-btn');
            if (unlimitedBtn) {
                const isSian = currentUsername && currentUsername.toLowerCase() === 'sian goyal';
                unlimitedBtn.style.display = isSian ? 'inline-block' : 'none';
            }
        } else {
            if (badgeEl) badgeEl.style.display = 'none';
            const unlimitedBtn = document.getElementById('unlimited-coin-btn');
            if (unlimitedBtn) unlimitedBtn.style.display = 'none';
        }

        // Toggle Guest Purchase Warning banner
        const guestBanner = document.getElementById('guest-purchase-warning');
        if (guestBanner) {
            const isGuest = this.isCurrentUserGuest();
            let hasPurchasedKey = localStorage.getItem('wave_dash_shop_game_history') === 'true' ||
                                  localStorage.getItem('wave_dash_shop_custom_song') === 'true' ||
                                  localStorage.getItem('wave_dash_shop_custom_bg') === 'true' ||
                                  localStorage.getItem('wave_dash_shop_custom_glider') === 'true' ||
                                  localStorage.getItem('wave_dash_endless_unlocked') === 'true' ||
                                  localStorage.getItem('wave_dash_endless_map_unlocked_bundle') === 'true';
            
            // Also check individual map unlocks
            for (let m = 6; m <= 10; m++) {
                if (localStorage.getItem(`wave_dash_endless_map_unlocked_${m}`) === 'true') {
                    hasPurchasedKey = true;
                }
            }

            if (isGuest && hasPurchasedKey) {
                guestBanner.style.display = 'flex';
                guestBanner.onclick = () => {
                    this.audio.playClickSound();
                    this.ui.showScreen('auth'); // Redirect user to the login/register screen!
                };
            } else {
                guestBanner.style.display = 'none';
            }
        }

        // Toggle Redeem Pass button display: ONLY show to authorized accounts (like Sian Goyal)
        const redeemPassBtn = document.getElementById('btn-redeem-pass');
        if (redeemPassBtn) {
            if (currentUsername) {
                const allowedUsers = ['sian goyal', 'pooja-gupta', 'khadag'];
                const isAuthorized = allowedUsers.includes(currentUsername.toLowerCase()) || localStorage.getItem(`wave_dash_pass_authorized_${currentUsername}`) === 'true';
                if (isAuthorized) {
                    redeemPassBtn.style.display = 'inline-block';
                } else {
                    redeemPassBtn.style.display = 'none';
                }
            } else {
                redeemPassBtn.style.display = 'none';
            }
        }

    }

    checkAppUpdates(isManual = false) {
        const updateUrl = 'https://wavedashgame-1.vercel.app/version.json';
        const currentVersion = '1.3.0'; // This build version (matches the deployed website version)
        
        if (isManual) {
            this.ui.showAchievementToast('Checking...', 'Fetching update details...');
        }

        fetch(updateUrl)
            .then(res => res.json())
            .then(data => {
                const isNewer = data && data.version && this.isNewerVersion(currentVersion, data.version);
                
                if (isNewer) {
                    this.toggleUpdateBadge(true, data);
                    if (isManual) {
                        this.showUpdateModal(data, currentVersion);
                    }
                } else {
                    this.toggleUpdateBadge(false);
                    if (isManual) {
                        this.audio.playClickSound();
                        this.ui.showAchievementToast('No Update', `No updates are available. You are using version ${currentVersion}.`);
                    }
                }
            })
            .catch(err => {
                console.log('Update check skipped (offline or server issues):', err);
                this.toggleUpdateBadge(false);
                if (isManual) {
                    this.audio.playDeathSound();
                    this.ui.showAchievementToast('Update Error', 'Could not connect to update server.');
                }
            });
    }

    toggleUpdateBadge(show, updateData) {
        const badge = document.getElementById('menu-update-badge');
        if (badge) {
            badge.style.display = show ? 'flex' : 'none';
            badge.onclick = () => {
                this.audio.playClickSound();
                this.showUpdateModal(updateData, '1.3.0');
            };
        }
    }

    isNewerVersion(current, latest) {
        const cParts = current.split('.').map(Number);
        const lParts = latest.split('.').map(Number);
        for (let i = 0; i < Math.max(cParts.length, lParts.length); i++) {
            const cVal = cParts[i] || 0;
            const lVal = lParts[i] || 0;
            if (lVal > cVal) return true;
            if (cVal > lVal) return false;
        }
        return false;
    }

    showUpdateModal(data, currentVersion = '1.3.0') {
        const verDisplay = document.getElementById('latest-version-name');
        const currentVerDisplay = document.getElementById('current-version-name');
        const changelogList = document.getElementById('update-changelog');
        const btnDownload = document.getElementById('btn-update-download');
        
        if (verDisplay) verDisplay.textContent = data.version;
        if (currentVerDisplay) currentVerDisplay.textContent = currentVersion;
        if (changelogList && data.changelog) {
            changelogList.innerHTML = data.changelog.map(item => `<li>${item}</li>`).join('');
        }
        
        if (btnDownload) {
            const isWeb = !window.Capacitor && window.location.protocol !== 'file:';
            if (isWeb) {
                btnDownload.textContent = "UPDATE NOW (RELOAD)";
            } else {
                btnDownload.textContent = "UPDATE NOW";
            }
            btnDownload.onclick = () => {
                this.audio.playClickSound();
                if (isWeb) {
                    // For Web, trigger hard reload to download the latest deployment assets
                    window.location.reload(true);
                } else {
                    // Open custom url or fall back to your Vercel website download subpage for the APK file
                    window.open(data.url || 'https://wavedashgame-1.vercel.app/download.html', '_system');
                }
            };
        }
        
        this.ui.showScreen('update');
    }

    // -------------------------------------------------------------
    // USER ACCOUNT & GUEST MANAGEMENT METHODS
    // -------------------------------------------------------------

    initializeGuestProfile() {
        const loggedInUser = localStorage.getItem('wave_dash_logged_in_user');
        if (!loggedInUser) {
            const guestId = Math.floor(1000 + Math.random() * 9000);
            const guestUsername = `Guest_${guestId}`;
            
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            users[guestUsername] = {
                username: guestUsername,
                password: "",
                isPremium: false,
                transactionId: "",
                isGuest: true
            };
            
            localStorage.setItem('wave_dash_users', JSON.stringify(users));
            localStorage.setItem('wave_dash_logged_in_user', guestUsername);
        }
    }

    handleGuestLogin() {
        // Log out current session
        localStorage.removeItem('wave_dash_logged_in_user');
        localStorage.removeItem('neon_dash_premium');

        this.initializeGuestProfile();
        this.audio.playPortalSound();
        this.ui.showAchievementToast('Guest Mode Active', 'Welcome, explorer!');

        this.checkPremiumStatus();
        this.loadLevelStats();
        
        // Go straight to Level Select after choosing Guest Mode!
        this.gameState = 'menu';
        this.ui.showScreen('levelSelect');
    }

    openAccountModal() {
        this.audio.playClickSound();
        this.gameState = 'accountMenu';
        this.ui.showScreen('account');

        const loggedInUsername = localStorage.getItem('wave_dash_logged_in_user');
        if (loggedInUsername) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            const user = users[loggedInUsername];
            
            document.getElementById('prof-username').textContent = user.username;
            document.getElementById('prof-email').textContent = user.isGuest ? 'Temporary Local Account' : 'Registered Account';
            document.getElementById('prof-games-played').textContent = user.totalGamesPlayed || 0;
            
            const statusEl = document.getElementById('prof-status');
            const upgradeBanner = document.getElementById('guest-upgrade-banner');

            if (user.isGuest) {
                statusEl.textContent = 'GUEST ACCOUNT 👤';
                statusEl.style.color = '#ff9900';
                upgradeBanner.style.display = 'block';
            } else {
                statusEl.textContent = user.isPremium ? 'LIFETIME PREMIUM MEMBER 🌟' : 'FREE MEMBER';
                statusEl.style.color = user.isPremium ? 'var(--neon-yellow)' : '#ff0055';
                upgradeBanner.style.display = 'none';
            }

            if (user.isPremium) {
                document.getElementById('prof-link-payment-box').style.display = 'none';
            } else {
                document.getElementById('prof-link-payment-box').style.display = 'flex';
            }

            document.getElementById('account-login-panel').style.display = 'none';
            document.getElementById('account-register-panel').style.display = 'none';
            document.getElementById('account-profile-panel').style.display = 'flex';
        } else {
            // Not logged in - show login panel
            document.getElementById('account-login-panel').style.display = 'flex';
            document.getElementById('account-register-panel').style.display = 'none';
            document.getElementById('account-profile-panel').style.display = 'none';
            
            // Clear inputs
            const usernameInput = document.getElementById('login-username');
            if (usernameInput) usernameInput.value = '';
            document.getElementById('login-pass').value = '';
        }
    }

    closeAccountModal() {
        this.audio.playClickSound();
        this.gameState = 'menu';
        this.ui.showScreen('main');
    }

    async handleUserRegister() {
        const username = document.getElementById('reg-name').value.trim();
        const password = document.getElementById('reg-pass').value.trim();
        const country = document.getElementById('reg-country')?.value || '';

        if (!username || !password) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Reg Error', 'Please fill in username and password!');
            return;
        }

        if (password.length < 8) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Reg Error', 'Password must be at least 8 characters!');
            return;
        }

        if (!country) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Country Required', 'Please select your country to register!');
            return;
        }

        // Show registration status toast
        this.ui.showAchievementToast('Registering...', 'Connecting to database...');

        if (window.FIREBASE_DB_URL) {
            try {
                const cleanURL = window.FIREBASE_DB_URL.endsWith('/') ? window.FIREBASE_DB_URL.slice(0, -1) : window.FIREBASE_DB_URL;
                const res = await fetch(`${cleanURL}/users/${username.toLowerCase()}.json`);
                const existing = await res.json();
                if (existing) {
                    this.audio.playDeathSound();
                    this.ui.showAchievementToast('Reg Error', 'Username already taken!');
                    return;
                }
            } catch (err) {
                console.error("Cloud register check failed:", err);
            }
        }

        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const lowerUsername = username.toLowerCase();
        const hasExistingLocal = Object.keys(users).some(u => u.toLowerCase() === lowerUsername);
        if (hasExistingLocal) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Reg Error', 'Username already taken!');
            return;
        }

        // Migrate guest properties
        const currentUsername = localStorage.getItem('wave_dash_logged_in_user');
        const oldUser = users[currentUsername];
        let isPremiumUpgrade = false;
        let linkedTxn = "";

        if (oldUser && oldUser.isGuest) {
            isPremiumUpgrade = oldUser.isPremium;
            linkedTxn = oldUser.transactionId;
            delete users[currentUsername];
        }

        users[username] = {
            username: username,
            password: password,
            country: country,
            isPremium: isPremiumUpgrade,
            transactionId: linkedTxn,
            coins: parseInt(localStorage.getItem('wave_dash_guest_coins') || '0'),
            game_coins: parseInt(localStorage.getItem('wave_dash_guest_game_coins') || '0'),
            isGuest: false
        };

        localStorage.setItem('wave_dash_users', JSON.stringify(users));
        localStorage.setItem('wave_dash_logged_in_user', username);
        localStorage.setItem('wave_dash_user_country', country);
        this.updateAllPriceDisplays(country);

        // Upload registration profile to database
        if (window.FIREBASE_DB_URL) {
            try {
                const cleanURL = window.FIREBASE_DB_URL.endsWith('/') ? window.FIREBASE_DB_URL.slice(0, -1) : window.FIREBASE_DB_URL;
                
                const unlockedMaps = [];
                for (let m = 6; m <= 10; m++) {
                    if (localStorage.getItem(`wave_dash_endless_map_unlocked_${m}`) === 'true') {
                        unlockedMaps.push(m);
                    }
                }

                const profile = {
                    username: username,
                    password: password,
                    isPremium: isPremiumUpgrade,
                    premiumTier: isPremiumUpgrade ? (localStorage.getItem('wave_dash_premium_tier') || 'silver') : null,
                    coins: parseInt(localStorage.getItem('wave_dash_guest_coins') || '0'),
                    game_coins: parseInt(localStorage.getItem('wave_dash_guest_game_coins') || '0'),
                    lastActive: new Date().toISOString(),
                    reviveStock: parseInt(localStorage.getItem('wave_dash_revive_stock') || '0'),
                    skipStock: parseInt(localStorage.getItem('wave_dash_skip_stock') || '0'),
                    customSongUnlocked: localStorage.getItem('wave_dash_shop_custom_song') === 'true',
                    customBgUnlocked: localStorage.getItem('wave_dash_shop_custom_bg') === 'true',
                    customGliderUnlocked: localStorage.getItem('wave_dash_shop_custom_glider') === 'true',
                    endlessUnlocked: localStorage.getItem('wave_dash_endless_unlocked') === 'true',
                    gameHistoryUnlocked: localStorage.getItem('wave_dash_shop_game_history') === 'true',
                    unlockedMaps: unlockedMaps,
                    levelProgress: {}
                };
                await fetch(`${cleanURL}/users/${username.toLowerCase()}.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(profile)
                });
            } catch (err) {
                console.error("Cloud upload registration failed:", err);
            }
        }

        this.audio.playCoinSound();
        this.ui.showAchievementToast('Registered!', `Welcome, ${username}!`);

        // 🔥 Secret Easter Egg: Special 500 coin gift for "Uranium"
        if (username.toLowerCase() === 'uranium') {
            const currentCoins = this.getUserCoins();
            this.setUserCoins(currentCoins + 500);
            this.updateCoinsDisplay();
            setTimeout(() => {
                this.ui.showAchievementToast('🎁 Gift from Sian Goyal!', 'You have been transferred 500 coins by Sian Goyal 🪙✨');
            }, 1500);
        }
        
        this.checkPremiumStatus();
        this.loadLevelStats();
        this.checkPendingGifts();
        
        this.gameState = 'menu';
        this.ui.showScreen('levelSelect');
    }

    async handleUserLogin() {
        const usernameInput = document.getElementById('login-username');
        const username = usernameInput ? usernameInput.value.trim() : '';
        const password = document.getElementById('login-pass').value.trim();

        if (!username || !password) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Login Error', 'Enter username and password!');
            return;
        }

        // Show login verification toast
        this.ui.showAchievementToast('Logging in...', 'Connecting to database...');

        if (window.FIREBASE_DB_URL) {
            try {
                const cleanURL = window.FIREBASE_DB_URL.endsWith('/') ? window.FIREBASE_DB_URL.slice(0, -1) : window.FIREBASE_DB_URL;
                
                // Try to check lowercase username first
                let res = await fetch(`${cleanURL}/users/${username.toLowerCase()}.json`);
                let cloudUser = await res.json();
                
                // Fallback to exact case for legacy accounts
                if (!cloudUser) {
                    res = await fetch(`${cleanURL}/users/${username}.json`);
                    cloudUser = await res.json();
                }

                if (cloudUser) {
                    // Legacy password repair if missing in database
                    if (!cloudUser.password) {
                        cloudUser.password = password;
                        fetch(`${cleanURL}/users/${username.toLowerCase()}.json`, {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ password: password })
                        }).catch(err => console.error("Failed to patch legacy password:", err));
                    }

                    if (cloudUser.password !== password) {
                        this.audio.playDeathSound();
                        this.ui.showAchievementToast('Login Error', 'Invalid credentials!');
                        return;
                    }
                    
                    const selectedCountry = document.getElementById('login-country')?.value || cloudUser.country || localStorage.getItem('wave_dash_user_country') || '';
                    const actualUsername = cloudUser.username || username;
                    
                    // Sync cloud account locally
                    const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
                    users[actualUsername] = {
                        username: actualUsername,
                        password: password,
                        country: selectedCountry,
                        isPremium: cloudUser.isPremium || false,
                        premiumTier: cloudUser.premiumTier || null,
                        coins: cloudUser.coins || 0,
                        game_coins: cloudUser.game_coins || 0,
                        isGuest: false
                    };
                    localStorage.setItem('wave_dash_users', JSON.stringify(users));
                    localStorage.setItem('wave_dash_logged_in_user', actualUsername);
                    if (selectedCountry) {
                        localStorage.setItem('wave_dash_user_country', selectedCountry);
                        this.updateAllPriceDisplays(selectedCountry);
                    }

                    // Sync local state variables
                    localStorage.setItem('neon_dash_premium', cloudUser.isPremium ? 'true' : 'false');
                    if (cloudUser.premiumTier) {
                        localStorage.setItem('wave_dash_premium_tier', cloudUser.premiumTier);
                    } else {
                        localStorage.removeItem('wave_dash_premium_tier');
                    }
                    localStorage.setItem('wave_dash_guest_coins', cloudUser.coins || 0);
                    localStorage.setItem('wave_dash_guest_game_coins', cloudUser.game_coins || 0);
                    localStorage.setItem('wave_dash_revive_stock', cloudUser.reviveStock || 0);
                    localStorage.setItem('wave_dash_skip_stock', cloudUser.skipStock || 0);
                    localStorage.setItem('wave_dash_shop_custom_song', cloudUser.customSongUnlocked ? 'true' : 'false');
                    localStorage.setItem('wave_dash_shop_custom_bg', cloudUser.customBgUnlocked ? 'true' : 'false');
                    localStorage.setItem('wave_dash_shop_custom_glider', cloudUser.customGliderUnlocked ? 'true' : 'false');
                    localStorage.setItem('wave_dash_endless_unlocked', cloudUser.endlessUnlocked ? 'true' : 'false');
                    localStorage.setItem('wave_dash_shop_game_history', cloudUser.gameHistoryUnlocked ? 'true' : 'false');

                    // Restore unlocked endless maps
                    if (cloudUser.unlockedMaps) {
                        cloudUser.unlockedMaps.forEach(mapNum => {
                            localStorage.setItem(`wave_dash_endless_map_unlocked_${mapNum}`, 'true');
                        });
                    }

                    // Restore levels progress values
                    if (cloudUser.levelProgress) {
                        Object.keys(cloudUser.levelProgress).forEach(lvlNum => {
                            localStorage.setItem(`neon_dash_best_level_${lvlNum}`, cloudUser.levelProgress[lvlNum]);
                        });
                    }

                    this.audio.playPortalSound();
                    this.ui.showAchievementToast('Logged In!', `Welcome back, ${actualUsername}!`);
                    this.loadLevelStats();
                    this.gameState = 'menu';
                    this.ui.showScreen('levelSelect');
                    return;
                }
            } catch (err) {
                console.error("Cloud database login failed, checking local fallback:", err);
                const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
                const lowerUsername = username.toLowerCase();
                const localKey = Object.keys(users).find(k => k.toLowerCase() === lowerUsername);
                const user = localKey ? users[localKey] : null;
                
                if (!user) {
                    this.audio.playDeathSound();
                    this.ui.showAchievementToast('Connection Error', 'Could not connect to database. Check internet connection!');
                    return;
                }
            }
        }

        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const lowerUsername = username.toLowerCase();
        const localKey = Object.keys(users).find(k => k.toLowerCase() === lowerUsername);
        const user = localKey ? users[localKey] : null;

        if (!user || user.password !== password || user.isGuest) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Login Error', 'Invalid credentials!');
            return;
        }

        // Clean out temporary guest profile if logging in to real account
        const currentUsername = localStorage.getItem('wave_dash_logged_in_user');
        const oldUser = users[currentUsername];
        if (oldUser && oldUser.isGuest && currentUsername !== user.username) {
            delete users[currentUsername];
            localStorage.setItem('wave_dash_users', JSON.stringify(users));
        }

        // Successfully logged in
        localStorage.setItem('wave_dash_logged_in_user', user.username);
        this.audio.playPortalSound();
        this.ui.showAchievementToast('Logged In!', `Welcome back, ${user.username}!`);
        
        // Sync premium status
        this.checkPremiumStatus();
        this.loadLevelStats();
        this.checkPendingGifts();
        
        this.promptCompulsoryCountrySelect(() => {
            // Go straight to Level Select after successful login
            this.gameState = 'menu';
            this.ui.showScreen('levelSelect');
        });
    }

    handleUserLogout() {
        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const currentUsername = localStorage.getItem('wave_dash_logged_in_user');
        const oldUser = users[currentUsername];

        // Delete guest account on logout so it clears out
        if (oldUser && oldUser.isGuest) {
            delete users[currentUsername];
            localStorage.setItem('wave_dash_users', JSON.stringify(users));
        }

        localStorage.removeItem('wave_dash_logged_in_user');
        localStorage.removeItem('neon_dash_premium');

        this.audio.playClickSound();
        this.ui.showAchievementToast('Logged Out', 'Session cleared!');
        
        this.checkPremiumStatus();
        this.loadLevelStats();
        
        this.openAccountModal();
    }

    handleLinkPaymentID() {
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (!username) return;

        const txnId = document.getElementById('prof-payment-id').value.trim();
        if (!txnId) {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Verify Error', 'Please enter a transaction ID!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
        const user = users[username];
        if (!user) return;

        // Check if ID is in the approved verified payments list
        const isVerified = window.VERIFIED_PAYMENT_IDS.includes(txnId);

        if (isVerified) {
            user.isPremium = true;
            user.transactionId = txnId;
            users[username] = user;
            localStorage.setItem('wave_dash_users', JSON.stringify(users));

            // Legacy sync
            localStorage.setItem('neon_dash_premium', 'true');
            this.ui.triggerAchievement('gold_member');

            this.audio.playCoinSound();
            this.ui.showAchievementToast('Premium Activated!', 'Transaction verified!');
            
            // Refresh
            this.checkPremiumStatus();
            this.loadLevelStats();
            this.openAccountModal();
        } else {
            this.audio.playDeathSound();
            this.ui.showAchievementToast('Pending Verification', 'Payment ID not recognized yet!');
        }
    }

    // -------------------------------------------------------------
    // ADVERTISEMENT & SKIP LEVEL SYSTEM
    // -------------------------------------------------------------

    handleSkipLevel() {
        this.audio.playClickSound();
        
        // 1. Premium members get unlimited skips!
        if (this.hasSilver()) {
            this.ui.showAchievementToast('Level Skipped!', 'Premium Ad-Free Benefit');
            this.skipCurrentLevel();
            return;
        }

        // 2. Check purchased skip stock
        const skipStock = parseInt(localStorage.getItem('wave_dash_skip_stock') || '0');
        if (skipStock > 0) {
            localStorage.setItem('wave_dash_skip_stock', skipStock - 1);
            this.ui.showAchievementToast('Level Skipped!', `Used 1 Level Skip (Stock left: ${skipStock - 1})`);
            this.skipCurrentLevel();
            return;
        }

        // 3. Fallback to coins or ad
        const currentCoins = this.getUserCoins();
        if (currentCoins >= 5) {
            const choice = confirm(`Spend 5 🪙 Coins to skip this level instantly?\n\n- Click OK to spend 5 coins.\n- Click Cancel to watch a 5-second Ad instead.`);
            if (choice) {
                this.setUserCoins(currentCoins - 5);
                this.ui.showAchievementToast('Level Skipped!', 'Spent 5 coins');
                this.skipCurrentLevel();
            } else {
                this.startMockAd();
            }
        } else {
            const watchAd = confirm(`Skipping this level requires 5 🪙 Coins (You have: ${currentCoins}).\n\nWould you like to watch a 5-second Ad to skip for free?`);
            if (watchAd) {
                this.startMockAd();
            }
        }
    }

    skipCurrentLevel() {
        if (!this.level) return;
        
        // Save progress as skipped
        const key = `neon_dash_skipped_level_${this.level.index}`;
        localStorage.setItem(key, 'true');
        this.syncUserToCloud(); // Sync skip status to online database!

        this.gameState = 'menu';
        
        // Populate stats for completion modal overlay
        const attempts = this.player ? this.player.attempts : 1;
        const coins = this.player ? this.player.coinsCollected : 0;
        
        // Temporarily change level complete header to LEVEL SKIPPED
        const titleEl = document.querySelector('#complete-screen h2');
        if (titleEl) {
            titleEl.textContent = "LEVEL SKIPPED";
            titleEl.style.color = "var(--neon-pink)";
            titleEl.style.textShadow = "0 0 10px rgba(255, 0, 127, 0.4)";
        }
        
        document.getElementById('complete-level-name').textContent = this.level.name;
        document.getElementById('complete-stat-attempts').textContent = attempts;
        document.getElementById('complete-stat-coins').textContent = `${coins}/3`;

        this.ui.showScreen('levelComplete');
        this.audio.playCoinSound();
    }

    startMockAd() {
        if (this.hasSilver()) {
            this.skipCurrentLevel();
            return;
        }

        if (window.WaveDashAdMob && window.WaveDashAdMob.isNative()) {
            console.log("[AdMob] Triggering native Interstitial Ad...");
            if (this.audio) this.audio.stopMusic(true);
            window.WaveDashAdMob.showInterstitial({
                onAdShown: () => {
                    this.gameState = 'adScreen';
                },
                onAdDismissed: () => {
                    this.gameState = 'menu';
                    if (this.audio) this.audio.startMusic();
                    this.skipCurrentLevel();
                },
                onAdFailed: (err) => {
                    console.warn("[AdMob] Native Interstitial failed, running fallback countdown:", err);
                    this.gameState = 'menu';
                    if (this.audio) this.audio.startMusic();
                    this.startMockAdCountdown();
                }
            });
            return;
        }

        if (typeof window.adBreak === 'function') {
            console.log("Triggering real AdSense Interstitial Ad...");
            let adShown = false;
            if (this.audio) this.audio.stopMusic(true);
            window.adBreak({
                type: 'next',
                name: 'level-skip',
                beforeAd: () => {
                    this.gameState = 'adScreen'; // Keep game loop in ad state
                },
                afterAd: () => {
                    this.gameState = 'menu';
                    if (this.audio) this.audio.startMusic();
                },
                adBreakDone: (placementInfo) => {
                    console.log("Ad break done status:", placementInfo);
                    if (placementInfo && placementInfo.breakStatus === 'filled') {
                        adShown = true;
                        this.skipCurrentLevel();
                    } else {
                        console.log("AdSense ad not filled, running fallback countdown.");
                        this.startMockAdCountdown();
                    }
                }
            });
            return;
        }

        this.startMockAdCountdown();
    }

    startMockAdCountdown() {
        this.gameState = 'adScreen';
        this.ui.showScreen('ad');

        const timerEl = document.getElementById('ad-timer');
        const skipBtn = document.getElementById('btn-ad-skip');
        const progressEl = document.getElementById('ad-progress-bar');

        if (!timerEl || !skipBtn || !progressEl) return;

        // Force disable and reset
        skipBtn.disabled = true;
        skipBtn.style.opacity = '0.5';
        skipBtn.style.cursor = 'not-allowed';
        skipBtn.textContent = 'SKIP AD';
        progressEl.style.width = '0%';

        let count = 5;
        timerEl.textContent = `Skip in ${count}s...`;

        // Progress bar loop
        let val = 0;
        const barInterval = setInterval(() => {
            if (this.gameState !== 'adScreen') {
                clearInterval(barInterval);
                return;
            }
            val += 2;
            progressEl.style.width = `${Math.min(100, val)}%`;
            if (val >= 100) clearInterval(barInterval);
        }, 100);

        // Countdown timer interval
        const timerInterval = setInterval(() => {
            if (this.gameState !== 'adScreen') {
                clearInterval(timerInterval);
                return;
            }
            count--;
            if (count > 0) {
                timerEl.textContent = `Skip in ${count}s...`;
            } else {
                clearInterval(timerInterval);
                timerEl.textContent = 'Ad Completed';
                skipBtn.disabled = false;
                skipBtn.style.opacity = '1';
                skipBtn.style.cursor = 'pointer';
            }
        }, 1000);
    }

    finishSkipAd() {
        this.audio.playClickSound();
        if (this.gameState === 'reviveAdScreen') {
            this.executeRevive();
        } else {
            this.skipCurrentLevel();
        }
    }

    handleReviveClick() {
        this.audio.playClickSound();

        // 1. Check purchased revive stock first (from shop inventory)
        const reviveStock = parseInt(localStorage.getItem('wave_dash_revive_stock') || '0');
        if (reviveStock > 0) {
            localStorage.setItem('wave_dash_revive_stock', reviveStock - 1);
            this.ui.showAchievementToast('Revived!', `Used 1 revive pack (${reviveStock - 1} remaining)`);
            this.syncUserToCloud(); // Sync updated reviveStock count to database!
            this.executeRevive();
            return;
        }

        // 2. Show the Revive Options Modal so player can choose: Use 3 Coins OR Watch 5s Ad
        const modal = document.getElementById('revive-modal');
        if (modal) {
            const coinsBtn = document.getElementById('btn-revive-use-coins');
            if (coinsBtn) {
                const coins = this.getUserCoins();
                coinsBtn.textContent = `🪙 USE 3 COINS (YOU HAVE ${coins})`;
            }
            modal.style.display = 'flex';
        } else {
            this.startReviveAd();
        }
    }

    handleReviveWithCoins() {
        const coins = this.getUserCoins();
        if (coins >= 3) {
            // Deduct 3 coins and revive immediately (NO AD!)
            this.setUserCoins(coins - 3);
            this.updateCoinsDisplay();
            this.ui.showAchievementToast('Revived!', 'Spent 3 coins');
            this.executeRevive();
        } else {
            // Player does NOT have 3 coins: show clear message, do NOT deduct coins, do NOT play ad automatically
            if (this.hasSilver()) {
                this.ui.showAchievementToast('Revived!', 'Premium Ad-Free Benefit');
                this.executeRevive();
                return;
            }
            this.ui.showAchievementToast('Not Enough Coins', `You need 3 coins to revive (Current: ${coins} 🪙). Select 'Watch Ad' to revive for free!`);
        }
    }

    startReviveAd() {
        if (this.hasSilver()) {
            this.executeRevive();
            return;
        }

        if (window.WaveDashAdMob && window.WaveDashAdMob.isNative()) {
            console.log("[AdMob] Triggering native Rewarded Ad...");
            if (this.audio) this.audio.stopMusic(true);
            window.WaveDashAdMob.showRewarded({
                onAdShown: () => {
                    this.gameState = 'reviveAdScreen';
                },
                onRewarded: () => {
                    this.executeRevive();
                },
                onAdDismissed: (wasRewarded) => {
                    this.gameState = 'playing';
                    if (this.audio) this.audio.startMusic();
                    if (!wasRewarded) {
                        this.ui.showAchievementToast('Ad Dismissed', 'You must watch the full ad to revive!');
                    }
                },
                onAdFailed: (err) => {
                    console.warn("[AdMob] Native Rewarded failed, running fallback countdown:", err);
                    this.gameState = 'playing';
                    if (this.audio) this.audio.startMusic();
                    this.startReviveAdCountdown();
                }
            });
            return;
        }

        if (typeof window.adBreak === 'function') {
            console.log("Triggering real AdSense Rewarded Ad...");
            let adShown = false;
            if (this.audio) this.audio.stopMusic(true);
            window.adBreak({
                type: 'reward',
                name: 'revive',
                beforeAd: () => {
                    this.gameState = 'reviveAdScreen';
                },
                afterAd: () => {
                    this.gameState = 'playing';
                    if (this.audio) this.audio.startMusic();
                },
                beforeReward: (showAdFn) => {
                    showAdFn();
                },
                adDismissed: () => {
                    this.ui.showAchievementToast('Ad Dismissed', 'You must watch the full ad to revive!');
                },
                adViewed: () => {
                    adShown = true;
                    this.executeRevive();
                },
                adBreakDone: (placementInfo) => {
                    console.log("Rewarded ad break done status:", placementInfo);
                    if (placementInfo && placementInfo.breakStatus === 'filled') {
                        // adViewed already called executeRevive()
                    } else if (!adShown) {
                        console.log("AdSense rewarded ad not filled, running fallback countdown.");
                        this.startReviveAdCountdown();
                    }
                }
            });
            return;
        }

        this.startReviveAdCountdown();
    }

    startReviveAdCountdown() {
        this.gameState = 'reviveAdScreen';
        this.ui.showScreen('ad');

        const timerEl = document.getElementById('ad-timer');
        const skipBtn = document.getElementById('btn-ad-skip');
        const progressEl = document.getElementById('ad-progress-bar');

        if (!timerEl || !skipBtn || !progressEl) return;

        // Force disable and reset
        skipBtn.disabled = true;
        skipBtn.style.opacity = '0.5';
        skipBtn.style.cursor = 'not-allowed';
        skipBtn.textContent = 'SKIP AD';
        progressEl.style.width = '0%';

        let remaining = 5;
        timerEl.textContent = `Skip in ${remaining}s...`;

        const timerInterval = setInterval(() => {
            remaining--;
            const pct = ((5 - remaining) / 5) * 100;
            progressEl.style.width = `${pct}%`;

            if (remaining > 0) {
                timerEl.textContent = `Skip in ${remaining}s...`;
            } else {
                clearInterval(timerInterval);
                timerEl.textContent = 'Ad Completed';
                skipBtn.disabled = false;
                skipBtn.style.opacity = '1';
                skipBtn.style.cursor = 'pointer';
            }
        }, 1000);
    }

    initBannerAds() {
        if (this.hasSilver()) {
            document.querySelectorAll('.ad-banner-container').forEach(c => c.style.display = 'none');
            if (window.WaveDashAdMob && window.WaveDashAdMob.isNative()) {
                window.WaveDashAdMob.removeBanner();
            }
            return;
        }

        try {
            // Push for each banner slot on the page
            document.querySelectorAll('.adsbygoogle').forEach(() => {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            });
        } catch (e) {
            console.error("AdSense banner push error:", e);
        }

        // Setup the fallback/Premium promo checker
        setTimeout(() => {
            document.querySelectorAll('.ad-banner-container').forEach(container => {
                const ins = container.querySelector('ins');
                if (!ins || ins.innerHTML.trim() === '' || ins.offsetHeight === 0 || !window.adsbygoogle) {
                    // Replace with a beautiful Premium Upgrade promo banner
                    container.innerHTML = `
                        <div style="font-family: 'Outfit'; font-size: 11px; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 800; text-transform: uppercase;">
                            <span>💎 UPGRADE TO PREMIUM FOR AN AD-FREE EXPERIENCE!</span>
                            <span style="color: var(--neon-yellow); text-decoration: underline;">LEARN MORE</span>
                        </div>
                    `;
                    container.style.border = '1px solid var(--neon-pink)';
                    container.style.boxShadow = '0 0 10px rgba(255, 0, 127, 0.15)';
                    container.style.background = 'rgba(255, 0, 127, 0.05)';
                    container.style.cursor = 'pointer';
                    container.onclick = (e) => {
                        e.stopPropagation();
                        if (window.game) window.game.openPremiumModal();
                    };
                }
            });
        }, 3000);
    }

    executeRevive() {
        if (!this.player || !this.level) return;
        
        // Calculate safe revived target X (5 seconds of travel distance backwards)
        const travelDistance = 5 * (this.player.baseVx * this.player.speedMultiplier);
        const targetX = Math.max(this.player.startX, this.player.x - travelDistance);
        
        // Find a safe Y coordinate at targetX that doesn't overlap with any solid block!
        let safeY = this.player.startY || 300;
        const testWidth = this.player.width;
        const testHeight = this.player.height;
        let foundSafeY = false;
        
        // Scan vertical positions to find a clean path
        for (let y = 100; y <= 500; y += 10) {
            let collision = false;
            for (let i = 0; i < this.level.blocks.length; i++) {
                const block = this.level.blocks[i];
                if (!block.isSolid) continue;
                
                if (targetX < block.x + block.width &&
                    targetX + testWidth > block.x &&
                    y < block.y + block.height &&
                    y + testHeight > block.y) {
                    collision = true;
                    break;
                }
            }
            if (!collision) {
                safeY = y;
                foundSafeY = true;
                break;
            }
        }
        
        this.player.isDead = false;
        this.player.x = targetX;
        this.player.y = safeY;
        this.player.vy = 0;
        this.player.isHoldingThrust = false;
        this.player.isGrounded = false;
        this.player.angle = 0;
        
        // Difficulty-variant shield durations: Easy (4s), Medium (3s), Hard (2s), Demon (1.7s)
        const shieldSecs = this.getReviveShieldDuration();
        this.player.invulnerableTimer = shieldSecs;
        this.ui.showAchievementToast('💚 REVIVED!', `Invincibility shield active for ${shieldSecs}s!`);
        
        // Snap camera immediately to the new revive coordinates so the 3s countdown centers on spawn position
        this.cameraX = this.player.x - 300;
        this.cameraX = Math.max(0, Math.min(this.level.levelLength - 1280, this.cameraX));
        
        this.particles.clear();
        
        // Close custom modal if open
        const modal = document.getElementById('revive-modal');
        if (modal) modal.style.display = 'none';

        this.ui.hideOverlays();
        this.ui.showScreen('');
        this.startReviveCountdown();
    }

    getReviveShieldDuration() {
        if (!this.levelConfig) return 4.0;
        const diffStr = (this.levelConfig.difficulty || '').toLowerCase();
        const nameStr = (this.levelConfig.name || '').toLowerCase();

        if (diffStr.includes('demon') || nameStr.includes('demon')) {
            return 1.7;
        } else if (diffStr.includes('hard') || nameStr.includes('hard')) {
            return 2.0;
        } else if (diffStr.includes('medium') || nameStr.includes('medium')) {
            return 3.0;
        } else if (diffStr.includes('easy') || nameStr.includes('easy')) {
            return 4.0;
        }

        const idx = this.levelConfig.index || 1;
        if (idx >= 31) return 1.7;
        if (idx >= 21) return 2.0;
        if (idx >= 11) return 3.0;
        return 4.0;
    }

    startReviveCountdown() {
        this.gameState = 'countdown';
        
        const overlay = document.getElementById('countdown-overlay');
        const numEl = document.getElementById('countdown-number');
        if (!overlay || !numEl) {
            this.gameState = 'playing';
            this.audio.startMusic();
            return;
        }

        overlay.style.display = 'flex';
        let count = 3;
        numEl.textContent = count;
        numEl.style.transform = 'scale(1.5)';
        setTimeout(() => { numEl.style.transform = 'scale(1)'; }, 50);

        this.audio.playClickSound();

        const interval = setInterval(() => {
            count--;
            if (count > 0) {
                numEl.textContent = count;
                this.audio.playClickSound();
                
                numEl.style.transform = 'scale(1.5)';
                setTimeout(() => { numEl.style.transform = 'scale(1)'; }, 50);
            } else if (count === 0) {
                numEl.textContent = "GO!";
                this.audio.playCongratsSound();
                
                numEl.style.transform = 'scale(1.8)';
                setTimeout(() => { numEl.style.transform = 'scale(1)'; }, 50);
            } else {
                clearInterval(interval);
                overlay.style.display = 'none';
                
                this.gameState = 'playing';
                this.audio.startMusic();
            }
        }, 1000);
    }

    playNextLevel() {
        if (!this.level) return;
        const currentIdx = this.level.index;
        const list = window.levelsList || [];
        const nextLvl = list.find(l => l.index === currentIdx + 1);
        if (nextLvl) {
            this.audio.playClickSound();
            this.startGame(nextLvl);
        } else {
            this.openHallOfLegendsModal(true);
        }
    }

    startEndlessMode() {
        this.handleEndlessClick();
    }

    handleEndlessClick() {
        this.audio.playClickSound();
        const isUnlocked = localStorage.getItem('wave_dash_endless_unlocked') === 'true' || localStorage.getItem('wave_dash_lvl500_crossed') === 'true';
        if (isUnlocked) {
            this.openEndlessConfigModal();
        } else {
            const choice = confirm(`Endless Practice Mode is $1.00 USD in Shop, or FREE for players who beat Level 500!\n\nWould you like to open the Shop to unlock Endless Mode?`);
            if (choice) {
                this.ui.showScreen('coinShop');
                this.updateEndlessMapsShopVisibility();
            }
        }
    }

    openEndlessConfigModal() {
        this.audio.playClickSound();
        const modal = document.getElementById('endless-config-modal');
        if (!modal) return;

        modal.style.display = 'flex';
        this.selectedEndlessSpeed = 1.0;
        this.selectedEndlessMap = 1;

        // Reset speed button highlights
        const speedButtons = document.querySelectorAll('.endless-speed-btn');
        speedButtons.forEach(btn => {
            const btnSpeed = parseFloat(btn.dataset.speed);
            if (btnSpeed === 1.0) {
                btn.style.background = 'rgba(0,243,255,0.25)';
                btn.style.borderColor = 'var(--neon-blue)';
                btn.style.color = '#fff';
            } else {
                btn.style.background = 'rgba(0,0,0,0.6)';
                btn.style.borderColor = 'rgba(255,255,255,0.2)';
                btn.style.color = 'rgba(255,255,255,0.6)';
            }
        });

        // Set up speed click listeners
        speedButtons.forEach(btn => {
            btn.onclick = () => {
                this.audio.playClickSound();
                this.selectedEndlessSpeed = parseFloat(btn.dataset.speed);
                speedButtons.forEach(b => {
                    b.style.background = 'rgba(0,0,0,0.6)';
                    b.style.borderColor = 'rgba(255,255,255,0.2)';
                    b.style.color = 'rgba(255,255,255,0.6)';
                });
                btn.style.background = 'rgba(0,243,255,0.25)';
                btn.style.borderColor = 'var(--neon-blue)';
                btn.style.color = '#fff';
            };
        });

        // Setup maps grid
        const mapsGrid = document.getElementById('endless-maps-grid');
        if (mapsGrid) {
            mapsGrid.innerHTML = '';
            
            const maps = [
                { id: 1, name: "Neon Cyan (Map 1)", theme: '#00f3ff', decor: '#b000ff', bgStart: '#08001a', bgEnd: '#020008', locked: false },
                { id: 2, name: "Acid Green (Map 2)", theme: '#39ff14', decor: '#ffff00', bgStart: '#051405', bgEnd: '#010501', locked: false },
                { id: 3, name: "Electric Pink (Map 3)", theme: '#ff007f', decor: '#00ffff', bgStart: '#140510', bgEnd: '#050105', locked: false },
                { id: 4, name: "Lava Crimson (Map 4)", theme: '#ff4500', decor: '#ff0000', bgStart: '#140200', bgEnd: '#050000', locked: false },
                { id: 5, name: "Cyber Gold (Map 5)", theme: '#ffd700', decor: '#ffffff', bgStart: '#141400', bgEnd: '#050500', locked: false },
                { id: 6, name: "Radioactive Purple (Map 6)", theme: '#8a2be2', decor: '#ff1493', bgStart: '#0a0514', bgEnd: '#020105', locked: true },
                { id: 7, name: "Deep Cyber Blue (Map 7)", theme: '#0000ff', decor: '#40e0d0', bgStart: '#000514', bgEnd: '#000105', locked: true },
                { id: 8, name: "Toxic Green & Orange (Map 8)", theme: '#7fff00', decor: '#ff8c00', bgStart: '#081400', bgEnd: '#020500', locked: true },
                { id: 9, name: "Shadow Indigo (Map 9)", theme: '#4b0082', decor: '#ee82ee', bgStart: '#0f0514', bgEnd: '#030105', locked: true },
                { id: 10, name: "Ultimate Emerald (Map 10)", theme: '#ffd700', decor: '#50c878', bgStart: '#140c00', bgEnd: '#050300', locked: true }
            ];

            window.ENDLESS_MAPS_LIST = maps;

            maps.forEach(map => {
                const isLocked = map.locked && 
                    localStorage.getItem(`wave_dash_endless_map_unlocked_${map.id}`) !== 'true' &&
                    localStorage.getItem('wave_dash_endless_map_unlocked_bundle') !== 'true';
                
                const card = document.createElement('div');
                card.style.background = isLocked ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.04)';
                card.style.border = map.id === 1 ? '2px solid var(--neon-blue)' : '1.5px solid rgba(255,255,255,0.1)';
                card.style.borderRadius = '10px';
                card.style.padding = '10px';
                card.style.cursor = 'pointer';
                card.style.textAlign = 'left';
                card.style.position = 'relative';
                card.style.transition = 'all 0.2s';
                card.className = 'endless-map-card';
                card.dataset.mapId = map.id;
                
                const previewHtml = `<div style="width: 14px; height: 14px; border-radius: 50%; background: ${map.theme}; border: 1.5px solid ${map.decor}; display: inline-block; vertical-align: middle; margin-right: 6px; box-shadow: 0 0 8px ${map.theme};"></div>`;
                
                card.innerHTML = `
                    <div style="font-weight: 800; font-size: 11px; color: ${isLocked ? 'rgba(255,255,255,0.4)' : '#fff'}; display: flex; align-items: center;">
                        ${previewHtml} Map ${map.id}
                    </div>
                    <div style="font-size: 9px; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase;">
                        ${isLocked ? '🔒 LOCKED (10¢)' : '🔓 UNLOCKED'}
                    </div>
                `;

                card.onclick = () => {
                    if (isLocked) {
                        this.audio.playDeathSound();
                        const buyChoice = confirm(`Map ${map.id} is locked.\n\nClick OK to buy Map ${map.id} for $0.10 USD.\nClick Cancel to see the 5-Map Bundle in the Shop.`);
                        if (buyChoice) {
                            this.activeCheckoutType = 'shop-item';
                            this.activeShopItemType = `endless-map-${map.id}`;
                            this.activeShopItemPrice = '0.10';
                            modal.style.display = 'none';
                            this.showPremiumCheckout();
                        } else {
                            modal.style.display = 'none';
                            this.ui.showScreen('coinShop');
                            this.updateEndlessMapsShopVisibility();
                        }
                    } else {
                        this.audio.playClickSound();
                        this.selectedEndlessMap = map.id;
                        document.querySelectorAll('.endless-map-card').forEach(c => {
                            c.style.borderColor = 'rgba(255,255,255,0.1)';
                            c.style.borderWidth = '1.5px';
                        });
                        card.style.borderColor = 'var(--neon-blue)';
                        card.style.borderWidth = '2px';
                    }
                };

                mapsGrid.appendChild(card);
            });
        }

        // Close button click
        const closeBtn = document.getElementById('btn-close-endless-config');
        if (closeBtn) {
            closeBtn.onclick = () => {
                this.audio.playClickSound();
                modal.style.display = 'none';
            };
        }

        // Start button click
        const startBtn = document.getElementById('btn-start-endless-play');
        if (startBtn) {
            startBtn.onclick = () => {
                this.startEndlessModeWithSettings(this.selectedEndlessMap, this.selectedEndlessSpeed);
            };
        }
    }

    startEndlessModeWithSettings(mapId, speed) {
        this.audio.playClickSound();
        const map = (window.ENDLESS_MAPS_LIST || []).find(m => m.id === mapId) || {
            theme: '#00f3ff', decor: '#b000ff', bgStart: '#08001a', bgEnd: '#020008', name: "Neon Cyan"
        };
        
        // Use a unique index per map so the generator seed changes and layout becomes different
        const endlessConfig = window.generateProceduralLevel(990 + mapId, {
            theme: map.theme, decor: map.decor, bgStart: map.bgStart, bgEnd: map.bgEnd
        });
        endlessConfig.name = `ENDLESS: ${map.name.toUpperCase()}`;
        endlessConfig.difficulty = `SPEED: ${speed}x (★ 99)`;
        endlessConfig.levelLength = 9999999;
        endlessConfig.startSpeedMultiplier = speed;
        endlessConfig.isEndless = true;
        
        // Force all speed portals inside this generated level to match selected speed
        if (endlessConfig.portals) {
            endlessConfig.portals.forEach(p => {
                if (p.type && p.type.startsWith('speed-')) {
                    p.type = 'speed-' + speed;
                }
            });
        }
        
        // Hide config modal
        const modal = document.getElementById('endless-config-modal');
        if (modal) modal.style.display = 'none';
        
        this.startGame(endlessConfig);
    }

    openHallOfLegendsModal(showRewards = false) {
        this.audio.playClickSound();
        const modal = document.getElementById('hall-of-legends-modal');
        if (!modal) return;

        const rewardBox = document.getElementById('legends-reward-box');
        if (rewardBox) {
            rewardBox.style.display = showRewards || localStorage.getItem('wave_dash_master_completed') === 'true' ? 'block' : 'none';
        }

        const tableBody = document.getElementById('legends-table-body');
        if (tableBody) {
            const currentUser = localStorage.getItem('wave_dash_logged_in_user') || 'You (Player)';
            const hasBeatMaster = localStorage.getItem('wave_dash_master_completed') === 'true';
            const hasBeat500 = localStorage.getItem('wave_dash_lvl500_crossed') === 'true';

            // Calculate user's actual completed level count from 500 to 510
            let userLevel = 0;
            if (hasBeatMaster) {
                userLevel = 510;
            } else if (hasBeat500) {
                userLevel = 500;
                // Count completed levels between 501 and 510
                for (let lvl = 501; lvl <= 510; lvl++) {
                    const best = parseInt(localStorage.getItem(`neon_dash_best_level_${lvl}`)) || 0;
                    const skipped = localStorage.getItem(`neon_dash_skipped_level_${lvl}`) === 'true';
                    if (best >= 100 || skipped) {
                        userLevel = lvl;
                    }
                }
            }

            // Create list of all players
            const leaderboard = [
                { name: 'CyberDash_X', lvl: 510, isUser: false },
                { name: 'NeonPulse99', lvl: 510, isUser: false },
                { name: 'VortexRider', lvl: 510, isUser: false },
                { name: 'ShadowWave_7', lvl: 508, isUser: false },
                { name: 'HyperGlide_PRO', lvl: 505, isUser: false },
                { name: 'SonicSurfer', lvl: 501, isUser: false }
            ];

            // If user has unlocked the Hall of Legends (crossed level 500 or is Sian Goyal developer bypass)
            const isSianGoyal = currentUser.toLowerCase() === 'sian goyal';
            if (hasBeat500 || hasBeatMaster || isSianGoyal) {
                const actualLvl = userLevel > 0 ? userLevel : 500;
                leaderboard.push({
                    name: `${currentUser} ⭐`,
                    lvl: actualLvl,
                    isUser: true
                });
            }

            // Sort descending by level completed
            leaderboard.sort((a, b) => b.lvl - a.lvl);

            // Generate rows
            let rowsHtml = '';
            leaderboard.forEach((player, index) => {
                const rankNum = index + 1;
                const isGrandmaster = player.lvl === 510;
                const badgeText = isGrandmaster ? '👑 GRANDMASTER' : '⚡ MASTER DEMON';
                const badgeBg = isGrandmaster ? '#00ff87' : 'var(--neon-yellow)';
                
                let rowStyle = 'border-bottom: 1px solid rgba(255,255,255,0.05);';
                if (player.isUser) {
                    rowStyle = isGrandmaster 
                        ? 'background: rgba(0,255,135,0.15); border-left: 3px solid #00ff87; font-weight: 800;'
                        : 'background: rgba(255,251,0,0.15); border-left: 3px solid var(--neon-yellow); font-weight: 800;';
                }

                rowsHtml += `
                    <tr style="${rowStyle}">
                        <td style="padding: 8px 10px; color: ${player.isUser ? (isGrandmaster ? '#00ff87' : 'var(--neon-yellow)') : 'var(--neon-blue)'}; font-weight: 800;">#${rankNum}</td>
                        <td style="padding: 8px 10px; color: #fff;">${player.name}</td>
                        <td style="padding: 8px 10px; color: var(--neon-yellow);">${player.lvl} / 510</td>
                        <td style="padding: 8px 10px;"><span style="background:${badgeBg}; color:#000; padding:2px 6px; border-radius:4px; font-size:9px; font-weight:900;">${badgeText}</span></td>
                    </tr>`;
            });

            tableBody.innerHTML = rowsHtml;
        }

        modal.style.display = 'flex';
    }

    checkPendingGifts() {
        const currentUser = localStorage.getItem('wave_dash_logged_in_user');
        if (!currentUser) return;

        // 0. Check Sian Goyal 500 coin gift from Yug Goyal
        if (currentUser.toLowerCase() === 'sian goyal') {
            const yugGiftClaimedKey = `wave_dash_gift_yug_claimed_${currentUser}`;
            if (localStorage.getItem(yugGiftClaimedKey) !== 'true') {
                this.showGiftCardModal(currentUser, 500, 'Yug Goyal');
                return;
            }
        }

        const claimedKey = `wave_dash_gift_claimed_${currentUser}`;
        const giftClaimed = localStorage.getItem(claimedKey) === 'true';
        if (giftClaimed) return;

        // 1. Check Sian Goyal (10,000 Coins)
        const isSian = currentUser.toLowerCase().includes('sian') || currentUser.toLowerCase().includes('goyal');
        if (isSian) {
            this.showGiftCardModal(currentUser, 10000);
            return;
        }

        // 2. Check Pooja-Gupta (500 Coins)
        const isPooja = currentUser.toLowerCase().includes('pooja') || currentUser.toLowerCase().includes('gupta');
        if (isPooja) {
            this.showGiftCardModal(currentUser, 500);
            return;
        }

        // 3. Generic check for pending gifts
        const pendingGift = localStorage.getItem(`wave_dash_pending_gift_${currentUser}`);
        if (pendingGift) {
            const amount = parseInt(pendingGift) || 500;
            this.showGiftCardModal(currentUser, amount);
        }
    }

    showGiftCardModal(username = 'Pooja-Gupta', amount = 500, sender = 'the Wave Dash Game') {
        const modal = document.getElementById('gift-card-modal');
        const nameEl = document.getElementById('gift-recipient-name');
        const amountEl = document.getElementById('gift-coin-amount');
        const claimBtn = document.getElementById('btn-claim-gift');
        const descContainer = document.getElementById('gift-modal-desc-container');

        if (!modal) return;

        if (nameEl) nameEl.textContent = username;
        if (amountEl) amountEl.textContent = amount;

        if (descContainer) {
            if (sender === 'Yug Goyal') {
                descContainer.innerHTML = `You are gifted <span style="color: #ffd700; font-size: 22px; font-weight: 900;">${amount} Coins</span> from <strong style="color: var(--neon-yellow);">${sender}</strong>! 🪙✨`;
            } else if (amount >= 10000) {
                descContainer.innerHTML = `You are gifted <span style="color: #ffd700; font-size: 22px; font-weight: 900;">10,000 Coins & the Exclusive 💎 DIAMOND Badge</span> from the <strong style="color: var(--neon-cyan);">${sender}</strong>! 🎟️`;
            } else {
                descContainer.innerHTML = `You are gifted <span style="color: #ffd700; font-size: 22px; font-weight: 900;">${amount} Coins</span> from the <strong style="color: var(--neon-cyan);">${sender}</strong>! 🪙`;
            }
        }

        if (claimBtn) {
            if (amount >= 10000) {
                claimBtn.textContent = `CLAIM COINS & DIAMOND STATUS 💎`;
            } else {
                claimBtn.textContent = `CLAIM YOUR ${amount} COINS NOW 🪙`;
            }
        }

        modal.style.display = 'flex';

        if (claimBtn) {
            claimBtn.onclick = () => {
                this.audio.playCoinSound();
                
                // Add extra coins
                const currentCoins = this.getUserCoins();
                const newTotal = currentCoins + amount;
                this.setUserCoins(newTotal);

                // Mark gift as claimed
                if (sender === 'Yug Goyal') {
                    localStorage.setItem(`wave_dash_gift_yug_claimed_${username}`, 'true');
                } else {
                    localStorage.setItem(`wave_dash_gift_claimed_${username}`, 'true');
                }

                // If Sian or high value (and not Yug's gift), activate Diamond badge + Premium
                if (sender !== 'Yug Goyal' && (username.toLowerCase().includes('sian') || username.toLowerCase().includes('goyal') || amount >= 10000)) {
                    localStorage.setItem(`wave_dash_diamond_${username}`, 'true');
                    localStorage.setItem('neon_dash_premium', 'true');
                }

                // Toast notification
                this.ui.showAchievementToast('🎁 Gift Claimed!', `Added +${amount} 🪙 to your balance! (Total: ${newTotal} 🪙)`);

                modal.style.display = 'none';

                // Save to user profile
                const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
                if (users[username]) {
                    users[username].coins = newTotal;
                    if (sender === 'Yug Goyal') {
                        users[username].giftYugClaimed = true;
                    } else {
                        users[username].giftClaimed = true;
                    }
                    if (sender !== 'Yug Goyal' && (username.toLowerCase().includes('sian') || username.toLowerCase().includes('goyal') || amount >= 10000)) {
                        users[username].isPremium = true;
                        users[username].isDiamond = true;
                    }
                    localStorage.setItem('wave_dash_users', JSON.stringify(users));
                }
                this.syncUserToCloud();
                this.checkPremiumStatus();
                this.buildLevelSelectUI();
            };
        }
    }

    // --- DAILY QUESTS ---
    initDailyQuests() {
        const today = new Date().toDateString();
        const lastDate = localStorage.getItem('wave_dash_daily_date');
        
        this.dailyQuests = [
            { id: 'coin_collector', desc: 'Collect 10 coins', target: 10, reward: 50 },
            { id: 'crash_survivor', desc: 'Survive 3 crashes using Shield', target: 3, reward: 75 },
            { id: 'practice_hero', desc: 'Place 8 practice checkpoints', target: 8, reward: 40 },
            { id: 'endless_runner', desc: 'Run 2,000m in Endless mode', target: 2000, reward: 100 }
        ];

        if (lastDate !== today) {
            localStorage.setItem('wave_dash_daily_date', today);
            const progress = { coin_collector: 0, crash_survivor: 0, practice_hero: 0, endless_runner: 0 };
            const claimed = { coin_collector: false, crash_survivor: false, practice_hero: false, endless_runner: false };
            localStorage.setItem('wave_dash_daily_progress', JSON.stringify(progress));
            localStorage.setItem('wave_dash_daily_claimed', JSON.stringify(claimed));
        }
    }

    incrementDailyQuest(id, amount) {
        try {
            const progress = JSON.parse(localStorage.getItem('wave_dash_daily_progress') || '{}');
            const claimed = JSON.parse(localStorage.getItem('wave_dash_daily_claimed') || '{}');
            if (claimed[id]) return;

            const quest = this.dailyQuests.find(q => q.id === id);
            if (!quest) return;

            const prevProgress = progress[id] || 0;
            progress[id] = Math.min(quest.target, prevProgress + amount);
            localStorage.setItem('wave_dash_daily_progress', JSON.stringify(progress));
            
            // Show toast if just completed!
            if (progress[id] === quest.target && prevProgress < quest.target) {
                this.ui.showAchievementToast('🎉 QUEST COMPLETE!', quest.desc);
                this.audio.playCoinSound();
            }
        } catch (e) {
            console.error("Error updating daily quest progress", e);
        }
    }

    claimQuestReward(id) {
        try {
            const progress = JSON.parse(localStorage.getItem('wave_dash_daily_progress') || '{}');
            const claimed = JSON.parse(localStorage.getItem('wave_dash_daily_claimed') || '{}');
            if (claimed[id]) return;

            const quest = this.dailyQuests.find(q => q.id === id);
            if (!quest) return;

            if ((progress[id] || 0) < quest.target) {
                alert("Quest not completed yet!");
                return;
            }

            claimed[id] = true;
            localStorage.setItem('wave_dash_daily_claimed', JSON.stringify(claimed));

            // Award reward
            const curCoins = this.getUserCoins();
            this.setUserCoins(curCoins + quest.reward);
            this.audio.playCoinSound();
            this.ui.showAchievementToast('🪙 Quest Reward!', `Claimed +${quest.reward} coins!`);
            this.updateCoinsDisplay();

            // Refresh quests UI
            this.renderQuestsUI();
        } catch (e) {
            console.error("Error claiming daily quest", e);
        }
    }

    renderQuestsUI() {
        const listBox = document.getElementById('quests-list');
        if (!listBox) return;
        
        listBox.innerHTML = '';
        
        const progress = JSON.parse(localStorage.getItem('wave_dash_daily_progress') || '{}');
        const claimed = JSON.parse(localStorage.getItem('wave_dash_daily_claimed') || '{}');

        this.dailyQuests.forEach(q => {
            const current = progress[q.id] || 0;
            const isCompleted = current >= q.target;
            const isClaimed = claimed[q.id];
            
            const pct = Math.min(100, Math.floor((current / q.target) * 100));

            const qDiv = document.createElement('div');
            qDiv.style.background = 'rgba(255, 255, 255, 0.04)';
            qDiv.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            qDiv.style.borderRadius = '10px';
            qDiv.style.padding = '10px';
            qDiv.style.display = 'flex';
            qDiv.style.flexDirection = 'column';
            qDiv.style.gap = '6px';

            let btnHTML = '';
            if (isClaimed) {
                btnHTML = `<button class="btn btn-secondary" style="padding: 4px 10px; font-size: 11px; align-self: flex-end;" disabled>CLAIMED ✅</button>`;
            } else if (isCompleted) {
                btnHTML = `<button class="btn btn-success btn-claim-quest" data-quest-id="${q.id}" style="padding: 4px 10px; font-size: 11px; font-weight: 800; align-self: flex-end; background: var(--neon-green); color: #000; border: none; cursor: pointer; box-shadow: 0 0 8px rgba(0,255,135,0.4);">CLAIM ${q.reward} 🪙</button>`;
            } else {
                btnHTML = `<button class="btn btn-secondary" style="padding: 4px 10px; font-size: 11px; align-self: flex-end; opacity: 0.5;" disabled>LOCKED 🔒</button>`;
            }

            qDiv.innerHTML = `
                <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; color:#fff;">
                    <span>${q.desc}</span>
                    <span style="color:var(--neon-pink);">${q.reward} 🪙</span>
                </div>
                <div style="background:rgba(0,0,0,0.5); height:8px; border-radius:4px; overflow:hidden; position:relative; margin-top:2px;">
                    <div style="background:linear-gradient(90deg, var(--neon-blue), var(--neon-pink)); width:${pct}%; height:100%;"></div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:rgba(255,255,255,0.4); margin-top:2px;">
                    <span>Progress: ${current} / ${q.target}</span>
                    ${btnHTML}
                </div>
            `;
            listBox.appendChild(qDiv);
        });

        // Bind clicks for quest claim buttons
        const claimBtns = listBox.querySelectorAll('.btn-claim-quest');
        claimBtns.forEach(btn => {
            btn.onclick = () => {
                const questId = btn.getAttribute('data-quest-id');
                this.claimQuestReward(questId);
            };
        });
    }

    // --- DAILY QUESTS COUNTDOWN TIMER ---
    updateQuestsTimerDisplay() {
        const timerEl = document.getElementById('quests-timer-value');
        if (!timerEl) return;

        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0);
        const diff = midnight - now;

        if (diff <= 0) {
            timerEl.textContent = 'Resetting...';
            // Re-init quests for new day
            this.initDailyQuests();
            this.renderQuestsUI();
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const pad = (n) => String(n).padStart(2, '0');
        timerEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    startQuestsTimer() {
        this.stopQuestsTimer();
        this.updateQuestsTimerDisplay();
        this._questsTimerInterval = setInterval(() => {
            this.updateQuestsTimerDisplay();
        }, 1000);
    }

    stopQuestsTimer() {
        if (this._questsTimerInterval) {
            clearInterval(this._questsTimerInterval);
            this._questsTimerInterval = null;
        }
    }

    // --- COIN INVESTMENT SYSTEM ---
    initInvestment() {
        this.investments = [];
        try {
            // Check for new array format
            const rawArray = localStorage.getItem('wave_dash_coin_investments');
            if (rawArray) {
                this.investments = JSON.parse(rawArray);
            } else {
                // Check for old single investment format
                const rawSingle = localStorage.getItem('wave_dash_coin_investment');
                if (rawSingle) {
                    const single = JSON.parse(rawSingle);
                    single.id = Date.now() + Math.random().toString(36).substr(2, 5); // Add unique id
                    this.investments = [single];
                    // Save in new format and remove old
                    localStorage.setItem('wave_dash_coin_investments', JSON.stringify(this.investments));
                    localStorage.removeItem('wave_dash_coin_investment');
                }
            }
        } catch (e) {
            console.error("Failed to load coin investments details", e);
        }
        
        // Start updates loop
        setInterval(() => {
            this.updateInvestmentUI();
        }, 1000);
    }

    startInvestment(amount, durationHours) {
        amount = parseInt(amount);
        durationHours = parseInt(durationHours);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid coin amount to invest.");
            return;
        }
        if (isNaN(durationHours) || durationHours <= 0) {
            alert("Please select a valid duration.");
            return;
        }

        const curCoins = this.getUserCoins();
        if (curCoins < amount) {
            alert("You do not have enough coins!");
            return;
        }

        // 5% compounding per hour for <= 24 hrs, 10% for > 24 hrs
        const rate = durationHours > 24 ? 0.10 : 0.05;

        // Deduct coins
        this.setUserCoins(curCoins - amount);
        this.updateCoinsDisplay();

        const startTime = Date.now();
        const endTime = startTime + durationHours * 60 * 60 * 1000;

        const newInvestment = {
            id: Date.now() + Math.random().toString(36).substr(2, 5), // unique ID
            principal: amount,
            rate: rate,
            startTime: startTime,
            endTime: endTime,
            durationHours: durationHours
        };

        this.investments.push(newInvestment);
        localStorage.setItem('wave_dash_coin_investments', JSON.stringify(this.investments));
        
        this.audio.playPortalSound();
        this.ui.showAchievementToast('📈 INVESTMENT STARTED!', `Locked ${amount} 🪙 for ${durationHours} hours.`);
        
        // Save to user profile
        const username = localStorage.getItem('wave_dash_logged_in_user');
        if (username) {
            const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
            if (users[username]) {
                users[username].coins = this.getUserCoins();
                localStorage.setItem('wave_dash_users', JSON.stringify(users));
            }
        }
        
        // Show active screen listing
        document.getElementById('invest-screen-form').style.display = 'none';
        document.getElementById('invest-screen-active').style.display = 'block';
        
        this.updateInvestmentUI();
    }

    withdrawInvestment(id) {
        const index = this.investments.findIndex(inv => inv.id === id);
        if (index === -1) return;
        
        const inv = this.investments[index];
        const now = Date.now();
        const principal = inv.principal;
        const endTime = inv.endTime;
        const rate = inv.rate;
        const durationHours = inv.durationHours;

        if (now >= endTime) {
            // Duration completed! Safe claim
            const finalVal = Math.round(principal * Math.pow(1 + rate, durationHours));
            
            const curCoins = this.getUserCoins();
            this.setUserCoins(curCoins + finalVal);
            this.updateCoinsDisplay();

            // Remove from array
            this.investments.splice(index, 1);
            localStorage.setItem('wave_dash_coin_investments', JSON.stringify(this.investments));

            this.audio.playCongratsSound();
            this.ui.showAchievementToast('💰 MATURED CLAIM!', `Claimed your final total: ${finalVal} 🪙!`);
            
            // Save to user profile
            const username = localStorage.getItem('wave_dash_logged_in_user');
            if (username) {
                const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
                if (users[username]) {
                    users[username].coins = this.getUserCoins();
                    localStorage.setItem('wave_dash_users', JSON.stringify(users));
                }
            }
            
            this.updateInvestmentUI();
        } else {
            // Early withdrawal penalty: Spend 20% of their principal (forfeit interest)
            const fee = Math.round(principal * 0.20);
            const refund = principal - fee;
            
            const confirmWithdraw = confirm(
                `⚠️ EARLY WITHDRAWAL WARNING ⚠️\n\n` +
                `Your investment is still locked. If you withdraw now, you must pay a 20% early-withdrawal fee (${fee} coins).\n` +
                `You will retrieve only ${refund} coins and forfeit all interest.\n\n` +
                `Do you want to proceed with early withdrawal?`
            );

            if (confirmWithdraw) {
                const curCoins = this.getUserCoins();
                this.setUserCoins(curCoins + refund);
                this.updateCoinsDisplay();

                // Remove from array
                this.investments.splice(index, 1);
                localStorage.setItem('wave_dash_coin_investments', JSON.stringify(this.investments));

                this.audio.playDeathSound();
                this.ui.showAchievementToast('⚠️ WITHDREW EARLY', `Lost ${fee} coins. Refunded ${refund} 🪙.`);
                
                // Save to user profile
                const username = localStorage.getItem('wave_dash_logged_in_user');
                if (username) {
                    const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
                    if (users[username]) {
                        users[username].coins = this.getUserCoins();
                        localStorage.setItem('wave_dash_users', JSON.stringify(users));
                    }
                }
                
                this.updateInvestmentUI();
            }
        }
    }

    updateInvestmentUI() {
        // 1. Update Main HUD Widget under coins count
        const widget = document.getElementById('global-invest-hud');
        if (!widget) return;

        if (!this.investments || this.investments.length === 0) {
            widget.style.display = 'none';
        } else {
            widget.style.display = 'flex';
            const now = Date.now();
            
            // Check if any investment is matured
            const maturedCount = this.investments.filter(inv => now >= inv.endTime).length;
            if (maturedCount > 0) {
                widget.innerHTML = `<span style="color:var(--neon-green); font-weight:900; animation: blink 1.2s infinite; font-size: 11px;">📈 CLAIM MATURED (${maturedCount}) 🪙</span>`;
                widget.style.borderColor = 'var(--neon-green)';
            } else {
                // Show total investments active and closest time left
                const nextEndTime = Math.min(...this.investments.map(inv => inv.endTime));
                const timeLeft = Math.max(0, nextEndTime - now);
                const hrs = Math.floor(timeLeft / (1000 * 60 * 60));
                const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
                const displayTime = hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m ${secs}s`;
                
                const totalPrincipal = this.investments.reduce((sum, inv) => sum + inv.principal, 0);
                widget.innerHTML = `<span style="font-size: 9px; font-weight: 700;">📈 ${this.investments.length} ACTIVE (${totalPrincipal} 🪙) - ${displayTime}</span>`;
                widget.style.borderColor = 'rgba(255,255,255,0.25)';
            }
        }

        // 2. Update popup panel if open
        const popup = document.getElementById('invest-popup');
        if (!popup || popup.style.display === 'none') return;

        const screenRules = document.getElementById('invest-screen-rules');
        const screenForm = document.getElementById('invest-screen-form');
        const screenActive = document.getElementById('invest-screen-active');
        if (!screenActive || !screenRules || !screenForm) return;

        if (!this.investments || this.investments.length === 0) {
            screenActive.style.display = 'none';
            if (screenRules.style.display === 'none' && screenForm.style.display === 'none') {
                screenRules.style.display = 'block';
            }
        } else {
            // Keep active screen shown unless we are in the form screen
            if (screenForm.style.display !== 'block') {
                screenRules.style.display = 'none';
                screenActive.style.display = 'block';
            }

            // Build list of all active investments
            let html = '<div style="display: flex; flex-direction: column; gap: 15px; max-height: 280px; overflow-y: auto; padding-right: 5px; margin-bottom: 15px;">';
            const now = Date.now();

            this.investments.forEach((inv) => {
                const timeLeft = Math.max(0, inv.endTime - now);
                const hrs = Math.floor(timeLeft / (1000 * 60 * 60));
                const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
                
                const elapsedMs = now - inv.startTime;
                const elapsedHours = Math.floor(elapsedMs / (1000 * 60 * 60));
                
                let currentVal = inv.principal;
                if (elapsedHours > 0) {
                    currentVal = Math.round(inv.principal * Math.pow(1 + inv.rate, Math.min(inv.durationHours, elapsedHours)));
                }

                const targetVal = Math.round(inv.principal * Math.pow(1 + inv.rate, inv.durationHours));
                const isMatured = now >= inv.endTime;

                html += `
                    <div style="background: rgba(255,255,255,0.03); border: 1.5px solid ${isMatured ? 'var(--neon-green)' : 'rgba(255,255,255,0.08)'}; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 6px; box-shadow: ${isMatured ? '0 0 15px rgba(57,255,20,0.15)' : 'none'};">
                        <div style="display: flex; justify-content: space-between; font-size: 11px;">
                            <span style="color: rgba(255,255,255,0.5);">Locked Principal:</span>
                            <span style="font-weight:800;">${inv.principal} 🪙</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 11px;">
                            <span style="color: rgba(255,255,255,0.5);">Interest Rate:</span>
                            <span style="font-weight:800; color: var(--neon-green);">${inv.rate * 100}% / hr</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 11px;">
                            <span style="color: rgba(255,255,255,0.5);">Current Value:</span>
                            <span style="font-weight:900; color: var(--neon-green);">${currentVal} 🪙</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 11px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 6px;">
                            <span style="color: rgba(255,255,255,0.5);">Matured Target:</span>
                            <span style="font-weight:900; color: var(--neon-yellow);">${targetVal} 🪙</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
                            <span style="font-size: 11px; font-weight: bold; color: ${isMatured ? 'var(--neon-green)' : '#fff'}">
                                ${isMatured ? '🎉 MATURED!' : `⏳ ${hrs}h ${mins}m ${secs}s left`}
                            </span>
                            <button class="btn btn-claim-inv" data-id="${inv.id}" style="padding: 6px 12px; font-size: 10px; font-weight: 800; border-radius: 6px; border: none; cursor: pointer; color: ${isMatured ? '#000' : '#fff'}; background: ${isMatured ? 'var(--neon-green)' : '#ff0055'}; box-shadow: ${isMatured ? '0 0 10px rgba(57,255,20,0.3)' : '0 0 8px rgba(255,0,85,0.2)'}; margin: 0; font-family: 'Outfit'; line-height: 1;">
                                ${isMatured ? 'CLAIM 💰' : 'WITHDRAW EARLY'}
                            </button>
                        </div>
                    </div>
                `;
            });

            html += `</div>
                <button class="btn btn-primary" id="btn-invest-new" style="width: 100%; padding: 12px; font-weight: 800; background: var(--neon-green); border: none; color: #000; border-radius: 10px; cursor: pointer; box-shadow: 0 0 12px rgba(0,255,135,0.4); font-family: 'Outfit';">➕ START ANOTHER INVESTMENT</button>
            `;

            screenActive.innerHTML = html;

            // Bind clicks for the newly rendered buttons
            const newBtn = document.getElementById('btn-invest-new');
            if (newBtn) {
                newBtn.onclick = () => {
                    screenRules.style.display = 'none';
                    screenForm.style.display = 'block';
                    screenActive.style.display = 'none';
                };
            }

            const claimButtons = screenActive.querySelectorAll('.btn-claim-inv');
            claimButtons.forEach(btn => {
                btn.onclick = (e) => {
                    e.stopPropagation();
                    this.withdrawInvestment(btn.dataset.id);
                };
            });
        }
    }

    updateTrailShopUI() {
        const owned = JSON.parse(localStorage.getItem('wave_dash_owned_trails') || '["default"]');
        const active = localStorage.getItem('wave_dash_active_trail') || 'default';
        if (this.player) {
            this.player.trailStyle = active;
        }

        const prices = {
            default: 0,
            rainbow: 500,
            matrix: 300,
            bubbles: 200,
            sparks: 150
        };

        const list = document.getElementById('trail-shop-list');
        if (!list) return;

        list.innerHTML = '';
        const trailNames = {
            default: "Default Fire/Sparks",
            rainbow: "🌈 Rainbow Stream",
            matrix: "📟 Matrix Code",
            bubbles: "🧼 Soap Bubbles",
            sparks: "⚡ Spark Energy"
        };

        Object.keys(prices).forEach(key => {
            const isOwned = owned.includes(key);
            const isActive = active === key;
            const price = prices[key];

            const row = document.createElement('div');
            row.className = "trail-option-row";
            row.style.cssText = "display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); padding:8px 12px; border-radius:8px;";

            let actionBtn = '';
            if (isActive) {
                actionBtn = `<button class="btn btn-secondary" style="padding:4px 10px; font-size:11px; font-weight:800; background:rgba(255,255,255,0.1); border:none; color:#39ff14; cursor:default;" disabled>EQUIPPED</button>`;
            } else if (isOwned) {
                actionBtn = `<button class="btn btn-success btn-equip-trail" data-trail="${key}" style="padding:4px 10px; font-size:11px; font-weight:800; background:var(--neon-blue); border:none; color:#000; cursor:pointer;">EQUIP</button>`;
            } else {
                actionBtn = `<button class="btn btn-primary btn-buy-trail" data-trail="${key}" style="padding:4px 10px; font-size:11px; font-weight:800; background:var(--neon-pink); border:none; color:#fff; cursor:pointer;">BUY ${price} 🪙</button>`;
            }

            row.innerHTML = `
                <span style="font-size:12px; font-weight:700; color:#fff;">${trailNames[key]}</span>
                ${actionBtn}
            `;
            list.appendChild(row);
        });

        // Bind clicks
        const buyBtns = list.querySelectorAll('.btn-buy-trail');
        buyBtns.forEach(btn => {
            btn.onclick = () => {
                const trail = btn.getAttribute('data-trail');
                const price = prices[trail];
                const curCoins = this.getUserCoins();
                if (curCoins < price) {
                    alert("Not enough coins to buy this trail!");
                    return;
                }
                // Purchase
                this.setUserCoins(curCoins - price);
                owned.push(trail);
                localStorage.setItem('wave_dash_owned_trails', JSON.stringify(owned));
                localStorage.setItem('wave_dash_active_trail', trail);
                if (this.player) this.player.trailStyle = trail;
                this.updateCoinsDisplay();
                this.audio.playCongratsSound();
                this.ui.showAchievementToast('✨ Trail Purchased!', `Equipped ${trailNames[trail]} style!`);
                this.updateTrailShopUI();
            };
        });

        const equipBtns = list.querySelectorAll('.btn-equip-trail');
        equipBtns.forEach(btn => {
            btn.onclick = () => {
                const trail = btn.getAttribute('data-trail');
                localStorage.setItem('wave_dash_active_trail', trail);
                if (this.player) this.player.trailStyle = trail;
                this.audio.playClickSound();
                this.ui.showAchievementToast('✨ Trail Equipped!', `Equipped ${trailNames[trail]} style!`);
                this.updateTrailShopUI();
            };
        });
    }
}

// Developer Admin Tools
window.adminSendGiftToUser = (username = 'Pooja-Gupta', amount = 500) => {
    localStorage.removeItem(`wave_dash_gift_claimed_${username}`);
    localStorage.setItem(`wave_dash_pending_gift_${username}`, amount);
    const users = JSON.parse(localStorage.getItem('wave_dash_users') || '{}');
    if (!users[username]) {
        users[username] = { username: username, coins: 0, created: Date.now() };
    }
    users[username].pendingGift = amount;
    localStorage.setItem('wave_dash_users', JSON.stringify(users));
    
    if (window.GameEngineInstance) {
        window.GameEngineInstance.checkPendingGifts();
    }
    alert(`Gift of ${amount} coins assigned to '${username}'!`);
};

window.adminAuthorizeUserForPass = (username) => {
    localStorage.setItem(`wave_dash_pass_authorized_${username}`, 'true');
    alert(`User '${username}' is now authorized to redeem the Golden Pass!`);
};

// Initialise engine after DOM contents load
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => {
        if (!window.GameEngineInstance) {
            window.GameEngineInstance = new GameEngine();
        }
        setTimeout(() => window.GameEngineInstance.checkPendingGifts(), 600);
    });
} else {
    if (!window.GameEngineInstance) {
        window.GameEngineInstance = new GameEngine();
    }
    setTimeout(() => window.GameEngineInstance.checkPendingGifts(), 600);
}
