import { useState, useEffect, useRef, useCallback } from 'react'
import { Zombie, Peashooter, Sunflower, WallNut, Chomper, CrazyDave, SnowPea, Repeater, CherryBomb, CabbagePult, KernelPult } from '../../characters'
import { getGrowthStage, getPlotPosition, GRID_CENTER } from './gardenData'
import {
  ZOMBIE_TYPES, PLANT_BATTLE_STATS, WAVES,
  randomSpawnPosition, dist, CENTER, VAULT_RADIUS,
} from './battleData'
import { removePlantsForBattle, applyBattleReward, returnPlantsAfterBattle, useItem } from './economy'
import { getBattleItems } from './itemData'

const PLANT_COMPONENTS = { peashooter: Peashooter, sunflower: Sunflower, wallnut: WallNut, chomper: Chomper, snowpea: SnowPea, repeater: Repeater, cherrybomb: CherryBomb, cabbagepult: CabbagePult, kernelpult: KernelPult }

let nextId = 0
function uid() { return ++nextId }

function DefendMode({ gardenState, dispatch, onBack }) {
  const [phase, setPhase] = useState('select') // select | buff | fighting | won | lost
  const [waveIndex, setWaveIndex] = useState(0)
  const [activeTargetItem, setActiveTargetItem] = useState(null)
  const [doomShroomActive, setDoomShroomActive] = useState(false)
  const doomShroomUsedRef = useRef(false)
  const [activeBuff, setActiveBuff] = useState(null) // 'hypnotize' | 'shield' | 'doublecoins'
  const [pendingWaveIdx, setPendingWaveIdx] = useState(null)

  // Battle state in ref for game loop performance
  const battleRef = useRef({
    zombies: [],
    projectiles: [],
    plants: [],
    spawnQueue: [],
    elapsed: 0,
    coinsEarned: 0,
    sunflowerTimer: 0,
    plantCooldowns: {},
    status: 'fighting',
  })
  const [renderTick, setRenderTick] = useState(0) // force re-renders
  const frameRef = useRef(null)

  // Collect mature plants directly from garden layout with their positions
  function collectGardenPlants() {
    const plants = []
    gardenState.plots.forEach((plot, i) => {
      if (!plot.plant || getGrowthStage(plot.plant) !== 'mature') return
      const position = getPlotPosition(plot.row, plot.col)
      plants.push({ ...plot.plant, plotIndex: i, position })
    })
    return plants
  }

  function handleSelectWave(idx) {
    const gardenPlants = collectGardenPlants()
    if (gardenPlants.length === 0) return

    setPendingWaveIdx(idx)
    setActiveBuff(null)
    setPhase('buff')
  }

  function startBattle() {
    const idx = pendingWaveIdx
    setWaveIndex(idx)

    const wave = WAVES[idx]
    const b = battleRef.current
    b.zombies = []
    b.projectiles = []
    b.plants = gardenPlants.map(p => ({
      ...p,
      uid: uid(),
      hp: PLANT_BATTLE_STATS[p.type]?.hp || 5,
      maxHp: PLANT_BATTLE_STATS[p.type]?.hp || 5,
      lastFired: 0,
      cooldownUntil: 0,
      fallen: false,
    }))
    b.allBattlePlants = b.plants.map(p => ({ ...p }))
    b.spawnQueue = wave.spawns.map(s => ({ ...s, spawned: false }))
    b.elapsed = 0
    b.coinsEarned = 0
    b.sunflowerTimer = 0
    b.plantCooldowns = {}
    b.status = 'fighting'
    b.freezeUntil = 0
    b.superchargedPlants = {}
    b.decoys = []
    b.chompEffects = []
    b.hypnotizeLeft = activeBuff === 'hypnotize' ? 3 : 0
    b.shieldNextAt = activeBuff === 'shield' ? 0 : null // shield available immediately, then every 60s
    b.doubleCoins = activeBuff === 'doublecoins'

    // Remove plants from garden during battle
    const plotIndices = gardenPlants.map(p => p.plotIndex)
    dispatch(prev => removePlantsForBattle(prev, plotIndices))

    doomShroomUsedRef.current = false

    // Consume doom-shroom from inventory if activated
    if (doomShroomActive) {
      dispatch(prev => useItem(prev, 'doomshroom'))
    }

    setPhase('fighting')
  }

  // Game loop
  useEffect(() => {
    if (phase !== 'fighting') return

    let lastTime = performance.now()

    function tick(now) {
      const delta = Math.min((now - lastTime) / 1000, 0.1) // cap delta
      lastTime = now
      const b = battleRef.current
      if (b.status !== 'fighting') return

      b.elapsed += delta

      // Spawn zombies
      b.spawnQueue.forEach(s => {
        if (!s.spawned && b.elapsed >= s.delay) {
          const zType = ZOMBIE_TYPES[s.type]
          const pos = randomSpawnPosition()
          const isHypnotized = b.hypnotizeLeft > 0
          if (isHypnotized) b.hypnotizeLeft--
          b.zombies.push({
            uid: uid(),
            type: s.type,
            hp: zType.hp,
            maxHp: zType.hp,
            x: pos.x,
            y: pos.y,
            speed: zType.speed,
            damage: zType.damage,
            attacking: null,
            wobblePhase: Math.random() * Math.PI * 2,
            wobbleFreq: 2 + Math.random() * 1.5,
            hasVaulted: false,
            vaulting: false,
            vaultProgress: 0,
            vaultFrom: null,
            vaultTo: null,
            hypnotized: isHypnotized,
          })
          s.spawned = true
        }
      })

      // Hypnotized zombies attack other zombies
      b.zombies.forEach(z => {
        if (z.hp <= 0 || !z.hypnotized) return
        // Find closest non-hypnotized zombie and deal damage
        let closestEnemy = null
        let closestD = 8
        b.zombies.forEach(z2 => {
          if (z2.hp <= 0 || z2.hypnotized || z2 === z) return
          const d = dist({ x: z.x, y: z.y }, { x: z2.x, y: z2.y })
          if (d < closestD) { closestD = d; closestEnemy = z2 }
        })
        if (closestEnemy) {
          closestEnemy.hp -= z.damage * delta * 3 // hypnotized zombies fight hard
          return
        }
        // Move toward closest non-hypnotized zombie
        let target = null
        let targetD = Infinity
        b.zombies.forEach(z2 => {
          if (z2.hp <= 0 || z2.hypnotized || z2 === z) return
          const d = dist({ x: z.x, y: z.y }, { x: z2.x, y: z2.y })
          if (d < targetD) { targetD = d; target = z2 }
        })
        if (target) {
          const dx = target.x - z.x
          const dy = target.y - z.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d > 0.5) {
            z.x += (dx / d) * z.speed * delta
            z.y += (dy / d) * z.speed * delta
          }
        }
      })

      // Move zombies toward center (or attack plant in range)
      b.zombies.forEach(z => {
        if (z.hp <= 0 || z.hypnotized) return

        // Newspaper zombie: when HP drops to 10 or below, newspaper breaks — speed up
        if (z.type === 'newspaper' && !z.newspaperBroken && z.hp <= 10) {
          z.newspaperBroken = true
          z.speed = ZOMBIE_TYPES.basic.speed // enraged, moves at normal zombie speed
        }

        // Restore speed if slow has expired
        if (z.slowUntil && b.elapsed >= z.slowUntil) {
          z.speed = z.type === 'newspaper' && z.newspaperBroken
            ? ZOMBIE_TYPES.basic.speed
            : ZOMBIE_TYPES[z.type].speed
          z.slowUntil = null
        }

        // Global freeze (from freeze item)
        if (b.freezeUntil && b.elapsed < b.freezeUntil) return

        // Per-zombie butter freeze
        if (z.butterFrozenUntil && b.elapsed < z.butterFrozenUntil) return

        // Check if zombie is attacking a plant
        if (z.attacking) {
          const plant = b.plants.find(p => p.uid === z.attacking)
          if (!plant || plant.hp <= 0) {
            z.attacking = null
          } else {
            // Deal damage
            plant.hp -= z.damage * delta
            return // stop moving while attacking
          }
        }

        // Pole vaulter: mid-jump animation
        if (z.vaulting) {
          z.vaultProgress += delta * 2.5 // jump takes ~0.4s
          if (z.vaultProgress >= 1) {
            z.x = z.vaultTo.x
            z.y = z.vaultTo.y
            z.vaulting = false
            z.vaultProgress = 0
            z.vaultFrom = null
            z.vaultTo = null
            // Drop HP to 10 after losing the pole
            z.hp = Math.min(z.hp, 10)
            z.maxHp = 10
          } else {
            // Interpolate position along the arc
            const t = z.vaultProgress
            z.x = z.vaultFrom.x + (z.vaultTo.x - z.vaultFrom.x) * t
            z.y = z.vaultFrom.y + (z.vaultTo.y - z.vaultFrom.y) * t
          }
          return // skip normal movement while vaulting
        }

        // Find closest plant in path (within 5 units)
        let closestPlant = null
        let closestDist = 5
        b.plants.forEach(p => {
          if (p.hp <= 0) return
          const d = dist({ x: z.x, y: z.y }, { x: p.position.x, y: p.position.y })
          if (d < closestDist) {
            closestDist = d
            closestPlant = p
          }
        })

        // Pole vaulter: jump over first plant encountered instead of attacking
        if (closestPlant && z.type === 'polevaulter' && !z.hasVaulted) {
          z.hasVaulted = true
          z.vaulting = true
          z.vaultProgress = 0
          z.vaultFrom = { x: z.x, y: z.y }
          // Land 10 units past the plant, toward the center
          const dx = CENTER.x - closestPlant.position.x
          const dy = CENTER.y - closestPlant.position.y
          const d = Math.sqrt(dx * dx + dy * dy) || 1
          z.vaultTo = {
            x: closestPlant.position.x + (dx / d) * 10,
            y: closestPlant.position.y + (dy / d) * 10,
          }
          return
        }

        if (closestPlant) {
          z.attacking = closestPlant.uid
          return
        }

        // Move toward target (pizza decoy or center vault)
        let moveTarget = CENTER
        if (b.decoys.length > 0) {
          let bestDist = Infinity
          for (const decoy of b.decoys) {
            if (b.elapsed >= decoy.expiresAt) continue
            const dd = dist({ x: z.x, y: z.y }, decoy)
            if (dd < bestDist) {
              bestDist = dd
              moveTarget = decoy
            }
          }
        }
        const dx = moveTarget.x - z.x
        const dy = moveTarget.y - z.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d > 0.5) {
          // Perpendicular wobble for zombie shamble
          const wobbleAmp = 4 * (10 / Math.max(z.speed, 5)) // slower = more wobble
          const wobble = Math.sin(b.elapsed * z.wobbleFreq + z.wobblePhase) * wobbleAmp * delta
          const perpX = -dy / d
          const perpY = dx / d
          z.x += (dx / d) * z.speed * delta + perpX * wobble
          z.y += (dy / d) * z.speed * delta + perpY * wobble
        }
      })

      // Plant actions
      b.plants.forEach(p => {
        if (p.hp <= 0) return
        const stats = PLANT_BATTLE_STATS[p.type]
        if (!stats) return

        // Cherry bomb: explode immediately on first tick, then die
        if (stats.ability === 'explode' && !p.exploded) {
          p.exploded = true
          b.zombies.forEach(z => {
            if (z.hp <= 0) return
            if (dist({ x: p.position.x, y: p.position.y }, { x: z.x, y: z.y }) < stats.range) {
              z.hp -= stats.damage
            }
          })
          p.hp = 0 // self-destruct
          return
        }

        if (stats.ability === 'shoot' && stats.fireRate > 0) {
          if (b.elapsed - p.lastFired >= 1 / stats.fireRate) {
            // Find closest zombie in range
            let target = null
            let targetDist = stats.range
            b.zombies.forEach(z => {
              if (z.hp <= 0) return
              const d = dist({ x: p.position.x, y: p.position.y }, { x: z.x, y: z.y })
              if (d < targetDist) {
                targetDist = d
                target = z
              }
            })
            if (target) {
              const dx = target.x - p.position.x
              const dy = target.y - p.position.y
              const d = Math.sqrt(dx * dx + dy * dy)
              const shots = stats.shotsPerVolley || 1
              const isPult = p.type === 'kernelpult' || p.type === 'cabbagepult'
              const speed = isPult ? 40 : 60
              for (let s = 0; s < shots; s++) {
                const isButter = stats.butterChance && Math.random() < stats.butterChance
                b.projectiles.push({
                  uid: uid(),
                  x: p.position.x,
                  y: p.position.y,
                  vx: (dx / d) * speed + (s > 0 ? (Math.random() - 0.5) * 5 : 0),
                  vy: (dy / d) * speed + (s > 0 ? (Math.random() - 0.5) * 5 : 0),
                  damage: stats.damage * (p.damageMultiplier || 1),
                  fromMutation: p.mutation,
                  slowEffect: stats.slowEffect || null,
                  isIce: p.type === 'snowpea',
                  isButter: isButter,
                  butterFreeze: isButter ? (stats.butterFreeze || 5) : 0,
                  plantType: p.type,
                })
              }
              p.lastFired = b.elapsed
            }
          }
        }

        if (stats.ability === 'devour') {
          if (b.elapsed >= p.cooldownUntil) {
            // Eat closest zombie within range
            let target = null
            let targetDist = stats.range
            b.zombies.forEach(z => {
              if (z.hp <= 0) return
              const d = dist({ x: p.position.x, y: p.position.y }, { x: z.x, y: z.y })
              if (d < targetDist) {
                targetDist = d
                target = z
              }
            })
            if (target) {
              target.hp = 0
              p.cooldownUntil = b.elapsed + stats.cooldown
              p.chompingUntil = b.elapsed + 0.8
              // Spawn chomp effect at zombie position
              b.chompEffects.push({
                uid: uid(),
                x: target.x,
                y: target.y,
                spawnedAt: b.elapsed,
              })
            }
          }
        }
      })

      // Sunflower coin production
      const sunflowerCount = b.plants.filter(p => p.hp > 0 && p.type === 'sunflower').length
      if (sunflowerCount > 0) {
        b.sunflowerTimer += delta
        if (b.sunflowerTimer >= 3) {
          b.coinsEarned += sunflowerCount * 5
          b.sunflowerTimer = 0
        }
      }

      // Move projectiles & check hits
      b.projectiles.forEach(pj => {
        pj.x += pj.vx * delta
        pj.y += pj.vy * delta

        // Check hit
        b.zombies.forEach(z => {
          if (z.hp <= 0 || pj.hit) return
          if (dist({ x: pj.x, y: pj.y }, { x: z.x, y: z.y }) < 3) {
            z.hp -= pj.damage
            pj.hit = true

            // Snow pea: slow zombie on hit
            if (pj.slowEffect) {
              z.speed = ZOMBIE_TYPES[z.type].speed * pj.slowEffect.factor
              z.slowUntil = b.elapsed + pj.slowEffect.duration
            }

            // Kernel-pult butter: freeze zombie solid
            if (pj.isButter) {
              z.butterFrozenUntil = b.elapsed + pj.butterFreeze
              z.attacking = null // stop attacking while frozen
            }

            // Fire mutation: area damage
            if (pj.fromMutation === 'fire') {
              b.zombies.forEach(z2 => {
                if (z2.hp <= 0 || z2 === z) return
                if (dist({ x: z.x, y: z.y }, { x: z2.x, y: z2.y }) < 8) {
                  z2.hp -= pj.damage * 0.5
                }
              })
            }
          }
        })
      })

      // Frozen mutation: slow zombies near frozen plants
      b.plants.forEach(p => {
        if (p.hp <= 0 || p.mutation !== 'frozen') return
        b.zombies.forEach(z => {
          if (z.hp <= 0) return
          if (dist({ x: p.position.x, y: p.position.y }, { x: z.x, y: z.y }) < 15) {
            z.speed = ZOMBIE_TYPES[z.type].speed * 0.5
          }
        })
      })

      // Expire pizza decoys
      if (b.decoys.length > 0) {
        b.decoys = b.decoys.filter(d => b.elapsed < d.expiresAt)
      }

      // Expire chomp effects (0.6s lifetime)
      if (b.chompEffects.length > 0) {
        b.chompEffects = b.chompEffects.filter(c => b.elapsed - c.spawnedAt < 0.6)
      }

      // Cleanup dead zombies and spent projectiles
      b.zombies = b.zombies.filter(z => z.hp > 0)
      b.projectiles = b.projectiles.filter(pj =>
        !pj.hit && pj.x >= -5 && pj.x <= 105 && pj.y >= -5 && pj.y <= 105
      )
      // Mark dead plants as fallen (keep them for post-battle return)
      b.plants.forEach(p => {
        if (p.hp <= 0 && !p.fallen) p.fallen = true
      })
      b.plants = b.plants.filter(p => p.hp > 0)

      // Shield buff: push zombies away from vault every 60 seconds
      if (b.shieldNextAt !== null && b.elapsed >= b.shieldNextAt) {
        const shielded = b.zombies.some(z => z.hp > 0 && !z.hypnotized && dist({ x: z.x, y: z.y }, CENTER) < VAULT_RADIUS + 5)
        if (shielded) {
          b.zombies.forEach(z => {
            if (z.hp <= 0 || z.hypnotized) return
            const d = dist({ x: z.x, y: z.y }, CENTER)
            if (d < VAULT_RADIUS + 5) {
              // Push away from center
              const dx = z.x - CENTER.x
              const dy = z.y - CENTER.y
              const len = Math.sqrt(dx * dx + dy * dy) || 1
              z.x += (dx / len) * 15
              z.y += (dy / len) * 15
              z.attacking = null
            }
          })
          b.shieldNextAt = b.elapsed + 60
          b.shieldTriggeredAt = b.elapsed
        }
      }

      // Check vault breach
      const breach = b.zombies.some(z => z.hp > 0 && !z.hypnotized && dist({ x: z.x, y: z.y }, CENTER) < VAULT_RADIUS)
      if (breach) {
        // Doom-shroom: kill all zombies instead of losing (one-time)
        if (doomShroomActive && !doomShroomUsedRef.current) {
          doomShroomUsedRef.current = true
          b.zombies.forEach(z => { z.hp = 0 })
          b.zombies = []
          b.doomShroomTriggered = b.elapsed
        } else {
          b.status = 'lost'
          setPhase('lost')
          return
        }
      }

      // Check win: all spawned and all dead
      const allSpawned = b.spawnQueue.every(s => s.spawned)
      const aliveNonHypno = b.zombies.filter(z => z.hp > 0 && !z.hypnotized)
      if (allSpawned && aliveNonHypno.length === 0) {
        // Remove any remaining hypnotized zombies too
        b.zombies = []
        b.status = 'won'
        const wave = WAVES[waveIndex]
        let reward = wave.reward
        if (b.doubleCoins) reward *= 2
        b.coinsEarned += reward
        setPhase('won')
        return
      }

      setRenderTick(t => t + 1)
      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [phase, waveIndex])

  // Apply battle rewards and return plants
  function handleBattleEnd() {
    const b = battleRef.current
    const reward = b.coinsEarned
    const allPlants = b.allBattlePlants || []

    // Surviving = still alive at end of battle (hp > 0)
    const survivingUids = new Set(b.plants.filter(p => p.hp > 0).map(p => p.uid))

    const surviving = []
    const fallen = []

    allPlants.forEach(p => {
      if (p.plotIndex === undefined) return
      const entry = { plotIndex: p.plotIndex, plant: { id: p.id, type: p.type, mutation: p.mutation } }
      if (survivingUids.has(p.uid)) {
        surviving.push(entry)
      } else {
        fallen.push(entry)
      }
    })

    dispatch(prev => {
      let next = applyBattleReward(prev, reward, waveIndex + 1)
      next = returnPlantsAfterBattle(next, surviving, fallen)
      return next
    })
    setDoomShroomActive(false)
    onBack()
  }

  // === RENDER ===

  // Wave selection
  if (phase === 'select') {
    return (
      <div className="battle-select">
        <h2>Choose a Wave</h2>
        <p className="battle-subtitle">Defend the Seed Vault from zombies!</p>
        <div className="wave-list">
          {WAVES.map((w, i) => (
            <button
              key={i}
              className={`minecraft-button ${i <= gardenState.highestWave ? '' : 'secondary'}`}
              onClick={() => handleSelectWave(i)}
              disabled={i > gardenState.highestWave}
            >
              Wave {w.wave} — {w.spawns.length} zombies — Reward: {w.reward} 🪙
            </button>
          ))}
        </div>
        {/* Doom-shroom toggle */}
        {(gardenState.inventory?.doomshroom || 0) > 0 && (
          <div className="doom-shroom-toggle">
            <button
              className={`minecraft-button ${doomShroomActive ? '' : 'secondary'}`}
              onClick={() => setDoomShroomActive(!doomShroomActive)}
              style={doomShroomActive ? { background: '#6A1B9A' } : {}}
            >
              ☠️ Doom-shroom {doomShroomActive ? 'ON' : 'OFF'}
              <span style={{ fontSize: '0.65rem', display: 'block' }}>
                {doomShroomActive ? 'Will save you if zombies breach!' : 'Tap to activate (1 use)'}
              </span>
            </button>
            <span className="doom-shroom-count">×{gardenState.inventory.doomshroom}</span>
          </div>
        )}

        <button className="minecraft-button secondary" onClick={onBack}>← Back to Garden</button>
      </div>
    )
  }

  // Buff selection
  if (phase === 'buff') {
    return (
      <div className="battle-select">
        <h2>Choose a Buff</h2>
        <p className="battle-subtitle">Pick one power-up for this battle!</p>
        <div className="buff-list">
          <button
            className={`minecraft-button buff-btn ${activeBuff === 'hypnotize' ? 'buff-selected' : ''}`}
            onClick={() => setActiveBuff(activeBuff === 'hypnotize' ? null : 'hypnotize')}
            style={activeBuff === 'hypnotize' ? { background: '#6A1B9A' } : {}}
          >
            <span className="buff-icon">🧟‍♂️</span>
            <span className="buff-info">
              <strong>Hypnotize</strong>
              <span>First 3 zombies fight for you!</span>
            </span>
          </button>
          <button
            className={`minecraft-button buff-btn ${activeBuff === 'shield' ? 'buff-selected' : ''}`}
            onClick={() => setActiveBuff(activeBuff === 'shield' ? null : 'shield')}
            style={activeBuff === 'shield' ? { background: '#1565C0' } : {}}
          >
            <span className="buff-icon">🛡️</span>
            <span className="buff-info">
              <strong>Dave's Shield</strong>
              <span>Pushes zombies away from vault every 60s</span>
            </span>
          </button>
          <button
            className={`minecraft-button buff-btn ${activeBuff === 'doublecoins' ? 'buff-selected' : ''}`}
            onClick={() => setActiveBuff(activeBuff === 'doublecoins' ? null : 'doublecoins')}
            style={activeBuff === 'doublecoins' ? { background: '#F9A825' } : {}}
          >
            <span className="buff-icon">🪙</span>
            <span className="buff-info">
              <strong>Double Coins</strong>
              <span>2× coin reward when you win!</span>
            </span>
          </button>
        </div>
        <button className="minecraft-button" onClick={() => startBattle()} style={{ marginTop: '0.5rem' }}>
          ⚔️ Start Wave {WAVES[pendingWaveIdx]?.wave}!
        </button>
        <button className="minecraft-button secondary" onClick={() => setPhase('select')} style={{ marginTop: '0.3rem' }}>
          ← Back
        </button>
      </div>
    )
  }

  // Battle item handlers
  const TARGETING_MESSAGES = {
    times2: 'Click a plant to double its damage ×2',
    square: 'Click a plant to Square! it (2×2 = 4 plants)',
    times0: 'Click a zombie to ×0 it — careful, misclick hits your plants!',
    pizza: 'Click empty ground to drop the pizza',
  }

  function handleUseBattleItem(itemKey) {
    const b = battleRef.current
    if (!b || b.status !== 'fighting') return

    // Targeting items — select mode, consume on target click
    if (TARGETING_MESSAGES[itemKey]) {
      setActiveTargetItem(activeTargetItem === itemKey ? null : itemKey)
      return
    }

    if (itemKey === 'freeze') {
      b.freezeUntil = b.elapsed + 5
      dispatch(prev => useItem(prev, 'freeze'))
    } else if (itemKey === 'cherrybomb_battle') {
      b.zombies.forEach(z => { if (z.hp > 0) z.hp -= 40 })
      dispatch(prev => useItem(prev, 'cherrybomb_battle'))
    } else if (itemKey === 'plantfood_battle') {
      const alive = b.plants.find(p => p.hp > 0 && p.type !== 'wallnut')
      if (alive) {
        b.superchargedPlants[alive.uid] = b.elapsed + 10
      }
      dispatch(prev => useItem(prev, 'plantfood_battle'))
    }
  }

  function handleTargetClick(targetType, target, e) {
    e.stopPropagation()
    const b = battleRef.current
    if (!b || !activeTargetItem) return

    if (activeTargetItem === 'times2') {
      if (targetType !== 'plant') return
      const plant = b.plants.find(p => p.uid === target.uid)
      if (plant) plant.damageMultiplier = (plant.damageMultiplier || 1) * 2
      dispatch(prev => useItem(prev, 'times2'))
      setActiveTargetItem(null)
    } else if (activeTargetItem === 'square') {
      if (targetType !== 'plant') return
      const plant = b.plants.find(p => p.uid === target.uid)
      if (!plant) return
      const offsets = [{ dx: 3.5, dy: 0 }, { dx: 0, dy: 3.5 }, { dx: 3.5, dy: 3.5 }]
      for (const off of offsets) {
        b.plants.push({
          ...plant,
          uid: uid(),
          position: {
            x: Math.min(95, Math.max(5, plant.position.x + off.dx)),
            y: Math.min(95, Math.max(5, plant.position.y + off.dy)),
          },
          hp: PLANT_BATTLE_STATS[plant.type]?.hp || 5,
          maxHp: PLANT_BATTLE_STATS[plant.type]?.hp || 5,
          lastFired: b.elapsed,
          cooldownUntil: 0,
          plotIndex: undefined,
          isClone: true,
        })
      }
      dispatch(prev => useItem(prev, 'square'))
      setActiveTargetItem(null)
    } else if (activeTargetItem === 'times0') {
      if (targetType === 'zombie') {
        const zombie = b.zombies.find(z => z.uid === target.uid)
        if (zombie) zombie.hp = 0
      } else if (targetType === 'plant') {
        const plant = b.plants.find(p => p.uid === target.uid)
        if (plant) plant.hp = 0
      } else {
        return // vault or empty — no effect, don't consume
      }
      dispatch(prev => useItem(prev, 'times0'))
      setActiveTargetItem(null)
    }
  }

  function handleBattleFieldClick(e) {
    if (activeTargetItem !== 'pizza') return
    const b = battleRef.current
    if (!b) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    if (dist({ x, y }, CENTER) < VAULT_RADIUS + 3) return
    const onPlant = b.plants.some(p => p.hp > 0 && dist({ x, y }, p.position) < 5)
    if (onPlant) return
    b.decoys.push({ uid: uid(), x, y, expiresAt: b.elapsed + 6 })
    dispatch(prev => useItem(prev, 'pizza'))
    setActiveTargetItem(null)
  }

  // Active battle
  if (phase === 'fighting') {
    const b = battleRef.current
    const battleItems = getBattleItems()
    const inv = gardenState.inventory || {}
    const isTargetingPlant = activeTargetItem === 'times2' || activeTargetItem === 'square' || activeTargetItem === 'times0'
    const isTargetingZombie = activeTargetItem === 'times0'

    return (
      <div className="battle-active">
        <div className="battle-hud">
          <span>Wave {WAVES[waveIndex].wave}</span>
          <span>🧟 {b.spawnQueue.filter(s => s.spawned).length - b.zombies.filter(z => z.hp > 0 && !z.hypnotized).length} / {b.spawnQueue.length} killed</span>
          <span>⚔️ {b.zombies.filter(z => z.hp > 0 && !z.hypnotized).length} alive</span>
          <span>🪙 +{b.coinsEarned}</span>
        </div>

        {/* Battle items bar */}
        {battleItems.some(([k]) => (inv[k] || 0) > 0) && (
          <div className="battle-items-bar">
            {battleItems.map(([key, item]) => {
              const count = inv[key] || 0
              if (count <= 0) return null
              return (
                <button
                  key={key}
                  className={`battle-item-btn ${activeTargetItem === key ? 'battle-item-active' : ''}`}
                  onClick={() => handleUseBattleItem(key)}
                  title={item.description}
                >
                  {item.emoji} ×{count}
                </button>
              )
            })}
          </div>
        )}

        {/* Targeting instruction banner */}
        {activeTargetItem && TARGETING_MESSAGES[activeTargetItem] && (
          <div className="battle-targeting-banner">
            {TARGETING_MESSAGES[activeTargetItem]}
            <button className="minecraft-button secondary" style={{ marginLeft: '0.5rem', padding: '0.15rem 0.4rem', fontSize: '0.7rem' }} onClick={() => setActiveTargetItem(null)}>
              Cancel
            </button>
          </div>
        )}

        <div className={`garden-field battle-field ${activeTargetItem ? 'battle-targeting' : ''}`} onClick={handleBattleFieldClick}>
          {/* Seed Vault at grid center */}
          {(() => {
            const vaultPos = getPlotPosition(GRID_CENTER.row, GRID_CENTER.col)
            return (
              <div className="garden-center" style={{ left: `${vaultPos.x}%`, top: `${vaultPos.y}%` }} onClick={e => e.stopPropagation()}>
                <CrazyDave size={36} animate />
                <span className="garden-center-label">Seed Vault</span>
                {b.shieldNextAt !== null && (
                  <span className="vault-shield-indicator">🛡️</span>
                )}
                {b.shieldTriggeredAt && b.elapsed - b.shieldTriggeredAt < 1 && (
                  <div className="battle-shield-pulse" />
                )}
              </div>
            )
          })()}

          {/* Plants */}
          {b.plants.map(p => {
            const isChomping = p.type === 'chomper' && p.chompingUntil && p.chompingUntil > b.elapsed
            return (
              <div
                key={p.uid}
                className={`battle-entity battle-plant-entity ${b.superchargedPlants?.[p.uid] > b.elapsed ? 'battle-supercharged' : ''} ${p.damageMultiplier > 1 ? 'battle-plant-doubled' : ''} ${isTargetingPlant ? 'battle-targetable' : ''} ${isChomping ? 'battle-chomper-chomping' : ''}`}
                style={{ left: `${p.position.x}%`, top: `${p.position.y}%` }}
                onClick={isTargetingPlant ? (e) => handleTargetClick('plant', p, e) : undefined}
              >
                {PLANT_COMPONENTS[p.type] &&
                  (() => { const C = PLANT_COMPONENTS[p.type]; return <C size={24} animate /> })()
                }
                {p.damageMultiplier > 1 && <span className="battle-buff-badge">×{p.damageMultiplier}</span>}
                <div className="battle-hp-bar">
                  <div
                    className="battle-hp-fill battle-hp-green"
                    style={{ width: `${(p.hp / (PLANT_BATTLE_STATS[p.type]?.hp || 5)) * 100}%` }}
                  />
                </div>
              </div>
            )
          })}

          {/* Zombies */}
          {b.zombies.map(z => (
            <div
              key={z.uid}
              className={`battle-entity battle-zombie-entity ${z.attacking ? 'battle-zombie-attacking' : ''} ${z.slowUntil && z.slowUntil > b.elapsed ? 'battle-zombie-slowed' : ''} ${z.butterFrozenUntil && z.butterFrozenUntil > b.elapsed ? 'battle-zombie-buttered' : ''} ${isTargetingZombie ? 'battle-targetable-zombie' : ''} ${z.vaulting ? 'battle-zombie-vaulting' : ''} ${z.hypnotized ? 'battle-zombie-hypnotized' : ''}`}
              style={{ left: `${z.x}%`, top: `${z.y}%` }}
              onClick={isTargetingZombie ? (e) => handleTargetClick('zombie', z, e) : undefined}
            >
              <Zombie size={22} animate variant={
                z.type === 'polevaulter' ? (z.hasVaulted ? 'polevaulter_nopole' : 'polevaulter') :
                z.type === 'newspaper' ? (z.newspaperBroken ? 'newspaper_broken' : 'newspaper') :
                z.type
              } />
              <div className="battle-hp-bar">
                <div
                  className="battle-hp-fill battle-hp-red"
                  style={{ width: `${(z.hp / z.maxHp) * 100}%` }}
                />
              </div>
            </div>
          ))}

          {/* Projectiles */}
          {b.projectiles.map(pj => (
            <div
              key={pj.uid}
              className={`battle-pea ${pj.fromMutation === 'fire' ? 'battle-pea-fire' : ''} ${pj.isIce ? 'battle-pea-ice' : ''} ${pj.isButter ? 'battle-pea-butter' : ''} ${pj.plantType === 'kernelpult' && !pj.isButter ? 'battle-pea-kernel' : ''} ${pj.plantType === 'cabbagepult' ? 'battle-pea-cabbage' : ''}`}
              style={{ left: `${pj.x}%`, top: `${pj.y}%` }}
            />
          ))}

          {/* Pizza decoys */}
          {b.decoys.filter(d => b.elapsed < d.expiresAt).map(d => (
            <div
              key={d.uid}
              className="battle-decoy"
              style={{ left: `${d.x}%`, top: `${d.y}%` }}
              onClick={e => e.stopPropagation()}
            >
              🍕
            </div>
          ))}

          {/* Chomp effects */}
          {b.chompEffects.map(c => (
            <div
              key={c.uid}
              className="battle-chomp-effect"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              CHOMP!
            </div>
          ))}

          {/* Doom-shroom explosion */}
          {b.doomShroomTriggered && b.elapsed - b.doomShroomTriggered < 1.5 && (
            <div className="doom-shroom-explosion">
              ☠️ DOOM! ☠️
            </div>
          )}
        </div>
      </div>
    )
  }

  // Won / Lost
  if (phase === 'won' || phase === 'lost') {
    const b = battleRef.current
    const allPlants = b.allBattlePlants || []
    const survivingUids = new Set(b.plants.filter(p => p.hp > 0).map(p => p.uid))
    const survivedCount = allPlants.filter(p => survivingUids.has(p.uid)).length
    const fallenCount = allPlants.length - survivedCount

    return (
      <div className="battle-results">
        <div className="content-box" style={{ textAlign: 'center' }}>
          {phase === 'won' ? (
            <>
              <h2>Wave Survived! 🎉</h2>
              <Peashooter size={56} animate />
            </>
          ) : (
            <>
              <h2>The Vault Was Breached! 💀</h2>
              <Zombie size={56} animate />
            </>
          )}
          <p style={{ marginTop: '0.5rem' }}>
            Coins earned: <strong>{b.coinsEarned} 🪙</strong>
          </p>
          <div className="battle-plant-report">
            {survivedCount > 0 && (
              <p className="battle-survived">🌱 {survivedCount} plant{survivedCount > 1 ? 's' : ''} returned healthy</p>
            )}
            {fallenCount > 0 && (
              <p className="battle-fallen">💧 {fallenCount} plant{fallenCount > 1 ? 's' : ''} wounded — water them to recover!</p>
            )}
            {fallenCount === 0 && survivedCount > 0 && (
              <p className="battle-perfect">All plants survived! 🌟</p>
            )}
          </div>
          <button className="minecraft-button" onClick={handleBattleEnd}>
            Back to Garden
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default DefendMode
