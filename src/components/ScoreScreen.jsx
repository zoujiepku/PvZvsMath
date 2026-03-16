function ScoreScreen({ title, score, total, onContinue, onRetry, message, streak }) {
  const percent = total > 0 ? Math.round((score / total) * 100) : 0

  let emoji, encouragement
  if (percent === 100) {
    emoji = '💎💎💎'
    encouragement = 'PERFECT! You are a Minecraft Math Master!'
  } else if (percent >= 80) {
    emoji = '💎💎'
    encouragement = 'Amazing work! Almost perfect!'
  } else if (percent >= 60) {
    emoji = '💎'
    encouragement = 'Good job! You are learning!'
  } else {
    emoji = '⛏️'
    encouragement = 'Great effort! Practice makes perfect!'
  }

  return (
    <div className="score-screen content-box">
      <h2>{title || 'Results!'}</h2>

      <div className="score-emoji">{emoji}</div>

      <div className="score-big">
        {score} / {total}
      </div>

      {streak !== undefined && streak > 0 && (
        <p className="streak-display">
          Best Streak: {streak} in a row!
        </p>
      )}

      <p className="score-message">{message || encouragement}</p>

      <div className="score-actions">
        {onRetry && (
          <button className="minecraft-button" onClick={onRetry}>
            Try Again!
          </button>
        )}
        {onContinue && (
          <button className="minecraft-button secondary" onClick={onContinue}>
            Back
          </button>
        )}
      </div>
    </div>
  )
}

export default ScoreScreen
