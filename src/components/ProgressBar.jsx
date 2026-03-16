function ProgressBar({ current, total }) {
  const percent = Math.round(((current + 1) / total) * 100)

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      <span className="progress-bar-text">
        {current + 1} / {total}
      </span>
    </div>
  )
}

export default ProgressBar
