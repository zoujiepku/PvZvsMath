import { useState, useCallback } from 'react'
import QuestionCard from '../../QuestionCard'
import { Sun, Sunflower } from '../../characters'
import { PLANT_TYPES, getGrowthStage, rollMutation, MUTATIONS } from './gardenData'
import { getMathReward, STREAK_THRESHOLDS } from './economy'

function WateringSession({ plant, chapters, onGrowAndEarn, onClose }) {
  const [chapterIndex, setChapterIndex] = useState(0)
  const ch = chapters[chapterIndex]

  const generate = useCallback(
    () => ch.generate(ch.practice),
    [ch]
  )

  const [problem, setProblem] = useState(generate)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [mutationAlert, setMutationAlert] = useState(null)
  const [coinAlert, setCoinAlert] = useState(null)
  const [sessionCoins, setSessionCoins] = useState(0)

  const def = PLANT_TYPES[plant.type]
  const stage = getGrowthStage(plant)
  const isMature = stage === 'mature'
  const progress = Math.min(plant.growthTicks / def.growthTicksNeeded, 1)

  function handleAnswer(choiceIndex) {
    setSelectedAnswer(choiceIndex)
    setShowResult(true)

    if (choiceIndex === problem.correctIndex) {
      const newStreak = streak + 1
      setStreak(newStreak)

      // Coin reward
      const { total, bonus } = getMathReward(newStreak)
      setSessionCoins(prev => prev + total)
      setCoinAlert(`+${total} 🪙${bonus > 0 ? ` (streak +${bonus})` : ''}`)
      setTimeout(() => setCoinAlert(null), 1500)

      // Grow the plant (fertilizer doubles growth ticks)
      const fertilizedMultiplier = plant.fertilized ? 2 : 1
      const bonusTick = newStreak >= 5 ? 1 : 0
      const baseTicks = (1 + bonusTick) * fertilizedMultiplier
      const newTicks = Math.min(plant.growthTicks + baseTicks, def.growthTicksNeeded)

      // Check for mutation
      let mutation = plant.mutation
      if (!mutation) {
        const rolled = rollMutation(newStreak)
        if (rolled) {
          mutation = rolled
          setMutationAlert(MUTATIONS[rolled].label)
          setTimeout(() => setMutationAlert(null), 3000)
        }
      }

      onGrowAndEarn({ ...plant, growthTicks: newTicks, mutation, lastWatered: Date.now() }, total)
    } else {
      setStreak(0)
    }
  }

  function handleNext() {
    if (isMature) {
      onClose()
      return
    }
    setProblem(generate())
    setSelectedAnswer(null)
    setShowResult(false)
  }

  let streakDisplay = null
  if (streak >= 10) {
    streakDisplay = <><Sunflower size={20} animate /> LEGENDARY! <Sunflower size={20} animate /></>
  } else if (streak >= 5) {
    streakDisplay = <>Bonus growth! <Sun size={18} animate /> <Sun size={18} animate /></>
  } else if (streak >= 3) {
    streakDisplay = <>Nice streak! <Sun size={18} animate /></>
  }

  return (
    <div className="garden-water-overlay" onClick={onClose}>
      <div className="garden-water-session" onClick={e => e.stopPropagation()}>
        <div className="water-header">
          <h2>💧 Watering {def.name}</h2>
          <div className="water-progress">
            <div className="water-progress-bar">
              <div className="water-progress-fill" style={{ width: `${progress * 100}%` }} />
            </div>
            <span>{plant.growthTicks}/{def.growthTicksNeeded} waters</span>
          </div>

          <div className="water-rewards-row">
            <span className="water-session-coins">Session: +{sessionCoins} 🪙</span>
            {streak > 0 && (
              <span className="streak-live">{streakDisplay} Streak: {streak}</span>
            )}
          </div>

          {coinAlert && <div className="garden-coin-alert">{coinAlert}</div>}
          {mutationAlert && <div className="garden-mutation-alert">Mutation! {mutationAlert}!</div>}
        </div>

        <div className="water-chapter-select">
          {chapters.map((ch, i) => (
            <button
              key={i}
              className={`plot-btn ${i === chapterIndex ? 'plot-btn-active' : ''}`}
              onClick={() => {
                setChapterIndex(i)
                setProblem(chapters[i].generate(chapters[i].practice))
                setSelectedAnswer(null)
                setShowResult(false)
              }}
            >
              Ch{i + 1}
            </button>
          ))}
        </div>

        {isMature ? (
          <div className="water-done">
            <p>Your {def.name} is fully grown! 🎉</p>
            <p>You earned {sessionCoins} coins this session!</p>
            <button className="minecraft-button" onClick={onClose}>Back to Garden</button>
          </div>
        ) : (
          <>
            <QuestionCard
              question={problem}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              showResult={showResult}
            />
            <div className="lesson-nav">
              {showResult && (
                <button className="minecraft-button" onClick={handleNext}>
                  {getGrowthStage({ ...plant, growthTicks: plant.growthTicks }) === 'mature'
                    ? 'Done!'
                    : 'Next Problem!'}
                </button>
              )}
              <button className="minecraft-button secondary" onClick={onClose}>
                Stop Watering
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default WateringSession
