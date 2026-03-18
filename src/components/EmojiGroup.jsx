import { getCharacterForEmoji } from './characters/emojiMap'

const emojiNames = {
  '☀️': ['sun', 'suns'],
  '🌻': ['sunflower', 'sunflowers'],
  '🟩': ['lawn tile', 'lawn tiles'],
}

function emojiName(emoji, count) {
  const names = emojiNames[emoji]
  if (!names) return emoji
  return count === 1 ? names[0] : names[1]
}

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

function EmojiInline({ emoji, count }) {
  const Char = getCharacterForEmoji(emoji)
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="emoji-item">
          {Char ? <Char size={24} /> : emoji}
        </span>
      ))}
    </>
  )
}

function EmojiVisual({ visual }) {
  if (!visual) return null
  return (
    <div className="emoji-visual-stacked">
      <div className="emoji-visual-line">
        <EmojiInline emoji={visual.left.emoji} count={visual.left.count} />
        <span className="emoji-plus">+</span>
        <EmojiInline emoji={visual.right.emoji} count={visual.right.count} />
      </div>
      <div className="emoji-visual-label">
        {visual.left.count} {emojiName(visual.left.emoji, visual.left.count)} + {visual.right.count} {emojiName(visual.right.emoji, visual.right.count)}
      </div>
    </div>
  )
}

export { EmojiGroup, EmojiGrid, EmojiVisual }
export default EmojiGroup
