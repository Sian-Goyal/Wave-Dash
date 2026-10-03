// Web Audio API Synthesizer and Audio System for Neon Dash

const dbName = "WaveDashDB";
const storeName = "CustomAudioStore";

function saveCustomSongToDB(dataUrl) {
    try {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName);
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction(storeName, "readwrite");
            tx.objectStore(storeName).put(dataUrl, "custom_song");
        };
    } catch (err) {
        console.error("IndexedDB write failed:", err);
    }
}

function loadCustomSongFromDB(callback) {
    try {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName);
            }
        };
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction(storeName, "readonly");
            const store = tx.objectStore(storeName);
            const getReq = store.get("custom_song");
            getReq.onsuccess = () => {
                callback(getReq.result || null);
            };
            getReq.onerror = () => callback(null);
        };
        request.onerror = () => callback(null);
    } catch (err) {
        console.error("IndexedDB read failed:", err);
        callback(null);
    }
}

function clearCustomSongFromDB() {
    try {
        const request = indexedDB.open(dbName, 1);
        request.onsuccess = (e) => {
            const db = e.target.result;
            const tx = db.transaction(storeName, "readwrite");
            tx.objectStore(storeName).delete("custom_song");
        };
    } catch (err) {
        console.error("IndexedDB delete failed:", err);
    }
}

