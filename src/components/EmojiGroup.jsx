import { getCharacterForEmoji } from './characters/emojiMap'

function EmojiGroup({ emoji, count, label }) {
  const Char = getCharacterForEmoji(emoji)

  return (
    <div className="emoji-group">
      <div className="emoji-row">
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className="emoji-item">
            {Char ? <Char size={24} /> : emoji}
          </span>
        ))}
      </div>
      {label && <span className="emoji-label">{label}</span>}
    </div>
  )
}

function EmojiGrid({ emoji, rows, cols }) {
  const Char = getCharacterForEmoji(emoji)

  return (
    <div className="emoji-grid">
      {Array.from({ length: rows }, (_, r) => (
        <div key={r} className="emoji-row">
          {Array.from({ length: cols }, (_, c) => (
            <span key={c} className="emoji-item">
              {Char ? <Char size={24} /> : emoji}
            </span>
          ))}
        </div>
      ))}
      <span className="emoji-label">{rows} rows x {cols} columns</span>
    </div>
  )
}

function EmojiVisual({ visual }) {
  if (!visual) return null
  return (
    <div className="emoji-visual">
      <EmojiGroup emoji={visual.left.emoji} count={visual.left.count} label={`${visual.left.count} ${visual.left.emoji}`} />
      <span className="emoji-plus">+</span>
      <EmojiGroup emoji={visual.right.emoji} count={visual.right.count} label={`${visual.right.count} ${visual.right.emoji}`} />
    </div>
  )
}

export { EmojiGroup, EmojiGrid, EmojiVisual }
export default EmojiGroup
