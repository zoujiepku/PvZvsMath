function FractionBar({ total, filled, label }) {
  return (
    <div className="fraction-bar-wrapper">
      <div className="fraction-bar-slots">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`fraction-slot ${i < filled ? 'fraction-slot-filled' : 'fraction-slot-empty'}`}
          />
        ))}
      </div>
      {label && <span className="fraction-bar-label">{label}</span>}
    </div>
  )
}

function FractionCompare({ left, right }) {
  return (
    <div className="fraction-compare">
      <FractionBar total={left.total} filled={left.filled} label={left.label} />
      <span className="fraction-vs">vs</span>
      <FractionBar total={right.total} filled={right.filled} label={right.label} />
    </div>
  )
}

export { FractionBar, FractionCompare }
export default FractionBar
