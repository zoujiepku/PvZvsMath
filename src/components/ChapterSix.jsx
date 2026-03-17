function ChapterSix({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <h2>Chapter 6: Exponents & Powers</h2>
        <p>Unlock the power of tiny numbers!</p>
        <p>Cherry Bomb blasts, growth rates, and power multipliers await!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter6-lesson')}
        >
          Lesson
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter6-quiz')}
        >
          Quiz
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter6-practice')}
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

export default ChapterSix
