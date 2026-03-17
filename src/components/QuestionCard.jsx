import MathText from './MathText'
import { Peashooter, Zombie } from './characters'
import { getCharacterForEmoji } from './characters/emojiMap'

function QuestionCard({ question, onAnswer, selectedAnswer, showResult }) {
  const CharComponent = question.emoji ? getCharacterForEmoji(question.emoji) : null

  return (
    <div className="question-card content-box">
      {question.emoji && (
        <div className="question-emoji">
          {CharComponent ? <CharComponent size={40} /> : question.emoji}
        </div>
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
          <div className="feedback-with-character">
            {selectedAnswer === question.correctIndex
              ? <Peashooter size={32} animate />
              : <Zombie size={32} animate />
            }
            <p className="feedback-text">
              {selectedAnswer === question.correctIndex ? 'Correct!' : 'Not quite!'}
            </p>
          </div>
          {question.explanation && (
            <p className="feedback-explanation"><MathText text={question.explanation} /></p>
          )}
        </div>
      )}
    </div>
  )
}

export default QuestionCard
