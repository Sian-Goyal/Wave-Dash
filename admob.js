/**
 * AdMob Integration Module for Wave Dash
 * 
 * Handles ad display across platforms:
 * - Android: Uses @capacitor-community/admob native plugin
 * - Web: Uses existing AdSense H5 Games Ads (adBreak API)
 * 
 * Ad Unit IDs:
 * - Banner:       ca-app-pub-3291775967524458/9122535879
 * - Interstitial: ca-app-pub-3291775967524458/3974271112
 * - Rewarded:     ca-app-pub-3291775967524458/1583911493
 */

const WaveDashAdMob = (function () {

    // --- Configuration ---
    const AD_CONFIG = {
        appId: 'ca-app-pub-3291775967524458~9593309163',
        bannerId: 'ca-app-pub-3291775967524458/9122535879',
        interstitialId: 'ca-app-pub-3291775967524458/3974271112',
        rewardedId: 'ca-app-pub-3291775967524458/1583911493',
    };

    // --- State ---
    let isNativeAdMob = false;   // true if running on Android with Capacitor AdMob plugin
    let isInitialized = false;
    let AdMobPlugin = null;      // Reference to the Capacitor AdMob plugin

    /**
     * Detect if we're running inside a Capacitor native app
     */
    function isCapacitorNative() {
        return (
            typeof window !== 'undefined' &&
            window.Capacitor &&
            window.Capacitor.isNativePlatform &&
            window.Capacitor.isNativePlatform()
        );
    }

    /**
     * Initialize the ad system.
     * On Android (Capacitor), loads the AdMob plugin and initializes.
     * On Web, does nothing (AdSense H5 Games Ads handles it via adBreak).
     */
    async function initialize() {
        if (isInitialized) return;

        if (isCapacitorNative()) {
            try {
                // Dynamically import the Capacitor AdMob plugin
                const admobModule = await import('@capacitor-community/admob');
                AdMobPlugin = admobModule.AdMob;

                if (AdMobPlugin) {
                    await AdMobPlugin.initialize({
                        initializeForTesting: false,
                        testingDevices: [],
                        // Request non-personalized ads initially for GDPR compliance
                        // You can change this based on user consent
                        requestTrackingAuthorization: true,
                    });

                    // Set up event listeners
                    setupEventListeners(admobModule);

                    isNativeAdMob = true;
                    isInitialized = true;
                    console.log('[AdMob] Native AdMob initialized successfully.');
                }
            } catch (err) {
                console.warn('[AdMob] Failed to initialize native AdMob:', err);
                isNativeAdMob = false;
                isInitialized = true; // Mark as initialized to prevent retry loops
            }
        } else {
            // Web platform — AdSense H5 Games Ads is already set up in index.html
            isNativeAdMob = false;
            isInitialized = true;
            console.log('[AdMob] Web platform detected — using AdSense H5 Games Ads.');
        }
    }

    /**
     * Set up native AdMob event listeners
     */
    function setupEventListeners(admobModule) {
        if (!admobModule) return;

        const { BannerAdPluginEvents, InterstitialAdPluginEvents, RewardAdPluginEvents } = admobModule;

        // Banner events
        if (BannerAdPluginEvents) {
            AdMobPlugin.addListener(BannerAdPluginEvents.Loaded, () => {
                console.log('[AdMob] Banner ad loaded.');
            });
            AdMobPlugin.addListener(BannerAdPluginEvents.FailedToLoad, (error) => {
                console.warn('[AdMob] Banner ad failed to load:', error);
            });
        }

        // Interstitial events
        if (InterstitialAdPluginEvents) {
            AdMobPlugin.addListener(InterstitialAdPluginEvents.Loaded, () => {
                console.log('[AdMob] Interstitial ad loaded.');
            });
            AdMobPlugin.addListener(InterstitialAdPluginEvents.FailedToLoad, (error) => {
                console.warn('[AdMob] Interstitial ad failed to load:', error);
            });
            AdMobPlugin.addListener(InterstitialAdPluginEvents.Dismissed, () => {
                console.log('[AdMob] Interstitial ad dismissed.');
            });
        }

        // Rewarded events
        if (RewardAdPluginEvents) {
            AdMobPlugin.addListener(RewardAdPluginEvents.Loaded, () => {
                console.log('[AdMob] Rewarded ad loaded.');
            });
            AdMobPlugin.addListener(RewardAdPluginEvents.FailedToLoad, (error) => {
                console.warn('[AdMob] Rewarded ad failed to load:', error);
            });
            AdMobPlugin.addListener(RewardAdPluginEvents.Rewarded, (reward) => {
                console.log('[AdMob] User earned reward:', reward);
            });
        }
    }

    // ============================================================
    //  BANNER ADS
    // ============================================================

    /**
     * Show a banner ad at the bottom of the screen.
     * Only works on native (Android). On web, banners are handled by AdSense HTML slots.
     */
    async function showBanner() {
        if (!isNativeAdMob || !AdMobPlugin) {
            console.log('[AdMob] Banner ads not available on web (using AdSense HTML slots).');
            return false;
        }

        try {
            const { BannerAdSize, BannerAdPosition } = await import('@capacitor-community/admob');
            await AdMobPlugin.showBanner({
                adId: AD_CONFIG.bannerId,
                adSize: BannerAdSize.ADAPTIVE_BANNER,
                position: BannerAdPosition.BOTTOM_CENTER,
                margin: 0,
                isTesting: false,
            });
            console.log('[AdMob] Banner ad shown.');
            return true;
        } catch (err) {
            console.warn('[AdMob] Failed to show banner:', err);
            return false;
        }
    }

    /**
     * Hide the banner ad.
     */
    async function hideBanner() {
        if (!isNativeAdMob || !AdMobPlugin) return;
        try {
            await AdMobPlugin.hideBanner();
        } catch (err) {
            console.warn('[AdMob] Failed to hide banner:', err);
        }
    }

    /**
     * Remove the banner ad completely.
     */
    async function removeBanner() {
        if (!isNativeAdMob || !AdMobPlugin) return;
        try {
            await AdMobPlugin.removeBanner();
        } catch (err) {
            console.warn('[AdMob] Failed to remove banner:', err);
        }
    }

    // ============================================================
    //  INTERSTITIAL ADS
    // ============================================================

    /**
     * Show an interstitial (full-screen) ad.
     * 
     * @param {Object} callbacks - Optional callback functions
     * @param {Function} callbacks.onAdShown - Called when ad is displayed
     * @param {Function} callbacks.onAdDismissed - Called when ad is closed
     * @param {Function} callbacks.onAdFailed - Called when ad fails to load/show
     * @returns {Promise<boolean>} - true if ad was shown, false otherwise
     */
    async function showInterstitial(callbacks = {}) {
        if (!isNativeAdMob || !AdMobPlugin) {
            console.log('[AdMob] Interstitial not available natively — use web adBreak.');
            if (callbacks.onAdFailed) callbacks.onAdFailed('not_native');
            return false;
        }

        try {
            const { InterstitialAdPluginEvents } = await import('@capacitor-community/admob');

            // Set up one-time listeners for this ad
            const dismissPromise = new Promise((resolve) => {
                const listener = AdMobPlugin.addListener(
                    InterstitialAdPluginEvents.Dismissed,
                    () => {
                        listener.remove();
                        if (callbacks.onAdDismissed) callbacks.onAdDismissed();
                        resolve(true);
                    }
                );
            });

            const failListener = AdMobPlugin.addListener(
                InterstitialAdPluginEvents.FailedToLoad,
                (error) => {
                    failListener.remove();
                    if (callbacks.onAdFailed) callbacks.onAdFailed(error);
                }
            );

            // Prepare and show
            await AdMobPlugin.prepareInterstitial({
                adId: AD_CONFIG.interstitialId,
                isTesting: false,
            });

            if (callbacks.onAdShown) callbacks.onAdShown();
            await AdMobPlugin.showInterstitial();

            await dismissPromise;
            return true;
        } catch (err) {
            console.warn('[AdMob] Interstitial failed:', err);
            if (callbacks.onAdFailed) callbacks.onAdFailed(err);
            return false;
        }
    }

    // ============================================================
    //  REWARDED ADS
    // ============================================================

    /**
     * Show a rewarded ad. Player watches the ad and gets a reward.
     * 
     * @param {Object} callbacks - Callback functions
     * @param {Function} callbacks.onAdShown - Called when ad is displayed
     * @param {Function} callbacks.onRewarded - Called when user earns the reward
     * @param {Function} callbacks.onAdDismissed - Called when ad is dismissed (user may not have earned reward)
     * @param {Function} callbacks.onAdFailed - Called when ad fails
     * @returns {Promise<boolean>} - true if ad was shown and reward earned, false otherwise
     */
    async function showRewarded(callbacks = {}) {
        if (!isNativeAdMob || !AdMobPlugin) {
            console.log('[AdMob] Rewarded not available natively — use web adBreak.');
            if (callbacks.onAdFailed) callbacks.onAdFailed('not_native');
            return false;
        }

        try {
            const { RewardAdPluginEvents } = await import('@capacitor-community/admob');
            let rewarded = false;

            // Listen for reward event
            const rewardListener = AdMobPlugin.addListener(
                RewardAdPluginEvents.Rewarded,
                (reward) => {
                    rewardListener.remove();
                    rewarded = true;
                    console.log('[AdMob] Reward earned:', reward);
                    if (callbacks.onRewarded) callbacks.onRewarded(reward);
                }
            );

            // Listen for dismiss
            const dismissPromise = new Promise((resolve) => {
                const listener = AdMobPlugin.addListener(
                    RewardAdPluginEvents.Dismissed,
                    () => {
                        listener.remove();
                        if (callbacks.onAdDismissed) callbacks.onAdDismissed(rewarded);
                        resolve(rewarded);
                    }
                );
            });

            const failListener = AdMobPlugin.addListener(
                RewardAdPluginEvents.FailedToLoad,
                (error) => {
                    failListener.remove();
                    if (callbacks.onAdFailed) callbacks.onAdFailed(error);
                }
            );

            // Prepare and show
            await AdMobPlugin.prepareRewardVideoAd({
                adId: AD_CONFIG.rewardedId,
                isTesting: false,
            });

            if (callbacks.onAdShown) callbacks.onAdShown();
            await AdMobPlugin.showRewardVideoAd();

            const result = await dismissPromise;
            return result;
        } catch (err) {
            console.warn('[AdMob] Rewarded ad failed:', err);
            if (callbacks.onAdFailed) callbacks.onAdFailed(err);
            return false;
        }
    }

    // ============================================================
    //  PUBLIC API
    // ============================================================

    return {
        initialize,
        isNative: () => isNativeAdMob,
        isReady: () => isInitialized,
        showBanner,
        hideBanner,
        removeBanner,
        showInterstitial,
        showRewarded,
        AD_CONFIG,
    };

})();

// Make it globally available
window.WaveDashAdMob = WaveDashAdMob;
