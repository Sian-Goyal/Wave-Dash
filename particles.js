// Particle System and Visual Effects for Neon Dash

class Particle {
    constructor(x, y, vx, vy, size, color, alpha, fadeRate, type = 'square', angle = 0, rotSpeed = 0) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.color = color;
        this.alpha = alpha;
        this.fadeRate = fadeRate;
        this.type = type; // 'square', 'circle', 'spark', 'ring'
        this.angle = angle;
        this.rotSpeed = rotSpeed;
        this.growth = 0; // for expanding rings
    }

    update(dt) {
        // Apply physics
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        
        // Apply rotation
        this.angle += this.rotSpeed * dt;

        // Apply growth if it is a ring
        if (this.type === 'ring') {
            this.size += this.growth * dt;
        }

        // Fade out
        this.alpha -= this.fadeRate * dt;
        return this.alpha > 0;
    }

    draw(ctx, quality = 'high') {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        
        // In high-graphics mode, draw glowing dropshadows
        if (quality === 'high' && this.type !== 'ring') {
            ctx.shadowColor = this.color;
            ctx.shadowBlur = this.size * 1.5;
        }

        if (this.type === 'square') {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.type === 'circle') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'spark') {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillRect(-this.size / 2, -this.size / 4, this.size, this.size / 2);
        } else if (this.type === 'ring') {
            ctx.lineWidth = 2 + this.size * 0.05;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.backgroundStars = [];
        this.initBackgroundStars(100);
        this.quality = 'high'; // 'high' or 'low'
    }

    setQuality(quality) {
        this.quality = quality;
    }

    initBackgroundStars(count) {
        // Distribute stars evenly across coordinate window (1280x720)
        for (let i = 0; i < count; i++) {
            this.backgroundStars.push({
                x: Math.random() * 1280,
                y: Math.random() * 720,
                size: Math.random() * 2 + 1,
                speedMultiplier: Math.random() * 0.15 + 0.05,
                alpha: Math.random() * 0.5 + 0.3
            });
        }
    }

    updateBackgroundStars(dt, playerVx) {
        // Move stars based on player velocity for parralax effect
        this.backgroundStars.forEach(star => {
            star.x -= playerVx * star.speedMultiplier * dt;
            if (star.x < 0) {
                star.x = 1280;
                star.y = Math.random() * 720;
            }
        });
    }

    drawBackgroundStars(ctx) {
        ctx.save();
        ctx.fillStyle = '#ffffff';
        this.backgroundStars.forEach(star => {
            ctx.globalAlpha = star.alpha;
            ctx.fillRect(star.x - star.size/2, star.y - star.size/2, star.size, star.size);
        });
        ctx.restore();
    }

    update(dt) {
        // Update all particles, filter out dead ones
        this.particles = this.particles.filter(p => p.update(dt));
        
        // Performance Optimization: Cap active particles count to prevent lag
        if (this.particles.length > 120) {
            this.particles = this.particles.slice(this.particles.length - 120);
        }
    }

    draw(ctx) {
        ctx.save();
        // Screen composite blending makes neon colors glow together beautifully
        ctx.globalCompositeOperation = 'screen';
        
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw(ctx, this.quality);
        }
        
        ctx.restore();
    }

    clear() {
        this.particles = [];
    }

    // -------------------------------------------------------------
    // EMITTER METHODS
    // -------------------------------------------------------------

    // 1. Trail behind the player
    emitTrail(x, y, color, style = 'default') {
        if (style === 'rainbow') {
            const colors = ['#ff0055', '#ff9900', '#ffd700', '#39ff14', '#00f3ff', '#b000ff'];
            const randColor = colors[Math.floor(Math.random() * colors.length)];
            const vx = -40 - Math.random() * 40;
            const vy = Math.random() * 20 - 10;
            this.particles.push(new Particle(x, y, vx, vy, Math.random() * 7 + 4, randColor, 0.8, 1.8, 'circle'));
        } else if (style === 'matrix') {
            const vx = -30 - Math.random() * 30;
            const vy = Math.random() * 10 - 5;
            this.particles.push(new Particle(x, y, vx, vy, Math.random() * 6 + 4, '#39ff14', 0.9, 1.2, 'square'));
        } else if (style === 'bubbles') {
            const vx = -20 - Math.random() * 40;
            const vy = Math.random() * 30 - 15;
            this.particles.push(new Particle(x, y, vx, vy, Math.random() * 8 + 3, '#00f3ff', 0.7, 1.0, 'circle'));
        } else if (style === 'sparks') {
            const vx = -80 - Math.random() * 80;
            const vy = Math.random() * 40 - 20;
            const colorSel = Math.random() < 0.5 ? '#ff3300' : '#ffcc00';
            this.particles.push(new Particle(x, y, vx, vy, Math.random() * 8 + 4, colorSel, 1.0, 3.0, 'spark', Math.random() * Math.PI, Math.random() * 5));
        } else {
            const vx = -50 - Math.random() * 50; // drift left relative to player
            const vy = (Math.random() * 20 - 10);
            const size = Math.random() * 6 + 4;
            const alpha = 0.8;
            const fadeRate = 2.0; // quick fade
            const angle = Math.random() * Math.PI * 2;
            const rotSpeed = Math.random() * 4 - 2;

            this.particles.push(new Particle(
                x, y, vx, vy, size, color, alpha, fadeRate, 'square', angle, rotSpeed
            ));
        }
    }

    // 2. Burst on jumping
    emitJumpBurst(x, y, color) {
        const count = 12;
        for (let i = 0; i < count; i++) {
            const angle = Math.PI + (Math.random() * Math.PI * 0.6 - Math.PI * 0.3); // down and back
            const speed = 80 + Math.random() * 150;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = Math.random() * 4 + 2;
            const alpha = 1.0;
            const fadeRate = 1.8 + Math.random() * 1.0;
            
            this.particles.push(new Particle(
                x, y, vx, vy, size, color, alpha, fadeRate, 'circle'
            ));
        }
    }

    // 3. Shockwave rings on Portal or Pad triggers
    emitPortalRing(x, y, color) {
        const p = new Particle(x, y, 0, 0, 10, color, 1.0, 2.5, 'ring');
        p.growth = 280; // expand at 280px per second
        this.particles.push(p);
    }

    // 4. Large explosion on player death
    emitDeathExplosion(x, y, playerColor, borderColor) {
        const count = 60;
        
        // Outer shockwave ring
        const ring = new Particle(x, y, 0, 0, 5, playerColor, 1.0, 1.8, 'ring');
        ring.growth = 400;
        this.particles.push(ring);

        // Exploding debris
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 100 + Math.pow(Math.random(), 2) * 400; // quadratic distribution for velocity variety
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = Math.random() * 12 + 4;
            const color = Math.random() > 0.4 ? playerColor : borderColor;
            const alpha = 1.0;
            const fadeRate = 0.8 + Math.random() * 1.5;
            const rotSpeed = Math.random() * 10 - 5;
            const type = Math.random() > 0.5 ? 'square' : 'circle';

            this.particles.push(new Particle(
                x, y, vx, vy, size, color, alpha, fadeRate, type, angle, rotSpeed
            ));
        }
    }

    // 5. Coin collection twinkle
    emitCoinCollect(x, y) {
        const count = 15;
        const goldColor = '#fffb00';
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 50 + Math.random() * 120;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            const size = Math.random() * 6 + 3;
            const alpha = 1.0;
            const fadeRate = 1.5 + Math.random() * 1.5;
            this.particles.push(new Particle(
                x, y, vx, vy, size, goldColor, alpha, fadeRate, 'circle'
            ));
        }
    }
}

// Attach globally
window.ParticleSystemInstance = new ParticleSystem();
