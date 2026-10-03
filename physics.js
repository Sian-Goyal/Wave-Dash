// Physics, Movement, and Collision Detection Engine for Neon Dash (Flying Rocket Mode)

class Physics {
    // Helper to get near objects from a sorted list, breaking early once out of range to avoid full scan
    static getNearObjects(arr, rangeMin, rangeMax, isGear = false) {
        if (!arr || arr.length === 0) return [];
        const near = [];
        for (let i = 0; i < arr.length; i++) {
            const obj = arr[i];
            const objX = obj.x;
            const objMinX = isGear ? objX - (obj.radius || 35) : objX;
            const objMaxX = isGear ? objX + (obj.radius || 35) : objX + (obj.width || 0);

            if (objMaxX < rangeMin) {
                continue;
            }
            if (objMinX > rangeMax) {
                break;
            }
            near.push(obj);
        }
        return near;
    }

    // 1. Basic AABB overlap check
    static rectOverlap(r1, r2) {
        return r1.x < r2.x + r2.width &&
               r1.x + r1.width > r2.x &&
               r1.y < r2.y + r2.height &&
               r1.y + r1.height > r2.y;
    }

    // 2. Line segment intersection check
    static lineIntersect(ax, ay, bx, by, cx, cy, dx, dy) {
        const denom = (bx - ax) * (dy - cy) - (by - ay) * (dx - cx);
        if (denom === 0) return false; // Parallel

        const numT = (cx - ax) * (dy - cy) - (cy - ay) * (dx - cx);
        const numU = (cx - ax) * (by - ay) - (cy - ay) * (bx - ax);

        const t = numT / denom;
        const u = numU / denom;

        return t >= 0 && t <= 1 && u >= 0 && u <= 1;
    }

    // 3. Check if point P is inside triangle A-B-C
    static pointInTriangle(px, py, ax, ay, bx, by, cx, cy) {
        const v0x = cx - ax;
        const v0y = cy - ay;
        const v1x = bx - ax;
        const v1y = by - ay;
        const v2x = px - ax;
        const v2y = py - ay;

        const dot00 = v0x * v0x + v0y * v0y;
        const dot01 = v0x * v1x + v0y * v1y;
        const dot02 = v0x * v2x + v0y * v2y;
        const dot11 = v1x * v1x + v1y * v1y;
        const dot12 = v1x * v2x + v1y * v2y;

        const denom = dot00 * dot11 - dot01 * dot01;
        if (denom === 0) return false;

        const invDenom = 1.0 / denom;
        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

        return (u >= 0) && (v >= 0) && (u + v < 1);
    }