class AudioSystem {
    constructor() {
        this.ctx = null;
        this.masterVolume = null;
        this.musicVolumeNode = null;
        this.sfxVolumeNode = null;
        
        // Volumes (0 to 1)
        this.volumes = {
            music: 0.6,
            sfx: 0.8,
            muted: false
        };

        // Load settings from localStorage
        this.loadSettings();

        // Music Sequencer State
        this.isPlayingMusic = false;
        this.bpm = 130;

        // Custom Song Audio elements
        this.customAudio = null;
        this.customAudioUrl = null;
        this.useCustomSong = localStorage.getItem('wave_dash_use_custom_song') === 'true';

        // Load persisted custom song from IndexedDB
        loadCustomSongFromDB((songData) => {
            if (songData) {
                this.customAudioUrl = songData;
                if (this.useCustomSong && this.isPlayingMusic) {
                    this.stopMusic(true);
                    this.startMusic();
                }
            }
        });
        this.lookahead = 25.0; // millisecond lookahead
        this.scheduleAheadTime = 0.1; // schedule notes 100ms in advance
        this.nextNoteTime = 0.0;
        this.current16thNote = 0;
        this.timerId = null;

        // Music arrangement (16 steps per bar, 4 bars loop)
        this.tempoMultiplier = 1.0;
        
        // Frequencies for notes
        this.notes = {
            // Octave 1
            'C1': 32.70, 'C#1': 34.65, 'D1': 36.71, 'D#1': 38.89, 'E1': 41.20, 'F1': 43.65, 'F#1': 46.25, 'G1': 49.00, 'G#1': 51.91, 'A1': 55.00, 'A#1': 58.27, 'B1': 61.74,
            // Octave 2
            'C2': 65.41, 'C#2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'B2': 123.47,
            // Octave 3
            'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
            // Octave 4
            'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
            // Octave 5
            'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77,
            // Octave 6
            'C6': 1046.50, 'C#6': 1109.73, 'D6': 1174.66, 'D#6': 1244.51, 'E6': 1318.51, 'F6': 1396.91, 'F#6': 1479.98, 'G6': 1567.98, 'G#6': 1661.22, 'A6': 1760.00, 'A#6': 1864.66, 'B6': 1975.53
        };

        // Load Selected default tune index
        this.currentTuneIndex = parseInt(localStorage.getItem('wave_dash_selected_tune_index') || '0');
        this.tunes = [
            {
                name: "Neon Highway",
                bpm: 130,
                bass: [
                    'E2', '', 'E2', '', 'E2', '', 'E2', 'G2', 'A2', '', 'A2', '', 'B2', '', 'D2', '',
                    'C2', '', 'C2', '', 'C2', '', 'C2', 'E2', 'F#2', '', 'F#2', '', 'G2', '', 'B2', '',
                    'A2', '', 'A2', '', 'A2', '', 'A2', 'C3', 'D2', '', 'D2', '', 'E2', '', 'G2', '',
                    'B2', '', 'B2', '', 'B2', '', 'B2', 'D3', 'B2', '', 'A2', '', 'G2', '', 'F#2', ''
                ],
                lead: [
                    'E4', 'B4', 'E4', 'G4', 'E4', 'B4', 'E4', 'A4', 'E4', 'B4', 'E4', 'G4', 'E4', 'F#4', 'D4', 'E4',
                    'C4', 'G4', 'C4', 'E4', 'C4', 'G4', 'C4', 'F#4', 'C4', 'G4', 'C4', 'E4', 'D4', 'A4', 'F#4', 'D4',
                    'A4', 'E5', 'A4', 'C5', 'A4', 'E5', 'A4', 'D5', 'A4', 'E5', 'A4', 'C5', 'G4', 'D5', 'B4', 'G4',
                    'B4', 'F#5', 'B4', 'D5', 'B4', 'F#5', 'B4', 'E5', 'B4', 'F#5', 'B4', 'D5', 'A4', 'E5', 'C5', 'D5'
                ]
            },
            {
                name: "Space Odyssey",
                bpm: 110,
                bass: [
                    'C2', '', 'C2', '', 'G2', '', 'G2', '', 'A2', '', 'A2', '', 'F2', '', 'F2', '',
                    'C2', '', 'C2', '', 'G2', '', 'G2', '', 'A2', '', 'A2', '', 'F2', '', 'F2', '',
                    'A2', '', 'A2', '', 'E2', '', 'E2', '', 'F2', '', 'F2', '', 'G2', '', 'G2', '',
                    'A2', '', 'A2', '', 'E2', '', 'E2', '', 'F2', '', 'F2', '', 'B2', '', 'G2', ''
                ],
                lead: [
                    'C4', 'G4', 'C5', 'G4', 'E4', 'B4', 'E5', 'B4', 'F4', 'C5', 'F5', 'C5', 'G4', 'D5', 'G5', 'D5',
                    'C4', 'G4', 'C5', 'G4', 'E4', 'B4', 'E5', 'B4', 'F4', 'C5', 'F5', 'C5', 'G4', 'D5', 'G5', 'D5',
                    'A4', 'E5', 'A5', 'E5', 'C4', 'G4', 'C5', 'G4', 'F4', 'C5', 'F5', 'C5', 'G4', 'D5', 'G5', 'D5',
                    'A4', 'E5', 'A5', 'E5', 'C4', 'G4', 'C5', 'G4', 'D4', 'A4', 'D5', 'A4', 'B4', 'F#5', 'B5', 'F#5'
                ]
            },
            {
                name: "Cyberpunk",
                bpm: 145,
                bass: [
                    'A2', 'A2', '', 'A2', 'A2', '', 'A2', 'C3', 'D2', 'D2', '', 'D2', 'D2', '', 'E2', 'G2',
                    'A2', 'A2', '', 'A2', 'A2', '', 'A2', 'C3', 'D2', 'D2', '', 'D2', 'D2', '', 'E2', 'G2',
                    'F2', 'F2', '', 'F2', 'F2', '', 'F2', 'A2', 'G2', 'G2', '', 'G2', 'G2', '', 'B2', 'D3',
                    'F2', 'F2', '', 'F2', 'F2', '', 'F2', 'A2', 'E2', 'E2', '', 'E2', 'B2', '', 'G2', ''
                ],
                lead: [
                    'A4', 'A4', 'E5', 'A4', 'G4', 'G4', 'D5', 'G4', 'F4', 'F4', 'C5', 'F4', 'E4', 'E4', 'B4', 'E4',
                    'A4', 'A4', 'E5', 'A4', 'G4', 'G4', 'D5', 'G4', 'F4', 'F4', 'C5', 'F4', 'E4', 'E4', 'B4', 'E4',
                    'D4', 'A4', 'D5', 'A4', 'C4', 'G4', 'C5', 'G4', 'E4', 'B4', 'E5', 'B4', 'G4', 'D5', 'G5', 'D5',
                    'D4', 'A4', 'D5', 'A4', 'C4', 'G4', 'C5', 'G4', 'F#4', 'C#5', 'F#5', 'C#5', 'E4', 'B4', 'E5', 'B4'
                ]
            }
        ];

        // Drum sequences
        this.kickSeq  = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
        this.snareSeq = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
        this.hatSeq   = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0];
    }

    // Initialize Audio Context on first User Interaction
    init() {
        if (this.ctx) return;
        
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            
            // Set up volume nodes
            this.masterVolume = this.ctx.createGain();
            this.musicVolumeNode = this.ctx.createGain();
            this.sfxVolumeNode = this.ctx.createGain();

            // Connect routing graph
            // Source -> Track Volume -> Master Volume -> Destination
            this.musicVolumeNode.connect(this.masterVolume);
            this.sfxVolumeNode.connect(this.masterVolume);
            this.masterVolume.connect(this.ctx.destination);

            this.updateNodeVolumes();
        } catch (e) {
            console.error("Web Audio API is not supported in this browser", e);
        }
    }

    resumeContext() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        // Register a one-time listener to resume audio on first user gesture (Chrome autoplay policy fix)
        if (!this._gestureListenerAdded) {
            this._gestureListenerAdded = true;
            const resumeOnGesture = () => {
                if (this.ctx && this.ctx.state === 'suspended') {
                    this.ctx.resume().then(() => {
                        console.log('[AudioSystem] AudioContext resumed by user gesture.');
                        if (!this.isPlayingMusic) this.startMusic();
                    });
                }
                document.removeEventListener('click', resumeOnGesture);
                document.removeEventListener('touchstart', resumeOnGesture);
                document.removeEventListener('keydown', resumeOnGesture);
            };
            document.addEventListener('click', resumeOnGesture);
            document.addEventListener('touchstart', resumeOnGesture);
            document.addEventListener('keydown', resumeOnGesture);
        }
    }

    loadSettings() {
        try {
            const musicVol = localStorage.getItem('neon_dash_music_vol');
            const sfxVol = localStorage.getItem('neon_dash_sfx_vol');
            const muted = localStorage.getItem('neon_dash_muted');

            if (musicVol !== null) this.volumes.music = parseFloat(musicVol);
            if (sfxVol !== null) this.volumes.sfx = parseFloat(sfxVol);
            if (muted !== null) this.volumes.muted = (muted === 'true');
        } catch (e) {
            console.error("Could not load volume settings", e);
        }
    }

    saveSettings() {
        try {
            localStorage.setItem('neon_dash_music_vol', this.volumes.music);
            localStorage.setItem('neon_dash_sfx_vol', this.volumes.sfx);
            localStorage.setItem('neon_dash_muted', this.volumes.muted);
        } catch (e) {
            console.error("Could not save volume settings", e);
        }
    }

    setMusicVolume(volume) {
        this.volumes.music = Math.max(0, Math.min(1, volume));
        this.updateNodeVolumes();
        this.saveSettings();
    }

    setSfxVolume(volume) {
        this.volumes.sfx = Math.max(0, Math.min(1, volume));
        this.updateNodeVolumes();
        this.saveSettings();
    }

    toggleMute() {
        this.volumes.muted = !this.volumes.muted;
        this.updateNodeVolumes();
        this.saveSettings();
        return this.volumes.muted;
    }

    updateNodeVolumes() {
        if (!this.ctx) return;
        const currentMusicVol = this.volumes.muted ? 0 : this.volumes.music;
        const currentSfxVol = this.volumes.muted ? 0 : this.volumes.sfx;

        // Smooth volume changes to avoid clicks
        const t = this.ctx.currentTime;
        this.musicVolumeNode.gain.setTargetAtTime(currentMusicVol, t, 0.05);
        this.sfxVolumeNode.gain.setTargetAtTime(currentSfxVol, t, 0.05);

        if (this.customAudio) {
            this.customAudio.volume = currentMusicVol;
        }
    }

    // -------------------------------------------------------------
    // PROCEDURAL MUSIC SYNTHESIS (Drum + Bass + Melody Sequencer)
    // -------------------------------------------------------------
    startMusic() {
        this.resumeContext();
        if (this.isPlayingMusic) return;
        if (!this.ctx) {
            console.warn('[AudioSystem] No AudioContext — cannot start music.');
            return;
        }

        this.isPlayingMusic = true;
        console.log('[AudioSystem] startMusic() called. ctx.state=' + this.ctx.state + ', useCustomSong=' + this.useCustomSong);

        if (this.useCustomSong && this.customAudioUrl) {
            if (!this.customAudio) {
                this.customAudio = new Audio(this.customAudioUrl);
                this.customAudio.loop = true;
                if (this.ctx && this.musicVolumeNode) {
                    try {
                        const source = this.ctx.createMediaElementSource(this.customAudio);
                        source.connect(this.musicVolumeNode);
                    } catch (e) {
                        console.log("AudioElementSource connection failed/already established:", e);
                    }
                }
            }
            this.updateNodeVolumes();
            this.customAudio.play().catch(err => {
                console.log("Failed to play custom music, falling back to synth:", err);
                this.nextNoteTime = this.ctx.currentTime + 0.1;
                this.current16thNote = 0;
                this.scheduler();
            });
        } else {
            this.nextNoteTime = this.ctx.currentTime + 0.1;
            this.current16thNote = 0;
            
            // Kickoff scheduler loop
            console.log('[AudioSystem] Starting synth scheduler. Tune: ' + (this.tunes[this.currentTuneIndex] || this.tunes[0]).name);
            this.scheduler();
        }
    }

    stopMusic(force = false) {
        if (!force) return;

        this.isPlayingMusic = false;
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
        }
        if (this.customAudio) {
            this.customAudio.pause();
        }
    }

    setCustomSong(urlOrDataUrl) {
        if (this.customAudio) {
            this.customAudio.pause();
            this.customAudio = null;
        }
        
        if (urlOrDataUrl) {
            this.customAudioUrl = urlOrDataUrl;
            this.useCustomSong = true;
            localStorage.setItem('wave_dash_use_custom_song', 'true');
            saveCustomSongToDB(urlOrDataUrl);
            
            // Create audio element
            this.customAudio = new Audio(urlOrDataUrl);
            this.customAudio.loop = true;
            
            if (this.ctx && this.musicVolumeNode) {
                try {
                    const source = this.ctx.createMediaElementSource(this.customAudio);
                    source.connect(this.musicVolumeNode);
                } catch (e) {
                    console.log("MediaElementSource connection failed or already connected:", e);
                }
            }
        } else {
            this.customAudioUrl = null;
            this.useCustomSong = false;
            localStorage.setItem('wave_dash_use_custom_song', 'false');
            clearCustomSongFromDB();
        }
    }
    scheduler() {
        if (!this.isPlayingMusic) return;

        while (this.nextNoteTime < this.ctx.currentTime + this.scheduleAheadTime) {
            this.scheduleNote(this.current16thNote, this.nextNoteTime);
            this.advanceNote();
        }

        this.timerId = setTimeout(() => this.scheduler(), this.lookahead);
    }

    advanceNote() {
        const currentTune = this.tunes[this.currentTuneIndex] || this.tunes[0];
        this.bpm = currentTune.bpm;

        // Calculate step duration based on BPM and current game speed multiplier
        const secondsPerBeat = 60.0 / (this.bpm * this.tempoMultiplier);
        const secondsPer16th = 0.25 * secondsPerBeat;
        
        this.nextNoteTime += secondsPer16th;
        this.current16thNote = (this.current16thNote + 1) % 64; // 4-bar loop
    }

    scheduleNote(step, time) {
        if (!this.ctx || !this.musicVolumeNode) return;

        const drumStep = step % 16;

        // 1. Kick Drum Synth
        if (this.kickSeq[drumStep] === 1) {
            this.synthesizeKick(time);
        }

        // 2. Snare Drum Synth
        if (this.snareSeq[drumStep] === 1) {
            this.synthesizeSnare(time);
        }

        // 3. Hi-Hat Synth
        if (this.hatSeq[drumStep] === 1) {
            this.synthesizeHat(time);
        }

        const currentTune = this.tunes[this.currentTuneIndex] || this.tunes[0];

        // 4. Bass synth (8th note pattern, schedule E2 / C2 / etc)
        const bassNote = currentTune.bass[step];
        if (bassNote && bassNote !== '') {
            this.synthesizeBass(this.notes[bassNote], time);
        }

        // 5. Lead Arpeggio
        const leadNote = currentTune.lead[step];
        if (leadNote && leadNote !== '' && Math.random() > 0.15) { // Add tiny dynamic variation
            this.synthesizeLead(this.notes[leadNote], time);
        }
    }

    setSpeedMultiplier(speed) {
        // Smoothly adjust synthesizer rhythm speed
        this.tempoMultiplier = speed;
    }

    // Sub-instruments for Sequencer
    synthesizeKick(time) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.connect(gain);
        gain.connect(this.musicVolumeNode);

        // Exponential frequency decay for kick thud
        osc.frequency.setValueAtTime(150, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.3);

        // Fast decay on gain
        gain.gain.setValueAtTime(1.0, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);

        osc.start(time);
        osc.stop(time + 0.3);
    }

    synthesizeSnare(time) {
        // Buffer source for noise
        const bufferSize = this.ctx.sampleRate * 0.15; // 150ms
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        // Fill buffer with white noise
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        // Bandpass filter to make it sound snappy
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1000;
        filter.Q.value = 1.0;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.6, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.musicVolumeNode);

        noise.start(time);
        noise.stop(time + 0.16);
    }

    synthesizeHat(time) {
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(10000, time);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 7000;

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.musicVolumeNode);

        osc.start(time);
        osc.stop(time + 0.05);
    }

    synthesizeBass(freq, time) {
        if (!freq || !isFinite(freq)) return; // Guard: skip undefined/invalid notes
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, time);

        // Low pass filter to create that retro plucky bass
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, time);
        filter.frequency.exponentialRampToValueAtTime(100, time + 0.12);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.55, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.musicVolumeNode);

        osc.start(time);
        osc.stop(time + 0.16);
    }

    synthesizeLead(freq, time) {
        if (!freq || !isFinite(freq)) return; // Guard: skip undefined/invalid notes
        const osc = this.ctx.createOscillator();
        const subOsc = this.ctx.createOscillator();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, time);
        
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(freq / 2, time); // sub-octave thickness

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.18, time);
        // Short gate to sound rhythmic and retro-neon
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.10);

        osc.connect(gain);
        subOsc.connect(gain);
        gain.connect(this.musicVolumeNode);

        osc.start(time);
        osc.stop(time + 0.11);
        subOsc.start(time);
        subOsc.stop(time + 0.11);
    }

    // -------------------------------------------------------------
    // SOUND EFFECTS (SFX)
    // -------------------------------------------------------------

    playJumpSound() {
        this.resumeContext();
        if (!this.ctx || !this.sfxVolumeNode) return;

        const time = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';

        // Frequency sweeps up rapidly
        osc.frequency.setValueAtTime(250, time);
        osc.frequency.exponentialRampToValueAtTime(600, time + 0.12);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.4, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);

        osc.connect(gain);
        gain.connect(this.sfxVolumeNode);

        osc.start(time);
        osc.stop(time + 0.13);
    }

    playDeathSound() {
        this.resumeContext();
        if (!this.ctx || !this.sfxVolumeNode) return;

        const time = this.ctx.currentTime;

        // 1. Heavy Synth Sweep Down
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, time);
        osc.frequency.linearRampToValueAtTime(40, time + 0.5);

        const gainOsc = this.ctx.createGain();
        gainOsc.gain.setValueAtTime(0.5, time);
        gainOsc.gain.exponentialRampToValueAtTime(0.01, time + 0.45);

        osc.connect(gainOsc);
        gainOsc.connect(this.sfxVolumeNode);

        osc.start(time);
        osc.stop(time + 0.5);

        // 2. White Noise Burst for Explosion
        const bufferSize = this.ctx.sampleRate * 0.4;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, time);
        filter.frequency.exponentialRampToValueAtTime(80, time + 0.35);

        const gainNoise = this.ctx.createGain();
        gainNoise.gain.setValueAtTime(0.8, time);
        gainNoise.gain.exponentialRampToValueAtTime(0.01, time + 0.38);

        noise.connect(filter);
        filter.connect(gainNoise);
        gainNoise.connect(this.sfxVolumeNode);

        noise.start(time);
        noise.stop(time + 0.4);
    }

    playCoinSound() {
        this.resumeContext();
        if (!this.ctx || !this.sfxVolumeNode) return;

        const time = this.ctx.currentTime;
        
        // Two-part chime: B5 then E6
        const notes = [987.77, 1318.51];
        const times = [time, time + 0.08];

        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, times[idx]);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.35, times[idx]);
            gain.gain.exponentialRampToValueAtTime(0.01, times[idx] + 0.25);

            osc.connect(gain);
            gain.connect(this.sfxVolumeNode);

            osc.start(times[idx]);
            osc.stop(times[idx] + 0.26);
        });
    }

    playPortalSound() {
        this.resumeContext();
        if (!this.ctx || !this.sfxVolumeNode) return;

        const time = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.value = 4;
        
        // Sweep filter from low to high and back
        filter.frequency.setValueAtTime(200, time);
        filter.frequency.exponentialRampToValueAtTime(2500, time + 0.15);
        filter.frequency.exponentialRampToValueAtTime(300, time + 0.3);
        
        osc.frequency.setValueAtTime(180, time);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxVolumeNode);

        osc.start(time);
        osc.stop(time + 0.3);
    }

    playClickSound() {
        this.resumeContext();
        if (!this.ctx || !this.sfxVolumeNode) return;

        const time = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, time);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

        osc.connect(gain);
        gain.connect(this.sfxVolumeNode);

        osc.start(time);
        osc.stop(time + 0.04);
    }

    playCongratsSound() {
        this.resumeContext();
        if (!this.ctx || !this.sfxVolumeNode) return;

        const time = this.ctx.currentTime;
        const pops = [time, time + 0.15]; // Two pops, 150ms apart

        pops.forEach((popTime) => {
            // Low-pass filtered noise buffer for the body thump of the pop
            const bufferSize = this.ctx.sampleRate * 0.08; // 80ms duration
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noiseNode = this.ctx.createBufferSource();
            noiseNode.buffer = buffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(350, popTime);
            filter.frequency.exponentialRampToValueAtTime(80, popTime + 0.08);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.4, popTime);
            gain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.07);

            noiseNode.connect(filter);
            filter.connect(gain);
            gain.connect(this.sfxVolumeNode);

            // Sine wave chirp overlay for the pop peak pitch
            const osc = this.ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(450, popTime);
            osc.frequency.exponentialRampToValueAtTime(150, popTime + 0.06);

            const oscGain = this.ctx.createGain();
            oscGain.gain.setValueAtTime(0.25, popTime);
            oscGain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.06);

            osc.connect(oscGain);
            oscGain.connect(this.sfxVolumeNode);

            noiseNode.start(popTime);
            osc.start(popTime);

            noiseNode.stop(popTime + 0.09);
            osc.stop(popTime + 0.09);
        });
    }

    getBeatPulse() {
        if (!this.isPlayingMusic) return 1.0;
        let elapsed = 0;
        let tempo = this.bpm || 130;
        if (this.useCustomSong && this.customAudio) {
            elapsed = this.customAudio.currentTime;
        } else if (this.ctx) {
            elapsed = this.ctx.currentTime;
        } else {
            elapsed = Date.now() / 1000;
        }
        const beatDuration = 60 / tempo;
        const beatProgress = (elapsed % beatDuration) / beatDuration;
        const pulse = Math.pow(Math.max(0, 1 - beatProgress), 3.0);
        return 1.0 + pulse * 0.35;
    }
}

// Export singleton instance or export the class
// We will export a single instance as a module or attach it globally
window.AudioSystemInstance = new AudioSystem();
