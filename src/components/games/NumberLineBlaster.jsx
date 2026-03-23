import { useState, useEffect, Fragment } from 'react'
import { worlds } from './numberLineData'
import { Peashooter, Zombie, Sun, CrazyDave, Sunflower, WallNut } from '../characters'

const worldIcons = [Peashooter, WallNut, Sun, Sunflower, CrazyDave, Zombie]

function formatNumber(n, useDecimals = false) {
  if (Number.isNaN(n) || !Number.isFinite(n)) return '?'
  if (Math.abs(n - Math.round(n)) < 0.0001) return Math.round(n).toString()
  if (useDecimals) return parseFloat(n.toFixed(2)).toString()
  const whole = Math.floor(n)
  const frac = n - whole
  const fracs = [
    [1/3, '\u2153'], [2/3, '\u2154'],
    [1/4, '\u00BC'], [1/2, '\u00BD'], [3/4, '\u00BE'],
  ]
  for (const [val, sym] of fracs) {
    if (Math.abs(frac - val) < 0.01) return whole > 0 ? `${whole}${sym}` : sym
  }
  return parseFloat(n.toFixed(2)).toString()
}

function getCardClass(card) {
  switch (card.op) {
    case '+': return 'nlb-card-add'
    case '-': return 'nlb-card-sub'
    case '\u00D7': return 'nlb-card-mul'
    case '\u00F7': return 'nlb-card-div'
    case 'sq': case 'cube': return 'nlb-card-pow'
    case 'sqrt': return 'nlb-card-root'
    default: return ''
  }
}

function evalChain(start, cards) {
  let v = start
  for (const c of cards) {
    switch (c.op) {
      case '+': v += c.value; break
      case '-': v -= c.value; break
      case '\u00D7': v *= c.value; break
      case '\u00F7': v /= c.value; break
      case 'sq': v = v * v; break
      case 'cube': v = v * v * v; break
      case 'sqrt': v = Math.sqrt(v); break
    }
  }
  return v
}

