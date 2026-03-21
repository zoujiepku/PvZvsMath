import { useState, useCallback } from 'react'
import QuestionCard from '../../QuestionCard'
import { CrazyDave, Sun, Sunflower } from '../../characters'
import { getMathReward } from './economy'

function MathForCoins({ chapters, onEarnCoins, onClose, coins }) {
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
  const [sessionCoins, setSessionCoins] = useState(0)
  const [coinAlert, setCoinAlert] = useState(null)

  function handleAnswer(choiceIndex) {
    setSelectedAnswer(choiceIndex)
    setShowResult(true)

    if (choiceIndex === problem.correctIndex) {
      const newStreak = streak + 1
      setStreak(newStreak)

      const { total, bonus } = getMathReward(newStreak)
      setSessionCoins(prev => prev + total)
      onEarnCoins(total)
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

  let streakDisplay = null
  if (streak >= 10) {
    streakDisplay = <><Sunflower size={20} animate /> LEGENDARY! <Sunflower size={20} animate /></>
  } else if (streak >= 5) {
    streakDisplay = <>Bonus coins! <Sun size={18} animate /> <Sun size={18} animate /></>
  } else if (streak >= 3) {
    streakDisplay = <>Nice streak! <Sun size={18} animate /></>
  }

  return (
    <div className="math-for-coins">
      <div className="mfc-header">
        <div className="dave-speech">
          <CrazyDave size={40} />
          <div className="speech-bubble">
            <p>Solve math problems to earn coins for your garden!</p>
          </div>
        </div>

        <div className="mfc-stats">
          <span className="garden-coins">🪙 {coins}</span>
          <span className="mfc-session">This session: +{sessionCoins} 🪙</span>
        </div>

        {streak > 0 && (
          <div className="streak-live">{streakDisplay} Streak: {streak}</div>
        )}

        {coinAlert && <div className="garden-coin-alert">{coinAlert}</div>}
      </div>

      <div className="mfc-chapter-select">
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
        <button className="minecraft-button secondary" onClick={onClose}>
          Back to Garden
        </button>
      </div>
    </div>
  )
}

export default MathForCoins