    // 4. Precise Spike (Triangle) Collision Check
    static checkSpikeCollision(player, spike) {
        if (!this.rectOverlap(player, spike)) return false;

        // Shrink the spike hitbox slightly for fair gameplay
        const marginX = spike.width * 0.2; // 20% margin on sides
        const marginY = spike.height * 0.15; // 15% margin on height

        let ax, ay, bx, by, cx, cy; // Triangle Vertices

        if (spike.direction === 'left') {
            // Pointing left (attached to right wall)
            ax = spike.x + spike.width - marginX;
            ay = spike.y + marginY;
            bx = spike.x + spike.width - marginX;
            by = spike.y + spike.height - marginY;
            cx = spike.x + marginX;
            cy = spike.y + spike.height / 2;
        } else if (spike.direction === 'right') {
            // Pointing right (attached to left wall)
            ax = spike.x + marginX;
            ay = spike.y + marginY;
            bx = spike.x + marginX;
            by = spike.y + spike.height - marginY;
            cx = spike.x + spike.width - marginX;
            cy = spike.y + spike.height / 2;
        } else if (spike.inverted) {
            // Pointing downwards
            ax = spike.x + marginX;
            ay = spike.y + marginY;
            bx = spike.x + spike.width - marginX;
            by = spike.y + spike.height - marginY;
            cx = spike.x + spike.width / 2;
            cy = spike.y + spike.height - marginY;
        } else {
            // Pointing upwards (standard)
            ax = spike.x + marginX;
            ay = spike.y + spike.height - marginY;
            bx = spike.x + spike.width - marginX;
            by = spike.y + spike.height - marginY;
            cx = spike.x + spike.width / 2;
            cy = spike.y + marginY;
        }

        // Player Box Corners
        const corners = [
            { x: player.x, y: player.y },
            { x: player.x + player.width, y: player.y },
            { x: player.x, y: player.y + player.height },
            { x: player.x + player.width, y: player.y + player.height }
        ];

        // 1. Check if any player corner is inside the spike triangle
        for (let i = 0; i < corners.length; i++) {
            if (this.pointInTriangle(corners[i].x, corners[i].y, ax, ay, bx, by, cx, cy)) {
                return true;
            }
        }

        // 2. Check if any segment of the player's bounding box intersects the spike's triangle edges
        const pSegments = [
            { x1: player.x, y1: player.y, x2: player.x + player.width, y2: player.y }, // Top
            { x1: player.x + player.width, y1: player.y, x2: player.x + player.width, y2: player.y + player.height }, // Right
            { x1: player.x, y1: player.y + player.height, x2: player.x + player.width, y2: player.y + player.height }, // Bottom
            { x1: player.x, y1: player.y, x2: player.x, y2: player.y + player.height } // Left
        ];

        const tSegments = [
            { x1: ax, y1: ay, x2: bx, y2: by },
            { x1: bx, y1: by, x2: cx, y2: cy },
            { x1: cx, y1: cy, x2: ax, y2: ay }
        ];

        for (let p = 0; p < pSegments.length; p++) {
            for (let t = 0; t < tSegments.length; t++) {
                if (this.lineIntersect(
                    pSegments[p].x1, pSegments[p].y1, pSegments[p].x2, pSegments[p].y2,
                    tSegments[t].x1, tSegments[t].y1, tSegments[t].x2, tSegments[t].y2
                )) {
                    return true;
                }
            }
        }

        return false;
    }

    // 5. Fixed Timestep Physics Update Loop
    static updatePhysics(player, level, dt, particleSystem, audioSystem) {
        if (player.isDead) return;

        // Tick down invulnerability timer
        if (player.invulnerableTimer > 0) {
            player.invulnerableTimer -= dt;
        }

        // Tick down boost timer
        if (player.boostTimer > 0) {
            player.boostTimer -= dt;
            if (player.boostTimer <= 0) {
                player.speedMultiplier = player.baseSpeedMultiplier || 1.0;
                audioSystem.setSpeedMultiplier(player.speedMultiplier);
            }
        }

        // Filter elements near player to optimize performance (spatial partitioning using fast early-break range scanning)
        const rangeMin = player.x - 200;
        const rangeMax = player.x + 1500;
        const nearBlocks = this.getNearObjects(level.blocks, rangeMin, rangeMax);
        const nearSpikes = this.getNearObjects(level.spikes, rangeMin, rangeMax);
        const nearJumpPads = this.getNearObjects(level.jumpPads || [], rangeMin, rangeMax);
        const nearPortals = this.getNearObjects(level.portals || [], rangeMin, rangeMax);
        const nearCoins = this.getNearObjects(level.coins || [], rangeMin, rangeMax);
        const nearGears = this.getNearObjects(level.gears || [], rangeMin, rangeMax, true);

        // Tick down magnet timer & attract coins
        if (player.magnetTimer > 0) {
            player.magnetTimer -= dt;
            nearCoins.forEach(coin => {
                if (coin.collected) return;
                const px = player.x + player.width / 2;
                const py = player.y + player.height / 2;
                const cx = coin.x + coin.width / 2;
                const cy = coin.y + coin.height / 2;
                
                const dx = px - cx;
                const dy = py - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 450 && dist > 5) {
                    const pullSpeed = 480 * dt;
                    coin.x += (dx / dist) * pullSpeed;
                    coin.y += (dy / dist) * pullSpeed;
                }
            });
        }

        // Apply Speed multiplier
        player.vx = player.baseVx * player.speedMultiplier;

