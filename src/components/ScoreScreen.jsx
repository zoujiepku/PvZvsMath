import { Sunflower, Zombie, Sun } from './characters'

function ScoreScreen({ title, score, total, onContinue, onRetry, message, streak }) {
  const percent = total > 0 ? Math.round((score / total) * 100) : 0

  let encouragement
  if (percent === 100) {
    encouragement = 'PERFECT! The lawn is completely defended!'
  } else if (percent >= 80) {
    encouragement = 'Amazing defense! The zombies barely got through!'
  } else if (percent >= 60) {
    encouragement = 'Good defense! Keep planting!'
  } else {
    encouragement = 'The zombies got through! Practice and try again!'
  }

  return (
    <div className="score-screen content-box">
      <h2>{title || 'Results!'}</h2>

      <div className="score-characters">
        {percent >= 100 && <><Sunflower size={48} animate /><Sunflower size={56} animate /><Sunflower size={48} animate /></>}
        {percent >= 80 && percent < 100 && <><Sunflower size={48} animate /><Sunflower size={48} animate /></>}
        {percent >= 60 && percent < 80 && <Sunflower size={48} animate />}
        {percent < 60 && <Zombie size={56} animate />}
      </div>

      <div className="score-big">
        {score} / {total}
      </div>

      {streak !== undefined && streak > 0 && (
        <p className="streak-display">
          Best Streak: {streak} in a row! {Array.from({ length: Math.min(Math.floor(streak / 3), 5) }, (_, i) => (
            <Sun key={i} size={20} />
          ))}
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
