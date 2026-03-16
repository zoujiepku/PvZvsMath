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
  const canAdvance = !isInteractive || feedback

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
        message="You finished the whole lesson! Great job, miner!"
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

  return (
    <div className="lesson">
      <ProgressBar current={currentStep} total={lessonData.length} />

      <LessonStep
        step={step}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        feedback={feedback}
      />

      <div className="lesson-nav">
        {canAdvance && (
          <button className="minecraft-button" onClick={handleNext}>
            {currentStep < lessonData.length - 1 ? 'Next' : 'Finish!'}
          </button>
        )}
        <button
          className="minecraft-button secondary"
          onClick={() => setCurrentView(returnView)}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Lesson