        // --- STEP 1: HORIZONTAL MOVEMENT & WALL CRASHES ---
        player.x += player.vx * dt;

        // Check solid block collisions horizontally
        for (let i = 0; i < nearBlocks.length; i++) {
            const block = nearBlocks[i];
            if (!block.isSolid) continue;

            if (this.rectOverlap(player, block)) {
                if (player.invulnerableTimer > 0) continue; // Slide through instead of dying
                
                // Landing threshold: if player's bottom was above block top in previous frame,
                // let vertical resolution handle it (landing/sliding) instead of horizontal crash.
                const prevY = player.y; 
                if (!player.gravityInverse) {
                    if (prevY + player.height <= block.y + 8) continue;
                } else {
                    if (prevY >= block.y + block.height - 8) continue;
                }

                if (player.shieldActive) {
                    player.shieldActive = false;
                    player.invulnerableTimer = 1.5;
                    audioSystem.playDeathSound();
                    particleSystem.emitDeathExplosion(block.x, player.y + player.height / 2, '#00ff87', '#ffffff');
                    if (window.UIManagerInstance) {
                        window.UIManagerInstance.showAchievementToast('🛡️ SHIELD BROKEN!', 'You survived a crash!');
                    }
                    if (window.GameEngineInstance) {
                        window.GameEngineInstance.incrementDailyQuest('crash_survivor', 1);
                    }
                    continue;
                }
                // Flying horizontally into a block side = CRASH!
                player.die(particleSystem, audioSystem, block.x, player.y + player.height / 2);
                return;
            }
        }

        // --- STEP 2: VERTICAL MOVEMENT (THRUST & GRAVITY) ---
        // Gravity direction multiplier
        const gravityDir = player.gravityInverse ? -1 : 1;
        
        // Apply upward thrust if active, otherwise normal gravity applies
        if (player.isHoldingThrust) {
            // Apply thrust opposing gravity
            // Thrust points up when normal, points down when gravity is inverted
            const currentThrust = player.thrustForce * gravityDir;
            player.vy += currentThrust * dt;
        } else {
            // Only gravity pulls
            const currentGravity = player.gravityValue * gravityDir;
            player.vy += currentGravity * dt;
        }

        // Clamp vertical velocity for controlled ship flight feel
        const maxFlightVy = 420;
        player.vy = Math.max(-maxFlightVy, Math.min(maxFlightVy, player.vy));

        player.y += player.vy * dt;
        player.isGrounded = false;

        // Check solid block collisions vertically
        for (let i = 0; i < nearBlocks.length; i++) {
            const block = nearBlocks[i];
            if (!block.isSolid) continue;

            if (this.rectOverlap(player, block)) {
                if (!player.gravityInverse) {
                    // Normal gravity
                    if (player.vy > 0) {
                        // Slide along the top of a block
                        player.y = block.y - player.height;
                        player.vy = 0;
                        player.isGrounded = true;
                    } else if (player.vy < 0) {
                        // Slide along the bottom (ceiling) of a block
                        player.y = block.y + block.height;
                        player.vy = 0;
                    }
                } else {
                    // Inverted gravity
                    if (player.vy < 0) {
                        // Slide along the bottom of a ceiling block
                        player.y = block.y + block.height;
                        player.vy = 0;
                        player.isGrounded = true;
                    } else if (player.vy > 0) {
                        // Slide along the top of a floor block
                        player.y = block.y - player.height;
                        player.vy = 0;
                    }
                }
            }
        }

        // Bound screen flight area limits
        const floorY = 580;
        const ceilingY = 50;

        if (!player.gravityInverse) {
            if (player.y + player.height >= floorY) {
                player.y = floorY - player.height;
                player.vy = 0;
                player.isGrounded = true;
            } else if (player.y <= ceilingY) {
                player.y = ceilingY;
                player.vy = 0;
            }
        } else {
            if (player.y <= ceilingY) {
                player.y = ceilingY;
                player.vy = 0;
                player.isGrounded = true;
            } else if (player.y + player.height >= floorY) {
                player.y = floorY - player.height;
                player.vy = 0;
            }
        }

