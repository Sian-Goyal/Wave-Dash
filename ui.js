// User Interface and Overlay HUD Manager for Neon Dash

class UIManager {
    constructor() {
        // UI Screens
        this.screens = {
            main: document.getElementById('main-menu-screen'),
            levelSelect: document.getElementById('level-select-screen'),
            settings: document.getElementById('settings-screen'),
            credits: document.getElementById('credits-screen'),
            shop: document.getElementById('shop-screen'),
            pause: document.getElementById('pause-screen'),
            gameOver: document.getElementById('game-over-screen'),
            levelComplete: document.getElementById('complete-screen'),
            premium: document.getElementById('premium-screen'),
            ad: document.getElementById('ad-screen'),
            account: document.getElementById('account-screen'),
            replayEnded: document.getElementById('replay-ended-screen'),
            update: document.getElementById('update-screen'),
            coinShop: document.getElementById('coin-shop-screen'),
            spendTickets: document.getElementById('spend-tickets-screen')
        };

        // HUD elements
        this.hud = document.getElementById('hud');
        this.progressBar = document.querySelector('.progress-fill');
        this.progressText = document.querySelector('.progress-text');
        this.attemptDisplay = document.getElementById('attempt-display');
        this.coinDisplay = document.getElementById('coin-display');
        this.fpsDisplay = document.getElementById('fps-display');
        this.practiceControls = document.getElementById('practice-controls');
        this.checkpointCountDisplay = document.getElementById('checkpoint-count');

        // Form elements
        this.musicSlider = document.getElementById('music-volume');
        this.sfxSlider = document.getElementById('sfx-volume');
        this.muteToggle = document.getElementById('mute-toggle');
        this.fpsToggle = document.getElementById('fps-toggle');
        this.qualitySelect = document.getElementById('graphics-quality');
        this.fullscreenBtn = document.getElementById('fullscreen-btn');

        // State settings
        this.showFps = true;
        this.unlockedAchievements = [];
        
        // Color Shop Palette options
        this.colors = [
            { primary: '#00f3ff', secondary: '#ffffff' }, // Neon Blue & White (Default)
            { primary: '#ff007f', secondary: '#ffffff' }, // Neon Pink & White
            { primary: '#39ff14', secondary: '#000000' }, // Neon Green & Black
            { primary: '#fffb00', secondary: '#111111' }, // Neon Yellow & Dark Grey
            { primary: '#b000ff', secondary: '#00f3ff' }, // Neon Purple & Blue
            { primary: '#ff5e00', secondary: '#ffffff' }, // Neon Orange & White
            { primary: '#ff0000', secondary: '#fffb00' }, // Retro Red & Yellow
            { primary: '#00ffcc', secondary: '#ff007f' }, // Mint Cyan & Hot Pink
            { primary: '#ff00ff', secondary: '#39ff14' }, // Magenta & Lime Green
            { primary: '#ffffff', secondary: '#ff007f' }  // Ultra White & Neon Pink
        ];

        this.initAchievements();
        this.loadSettings();
        this.setupColorShop();
    }

