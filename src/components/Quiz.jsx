import { useState, useRef } from 'react'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'
import ScoreScreen from './ScoreScreen'
import {
  loadProgress, saveProgress, recordQuizCompletion,
  getQuizCoinReward, calculateStars, awardCoinsToGarden,
  getQuizUnlockInfo,
} from '../data/progressState'
import { PLANT_TYPES } from './games/garden/gardenData'
import { ITEMS } from './games/garden/itemData'

function Quiz({ quizData, setCurrentView, returnView, chapterId }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [rewardInfo, setRewardInfo] = useState(null)
  const rewardApplied = useRef(false)

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
      // Quiz finished — award coins and record progress
      const finalScore = correctCount
      if (!rewardApplied.current) {
        rewardApplied.current = true
        const progress = loadProgress()
        const stars = calculateStars(finalScore, quizData.length)
        const coins = getQuizCoinReward(progress, chapterId, stars)
        const wasCompleted = progress.chapters[chapterId]?.quizCompleted
        const newProgress = recordQuizCompletion(progress, chapterId, finalScore, quizData.length)
        saveProgress(newProgress)
        awardCoinsToGarden(coins)

        // Check what was unlocked
        const unlockInfo = getQuizUnlockInfo(chapterId)
        let unlockMessage = null
        if (!wasCompleted && unlockInfo) {
          if (unlockInfo.type === 'plant') {
            const plant = PLANT_TYPES[unlockInfo.key]
            unlockMessage = `${plant?.name || unlockInfo.key} unlocked!`
          } else {
            const item = ITEMS[unlockInfo.key]
            unlockMessage = `${item?.name || unlockInfo.key} 道具 unlocked!`
          }
        }

        setRewardInfo({ coins, stars, unlockMessage })
      }
      setFinished(true)
    }
  }

  function handleRetry() {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setCorrectCount(0)
    setFinished(false)
    setRewardInfo(null)
    rewardApplied.current = false
  }

  if (finished) {
    const rewardMessage = rewardInfo
      ? `+${rewardInfo.coins} 🪙 earned!${'★'.repeat(rewardInfo.stars)}${'☆'.repeat(3 - rewardInfo.stars)}${rewardInfo.unlockMessage ? `\n${rewardInfo.unlockMessage}` : ''}`
      : undefined

    return (
      <ScoreScreen
        title="Quiz Results!"
        score={correctCount}
        total={quizData.length}
        onRetry={handleRetry}
        onContinue={() => setCurrentView(returnView)}
        message={rewardMessage}
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
