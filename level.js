// Level Definition and Cavern Map Layouts for Neon Dash (Flight Mode)

class Level {
    constructor(config) {
        this.name = config.name;
        this.index = config.index;
        this.difficulty = config.difficulty;
        this.levelLength = config.levelLength || 10000;
        
        // Colors & Neon theme
        this.bgGradientStart = config.bgGradientStart || '#080710';
        this.bgGradientEnd = config.bgGradientEnd || '#05040a';
        this.themeColor = config.themeColor || '#00f3ff';
        this.decorColor = config.decorColor || '#ff007f';

        // Load map layout elements
        this.blocks = (config.blocks || []).map(b => ({ ...b, isSolid: b.isSolid !== false }));
        this.spikes = (config.spikes || []).map(s => ({ ...s, inverted: !!s.inverted, direction: s.direction || null }));
        this.jumpPads = config.jumpPads || [];
        this.portals = config.portals || [];
        this.coins = (config.coins || []).map((c, idx) => ({ ...c, collected: false, originalIndex: idx }));
        this.powerups = (config.powerups || []).map(p => ({ ...p, collected: false, width: p.width || 30, height: p.height || 30 }));
        this.rings = (config.rings || []).map(r => ({ ...r, activated: false, width: r.width || 60, height: r.height || 60 }));
        
        // Load spinning neon gears (sawblades)
        this.gears = (config.gears || []).map(g => ({
            x: g.x,
            y: g.y,
            radius: g.radius || 35,
            rotSpeed: g.rotSpeed || 5
        }));
        
        // Setup moving platforms
        this.blocks.forEach(b => {
            if (b.isMoving) {
                b.startX = b.startX ?? b.x;
                b.startY = b.startY ?? b.y;
                b.endX = b.endX ?? b.x;
                b.endY = b.endY ?? b.y;
                b.speed = b.speed ?? 100;
                b.direction = 1;
                b.dx = 0;
                b.dy = 0;
            }
        });
    }

    resetCoins() {
        this.coins.forEach(c => c.collected = false);
        this.powerups.forEach(p => p.collected = false);
        this.rings.forEach(r => r.activated = false);
    }

    restoreCoinStates(states) {
        if (!states) return;
        this.coins.forEach((c, i) => {
            if (i < states.length) {
                c.collected = states[i];
            }
        });
    }

