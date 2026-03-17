import { Sunflower, CrazyDave, Zombie, Peashooter } from './characters'

function ChapterFour({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <div className="chapter-mascot">
          <Sunflower size={64} animate />
        </div>
        <h2>Chapter 4: Decimals</h2>
        <p>Learn about numbers with a dot in them!</p>
        <p>Decimals power up your plant damage calculations!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter4-lesson')}
        >
          <span className="btn-with-icon"><CrazyDave size={20} /> Lesson</span>
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter4-quiz')}
        >
          <span className="btn-with-icon"><Zombie size={20} /> Quiz</span>
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter4-practice')}
        >
          <span className="btn-with-icon"><Peashooter size={20} /> Practice</span>
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default ChapterFour