        // --- STEP 3: HAZARD & TRIGGER COLLISIONS ---
        
        // A. Spikes
        for (let i = 0; i < nearSpikes.length; i++) {
            const spike = nearSpikes[i];
            if (this.checkSpikeCollision(player, spike)) {
                if (player.invulnerableTimer > 0) continue;
                
                // Contact point is tip of the spike
                const contactX = spike.x + spike.width / 2;
                const contactY = spike.inverted ? (spike.y + spike.height) : spike.y;

                if (player.shieldActive) {
                    player.shieldActive = false;
                    player.invulnerableTimer = 1.5;
                    audioSystem.playDeathSound();
                    particleSystem.emitDeathExplosion(contactX, contactY, '#00ff87', '#ffffff');
                    if (window.UIManagerInstance) {
                        window.UIManagerInstance.showAchievementToast('🛡️ SHIELD BROKEN!', 'You survived a spike!');
                    }
                    if (window.GameEngineInstance) {
                        window.GameEngineInstance.incrementDailyQuest('crash_survivor', 1);
                    }
                    continue;
                }
                player.die(particleSystem, audioSystem, contactX, contactY);
                return;
            }
        }

        // B. Jump Pads
        for (let i = 0; i < nearJumpPads.length; i++) {
            const pad = nearJumpPads[i];
            if (this.rectOverlap(player, pad)) {
                const force = pad.force || 700;
                player.vy = player.gravityInverse ? force : -force;
                
                audioSystem.playJumpSound();
                particleSystem.emitPortalRing(pad.x + pad.width / 2, pad.y + pad.height / 2, '#39ff14');
            }
        }

        // C. Portals
        for (let i = 0; i < nearPortals.length; i++) {
            const portal = nearPortals[i];
            if (this.rectOverlap(player, portal)) {
                if (portal.type === 'gravity-invert' && !player.gravityInverse) {
                    player.gravityInverse = true;
                    player.vy = 150; // Pop downward
                    audioSystem.playPortalSound();
                    particleSystem.emitPortalRing(portal.x + portal.width / 2, portal.y + portal.height / 2, '#fffb00');
                } else if (portal.type === 'gravity-normal' && player.gravityInverse) {
                    player.gravityInverse = false;
                    player.vy = -150; // Pop upward
                    audioSystem.playPortalSound();
                    particleSystem.emitPortalRing(portal.x + portal.width / 2, portal.y + portal.height / 2, '#00f3ff');
                } else if (portal.type.startsWith('speed-')) {
                    const newSpeed = parseFloat(portal.type.split('-')[1]);
                    if (player.speedMultiplier !== newSpeed) {
                        player.speedMultiplier = newSpeed;
                        player.baseSpeedMultiplier = newSpeed; // SAVE IT!
                        audioSystem.setSpeedMultiplier(newSpeed);
                        audioSystem.playPortalSound();
                        
                        let pColor = '#39ff14';
                        if (newSpeed === 0.5) pColor = '#ff007f';
                        if (newSpeed === 2.0) pColor = '#00f3ff';
                        if (newSpeed === 3.0) pColor = '#fffb00';
                        
                        particleSystem.emitPortalRing(portal.x + portal.width / 2, portal.y + portal.height / 2, pColor);
                    }
                }
            }
        }

        // D. Powerups (Magnet and Shield)
        const nearPowerups = (level.powerups || []).filter(p => !p.collected && p.x + p.width > rangeMin && p.x < rangeMax);
        nearPowerups.forEach(powerup => {
            if (this.rectOverlap(player, powerup)) {
                powerup.collected = true;
                if (powerup.type === 'magnet') {
                    player.magnetTimer = 8.0; // 8s magnet active
                    audioSystem.playPortalSound();
                    if (window.UIManagerInstance) {
                        window.UIManagerInstance.showAchievementToast('🧲 MAGNET ACTIVE!', 'Coins are now pulled toward you!');
                    }
                } else if (powerup.type === 'shield') {
                    player.shieldActive = true;
                    audioSystem.playPortalSound();
                    if (window.UIManagerInstance) {
                        window.UIManagerInstance.showAchievementToast('🛡️ SHIELD ACTIVE!', 'Protected from 1 hazard crash!');
                    }
                }
                particleSystem.emitPortalRing(powerup.x + powerup.width / 2, powerup.y + powerup.height / 2, powerup.type === 'magnet' ? '#ff00ff' : '#00ff87');
            }
        });

