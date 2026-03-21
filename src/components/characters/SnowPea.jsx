function SnowPea({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-snowpea ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M32 58 Q30 48 28 42 Q26 36 30 30" stroke="#2E7D32" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="22" cy="48" rx="8" ry="4" fill="#4CAF50" transform="rotate(-25 22 48)" />
      <ellipse cx="38" cy="44" rx="7" ry="3.5" fill="#43A047" transform="rotate(20 38 44)" />
      {/* Head (icy blue) */}
      <ellipse cx="32" cy="20" rx="16" ry="14" fill="#4FC3F7" />
      <ellipse cx="32" cy="20" rx="14" ry="12" fill="#81D4FA" />
      {/* Ice crystals */}
      <polygon points="18,12 20,8 22,12" fill="#E1F5FE" opacity="0.7" />
      <polygon points="42,12 44,8 46,12" fill="#E1F5FE" opacity="0.7" />
      {/* Mouth (shooter) */}
      <ellipse cx="32" cy="26" rx="8" ry="5" fill="#0288D1" />
      <ellipse cx="32" cy="26" rx="6" ry="3.5" fill="#039BE5" />
      {/* Ice pea loading */}
      <circle cx="32" cy="26" r="3" fill="#B3E5FC" />
      {/* Eyes */}
      <ellipse cx="26" cy="16" rx="4" ry="5" fill="#FFF" />
      <ellipse cx="38" cy="16" rx="4" ry="5" fill="#FFF" />
      <circle cx="27" cy="16" r="2.5" fill="#01579B" />
      <circle cx="39" cy="16" r="2.5" fill="#01579B" />
      <circle cx="27.5" cy="15" r="1" fill="#FFF" />
      <circle cx="39.5" cy="15" r="1" fill="#FFF" />
      {/* Frost highlight */}
      <ellipse cx="24" cy="10" rx="3" ry="1.5" fill="#E1F5FE" opacity="0.5" />
    </svg>
  )
}

export default SnowPea
