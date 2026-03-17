import { Sun, CrazyDave, Zombie, Peashooter } from './characters'

function ChapterTwo({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <div className="chapter-mascot">
          <Sun size={64} animate />
        </div>
        <h2>Chapter 2: Fractions</h2>
        <p>Learn how to split things into equal parts!</p>
        <p>Use fractions to divide your lawn defense perfectly!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter2-lesson')}
        >
          <span className="btn-with-icon"><CrazyDave size={20} /> Lesson</span>
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter2-quiz')}
        >
          <span className="btn-with-icon"><Zombie size={20} /> Quiz</span>
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter2-practice')}
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

export default ChapterTwo