        // E. Rings (Boost and Gravity)
        const nearRings = (level.rings || []).filter(r => !r.activated && r.x + r.width > rangeMin && r.x < rangeMax);
        nearRings.forEach(ring => {
            if (this.rectOverlap(player, ring)) {
                ring.activated = true;
                particleSystem.emitPortalRing(ring.x + ring.width / 2, ring.y + ring.height / 2, ring.type === 'boost' ? '#39ff14' : '#fffb00');
                audioSystem.playPortalSound();
                
                if (ring.type === 'boost') {
                    player.boostTimer = 1.0; // 1s boost duration
                    player.baseSpeedMultiplier = player.speedMultiplier;
                    player.speedMultiplier = 2.5; // dash speed!
                    audioSystem.setSpeedMultiplier(2.5);
                    player.vy = 0; // stop vertical drop for a brief dash
                } else if (ring.type === 'gravity') {
                    player.gravityInverse = !player.gravityInverse;
                    player.vy = player.gravityInverse ? 200 : -200;
                }
            }
        });

        // F. Coins
        for (let i = 0; i < nearCoins.length; i++) {
            const coin = nearCoins[i];
            if (!coin.collected && this.rectOverlap(player, coin)) {
                coin.collected = true;
                player.coinsCollected++;
                audioSystem.playCoinSound();
                particleSystem.emitCoinCollect(coin.x + coin.width / 2, coin.y + coin.height / 2);
                if (window.GameEngineInstance) {
                    const currentCoins = window.GameEngineInstance.getUserCoins();
                    window.GameEngineInstance.setUserCoins(currentCoins + 1);
                    window.GameEngineInstance.updateCoinsDisplay();
                    window.GameEngineInstance.incrementDailyQuest('coin_collector', 1);
                }
            }
        }

        // G. Gears (Spinning Neon Sawblades)
        if (nearGears) {
            for (let i = 0; i < nearGears.length; i++) {
                const gear = nearGears[i];
                
                // Find closest point on player bounding box to gear center
                const closestX = Math.max(player.x, Math.min(gear.x, player.x + player.width));
                const closestY = Math.max(player.y, Math.min(gear.y, player.y + player.height));
                
                const dx = gear.x - closestX;
                const dy = gear.y - closestY;
                const distSq = dx * dx + dy * dy;
                
                // Hitbox shrink by 4px for fair tolerances
                const hitRadius = gear.radius - 4;
                if (distSq < hitRadius * hitRadius) {
                    if (player.invulnerableTimer > 0) continue;
                    
                    // Contact point is gear outer edge facing the player center
                    const angle = Math.atan2(player.y + player.height / 2 - gear.y, player.x + player.width / 2 - gear.x);
                    const contactX = gear.x + Math.cos(angle) * gear.radius;
                    const contactY = gear.y + Math.sin(angle) * gear.radius;

                    if (player.shieldActive) {
                        player.shieldActive = false;
                        player.invulnerableTimer = 1.5;
                        audioSystem.playDeathSound();
                        particleSystem.emitDeathExplosion(contactX, contactY, '#00ff87', '#ffffff');
                        if (window.UIManagerInstance) {
                            window.UIManagerInstance.showAchievementToast('🛡️ SHIELD BROKEN!', 'You survived a gear!');
                        }
                        if (window.GameEngineInstance) {
                            window.GameEngineInstance.incrementDailyQuest('crash_survivor', 1);
                        }
                        continue;
                    }
                    player.die(particleSystem, audioSystem, contactX, contactY);
                    return;
                }
            }
        }

        // E. Win Trigger
        if (player.x >= level.levelLength) {
            player.win();
        }
    }
}

window.PhysicsInstance = Physics;
