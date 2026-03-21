import { useMemo } from 'react'
import { CrazyDave, Peashooter, Sun, WallNut, Sunflower, Zombie } from './characters'
import { loadProgress, getTotalStars, getQuizUnlockInfo } from '../data/progressState'
import { PLANT_TYPES } from './games/garden/gardenData'
import { ITEMS } from './games/garden/itemData'

const chapterIcons = [
  { id: 'chapter1', label: 'Chapter 1: Math Laws', Icon: Peashooter },
  { id: 'chapter2', label: 'Chapter 2: Fractions', Icon: Sun },
  { id: 'chapter3', label: 'Chapter 3: More Fractions', Icon: WallNut },
  { id: 'chapter4', label: 'Chapter 4: Decimals', Icon: Sunflower },
  { id: 'chapter5', label: 'Chapter 5: Decimal Operations', Icon: Peashooter },
  { id: 'chapter6', label: 'Chapter 6: Exponents & Powers', Icon: Zombie },
]

function getUnlockLabel(chapterId) {
  const info = getQuizUnlockInfo(chapterId)
  if (!info) return ''
  if (info.type === 'plant') return PLANT_TYPES[info.key]?.name || info.key
  return ITEMS[info.key]?.name || info.key
}

function Home({ setCurrentView }) {
  const progress = useMemo(() => loadProgress(), [])
  const totalStars = useMemo(() => getTotalStars(progress), [progress])

  return (
    <div className="home">
      <div className="content-box">
        <div className="chapter-mascot">
          <CrazyDave size={80} animate />
        </div>
        <h2>Welcome, Plant Commander!</h2>
        <p>Get ready to defend the lawn with math!</p>
      </div>

      <div className="chapter-list">
        <button className="minecraft-button" onClick={() => setCurrentView('game-garden')}>
          <span className="btn-with-icon"><Sunflower size={24} /> Crazy Dave's Garden</span>
        </button>
        <button className="minecraft-button" onClick={() => setCurrentView('game-nlb')}>
          <span className="btn-with-icon"><Peashooter size={24} /> Number Line Blaster</span>
        </button>
      </div>

      <div className="content-box" style={{ marginTop: '1rem' }}>
        <h2>Math Chapters</h2>
        <p>Pick a chapter to power up your plants:</p>
      </div>

      <div className="chapter-list">
        {chapterIcons.map(({ id, label, Icon }) => {
          const ch = progress.chapters[id]
          const stars = ch?.bestStars || 0
          const unlockLabel = getUnlockLabel(id)
          return (
            <button
              key={id}
              className="minecraft-button"
              onClick={() => setCurrentView(id)}
            >
              <span className="btn-with-icon">
                <Icon size={24} />
                {label}
                {stars > 0 && <span className="chapter-stars"> {'★'.repeat(stars)}</span>}
              </span>
              {!ch?.quizCompleted && unlockLabel && (
                <span className="chapter-unlock-hint">Quiz unlocks: {unlockLabel}</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Home
