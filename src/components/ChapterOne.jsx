function ChapterOne({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <h2>Chapter 1: Math Laws</h2>
        <p>Learn the secret rules of adding and multiplying!</p>
        <p>Your plants need these math shortcuts to fight zombies!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter1-lesson')}
        >
          Lesson
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter1-quiz')}
        >
          Quiz
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter1-practice')}
        >
          Practice
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

export default ChapterOne