    // Screen navigation helper
    showScreen(screenKey) {
        // Hide all screens
        Object.values(this.screens).forEach(screen => {
            if (screen) screen.classList.remove('active');
        });

        // Show requested screen
        if (this.screens[screenKey]) {
            this.screens[screenKey].classList.add('active');
        }

        // Hide/Show gameplay HUD
        if (screenKey === 'pause' || screenKey === 'gameOver' || screenKey === 'levelComplete') {
            if (this.hud) this.hud.style.opacity = '1';
        } else if (screenKey === 'main' || screenKey === 'levelSelect' || screenKey === 'settings' || screenKey === 'credits' || screenKey === 'shop' || screenKey === 'coinShop' || screenKey === 'spendTickets') {
            if (this.hud) this.hud.style.opacity = '0';
        }

        // Toggle Global Coin HUD display at top-left
        const globalCoinHud = document.getElementById('global-coin-hud');
        if (globalCoinHud) {
            const isMenu = ['main', 'levelSelect', 'settings', 'credits', 'shop', 'coinShop', 'spendTickets', 'premium', 'account', 'replayEnded', 'update'].includes(screenKey);
            globalCoinHud.style.display = isMenu ? 'flex' : 'none';
        }

        // Native AdMob Banner Show/Hide
        if (window.WaveDashAdMob && window.WaveDashAdMob.isNative()) {
            const hasSilver = window.GameEngineInstance && typeof window.GameEngineInstance.hasSilver === 'function' ? window.GameEngineInstance.hasSilver() : false;
            const showBannerScreens = ['main', 'levelSelect', 'settings', 'credits', 'shop', 'coinShop', 'spendTickets', 'premium', 'account'];
            if (showBannerScreens.includes(screenKey) && !hasSilver) {
                window.WaveDashAdMob.showBanner();
            } else {
                window.WaveDashAdMob.hideBanner();
            }
        }

        // Set pointer-events on ui-layer dynamically
        const uiLayer = document.getElementById('ui-layer');
        if (uiLayer) {
            if (screenKey && screenKey !== '') {
                uiLayer.style.pointerEvents = 'auto';
            } else {
                uiLayer.style.pointerEvents = 'none';
            }
        }
    }

    hideOverlays() {
        if (this.screens.pause) this.screens.pause.classList.remove('active');
        if (this.screens.gameOver) this.screens.gameOver.classList.remove('active');
        if (this.screens.levelComplete) this.screens.levelComplete.classList.remove('active');
        if (this.hud) this.hud.style.opacity = '1';
        
        const uiLayer = document.getElementById('ui-layer');
        if (uiLayer) uiLayer.style.pointerEvents = 'none';
    }

    updateHUD(player, level, currentFps) {
        const lvlNameEl = document.getElementById('hud-level-name');
        if (lvlNameEl && level) {
            lvlNameEl.textContent = level.name;
        }

        const isEndless = level && (level.isEndless || (level.name && level.name.toUpperCase().includes('ENDLESS')));

        // A. Update progress bar
        if (isEndless) {
            if (this.progressBar && this.progressBar.parentElement) {
                this.progressBar.parentElement.style.display = 'none';
            }
            if (this.progressText) {
                const distance = Math.max(0, Math.floor((player.x - 100) / 40));
                this.progressText.textContent = `${distance}m`;
                this.progressText.style.fontSize = '18px';
                this.progressText.style.color = 'var(--neon-blue)';
            }
        } else {
            if (this.progressBar && this.progressBar.parentElement) {
                this.progressBar.parentElement.style.display = 'block';
            }
            const progressPct = Math.min(100, Math.max(0, (player.x / level.levelLength) * 100));
            if (this.progressBar) {
                this.progressBar.style.width = `${progressPct}%`;
            }
            if (this.progressText) {
                this.progressText.textContent = `${Math.floor(progressPct)}%`;
                this.progressText.style.fontSize = '14px';
                this.progressText.style.color = '#fff';
            }
        }

        // B. Update stats
        if (this.attemptDisplay) {
            this.attemptDisplay.textContent = `Attempt ${player.attempts}`;
        }
        if (this.coinDisplay) {
            this.coinDisplay.textContent = `Coins: ${player.coinsCollected}/3`;
        }

        // C. Update FPS
        if (this.fpsDisplay) {
            if (this.showFps) {
                this.fpsDisplay.style.display = 'block';
                this.fpsDisplay.textContent = `FPS: ${currentFps}`;
            } else {
                this.fpsDisplay.style.display = 'none';
            }
        }

        // D. Practice mode elements
        if (player.practiceMode) {
            if (this.practiceControls) this.practiceControls.style.display = 'flex';
            if (this.checkpointCountDisplay) {
                this.checkpointCountDisplay.textContent = `${player.checkpoints.length}`;
            }
        } else {
            if (this.practiceControls) this.practiceControls.style.display = 'none';
        }

        // E. Trigger milestone achievements
        const activeProgressPct = isEndless ? 0 : Math.min(100, Math.max(0, (player.x / level.levelLength) * 100));
        if (activeProgressPct >= 25) {
            this.triggerAchievement('spike_dodger');
        }
    }

