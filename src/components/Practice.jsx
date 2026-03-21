import { useState, useCallback } from 'react'
import QuestionCard from './QuestionCard'
import ScoreScreen from './ScoreScreen'
import { Sun, Sunflower } from './characters'
import { getMathReward } from './games/garden/economy'
import { awardCoinsToGarden } from '../data/progressState'

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
  const [sessionCoins, setSessionCoins] = useState(0)
  const [coinAlert, setCoinAlert] = useState(null)

  function handleAnswer(choiceIndex) {
    setSelectedAnswer(choiceIndex)
    setShowResult(true)
    setTotalAttempted(totalAttempted + 1)

    if (choiceIndex === problem.correctIndex) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setTotalCorrect(totalCorrect + 1)
      if (newStreak > bestStreak) setBestStreak(newStreak)

      // Award coins to garden
      const { total, bonus } = getMathReward(newStreak)
      setSessionCoins(prev => prev + total)
      awardCoinsToGarden(total)
      setCoinAlert(`+${total} 🪙${bonus > 0 ? ` (streak +${bonus})` : ''}`)
      setTimeout(() => setCoinAlert(null), 1500)
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

  let streakDisplay = null
  if (streak >= 10) {
    streakDisplay = <><Sunflower size={24} animate /> <Sun size={20} animate /> LEGENDARY! <Sun size={20} animate /> <Sunflower size={24} animate /></>
  } else if (streak >= 5) {
    streakDisplay = <>Sun power overload! <Sun size={20} animate /> <Sun size={20} animate /></>
  } else if (streak >= 3) {
    streakDisplay = <>Nice combo! <Sun size={20} animate /></>
  }

  return (
    <div className="practice">
      <div className="practice-rewards-row">
        <span className="practice-session-coins">🪙 +{sessionCoins}</span>
        {streak > 0 && (
          <span className="streak-live">
            Streak: {streak} {streakDisplay}
          </span>
        )}
      </div>
      {coinAlert && <div className="garden-coin-alert">{coinAlert}</div>}

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
