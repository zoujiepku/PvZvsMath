import { EmojiGroup, EmojiGrid, EmojiVisual } from './EmojiGroup'
import { FractionBar, FractionCompare } from './FractionBar'

function LessonStep({ step, onAnswer, selectedAnswer, feedback }) {
  return (
    <div className="lesson-step content-box">
      <h2>{step.title}</h2>
      <p>{step.story}</p>

      {step.visual && <EmojiVisual visual={step.visual} />}

      {step.grid && (
        <EmojiGrid emoji={step.grid.emoji} rows={step.grid.rows} cols={step.grid.cols} />
      )}

      {step.fractionBar && (
        <FractionBar
          total={step.fractionBar.total}
          filled={step.fractionBar.filled}
          label={step.fractionBar.label}
        />
      )}

      {step.fractionCompare && (
        <FractionCompare left={step.fractionCompare.left} right={step.fractionCompare.right} />
      )}

      {step.groups && (
        <div className="groups-display">
          {step.groups.map((g, i) => (
            <EmojiGroup key={i} emoji={g.emoji} count={g.count} label={g.label} />
          ))}
        </div>
      )}

      {step.equation && <div className="equation">{step.equation}</div>}

      {step.highlight && <p className="highlight">{step.highlight}</p>}

      {step.type === 'interactive' && (
        <>
          <p className="question-prompt">{step.question}</p>
          <div className="choices">
            {step.choices.map((choice, i) => {
              let className = 'minecraft-button choice-button'
              if (feedback && selectedAnswer === i) {
                className += i === step.correctIndex ? ' choice-correct' : ' choice-wrong'
              }
              if (feedback && i === step.correctIndex) {
                className += ' choice-correct'
              }
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => !feedback && onAnswer(i)}
                  disabled={!!feedback}
                >
                  {choice}
                </button>
              )
            })}
          </div>
          {feedback && (
            <div className={`feedback ${selectedAnswer === step.correctIndex ? 'feedback-correct' : 'feedback-wrong'}`}>
              <p className="feedback-text">
                {selectedAnswer === step.correctIndex ? 'Correct!' : 'Not quite!'}
              </p>
              {step.explanation && <p className="feedback-explanation">{step.explanation}</p>}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default LessonStep