    showGameOver(attempts, progressPercent) {
        this.showScreen('gameOver');
        const statLabel = document.getElementById('death-stat-percent');
        const attemptLabel = document.getElementById('death-stat-attempt');
        const progressTitleLabel = document.querySelector('#game-over-screen .stat-label-large');

        const activeLevel = window.activeLevelInstance;
        const activePlayer = window.activePlayerInstance;
        const isEndless = activeLevel && (activeLevel.isEndless || (activeLevel.name && activeLevel.name.toUpperCase().includes('ENDLESS')));

        if (isEndless && activePlayer) {
            const distance = Math.max(0, Math.floor((activePlayer.x - 100) / 40));
            if (statLabel) statLabel.textContent = `${distance}m`;
            if (progressTitleLabel) progressTitleLabel.textContent = 'DISTANCE REACHED';
        } else {
            if (statLabel) statLabel.textContent = `${Math.floor(progressPercent)}%`;
            if (progressTitleLabel) progressTitleLabel.textContent = 'PROGRESS';
        }

        if (attemptLabel) attemptLabel.textContent = `Attempt ${attempts}`;
    }

    showLevelComplete(levelName, attempts, coinsCollected) {
        this.showScreen('levelComplete');
        const lvlLabel = document.getElementById('complete-level-name');
        const attLabel = document.getElementById('complete-stat-attempts');
        const coinLabel = document.getElementById('complete-stat-coins');
        
        if (lvlLabel) lvlLabel.textContent = levelName;
        if (attLabel) attLabel.textContent = attempts;
        if (coinLabel) coinLabel.textContent = `${coinsCollected}/3`;

        this.triggerAchievement('rhythm_legend');
    }

    // -------------------------------------------------------------
    // SETTINGS PANEL & LOCAL STORAGE
    // -------------------------------------------------------------

    loadSettings() {
        try {
            const fpsSetting = localStorage.getItem('neon_dash_show_fps');
            const qualitySetting = localStorage.getItem('neon_dash_quality');

            if (fpsSetting !== null) {
                this.showFps = (fpsSetting === 'true');
                if (this.fpsToggle) this.fpsToggle.checked = this.showFps;
            }
            if (qualitySetting !== null) {
                if (this.qualitySelect) this.qualitySelect.value = qualitySetting;
                window.ParticleSystemInstance.setQuality(qualitySetting);
            }
        } catch (e) {
            console.error("Failed to load settings from storage", e);
        }
    }

    saveSettings() {
        try {
            localStorage.setItem('neon_dash_show_fps', this.showFps);
            if (this.qualitySelect) {
                localStorage.setItem('neon_dash_quality', this.qualitySelect.value);
            }
        } catch (e) {
            console.error("Failed to save settings to storage", e);
        }
    }

