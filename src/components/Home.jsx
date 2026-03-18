import { CrazyDave, Peashooter, Sun, WallNut, Sunflower, Zombie } from './characters'

const chapterIcons = [
  { id: 'chapter1', label: 'Chapter 1: Math Laws', Icon: Peashooter },
  { id: 'chapter2', label: 'Chapter 2: Fractions', Icon: Sun },
  { id: 'chapter3', label: 'Chapter 3: More Fractions', Icon: WallNut },
  { id: 'chapter4', label: 'Chapter 4: Decimals', Icon: Sunflower },
  { id: 'chapter5', label: 'Chapter 5: Decimal Operations', Icon: Peashooter },
  { id: 'chapter6', label: 'Chapter 6: Exponents & Powers', Icon: Zombie },
]

function Home({ setCurrentView }) {
  return (
    <div className="home">
      <div className="content-box">
        <div className="chapter-mascot">
          <CrazyDave size={80} animate />
        </div>
        <h2>Welcome, Plant Commander!</h2>
        <p>Get ready to defend the lawn with math!</p>
        <p>Pick a chapter to power up your plants:</p>
      </div>

      <div className="chapter-list">
        {chapterIcons.map(({ id, label, Icon }) => (
          <button
            key={id}
            className="minecraft-button"
            onClick={() => setCurrentView(id)}
          >
            <span className="btn-with-icon">
              <Icon size={24} />
              {label}
            </span>
          </button>
        ))}
      </div>

      <div className="content-box" style={{ marginTop: '1rem' }}>
        <h2>Games</h2>
        <p>Test your math skills in action!</p>
      </div>

      <div className="chapter-list">
        <button className="minecraft-button" onClick={() => setCurrentView('game-nlb')}>
          <span className="btn-with-icon"><Peashooter size={24} /> Number Line Blaster</span>
        </button>
      </div>
    </div>
  )
}

export default Home
