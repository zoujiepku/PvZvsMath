function ChapterFive({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <h2>Chapter 5: Decimal Operations</h2>
        <p>Add, subtract, and multiply decimals!</p>
        <p>Use decimals to solve money problems like a pro.</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter5-lesson')}
        >
          Lesson
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter5-quiz')}
        >
          Quiz
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter5-practice')}
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

export default ChapterFive
