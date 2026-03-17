function ChapterFour({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <h2>Chapter 4: Decimals</h2>
        <p>Learn about numbers with a dot in them!</p>
        <p>Decimals power up your plant damage calculations!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter4-lesson')}
        >
          Lesson
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter4-quiz')}
        >
          Quiz
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter4-practice')}
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

export default ChapterFour
