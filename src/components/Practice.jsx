import { useState, useCallback } from 'react'
import QuestionCard from './QuestionCard'
import ScoreScreen from './ScoreScreen'

function Practice({ practiceConfig, generateFn, setCurrentView, returnView }) {
  const generate = useCallback(
    () => generateFn(practiceConfig),
    [practiceConfig, generateFn]
  )

  const [problem, setProblem] = useState(generate)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [totalCorrect, setTotalCorrect] = useState(0)
  const [totalAttempted, setTotalAttempted] = useState(0)
  const [done, setDone] = useState(false)

  function handleAnswer(choiceIndex) {
    setSelectedAnswer(choiceIndex)
    setShowResult(true)
    setTotalAttempted(totalAttempted + 1)

    if (choiceIndex === problem.correctIndex) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setTotalCorrect(totalCorrect + 1)
      if (newStreak > bestStreak) setBestStreak(newStreak)
    } else {
      setStreak(0)
    }
  }

  function handleNext() {
    setProblem(generate())
    setSelectedAnswer(null)
    setShowResult(false)
  }

  if (done) {
    return (
      <ScoreScreen
        title="Practice Done!"
        score={totalCorrect}
        total={totalAttempted}
        streak={bestStreak}
        onRetry={() => {
          setProblem(generate())
          setSelectedAnswer(null)
          setShowResult(false)
          setStreak(0)
          setBestStreak(0)
          setTotalCorrect(0)
          setTotalAttempted(0)
          setDone(false)
        }}
        onContinue={() => setCurrentView(returnView)}
      />
    )
  }

  let streakMessage = ''
  if (streak >= 10) streakMessage = 'LEGENDARY! 💎🔥💎'
  else if (streak >= 5) streakMessage = 'You are on fire! 🔥🔥'
  else if (streak >= 3) streakMessage = 'Nice streak! 🔥'

  return (
    <div className="practice">
      {streak > 0 && (
        <div className="streak-live">
          Streak: {streak} {streakMessage}
        </div>
      )}

      <QuestionCard
        question={problem}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
      />

      <div className="lesson-nav">
        {showResult && (
          <button className="minecraft-button" onClick={handleNext}>
            Next Problem!
          </button>
        )}
        <button
          className="minecraft-button secondary"
          onClick={() => setDone(true)}
        >
          I'm Done!
        </button>
      </div>
    </div>
  )
}

export default Practice