    bindSettingsEvents(audioSystem, gameContainer) {
        // Volume sliders
        if (this.musicSlider) {
            this.musicSlider.value = audioSystem.volumes.music * 100;
            this.musicSlider.addEventListener('input', (e) => {
                audioSystem.setMusicVolume(e.target.value / 100);
            });
        }
        if (this.sfxSlider) {
            this.sfxSlider.value = audioSystem.volumes.sfx * 100;
            this.sfxSlider.addEventListener('input', (e) => {
                audioSystem.setSfxVolume(e.target.value / 100);
            });
        }

        // Mute toggle
        if (this.muteToggle) {
            this.muteToggle.checked = audioSystem.volumes.muted;
            this.muteToggle.addEventListener('change', () => {
                audioSystem.toggleMute();
            });
        }

        // FPS toggle
        if (this.fpsToggle) {
            this.fpsToggle.addEventListener('change', (e) => {
                this.showFps = e.target.checked;
                this.saveSettings();
            });
        }

        // Quality Select
        if (this.qualitySelect) {
            this.qualitySelect.addEventListener('change', (e) => {
                window.ParticleSystemInstance.setQuality(e.target.value);
                this.saveSettings();
            });
        }

        // Fullscreen Toggle
        if (this.fullscreenBtn && gameContainer) {
            this.fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    gameContainer.requestFullscreen().catch(err => {
                        console.error(`Error requesting fullscreen: ${err.message}`);
                    });
                } else {
                    document.exitFullscreen();
                }
            });
        }

        // Custom background theme selection
        const bgSelect = document.getElementById('setting-bg-theme');
        if (bgSelect) {
            bgSelect.value = localStorage.getItem('wave_dash_bg_theme') || 'default';
            bgSelect.addEventListener('change', (e) => {
                localStorage.setItem('wave_dash_bg_theme', e.target.value);
            });
        }

        // Custom ship model selection
        const shipSelect = document.getElementById('setting-ship-model');
        if (shipSelect) {
            shipSelect.value = localStorage.getItem('wave_dash_ship_model') || 'arrow';
            shipSelect.addEventListener('change', (e) => {
                localStorage.setItem('wave_dash_ship_model', e.target.value);
                // Dynamically sync ship design to active instance if it exists
                if (window.activePlayerInstance) {
                    window.activePlayerInstance.modelStyle = e.target.value;
                }
            });
        }
    }

    // -------------------------------------------------------------
    // COSMETIC COLOR SHOP
    // -------------------------------------------------------------

    setupColorShop() {
        const grid = document.getElementById('shop-color-grid');
        if (!grid) return;

        grid.innerHTML = ''; // Clear default markup

        const savedC1 = localStorage.getItem('neon_dash_color1') || '#00f3ff';

        this.colors.forEach((palette, idx) => {
            const item = document.createElement('div');
            item.className = 'color-option';
            item.style.backgroundColor = palette.primary;
            item.style.color = palette.primary;
            item.style.borderColor = palette.secondary;
            
            if (palette.primary.toLowerCase() === savedC1.toLowerCase()) {
                item.classList.add('selected');
            }

            item.addEventListener('click', () => {
                // Play click audio
                window.AudioSystemInstance.playClickSound();

                // Clear previous selections
                document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
                item.classList.add('selected');

                // Apply changes to player active instance
                if (window.activePlayerInstance) {
                    window.activePlayerInstance.saveCustomColors(palette.primary, palette.secondary);
                }
            });

            grid.appendChild(item);
        });
    }

    // -------------------------------------------------------------
    // ACHIEVEMENT SYSTEM
    // -------------------------------------------------------------

    initAchievements() {
        try {
            const unlocked = localStorage.getItem('neon_dash_achievements');
            if (unlocked) {
                this.unlockedAchievements = JSON.parse(unlocked);
            }
        } catch (e) {
            console.error("Failed to load achievements", e);
        }
    }

    triggerAchievement(id) {
        if (this.unlockedAchievements.includes(id)) return; // Already unlocked

        const achievementsList = {
            'first_jump': { title: "Leap of Faith", desc: "Perform your very first jump!" },
            'spike_dodger': { title: "Spike Dodger", desc: "Pass 25% of any level!" },
            'practice_master': { title: "Practice Master", desc: "Place 5 checkpoints in Practice Mode!" },
            'coin_grabber': { title: "Golden Bounty", desc: "Collect a golden coin!" },
            'rhythm_legend': { title: "Rhythm Legend", desc: "Complete a level without dying!" },
            'gold_member': { title: "Neon Supporter", desc: "Unlock Neon Premium Membership!" }
        };

        const item = achievementsList[id];
        if (!item) return;

        // Mark as unlocked
        this.unlockedAchievements.push(id);
        try {
            localStorage.setItem('neon_dash_achievements', JSON.stringify(this.unlockedAchievements));
        } catch (e) {
            console.error("Failed to save achievement progress", e);
        }

        // Play coin sound as dynamic reward cue
        window.AudioSystemInstance.playCoinSound();

        // Render achievement notification toast
        this.showAchievementToast(item.title, item.desc);
    }

    showAchievementToast(title, desc) {
        const toast = document.getElementById('achievement-toast');
        if (!toast) return;

        const titleEl = toast.querySelector('.toast-title');
        const descEl = toast.querySelector('.toast-desc');

        if (titleEl) titleEl.textContent = title;
        if (descEl) descEl.textContent = desc;

        // Trigger slide-in transition
        toast.classList.add('show');

        // Hide after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}

// Attach globally
window.UIManagerInstance = new UIManager();
