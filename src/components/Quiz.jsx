import { useState } from 'react'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import ScoreScreen from './ScoreScreen'

function Quiz({ quizData, setCurrentView, returnView }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = quizData[currentQuestion]

  function handleAnswer(choiceIndex) {
    setSelectedAnswer(choiceIndex)
    setShowResult(true)
    if (choiceIndex === question.correctIndex) {
      setCorrectCount(correctCount + 1)
    }
  }

  function handleNext() {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  function handleRetry() {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectCount(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <ScoreScreen
        title="Quiz Results!"
        score={correctCount}
        total={quizData.length}
        onRetry={handleRetry}
        onContinue={() => setCurrentView(returnView)}
      />
    )
  }

  return (
    <div className="quiz">
      <ProgressBar current={currentQuestion} total={quizData.length} />

      <QuestionCard
        question={question}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
      />

      {showResult && (
        <div className="lesson-nav">
          <button className="minecraft-button" onClick={handleNext}>
            {currentQuestion < quizData.length - 1 ? 'Next' : 'See Results!'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
