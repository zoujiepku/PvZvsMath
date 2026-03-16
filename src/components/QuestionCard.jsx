import MathText from './MathText'

function QuestionCard({ question, onAnswer, selectedAnswer, showResult }) {
  return (
    <div className="question-card content-box">
      {question.emoji && (
        <div className="question-emoji">{question.emoji}</div>
      )}
      <p className="question-prompt"><MathText text={question.prompt || question.question} /></p>

      <div className="choices">
        {question.choices.map((choice, i) => {
          let className = 'minecraft-button choice-button'
          if (showResult && selectedAnswer === i) {
            className += i === question.correctIndex ? ' choice-correct' : ' choice-wrong'
          }
          if (showResult && i === question.correctIndex) {
            className += ' choice-correct'
          }

          return (
            <button
              key={i}
              className={className}
              onClick={() => !showResult && onAnswer(i)}
              disabled={showResult}
            >
              <MathText text={choice} />
            </button>
          )
        })}
      </div>

      {showResult && (
        <div className={`feedback ${selectedAnswer === question.correctIndex ? 'feedback-correct' : 'feedback-wrong'}`}>
          <p className="feedback-text">
            {selectedAnswer === question.correctIndex ? 'Correct!' : 'Not quite!'}
          </p>
          {question.explanation && (
            <p className="feedback-explanation"><MathText text={question.explanation} /></p>
          )}
        </div>
      )}
    </div>
  )
}

export default QuestionCard
