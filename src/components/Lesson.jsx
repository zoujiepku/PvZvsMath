import { useState } from 'react'
import ProgressBar from './ProgressBar'
import LessonStep from './LessonStep'
import ScoreScreen from './ScoreScreen'

function Lesson({ lessonData, setCurrentView, returnView }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState(false)
  const [completed, setCompleted] = useState(false)

  const step = lessonData[currentStep]
  const isInteractive = step?.type === 'interactive'
  const isCorrect = isInteractive && selectedAnswer === step?.correctIndex
  const canAdvance = !isInteractive || isCorrect

  function handleAnswer(choiceIndex) {
    setSelectedAnswer(choiceIndex)
    setFeedback(true)
  }

  function handleNext() {
    if (currentStep < lessonData.length - 1) {
      setCurrentStep(currentStep + 1)
      setSelectedAnswer(null)
      setFeedback(false)
    } else {
      setCompleted(true)
    }
  }

  if (completed) {
    return (
      <ScoreScreen
        title="Lesson Complete!"
        score={lessonData.length}
        total={lessonData.length}
        message="You finished the whole lesson! Great job, defender!"
        onRetry={() => {
          setCurrentStep(0)
          setSelectedAnswer(null)
          setFeedback(false)
          setCompleted(false)
        }}
        onContinue={() => setCurrentView(returnView)}
      />
    )
  }

  function jumpTo(index) {
    setCurrentStep(index)
    setSelectedAnswer(null)
    setFeedback(false)
    setCompleted(false)
  }

  return (
    <div className="lesson">
      <div className="lesson-top-bar">
        <ProgressBar current={currentStep} total={lessonData.length} />
        <select
          className="lesson-jump"
          value={currentStep}
          onChange={(e) => jumpTo(Number(e.target.value))}
        >
          {lessonData.map((s, i) => (
            <option key={i} value={i}>
              {i + 1}. {s.title}
            </option>
          ))}
        </select>
      </div>

      <LessonStep
        step={step}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        feedback={feedback}
      />

      <div className="lesson-nav">
        <button
          className="minecraft-button secondary"
          onClick={() => {
            if (currentStep === 0) {
              setCurrentView(returnView)
            } else {
              setCurrentStep(currentStep - 1)
              setSelectedAnswer(null)
              setFeedback(false)
            }
          }}
        >
          {currentStep === 0 ? 'Back' : 'Prev.'}
        </button>
        {canAdvance && (
          <button className="minecraft-button" onClick={handleNext}>
            {currentStep < lessonData.length - 1 ? 'Next' : 'Finish!'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Lesson
