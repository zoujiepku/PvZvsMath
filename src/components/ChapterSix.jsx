import { Zombie, CrazyDave, Peashooter } from './characters'

function ChapterSix({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <div className="chapter-mascot">
          <Zombie size={64} animate />
        </div>
        <h2>Chapter 6: Exponents & Powers</h2>
        <p>Unlock the power of tiny numbers!</p>
        <p>Cherry Bomb blasts, growth rates, and power multipliers await!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter6-lesson')}
        >
          <span className="btn-with-icon"><CrazyDave size={20} /> Lesson</span>
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter6-quiz')}
        >
          <span className="btn-with-icon"><Zombie size={20} /> Quiz</span>
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter6-practice')}
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

export default ChapterSix