    update(dt) {
        // Update Moving Platforms
        this.blocks.forEach(b => {
            if (b.isMoving) {
                const targetX = b.direction === 1 ? b.endX : b.startX;
                const targetY = b.direction === 1 ? b.endY : b.startY;

                const dx = targetX - b.x;
                const dy = targetY - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 2) {
                    b.direction *= -1;
                    b.dx = 0;
                    b.dy = 0;
                } else {
                    const moveX = (dx / dist) * b.speed * dt;
                    const moveY = (dy / dist) * b.speed * dt;

                    b.x += moveX;
                    b.y += moveY;

                    b.dx = moveX / dt;
                    b.dy = moveY / dt;
                }
            }
        });
    }

    // Helper to filter objects in a range from a sorted array
    getNearObjectsForDraw(arr, cameraX, isGear = false) {
        if (!arr || arr.length === 0) return [];
        const near = [];
        const minX = cameraX - 100;
        const maxX = cameraX + 1380;
        for (let i = 0; i < arr.length; i++) {
            const obj = arr[i];
            const objX = obj.x;
            const objMinX = isGear ? objX - (obj.radius || 35) : objX;
            const objMaxX = isGear ? objX + (obj.radius || 35) : objX + (obj.width || 0);

            if (objMaxX < minX) {
                continue;
            }
            if (objMinX > maxX) {
                break;
            }
            near.push(obj);
        }
        return near;
    }

    draw(ctx, cameraX, quality = 'high') {
        const floorY = 580;
        const ceilingY = 50;

        const beatPulse = window.AudioSystemInstance ? window.AudioSystemInstance.getBeatPulse() : 1.0;

        ctx.save();
        
        // 1. Draw Parallax Neon Grid Background
        ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.015 * beatPulse) + ')';
        ctx.lineWidth = 1;
        const gridSize = 70;
        // Parallax offset (slower scroll speed 0.15)
        const bgOffsetX = -(cameraX * 0.15) % gridSize;

        ctx.beginPath();
        for (let x = bgOffsetX; x < 1280; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, 720);
        }
        for (let y = 0; y < 720; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(1280, y);
        }
        ctx.stroke();

        // 1.5. Draw Giant Parallax Background Gears (Atmospheric details)
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1.5;
        
        const bgGears = [
            { x: 300, y: 220, r: 160, rotSpeed: 0.22 },
            { x: 850, y: 480, r: 220, rotSpeed: -0.15 },
            { x: 1300, y: 150, r: 130, rotSpeed: 0.28 }
        ];

        bgGears.forEach(gear => {
            // Parallax offset calculation (gently wrapping around width 1800)
            const gx = ((gear.x - cameraX * 0.1) % 1800 + 1800) % 1800 - 300;
            ctx.save();
            ctx.translate(gx, gear.y);
            
            const angle = ((Date.now() / 1000) % 3600) * gear.rotSpeed;
            ctx.rotate(angle);

            // Draw gear teeth outline
            ctx.beginPath();
            const teeth = 12;
            const gearPulseScale = 1.0 + (beatPulse - 1.0) * 0.3;
            const outerR = gear.r * gearPulseScale;
            const innerR = gear.r * 0.82 * gearPulseScale;
            const step = (Math.PI * 2) / teeth;

            ctx.moveTo(outerR, 0);
            for (let k = 0; k < teeth; k++) {
                let theta = k * step;
                ctx.lineTo(Math.cos(theta) * outerR, Math.sin(theta) * outerR);
                ctx.lineTo(Math.cos(theta + step * 0.5) * innerR, Math.sin(theta + step * 0.5) * innerR);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Inner spoke detail lines
            ctx.beginPath();
            for (let k = 0; k < 6; k++) {
                let theta = (k / 6) * Math.PI * 2;
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(theta) * innerR, Math.sin(theta) * innerR);
            }
            ctx.stroke();

            ctx.restore();
        });
        ctx.restore();

        // 2. Draw Floor & Ceiling lines with glowing borders
        ctx.strokeStyle = this.themeColor;
        ctx.lineWidth = 4;
        if (quality === 'high') {
            ctx.shadowColor = this.themeColor;
            ctx.shadowBlur = 10;
        }

        ctx.beginPath();
        ctx.moveTo(0, floorY);
        ctx.lineTo(1280, floorY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, ceilingY);
        ctx.lineTo(1280, ceilingY);
        ctx.stroke();

        ctx.shadowBlur = 0; // Reset blur for gameplay elements

        // Translate drawing context by camera offset
        ctx.translate(-cameraX, 0);

        // 3. Draw Blocks
        const nearBlocks = this.getNearObjectsForDraw(this.blocks, cameraX);
        nearBlocks.forEach(b => {

            // Draw Block body
            ctx.fillStyle = 'rgba(12, 10, 24, 0.96)';
            ctx.fillRect(b.x, b.y, b.width, b.height);

            // Neon glowing edges
            ctx.strokeStyle = this.decorColor;
            ctx.lineWidth = 2.5;
            if (quality === 'high') {
                ctx.shadowColor = this.decorColor;
                ctx.shadowBlur = 6;
            }
            ctx.strokeRect(b.x, b.y, b.width, b.height);
            ctx.shadowBlur = 0;

            // Draw inner grid/diagonal lines inside the blocks for visual details
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(b.x, b.y);
            ctx.lineTo(b.x + b.width, b.y + b.height);
            ctx.moveTo(b.x + b.width, b.y);
            ctx.lineTo(b.x, b.y + b.height);
            ctx.stroke();
        });

        // 4. Draw Spikes
        const nearSpikes = this.getNearObjectsForDraw(this.spikes, cameraX);
        nearSpikes.forEach(s => {

            ctx.save();
            // Gradient fill: black tip fading into a dark blue/navy bottom glow
            const spikeGrad = ctx.createLinearGradient(s.x, s.y, s.x, s.y + s.height);
            spikeGrad.addColorStop(0, '#000000'); // Pure black tip
            spikeGrad.addColorStop(0.75, '#000000'); // Solid black for most of the spike body
            spikeGrad.addColorStop(1, '#081d33'); // Subtle deep blue glow at the base
            
            ctx.fillStyle = spikeGrad;
            ctx.strokeStyle = '#00f3ff'; // Bright neon cyan/blue outline
            ctx.lineWidth = 3.2 * beatPulse; // Thicker border matching Geometry Dash style
            if (quality === 'high') {
                ctx.shadowColor = '#00f3ff';
                ctx.shadowBlur = 12 * beatPulse;
            }

            ctx.beginPath();
            if (s.direction === 'left') {
                ctx.moveTo(s.x + s.width, s.y);
                ctx.lineTo(s.x + s.width, s.y + s.height);
                ctx.lineTo(s.x, s.y + s.height / 2);
            } else if (s.direction === 'right') {
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x, s.y + s.height);
                ctx.lineTo(s.x + s.width, s.y + s.height / 2);
            } else if (s.inverted) {
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x + s.width, s.y);
                ctx.lineTo(s.x + s.width / 2, s.y + s.height);
            } else {
                ctx.moveTo(s.x, s.y + s.height);
                ctx.lineTo(s.x + s.width, s.y + s.height);
                ctx.lineTo(s.x + s.width / 2, s.y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        });

        // 5. Draw Jump Pads
        const nearJumpPads = this.getNearObjectsForDraw(this.jumpPads || [], cameraX);
        nearJumpPads.forEach(p => {

            ctx.save();
            ctx.fillStyle = 'rgba(57, 255, 20, 0.8)';
            ctx.strokeStyle = '#39ff14';
            ctx.lineWidth = 2;
            if (quality === 'high') {
                ctx.shadowColor = '#39ff14';
                ctx.shadowBlur = 10;
            }
            
            ctx.beginPath();
            ctx.ellipse(p.x + p.width / 2, p.y + p.height, p.width / 2, p.height, 0, Math.PI, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        });

        // 6. Draw Portals
        const nearPortals = this.getNearObjectsForDraw(this.portals || [], cameraX);
        nearPortals.forEach(p => {

            ctx.save();
            let color = '#00f3ff';
            let label = 'G';
            if (p.type === 'gravity-invert') {
                color = '#fffb00';
            } else if (p.type.startsWith('speed-')) {
                const speed = p.type.split('-')[1];
                label = speed + 'x';
                if (speed === '0.5') color = '#ff007f';
                if (speed === '2.0') color = '#00f3ff';
                if (speed === '3.0') color = '#fffb00';
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = 4;
            if (quality === 'high') {
                ctx.shadowColor = color;
                ctx.shadowBlur = 15;
            }

            ctx.beginPath();
            ctx.ellipse(p.x + p.width / 2, p.y + p.height / 2, p.width / 2, p.height / 2, 0, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
            ctx.fill();

            ctx.shadowBlur = 0;
            ctx.fillStyle = color;
            ctx.font = 'bold 18px "Outfit"';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, p.x + p.width / 2, p.y + p.height / 2);

            ctx.restore();
        });

        // 7. Draw Coins (Realistic gold coin with 3D spinning visual effect)
        const nearCoins = this.getNearObjectsForDraw(this.coins || [], cameraX);
        nearCoins.forEach(c => {
            if (c.collected) return;
            const idx = c.originalIndex !== undefined ? c.originalIndex : 0;

            ctx.save();
            
            // Neon gold drop glow
            if (quality === 'high') {
                ctx.shadowColor = '#ffbb00';
                ctx.shadowBlur = 15;
            }

            // Translate to center of coin
            ctx.translate(c.x + c.width / 2, c.y + c.height / 2);
            
            // Simulates 3D Y-axis spinning by scaling X width over time
            const spinScaleX = Math.abs(Math.sin((Date.now() / 250) + idx * 1.5));
            ctx.scale(spinScaleX, 1);

            const r = c.width / 2;

            // Golden radial gradient for coin surface
            const goldGrad = ctx.createRadialGradient(0, 0, r * 0.15, 0, 0, r);
            goldGrad.addColorStop(0, '#fff494'); // Bright shining gold center
            goldGrad.addColorStop(0.65, '#ffbb00'); // Classic rich gold
            goldGrad.addColorStop(1, '#995c00'); // Dark gold rim outline

            // Outer gold disc
            ctx.fillStyle = goldGrad;
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Inner coin ridge detail ring
            ctx.strokeStyle = 'rgba(153, 92, 0, 0.4)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2);
            ctx.stroke();

            // Embossed 5-point star inside gold coin
            ctx.shadowBlur = 0; // Disable shadow for clean star shape
            ctx.fillStyle = '#ffffff'; // White shiny core
            ctx.strokeStyle = '#995c00';
            ctx.lineWidth = 0.75;
            
            ctx.beginPath();
            const points = 5;
            const outerR = r * 0.42;
            const innerR = r * 0.18;
            let rotAngle = (Math.PI / 2) * 3; // start pointing upwards
            const step = Math.PI / points;

            ctx.moveTo(0, -outerR);
            for (let i = 0; i < points; i++) {
                let px = Math.cos(rotAngle) * outerR;
                let py = Math.sin(rotAngle) * outerR;
                ctx.lineTo(px, py);
                rotAngle += step;

                px = Math.cos(rotAngle) * innerR;
                py = Math.sin(rotAngle) * innerR;
                ctx.lineTo(px, py);
                rotAngle += step;
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            ctx.restore();
        });

        // 7.5. Draw Gears (Spinning Neon Sawblades)
        if (this.gears) {
            const nearGears = this.getNearObjectsForDraw(this.gears, cameraX, true);
            nearGears.forEach(g => {
                    ctx.save();
                    ctx.translate(g.x, g.y);
                    
                    // Rotate over time modulo 3600 to preserve floating-point precision
                    const rotation = ((Date.now() / 1000) % 3600) * g.rotSpeed * 2.8;
                    ctx.rotate(rotation);

                    // Sawblade styles
                    ctx.strokeStyle = '#ff0055'; // Hot neon pink/magenta
                    ctx.fillStyle = 'rgba(255, 0, 85, 0.22)';
                    ctx.lineWidth = 2.5 * beatPulse;

                    if (quality === 'high') {
                        ctx.shadowColor = '#ff0055';
                        ctx.shadowBlur = 12 * beatPulse;
                    }

                    // Draw pointed saw teeth
                    ctx.beginPath();
                    const teethCount = 10;
                    const gearPulseScale = 1.0 + (beatPulse - 1.0) * 0.25;
                    const outerR = g.radius * gearPulseScale;
                    const innerR = g.radius * 0.72 * gearPulseScale;
                    const angleStep = (Math.PI * 2) / teethCount;

                    ctx.moveTo(outerR, 0);
                    for (let i = 0; i < teethCount; i++) {
                        let angle = i * angleStep;
                        ctx.lineTo(Math.cos(angle) * outerR, Math.sin(angle) * outerR);
                        ctx.lineTo(Math.cos(angle + angleStep * 0.5) * innerR, Math.sin(angle + angleStep * 0.5) * innerR);
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();

                    // Inner spokes details (Industrial rotating look)
                    ctx.shadowBlur = 0; // disable shadow for clean inner details
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.5;
                    
                    // Draw 4 radial spoke lines
                    for (let i = 0; i < 4; i++) {
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        let a = (i * Math.PI / 2);
                        ctx.lineTo(Math.cos(a) * (innerR - 2), Math.sin(a) * (innerR - 2));
                        ctx.stroke();
                    }

                    // Draw a concentric inner circle detail
                    ctx.beginPath();
                    ctx.arc(0, 0, innerR * 0.6, 0, Math.PI * 2);
                    ctx.stroke();

                    // Center details (axle)
                    ctx.strokeStyle = '#ffffff';
                    ctx.fillStyle = '#ff0055';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(0, 0, g.radius * 0.22, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();

                    ctx.restore();
            });
        }

        // 7.7. Draw Powerups (Magnet and Shield)
        if (this.powerups) {
            const nearPowerups = this.getNearObjectsForDraw(this.powerups, cameraX);
            nearPowerups.forEach(p => {
                if (p.collected) return;

                ctx.save();
                // Floating bounce animation
                const bounce = Math.sin((Date.now() / 200) + p.x * 0.05) * 6;
                ctx.translate(p.x + p.width / 2, p.y + p.height / 2 + bounce);

                let pColor = p.type === 'magnet' ? '#ff00ff' : '#00ff87';
                ctx.strokeStyle = pColor;
                ctx.lineWidth = 3;
                if (quality === 'high') {
                    ctx.shadowColor = pColor;
                    ctx.shadowBlur = 12;
                }

                // Outer circle bubble
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.beginPath();
                ctx.arc(0, 0, p.width / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Inner icon
                ctx.fillStyle = pColor;
                ctx.font = 'bold 15px "Outfit"';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                if (p.type === 'magnet') {
                    ctx.fillText('🧲', 0, 0);
                } else if (p.type === 'shield') {
                    ctx.fillText('🛡️', 0, 0);
                }

                ctx.restore();
            });
        }

        // 7.8. Draw Rings (Boost and Gravity)
        if (this.rings) {
            const nearRings = this.getNearObjectsForDraw(this.rings, cameraX);
            nearRings.forEach(r => {
                if (r.activated) return;

                ctx.save();
                ctx.translate(r.x + r.width / 2, r.y + r.height / 2);

                const ringScale = 1.0 + Math.sin(Date.now() / 150) * 0.06;
                ctx.scale(ringScale, ringScale);

                let rColor = r.type === 'boost' ? '#00ff87' : '#fffb00';
                ctx.strokeStyle = rColor;
                ctx.lineWidth = 4;
                if (quality === 'high') {
                    ctx.shadowColor = rColor;
                    ctx.shadowBlur = 15;
                }

                // Outer dotted/dashed ring
                ctx.beginPath();
                ctx.arc(0, 0, r.width / 2, 0, Math.PI * 2);
                ctx.setLineDash([6, 6]);
                ctx.stroke();

                // Inner solid ring
                ctx.beginPath();
                ctx.arc(0, 0, r.width * 0.35, 0, Math.PI * 2);
                ctx.setLineDash([]);
                ctx.lineWidth = 2.5;
                ctx.stroke();

                // Draw arrow indicator inside
                ctx.fillStyle = rColor;
                ctx.font = 'bold 14px "Outfit"';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                if (r.type === 'boost') {
                    ctx.fillText('>>', 0, 0);
                } else if (r.type === 'gravity') {
                    ctx.fillText('⇅', 0, 0);
                }

                ctx.restore();
            });
        }

        // 8. Draw Level End Line
        ctx.save();
        ctx.strokeStyle = '#39ff14';
        ctx.lineWidth = 5;
        if (quality === 'high') {
            ctx.shadowColor = '#39ff14';
            ctx.shadowBlur = 15;
        }
        ctx.beginPath();
        ctx.moveTo(this.levelLength, floorY);
        ctx.lineTo(this.levelLength, ceilingY);
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#39ff14';
        for (let y = ceilingY; y < floorY; y += 40) {
            if (Math.floor(y / 40) % 2 === 0) {
                ctx.fillRect(this.levelLength - 10, y, 20, 20);
            }
        }
        ctx.restore();

        ctx.restore();
    }
}

// -------------------------------------------------------------
// CAVERN MAP LAYOUTS (Spikes and obstacles distributed everywhere)
// -------------------------------------------------------------

const Level1_Config = {
    name: "Neon Flight",
    difficulty: "Normal",
    levelLength: 8500,
    themeColor: "#00f3ff",
    decorColor: "#ff007f",
    bgGradientStart: "#050518",
    bgGradientEnd: "#020108",
    
    // Solid Blocks: standard platforms and cavern pillars (floating wall column replaced by gear)
    blocks: [
        // Cavern Intro blocks (ceiling and floor obstacles)
        { x: 500, y: 500, width: 250, height: 80 },  // Floor bump
        { x: 900, y: 50, width: 300, height: 200 },  // Ceiling drop-down
        { x: 1000, y: 500, width: 200, height: 80 }, // Floor bump

        // Winding tunnel 1 (narrow flight corridor)
        { x: 1800, y: 460, width: 750, height: 120 }, // Floor tunnel wall
        { x: 1800, y: 50, width: 750, height: 210 },  // Ceiling tunnel wall
        
        // Ceiling flip prep
        { x: 3200, y: 500, width: 200, height: 80 },

        // Upside-down cavern segment (Gravity flipped)
        { x: 3800, y: 50, width: 600, height: 150 },  // Flat ceiling to slide along
        { x: 4000, y: 430, width: 250, height: 150 }, // Giant column on the ground!
        { x: 4600, y: 50, width: 500, height: 180 },  // Hanging structures
        { x: 4750, y: 480, width: 120, height: 100 },

        // Zig-zag structures
        { x: 5500, y: 480, width: 150, height: 100 }, // Floor step
        { x: 5750, y: 50, width: 150, height: 350 },  // Deep ceiling drop
        { x: 6000, y: 360, width: 150, height: 220 }, // Floor wall
        { x: 6250, y: 50, width: 150, height: 420 },  // Deep ceiling drop

        // Moving vertical obstacle
        { x: 6900, y: 460, width: 120, height: 40, isMoving: true, startX: 6900, startY: 460, endX: 6900, endY: 180, speed: 120 },
        { x: 7200, y: 150, width: 120, height: 40, isMoving: true, startX: 7200, startY: 150, endX: 7200, endY: 420, speed: 100 },

        // Final exit corridor
        { x: 7700, y: 500, width: 500, height: 80 },
        { x: 7700, y: 50, width: 500, height: 180 }
    ],

    // Spikes (placed on floor, ceiling, and sides to enforce steering)
    spikes: [
        // Intro spikes
        { x: 600, y: 460, width: 40, height: 40 },
        { x: 1000, y: 250, width: 40, height: 40, inverted: true }, // Hanging under ceiling drop-down
        { x: 1100, y: 460, width: 40, height: 40 },

        // Inside the tunnel (requires flying up and down)
        { x: 1950, y: 420, width: 40, height: 40 },                 // On the floor of the tunnel
        { x: 2150, y: 260, width: 40, height: 40, inverted: true },  // Hanging from tunnel ceiling
        { x: 2350, y: 420, width: 40, height: 40 },

        // Spine spikes on floating blocks
        { x: 2840, y: 260, width: 40, height: 40 },                 // Top spike
        { x: 2840, y: 420, width: 40, height: 40, inverted: true },  // Bottom spike

        // Gravity flip corridor obstacles
        { x: 4100, y: 390, width: 40, height: 40 },                 // Spike on floor bump
        { x: 4400, y: 200, width: 40, height: 40, inverted: true },  // Hanging spike
        { x: 4800, y: 200, width: 40, height: 40, inverted: true },

        // Zig-zag corridor spikes
        { x: 5550, y: 440, width: 40, height: 40 },
        { x: 6050, y: 320, width: 40, height: 40 },
        
        // Sideways Wall Spikes (attached to block walls)
        { x: 860, y: 150, width: 40, height: 40, direction: 'left' },
        { x: 5710, y: 280, width: 40, height: 40, direction: 'left' },
        { x: 6150, y: 420, width: 40, height: 40, direction: 'right' },
        { x: 6210, y: 300, width: 40, height: 40, direction: 'left' },
 
        // Final exit spikes
        { x: 7850, y: 460, width: 40, height: 40 },
        { x: 8050, y: 230, width: 40, height: 40, inverted: true }
    ],

    // Jump Pads
    jumpPads: [
        { x: 800, y: 565, width: 40, height: 15 },
        { x: 3100, y: 565, width: 40, height: 15 }, // Propels player high into the gravity invert portal
        { x: 5300, y: 565, width: 40, height: 15 }
    ],

    // Portals (Flipping gravity and modifying speed)
    portals: [
        { x: 3350, y: 250, width: 50, height: 120, type: 'gravity-invert' }, // ceiling flip
        { x: 5050, y: 250, width: 50, height: 120, type: 'gravity-normal' }, // floor flip
        { x: 5400, y: 250, width: 50, height: 120, type: 'speed-2.0' },     // speed 2x
        { x: 7550, y: 250, width: 50, height: 120, type: 'speed-1.0' }      // speed 1x
    ],

    // Coins (Floating in tight vertical gaps)
    coins: [
        { x: 1425, y: 180, width: 30, height: 30 }, // Floating above the middle pillar
        { x: 2150, y: 340, width: 30, height: 30 }, // Centered in the middle of tunnel corridor
        { x: 6945, y: 100, width: 30, height: 30 }  // Floating high above the moving platform
    ],

    // Gears (Spinning Neon Sawblades replacing floating columns in between)
    gears: [
        { x: 1440, y: 360, radius: 55, rotSpeed: 4.5 },   // Big gear in the first gap
        { x: 2800, y: 190, radius: 45, rotSpeed: -5.0 },  // Top gear inside the winding tunnel
        { x: 2940, y: 440, radius: 45, rotSpeed: 5.0 },   // Bottom gear inside the winding tunnel
        { x: 5750, y: 460, radius: 50, rotSpeed: 3.5 },   // Middle gear inside the zig-zag gap
        { x: 6150, y: 180, radius: 40, rotSpeed: -6.0 }   // High gear in final segment
    ]
};

const Level2_Config = {
    name: "Cyber Corridor",
    difficulty: "Hard",
    levelLength: 10500,
    themeColor: "#ff007f",
    decorColor: "#39ff14",
    bgGradientStart: "#120212",
    bgGradientEnd: "#050005",

    blocks: [
        // Fast start corridor
        { x: 500, y: 480, width: 300, height: 100 },
        { x: 500, y: 50, width: 300, height: 200 },
        
        // High columns to fly around
        { x: 1000, y: 250, width: 80, height: 330 }, // Block sticking up
        { x: 1300, y: 50, width: 80, height: 330 },  // Block sticking down
        { x: 1600, y: 250, width: 80, height: 330 }, // Block sticking up
        
        // Hyper speed tunnel 1
        { x: 2200, y: 420, width: 1200, height: 160 },
        { x: 2200, y: 50, width: 1200, height: 200 },

        // Inner vertical block gates inside tunnel
        { x: 2500, y: 360, width: 50, height: 60 },
        { x: 2800, y: 250, width: 50, height: 60 },
        { x: 3100, y: 360, width: 50, height: 60 },

        // Gravity flip cavern
        { x: 3800, y: 50, width: 1400, height: 100 }, // ceiling
        { x: 4100, y: 380, width: 150, height: 200 }, // floor bumps
        { x: 4500, y: 200, width: 150, height: 380 },
        { x: 4900, y: 50, width: 200, height: 320 },

        // Maze of tiny floating boxes
        { x: 5700, y: 250, width: 80, height: 80 },
        { x: 5900, y: 400, width: 80, height: 80 },
        { x: 6100, y: 150, width: 80, height: 80 },
        { x: 6300, y: 300, width: 80, height: 80 },

        // Massive walls (must fly through small paths)
        { x: 6800, y: 50, width: 100, height: 400 },
        { x: 7100, y: 270, width: 100, height: 310 },
        { x: 7400, y: 50, width: 100, height: 400 },

        // Moving block corridors
        { x: 8000, y: 50, width: 100, height: 150, isMoving: true, startX: 8000, startY: 50, endX: 8000, endY: 300, speed: 150 },
        { x: 8300, y: 430, width: 100, height: 150, isMoving: true, startX: 8300, startY: 430, endX: 8300, endY: 180, speed: 150 },

        // Final corridor sprint
        { x: 9000, y: 480, width: 1000, height: 100 },
        { x: 9000, y: 50, width: 1000, height: 200 }
    ],

    spikes: [
        // Spikes on the introductory columns
        { x: 1020, y: 210, width: 40, height: 40 },
        { x: 1320, y: 380, width: 40, height: 40, inverted: true },
        { x: 1620, y: 210, width: 40, height: 40 },

        // Spikes inside the fast tunnel
        { x: 2350, y: 380, width: 40, height: 40 },
        { x: 2650, y: 250, width: 40, height: 40, inverted: true },
        { x: 2950, y: 380, width: 40, height: 40 },
        
        // Gravity flip segment spikes (inverted / regular)
        { x: 4150, y: 340, width: 40, height: 40 },
        { x: 4550, y: 160, width: 40, height: 40 },
        { x: 5000, y: 370, width: 40, height: 40 },

        // Floating box spikes
        { x: 5720, y: 210, width: 40, height: 40 },
        { x: 5920, y: 360, width: 40, height: 40 },
        { x: 6120, y: 110, width: 40, height: 40 },

        // Massive wall spikes (placed at opening lines)
        { x: 6830, y: 450, width: 40, height: 40 },
        { x: 7130, y: 230, width: 40, height: 40, inverted: true },
        { x: 7430, y: 450, width: 40, height: 40 },

        // Final flight spikes (triple spikes at high speed!)
        { x: 9200, y: 440, width: 40, height: 40 },
        { x: 9400, y: 250, width: 40, height: 40, inverted: true },
        { x: 9600, y: 440, width: 40, height: 40 },
        { x: 9640, y: 440, width: 40, height: 40 }
    ],

    jumpPads: [
        { x: 850, y: 565, width: 40, height: 15 },
        { x: 2000, y: 565, width: 40, height: 15 },
        { x: 3600, y: 565, width: 40, height: 15 }
    ],

    portals: [
        { x: 900, y: 250, width: 50, height: 120, type: 'speed-2.0' },       // starts fast
        { x: 3650, y: 250, width: 50, height: 120, type: 'gravity-invert' }, // ceiling flip
        { x: 5350, y: 250, width: 50, height: 120, type: 'gravity-normal' }, // floor flip
        { x: 6500, y: 250, width: 50, height: 120, type: 'speed-3.0' },       // hyper speed
        { x: 8800, y: 250, width: 50, height: 120, type: 'speed-1.0' }       // reset normal speed
    ],

    coins: [
        { x: 1325, y: 420, width: 30, height: 30 }, // Floating in column gaps
        { x: 2810, y: 320, width: 30, height: 30 }, // Floating between gates inside tunnel
        { x: 7135, y: 200, width: 30, height: 30 }  // Floating above the second massive wall
    ]
};

window.Level1_Config = Level1_Config;
window.Level2_Config = Level2_Config;

// Programmatically generate 60 completely unique levels procedurally
// - Levels 1-20: Easy (slow speed, smaller spikes, stationary blocks, fewer/smaller sawblades)
// - Levels 21-40: Medium (normal fast speed, moving columns, standard sawblades)
// - Levels 41-60: Hard (insane speed, larger spikes, fast moving columns, massive sawblades)
const neonColors = [
    { theme: '#00f3ff', decor: '#ff007f', bgStart: '#050518', bgEnd: '#020108' }, // Cyan & Pink
    { theme: '#ff007f', decor: '#39ff14', bgStart: '#120212', bgEnd: '#050005' }, // Pink & Green
    { theme: '#39ff14', decor: '#fffb00', bgStart: '#021202', bgEnd: '#000300' }, // Green & Yellow
    { theme: '#fffb00', decor: '#00f3ff', bgStart: '#121202', bgEnd: '#050500' }, // Yellow & Cyan
    { theme: '#b000ff', decor: '#39ff14', bgStart: '#0b021c', bgEnd: '#02000a' }, // Purple & Green
    { theme: '#ff5e00', decor: '#00f3ff', bgStart: '#1a0800', bgEnd: '#080200' }  // Orange & Cyan
];

function generateProceduralLevel(i, color) {
    let diff = "Easy";
    let stars = 2;
    let speedVal = "speed-1.0";
    
    if (i >= 1 && i <= 10) {
        diff = "Easy";
        stars = 2;
        speedVal = "speed-1.0";
    } else if (i >= 11 && i <= 20) {
        diff = "Medium";
        stars = 5;
        speedVal = "speed-1.3";
    } else if (i >= 21 && i <= 30) {
        diff = "Hard";
        stars = 8;
        speedVal = "speed-1.8";
    } else if (i >= 31 && i <= 40) {
        diff = "Demon";
        stars = 10;
        speedVal = "speed-2.2";
    } else {
        // Levels 41 to 500+ scale dynamically into Master & Extreme Demon tiers!
        const randVal = (i * 37) % 4;
        if (randVal === 0) {
            diff = "Medium";
            stars = 5;
            speedVal = "speed-1.4";
        } else if (randVal === 1) {
            diff = "Hard";
            stars = 8;
            speedVal = "speed-1.8";
        } else {
            diff = "Demon";
            stars = 10;
            speedVal = "speed-2.2";
        }
    }

    let maxLevelLength = 8500;
    if (i >= 990) {
        maxLevelLength = 1000000; // 1 Million pixels of endless gameplay!
    } else {
        if (diff === "Easy") maxLevelLength = 7500;
        else if (diff === "Medium") maxLevelLength = 9000;
        else if (diff === "Hard") maxLevelLength = 11000;
        else if (diff === "Demon") maxLevelLength = 13000;
    }

    const blocks = [];
    const spikes = [];
    const portals = [];
    const jumpPads = [];
    const coins = [];
    const gears = [];
    const powerups = [];
    const rings = [];

    // Runway starts clean
    blocks.push({ x: 0, y: 500, width: 800, height: 80 });
    blocks.push({ x: 0, y: 50, width: 800, height: 150 });

    // Place starting speed portals (glowing full vertical neon wall)
    portals.push({ x: 600, y: 200, width: 50, height: 300, type: speedVal });

    // Seeded pseudo-randomizer based on level index
    let seed = i * 154.37;
    function random() {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    let currentX = 1000;
    while (currentX < maxLevelLength) {
        let segType;
        if (diff === "Easy") {
            // For levels 1 to 30, only corridors (0) or static columns (1) are generated.
            // No narrow wind tunnels (2) or gravity invert portals (3)!
            segType = random() < 0.8 ? 0 : 1;
        } else {
            segType = Math.floor(random() * 4);
        }

        if (segType === 0) {
            // Normal corridor
            let ceilHeight = 150 + (i % 5) * 6;
            let floorHeight = 80 + (i % 7) * 4;
            let width = 300 + Math.floor(random() * 250) - (i % 7) * 12;
            
            if (diff === "Easy") {
                width = 500 + Math.floor(random() * 200); // Widened corridors for Easy
            }

            blocks.push({ x: currentX, y: 500, width: width, height: floorHeight });
            blocks.push({ x: currentX, y: 50, width: width, height: ceilHeight });

            // Gear Sawblade
            if (random() < 0.6) {
                if (diff !== "Easy") { // No sawblades in corridors for Easy mode!
                    let radius = diff === "Medium" ? 45 : 56;
                    let baseRot = 4 + (i * 0.015) + random() * 3;
                    let rotMult = (diff === "Hard" || diff === "Demon" ? 1.6 : 1);
                    gears.push({
                        x: currentX + width / 2,
                        y: 180 + Math.floor(random() * 200),
                        radius: Math.floor(radius),
                        rotSpeed: (random() < 0.5 ? -1 : 1) * baseRot * rotMult
                    });
                }
            } else {
                // Spikes counts and density grow continuously with level index i!
                let floorSpikeChance = diff === "Easy" ? 0.3 : 0.45 + (i * 0.0018);
                if (random() < floorSpikeChance) {
                    let doubleSpikeChance = diff === "Easy" ? 0 : 0.15 + (i * 0.002);
                    let tripleSpikeChance = (i > 120 && diff !== "Easy") ? 0.08 + (i * 0.001) : 0;
                    
                    let spikeCount = 1;
                    if (random() < tripleSpikeChance) spikeCount = 3;
                    else if (random() < doubleSpikeChance) spikeCount = 2;

                    const spikeW = diff === "Easy" ? 30 : (diff === "Hard" || diff === "Demon") ? 46 : 40;
                    const spikeH = diff === "Easy" ? 30 : (diff === "Hard" || diff === "Demon") ? 46 : 40;
                    for (let k = 0; k < spikeCount; k++) {
                        spikes.push({
                            x: currentX + width / 2 - (spikeW * spikeCount) / 2 + (k * spikeW),
                            y: 500 - spikeH,
                            width: spikeW,
                            height: spikeH
                        });
                    }
                }

                // Inverted Ceiling Spikes hanging from top (cyan/neon ceiling spikes pointing down)
                let ceilSpikeChance = diff === "Easy" ? 0.35 : 0.65;
                if (random() < ceilSpikeChance) {
                    let spikeW = 40;
                    let spikeH = 40;
                    spikes.push({
                        x: currentX + width / 4 + Math.floor(random() * (width / 2)),
                        y: 50 + ceilHeight,
                        width: spikeW,
                        height: spikeH,
                        inverted: true
                    });
                }
            }
            
            let spacingVal = diff === "Easy"
                ? 300 + Math.floor(random() * 150) // Extra safety spacing on Easy
                : Math.max(55, 130 - (i * 0.4) + Math.floor(random() * 70)); // Tight spacing on Hard/Demon
            currentX += width + spacingVal;
        }
        else if (segType === 1) {
            // Cavern boundaries
            let ceilHeight = 150 + (i % 6) * 5;
            let floorHeight = 80 + (i % 8) * 3;
            let width = 80 + Math.floor(random() * 50) + (i % 5) * 8;
            let fromBottom = random() < 0.5;

            if (diff === "Easy") width = 60; // Narrow columns = more flight space on Easy

            blocks.push({ x: currentX, y: 500, width: width + 220, height: floorHeight });
            blocks.push({ x: currentX, y: 50, width: width + 220, height: ceilHeight });

            if (fromBottom) {
                let minTopY = diff === "Easy" ? 360 : 335; 
                let height = 80 + Math.floor(random() * 80); // base height: 80px to 160px
                if (diff === "Easy") height = 60 + Math.floor(random() * 40); // Shorter columns on Easy
                
                let isMoving = (diff !== "Easy" && random() < 0.55);
                
                let colY = 500 - height;
                let endY = colY;
                if (isMoving) {
                    let moveAmount = 40 + Math.floor(random() * 40); // 40px to 80px
                    if (colY - moveAmount < minTopY) {
                        moveAmount = colY - minTopY;
                    }
                    if (moveAmount > 10) {
                        endY = colY - moveAmount;
                    } else {
                        isMoving = false;
                    }
                }

                let baseSpeed = 60 + (i * 0.18);
                let speedMult = (diff === "Hard" ? 1.6 : diff === "Demon" ? 2.0 : 1); // Fast moving columns on Hard/Demon
                blocks.push({
                    x: currentX + 80,
                    y: colY,
                    width: width,
                    height: height + 80,
                    isMoving: isMoving,
                    startX: currentX + 80,
                    startY: colY,
                    endX: currentX + 80,
                    endY: endY,
                    speed: (baseSpeed + Math.floor(random() * 40)) * speedMult
                });
                
                const colSpikeChance = diff === "Easy" ? 0 : (diff === "Demon" ? 0.85 : (diff === "Hard" ? 0.75 : 0.4));
                if (random() < colSpikeChance) {
                    spikes.push({ x: currentX + 80 + width/2 - 20, y: colY - 40, width: 40, height: 40 });
                }
            } else {
                // Ceiling column
                let maxBottomY = diff === "Easy" ? 340 : 365;
                let height = 180 + Math.floor(random() * 60); 
                if (diff === "Easy") height = 140 + Math.floor(random() * 40);
                
                let isMoving = (diff !== "Easy" && random() < 0.55);
                
                let bottomY = 50 + height;
                let endY = 50;
                if (isMoving) {
                    let moveAmount = 40 + Math.floor(random() * 40); // 40px to 80px
                    if (bottomY + moveAmount > maxBottomY) {
                        moveAmount = maxBottomY - bottomY;
                    }
                    if (moveAmount > 10) {
                        endY = 50 + moveAmount; // Moves down relative to its starting Y
                    } else {
                        isMoving = false;
                    }
                }

                let baseSpeed = 60 + (i * 0.18);
                let speedMult = (diff === "Hard" ? 1.6 : diff === "Demon" ? 2.0 : 1);
                blocks.push({
                    x: currentX + 80,
                    y: 50,
                    width: width,
                    height: height,
                    isMoving: isMoving,
                    startX: currentX + 80,
                    startY: 50,
                    endX: currentX + 80,
                    endY: endY,
                    speed: (baseSpeed + Math.floor(random() * 40)) * speedMult
                });
                
                const colSpikeChance = diff === "Easy" ? 0 : (diff === "Demon" ? 0.85 : (diff === "Hard" ? 0.75 : 0.4));
                if (random() < colSpikeChance) {
                    spikes.push({ x: currentX + 80 + width/2 - 20, y: 50 + height, width: 40, height: 40, inverted: true });
                }
            }
            
            let spacingVal = diff === "Easy"
                ? 300 + Math.floor(random() * 100)
                : Math.max(120, 240 - (i * 0.7) + Math.floor(random() * 60));
            currentX += width + spacingVal;
        }
        else if (segType === 2) {
            // Narrow wind tunnel
            let length = 600 + Math.floor(random() * 400) + (i % 9) * 30;
            
            // Hard tunnel: 105px gap, Demon tunnel: 85px gap (highly challenging!)
            let tunnelHeight = diff === "Easy" ? 220 : diff === "Medium" ? 165 : (diff === "Hard" ? 105 : 85);
            let tunnelY = 180 + Math.floor(random() * 90);

            // Ceiling and Floor tunnel walls
            blocks.push({ x: currentX, y: 50, width: length, height: tunnelY - 50 });
            blocks.push({ x: currentX, y: tunnelY + tunnelHeight, width: length, height: 580 - (tunnelY + tunnelHeight) });

            // Place floating coin
            if (random() < 0.7) {
                coins.push({ x: currentX + length / 2, y: tunnelY + tunnelHeight / 2 - 15, width: 30, height: 30 });
            }

            // Place spikes on tunnel floor OR ceiling
            const spikeH = 35;
            const minSafeGap = diff === "Demon" ? 45 : 75; // extremely narrow gaps for Demon
            if (tunnelHeight >= spikeH + minSafeGap + 10) {
                const spikeDist = diff === "Demon" ? 200 : 280; // more spikes for Demon
                const count = Math.floor(length / spikeDist);
                for (let j = 1; j < count; j++) {
                    let sx = currentX + j * spikeDist;
                    if (Math.abs(sx - (currentX + length / 2)) < 80) continue;
                    if (random() > (diff === "Demon" ? 0.85 : (diff === "Hard" ? 0.75 : 0.5))) continue;

                    if (j % 2 === 0) {
                        spikes.push({
                            x: sx,
                            y: tunnelY + tunnelHeight - spikeH,
                            width: spikeH,
                            height: spikeH
                        });
                    } else {
                        spikes.push({
                            x: sx,
                            y: tunnelY,
                            width: spikeH,
                            height: spikeH,
                            inverted: true
                        });
                    }
                }
            }

            let spacingVal = Math.max(80, 180 - (i * 0.5));
            currentX += length + spacingVal;
        }
        else {
            // Portal flips
            let width = 250;
            blocks.push({ x: currentX, y: 500, width: width, height: 80 });
            blocks.push({ x: currentX, y: 50, width: width, height: 150 });

            let pType = random() < 0.55 ? 'gravity-invert' : 'gravity-normal';
            portals.push({ x: currentX + 100, y: 230, width: 50, height: 120, type: pType });
            jumpPads.push({ x: currentX + 30, y: 565, width: 40, height: 15 });

            currentX += width + 220;
        }

        // Randomly place coins along the run for all levels (especially endless mode!)
        const coinChance = (i >= 990) ? 0.22 : 0.08; 
        if (random() < coinChance) {
            coins.push({
                x: currentX - 100,
                y: 200 + Math.floor(random() * 200),
                width: 30,
                height: 30
            });
        }

        // Procedurally place powerups (magnets & shields) and rings (boosts & gravity)
        const powerupChance = (i >= 990) ? 0.09 : 0.045;
        if (random() < powerupChance) {
            const pType = random() < 0.6 ? 'magnet' : 'shield';
            powerups.push({
                x: currentX - 150,
                y: 180 + Math.floor(random() * 220),
                width: 34,
                height: 34,
                type: pType,
                collected: false
            });
        }

        const ringChance = (i >= 990) ? 0.12 : 0.06;
        if (random() < ringChance) {
            const rType = random() < 0.65 ? 'boost' : 'gravity';
            rings.push({
                x: currentX - 250,
                y: 200 + Math.floor(random() * 180),
                width: 60,
                height: 60,
                type: rType,
                activated: false
            });
        }
    }

    // Final 20% Ultra Intense Gauntlet (No slowing down, maximum spike density)
    const finalSectionX = currentX;
    const finalSectionLength = 2000;
    blocks.push({ x: finalSectionX, y: 500, width: finalSectionLength + 400, height: 80 });
    blocks.push({ x: finalSectionX, y: 50, width: finalSectionLength + 400, height: 150 });

    // Dense final spikes and sawblade gauntlet in last 20%
    const spikeCount = (diff === "Demon" || i >= 501) ? 14 : (diff === "Hard" ? 10 : 6);
    const step = finalSectionLength / (spikeCount + 1);
    for (let k = 1; k <= spikeCount; k++) {
        const sx = finalSectionX + (k * step);
        const spikeW = (diff === "Demon" || i >= 501) ? 45 : 35;
        const spikeH = (diff === "Demon" || i >= 501) ? 45 : 35;

        // Ground spike
        spikes.push({
            x: sx,
            y: 500 - spikeH,
            width: spikeW,
            height: spikeH
        });

        // Inverted ceiling spike
        if (k % 2 === 0 || i >= 501) {
            spikes.push({
                x: sx + 20,
                y: 200,
                width: spikeW,
                height: spikeH,
                inverted: true
            });
        }

        // Fast spinning gears in final stretch for Master/Demon levels
        if ((diff === "Demon" || i >= 501) && k % 3 === 0) {
            gears.push({
                x: sx + step / 2,
                y: 280,
                radius: 50,
                rotSpeed: 8
            });
        }
    }

    currentX += finalSectionLength;

    // Victory Goal (No speed reduction portal!)
    blocks.push({ x: currentX, y: 500, width: 800, height: 80 });
    blocks.push({ x: currentX, y: 50, width: 800, height: 150 });

    // Ensure 3 coins in level
    while (coins.length < 3) {
        coins.push({ x: currentX - 600 + (coins.length * 150), y: 350, width: 30, height: 30 });
    }

    let isMasterLevel = i >= 501 && i <= 510;
    let displayName = isMasterLevel ? `MASTER DEMON ${i - 500}/10` : `Level ${i}`;
    let displayDiff = isMasterLevel ? `MASTER DEMON (★ 12)` : `${diff} (★ ${stars})`;

    return {
        name: displayName,
        index: i,
        difficulty: displayDiff,
        levelLength: currentX + 600,
        themeColor: isMasterLevel ? '#ff0055' : color.theme,
        decorColor: isMasterLevel ? '#fffb00' : color.decor,
        bgGradientStart: isMasterLevel ? '#1c000d' : color.bgStart,
        bgGradientEnd: isMasterLevel ? '#050003' : color.bgEnd,
        blocks: blocks,
        spikes: spikes,
        portals: portals,
        coins: coins,
        powerups: powerups,
        rings: rings,
        jumpPads: jumpPads,
        gears: gears
    };
}

const levelsList = [];
for (let i = 1; i <= 510; i++) {
    const color = neonColors[(i - 1) % neonColors.length];
    let diff = "Easy";
    let stars = 2;
    
    if (i >= 1 && i <= 10) {
        diff = "Easy";
        stars = 2;
    } else if (i >= 11 && i <= 20) {
        diff = "Medium";
        stars = 5;
    } else if (i >= 21 && i <= 30) {
        diff = "Hard";
        stars = 8;
    } else if (i >= 31 && i <= 40) {
        diff = "Demon";
        stars = 10;
    } else if (i >= 501 && i <= 510) {
        diff = "Master Demon";
        stars = 12;
    } else {
        const randVal = (i * 37) % 3;
        if (randVal === 0) {
            diff = "Medium";
            stars = 5;
        } else if (randVal === 1) {
            diff = "Hard";
            stars = 8;
        } else {
            diff = "Demon";
            stars = 10;
        }
    }

    levelsList.push({
        name: i >= 501 ? `MASTER DEMON - LEVEL ${i}` : `${diff.toUpperCase()} - LEVEL ${i}`,
        index: i,
        color: color,
        difficulty: `${diff} (★ ${stars})`
    });
}

window.levelsList = levelsList;
window.LevelClass = Level;
window.generateProceduralLevel = generateProceduralLevel;

