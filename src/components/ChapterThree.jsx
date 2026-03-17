import { WallNut, CrazyDave, Zombie, Peashooter } from './characters'

function ChapterThree({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <div className="chapter-mascot">
          <WallNut size={64} animate />
        </div>
        <h2>Chapter 3: More Fractions</h2>
        <p>Level up your fraction skills!</p>
        <p>Master advanced fractions to build the ultimate plant strategy!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter3-lesson')}
        >
          <span className="btn-with-icon"><CrazyDave size={20} /> Lesson</span>
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter3-quiz')}
        >
          <span className="btn-with-icon"><Zombie size={20} /> Quiz</span>
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter3-practice')}
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

export default ChapterThree
