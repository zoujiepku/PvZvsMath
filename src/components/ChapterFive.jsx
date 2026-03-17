import { Peashooter, CrazyDave, Zombie } from './characters'

function ChapterFive({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <div className="chapter-mascot">
          <Peashooter size={64} animate />
        </div>
        <h2>Chapter 5: Decimal Operations</h2>
        <p>Add, subtract, and multiply decimals!</p>
        <p>Calculate battle damage like a plant commander!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter5-lesson')}
        >
          <span className="btn-with-icon"><CrazyDave size={20} /> Lesson</span>
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter5-quiz')}
        >
          <span className="btn-with-icon"><Zombie size={20} /> Quiz</span>
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter5-practice')}
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

export default ChapterFive