function NumberLineBlaster({ setCurrentView }) {
  const [phase, setPhase] = useState('worldSelect')
  const [worldIdx, setWorldIdx] = useState(0)
  const [levelIdx, setLevelIdx] = useState(0)
  const [hand, setHand] = useState([])
  const [chain, setChain] = useState([])
  const [zombies, setZombies] = useState([])
  const [shots, setShots] = useState(0)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [firing, setFiring] = useState(false)
  const [celebration, setCelebration] = useState(null) // null | 'hit' | 'victory'
  const [particles, setParticles] = useState([])
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nlb-progress') || '{}') }
    catch { return {} }
  })

  useEffect(() => {
    localStorage.setItem('nlb-progress', JSON.stringify(completed))
  }, [completed])

  const level = (phase === 'playing' || phase === 'victory')
    ? worlds[worldIdx].levels[levelIdx]
    : null
  const isDecimalWorld = worlds[worldIdx]?.description === 'Decimals'
  const fmt = (n) => formatNumber(n, isDecimalWorld)
  const start = level?.start || 0
  const chainResult = chain.length > 0 ? evalChain(start, chain) : start
  const isValidResult = Number.isFinite(chainResult) && !Number.isNaN(chainResult)

  // Intermediate chain results for display
  const intermediates = [start]
  if (level) {
    for (let i = 0; i < chain.length; i++) {
      intermediates.push(evalChain(start, chain.slice(0, i + 1)))
    }
  }

  function startLevel(wi, li) {
    const lvl = worlds[wi].levels[li]
    setWorldIdx(wi)
    setLevelIdx(li)
    setHand(lvl.cards.map((c, i) => ({ ...c, id: `c${i}` })))
    setChain([])
    setZombies(lvl.zombies.map((pos, i) => ({ position: pos, alive: true, id: i })))
    setShots(0)
    setMessage('')
    setMessageType('')
    setShowHint(false)
    setFiring(false)
    setCelebration(null)
    setParticles([])
    setPhase('playing')
  }

  function spawnParticles(type) {
    const emojis = type === 'victory'
      ? ['🎉', '⭐', '🌟', '✨', '🏆', '🎊', '💥', '☀️']
      : ['💥', '✨', '⭐', '🔥']
    const count = type === 'victory' ? 20 : 8
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: 30 + Math.random() * 40,
      y: 20 + Math.random() * 40,
      dx: (Math.random() - 0.5) * 60,
      dy: -30 - Math.random() * 40,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.8,
      delay: Math.random() * 0.3,
    }))
    setParticles(newParticles)
  }

  function addToChain(card) {
    setHand(h => h.filter(c => c.id !== card.id))
    setChain(ch => [...ch, card])
    setMessage('')
    setShowHint(false)
  }

  function removeFromChain(idx) {
    const card = chain[idx]
    setChain(ch => ch.filter((_, i) => i !== idx))
    setHand(h => [...h, card])
    setMessage('')
  }

  function resetChain() {
    setHand(h => [...h, ...chain])
    setChain([])
    setMessage('')
  }

  function fire() {
    if (chain.length === 0 || !isValidResult || firing) return
    const result = evalChain(start, chain)
    const hitIdx = zombies.findIndex(z => z.alive && Math.abs(z.position - result) < 0.001)
    const newShots = shots + 1
    setShots(newShots)
    setChain([])
    setFiring(true)

    if (hitIdx >= 0) {
      // Brief pause to show the pea traveling, then destroy
      setTimeout(() => {
        const newZombies = zombies.map((z, i) => i === hitIdx ? { ...z, alive: false } : z)
        setZombies(newZombies)
        if (newZombies.every(z => !z.alive)) {
          const par = level.par || zombies.length
          let stars = 1
          if (hand.length > 0) stars = 2
          if (newShots <= par) stars = 3
          const key = `${worldIdx}-${levelIdx}`
          setCompleted(prev => ({ ...prev, [key]: Math.max(prev[key] || 0, stars) }))
          setMessage(`All zombies defeated in ${newShots} shot${newShots > 1 ? 's' : ''}!`)
          setMessageType('hit')
          setCelebration('victory')
          spawnParticles('victory')
          setTimeout(() => { setFiring(false); setCelebration(null); setParticles([]); setPhase('victory') }, 3000)
        } else {
          setMessage('Direct hit!')
          setMessageType('hit')
          setCelebration('hit')
          spawnParticles('hit')
          setTimeout(() => { setFiring(false); setCelebration(null); setParticles([]) }, 1500)
        }
      }, 600)
    } else {
      setMessage(`Missed! Pea landed at ${fmt(result)}`)
      setMessageType('miss')
      setTimeout(() => setFiring(false), 800)
    }
  }

  function retry() { startLevel(worldIdx, levelIdx) }

  function nextLevel() {
    if (levelIdx + 1 < worlds[worldIdx].levels.length) {
      startLevel(worldIdx, levelIdx + 1)
    } else if (worldIdx + 1 < worlds.length) {
      startLevel(worldIdx + 1, 0)
    } else {
      setPhase('worldSelect')
    }
  }

  // ── World Select ──
  if (phase === 'worldSelect') {
    return (
      <div className="nlb-game">
        <div className="content-box">
          <h2>Number Line Blaster</h2>
          <p>Chain math operations to hit zombies on the number line!</p>
        </div>
        <div className="nlb-worlds">
          {worlds.map((world, wi) => {
            const Icon = worldIcons[wi]
            const done = world.levels.filter((_, li) => completed[`${wi}-${li}`]).length
            return (
              <button
                key={wi}
                className="minecraft-button"
                onClick={() => { setWorldIdx(wi); setPhase('levelSelect') }}
              >
                <span className="btn-with-icon">
                  <Icon size={28} />
                  <span>
                    <strong>{world.name}</strong>
                    <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.8 }}>
                      {world.description} — {done}/{world.levels.length}
                    </span>
                  </span>
                </span>
              </button>
            )
          })}
        </div>
        <button className="minecraft-button secondary" onClick={() => setCurrentView('home')} style={{ marginTop: '1rem' }}>
          Back to Home
        </button>
      </div>
    )
  }

  // ── Level Select ──
  if (phase === 'levelSelect') {
    const world = worlds[worldIdx]
    const Icon = worldIcons[worldIdx]
    return (
      <div className="nlb-game">
        <div className="content-box">
          <div className="chapter-mascot"><Icon size={64} animate /></div>
          <h2>{world.name}</h2>
          <p>{world.description}</p>
        </div>
        <div className="nlb-levels">
          {world.levels.map((lvl, li) => {
            const stars = completed[`${worldIdx}-${li}`] || 0
            return (
              <button key={li} className="minecraft-button" onClick={() => startLevel(worldIdx, li)}>
                <span className="btn-with-icon" style={{ justifyContent: 'space-between', width: '100%' }}>
                  <span>{li + 1}. {lvl.name}</span>
                  <span className="nlb-stars">
                    {stars > 0 ? '\u2605'.repeat(stars) + '\u2606'.repeat(3 - stars) : '\u2606\u2606\u2606'}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
        <button className="minecraft-button secondary" onClick={() => setPhase('worldSelect')} style={{ marginTop: '1rem' }}>
          Back to Worlds
        </button>
      </div>
    )
  }

  // ── Victory ──
  if (phase === 'victory') {
    const par = level.par || zombies.length
    const stars = completed[`${worldIdx}-${levelIdx}`] || 0
    const isLast = worldIdx === worlds.length - 1 && levelIdx === worlds[worldIdx].levels.length - 1
    return (
      <div className="nlb-game">
        <div className="content-box nlb-victory">
          <h2>Level Complete!</h2>
          <div className="score-characters">
            {stars >= 3 && <><Sunflower size={40} animate /><Sunflower size={52} animate /><Sunflower size={40} animate /></>}
            {stars === 2 && <><Sunflower size={44} animate /><Sunflower size={44} animate /></>}
            {stars === 1 && <Sunflower size={48} animate />}
          </div>
          <div className="nlb-big-stars">{'\u2605'.repeat(stars)}{'\u2606'.repeat(3 - stars)}</div>
          <p className="nlb-stat">Shots used: {shots} (Par: {par})</p>
          <p className="nlb-stat">Cards remaining: {hand.length}</p>
          <div className="nlb-actions">
            <button className="minecraft-button" onClick={retry}>Retry</button>
            {!isLast && <button className="minecraft-button" onClick={nextLevel}>Next Level</button>}
            <button className="minecraft-button secondary" onClick={() => setPhase('levelSelect')}>Level Select</button>
          </div>
        </div>
      </div>
    )
  }

  // ── Playing ──
  const lineMin = level.lineMin || 0
  const lineMax = level.lineMax || 10
  const step = level.step || 1
  const range = lineMax - lineMin
  const getPos = (v) => Math.max(0, Math.min(100, ((v - lineMin) / range) * 100))

  const totalSteps = Math.round(range / step)
  const labelEvery = totalSteps > 20 ? 5 : totalSteps > 12 ? 2 : 1
  const ticks = []
  for (let i = 0; i <= totalSteps; i++) {
    const value = Math.round((lineMin + i * step) * 10000) / 10000
    ticks.push({ value, showLabel: i % labelEvery === 0 || i === 0 || i === totalSteps })
  }

  const aliveZombies = zombies.filter(z => z.alive).length
  const noCardsLeft = hand.length === 0 && chain.length === 0

  return (
    <div className="nlb-game">
      {/* HUD */}
      <div className="content-box nlb-header">
        <h2>{worlds[worldIdx].name} — {level.name}</h2>
        <p>Zombies: {aliveZombies} remaining | Shots fired: {shots}</p>
      </div>

      {/* Message */}
      {message && (
        <div className={`nlb-message-bar ${messageType === 'hit' ? 'nlb-msg-hit' : messageType === 'miss' ? 'nlb-msg-miss' : ''}`}>
          {messageType === 'hit' && <Peashooter size={24} />}
          {messageType === 'miss' && <Zombie size={24} />}
          <span>{message}</span>
        </div>
      )}

      {/* Celebration overlay */}
      {celebration && (
        <div className={`nlb-celebration ${celebration === 'victory' ? 'nlb-celebration-victory' : 'nlb-celebration-hit'}`}>
          {celebration === 'victory' && (
            <div className="nlb-victory-text">
              <Peashooter size={48} animate />
              <span>VICTORY!</span>
              <Peashooter size={48} animate />
            </div>
          )}
          {particles.map(p => (
            <span
              key={p.id}
              className="nlb-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                '--dx': `${p.dx}px`,
                '--dy': `${p.dy}px`,
                '--rot': `${p.rotation}deg`,
                '--scale': p.scale,
                animationDelay: `${p.delay}s`,
                fontSize: `${1.2 * p.scale}rem`,
              }}
            >
              {p.emoji}
            </span>
          ))}
        </div>
      )}

      {/* Number Line */}
      <div className="nlb-line-area">
        <div className="nlb-line">
          <div className="nlb-track" />

          {ticks.map(({ value, showLabel }) => (
            <div key={value} className="nlb-tick" style={{ left: `${getPos(value)}%` }}>
              <div className="nlb-tick-mark" />
              {showLabel && <div className="nlb-tick-label">{fmt(value)}</div>}
            </div>
          ))}

          {zombies.map((z) => (
            <div
              key={z.id}
              className={`nlb-zombie-marker ${!z.alive ? 'nlb-zombie-dead' : ''}`}
              style={{ left: `${getPos(z.position)}%` }}
            >
              {z.alive ? <Zombie size={44} animate /> : <span style={{ fontSize: '1.5rem' }}>💥</span>}
              <div className="nlb-zombie-pos">{fmt(z.position)}</div>
            </div>
          ))}

          {chain.length > 0 && isValidResult && (
            <div className="nlb-pea-marker" style={{ left: `${getPos(chainResult)}%` }}>
              <div className="nlb-pea-dot" />
              <div className="nlb-pea-label">{fmt(chainResult)}</div>
            </div>
          )}
        </div>
      </div>

      {/* Chain */}
      <div className="nlb-chain-area">
        <div className="nlb-cards-label">Chain:</div>
        <div className="nlb-chain">
          {chain.length === 0 ? (
            <span className="nlb-chain-empty">Click cards below to build your chain</span>
          ) : (
            <>
              <span className="nlb-chain-value">{fmt(start)}</span>
              {chain.map((card, i) => (
                <Fragment key={card.id}>
                  <span className="nlb-chain-arrow">{'\u2192'}</span>
                  <button
                    className={`nlb-card nlb-card-chained ${getCardClass(card)}`}
                    onClick={() => removeFromChain(i)}
                    title="Click to remove"
                  >
                    {card.label}
                  </button>
                  <span className="nlb-chain-arrow">{'\u2192'}</span>
                  <span className="nlb-chain-value">{fmt(intermediates[i + 1])}</span>
                </Fragment>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Hand */}
      <div className="nlb-cards-area">
        <div className="nlb-cards-label">Your cards:</div>
        <div className="nlb-hand">
          {hand.length === 0 ? (
            <span className="nlb-chain-empty">{chain.length > 0 ? 'All cards in chain' : 'No cards remaining'}</span>
          ) : (
            hand.map(card => (
              <button
                key={card.id}
                className={`nlb-card ${getCardClass(card)}`}
                onClick={() => addToChain(card)}
              >
                {card.label}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Hint */}
      {showHint && level.hint && (
        <div className="dave-speech" style={{ margin: '0.5rem 0' }}>
          <CrazyDave size={36} />
          <div className="speech-bubble"><p>{level.hint}</p></div>
        </div>
      )}

      {/* Actions */}
      <div className="nlb-actions">
        <button className="minecraft-button" onClick={fire} disabled={chain.length === 0 || !isValidResult || firing}>
          Fire!
        </button>
        <button className="minecraft-button secondary" onClick={resetChain} disabled={chain.length === 0}>
          Reset
        </button>
        {level.hint && (
          <button className="minecraft-button info" onClick={() => setShowHint(!showHint)}>
            {showHint ? 'Hide Hint' : 'Hint'}
          </button>
        )}
        <button className="minecraft-button secondary" onClick={retry}>Retry</button>
        <button className="minecraft-button secondary" onClick={() => setPhase('levelSelect')}>Back</button>
      </div>

      {/* No cards left */}
      {noCardsLeft && aliveZombies > 0 && (
        <div className="content-box" style={{ marginTop: '1rem', background: 'rgba(220,20,60,0.3)', borderColor: '#DC143C' }}>
          <p>No cards left! {aliveZombies} zombie{aliveZombies > 1 ? 's' : ''} still standing.</p>
          <button className="minecraft-button" onClick={retry}>Retry Level</button>
        </div>
      )}
    </div>
  )
}

export default NumberLineBlaster
