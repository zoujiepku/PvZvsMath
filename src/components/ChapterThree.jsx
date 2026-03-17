function ChapterThree({ setCurrentView }) {
  return (
    <div className="chapter-hub">
      <div className="content-box">
        <h2>Chapter 3: More Fractions</h2>
        <p>Level up your fraction skills!</p>
        <p>Master advanced fractions to build the ultimate plant strategy!</p>
      </div>

      <div className="chapter-actions">
        <button
          className="minecraft-button"
          onClick={() => setCurrentView('chapter3-lesson')}
        >
          Lesson
        </button>
        <button
          className="minecraft-button info"
          onClick={() => setCurrentView('chapter3-quiz')}
        >
          Quiz
        </button>
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView('chapter3-practice')}
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

export default ChapterThree
