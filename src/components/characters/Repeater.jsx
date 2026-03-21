function Repeater({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-repeater ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M32 58 Q30 48 28 42 Q26 36 30 30" stroke="#2E7D32" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="22" cy="48" rx="8" ry="4" fill="#4CAF50" transform="rotate(-25 22 48)" />
      <ellipse cx="38" cy="44" rx="7" ry="3.5" fill="#43A047" transform="rotate(20 38 44)" />
      {/* Head (darker green than peashooter) */}
      <ellipse cx="32" cy="20" rx="16" ry="14" fill="#388E3C" />
      <ellipse cx="32" cy="20" rx="14" ry="12" fill="#43A047" />
      {/* Double barrel mouth */}
      <ellipse cx="28" cy="27" rx="6" ry="4" fill="#2E7D32" />
      <ellipse cx="36" cy="27" rx="6" ry="4" fill="#2E7D32" />
      <ellipse cx="28" cy="27" rx="4.5" ry="2.8" fill="#388E3C" />
      <ellipse cx="36" cy="27" rx="4.5" ry="2.8" fill="#388E3C" />
      {/* Peas loading */}
      <circle cx="28" cy="27" r="2.5" fill="#8BC34A" />
      <circle cx="36" cy="27" r="2.5" fill="#8BC34A" />
      {/* Eyes (determined look) */}
      <ellipse cx="26" cy="15" rx="4" ry="5" fill="#FFF" />
      <ellipse cx="38" cy="15" rx="4" ry="5" fill="#FFF" />
      <circle cx="27" cy="15" r="2.5" fill="#1B5E20" />
      <circle cx="39" cy="15" r="2.5" fill="#1B5E20" />
      <circle cx="27.5" cy="14" r="1" fill="#FFF" />
      <circle cx="39.5" cy="14" r="1" fill="#FFF" />
      {/* Eyebrow ridges (tougher look) */}
      <path d="M22 10 Q26 8 30 10" stroke="#2E7D32" strokeWidth="2" fill="none" />
      <path d="M34 10 Q38 8 42 10" stroke="#2E7D32" strokeWidth="2" fill="none" />
      {/* Head bump */}
      <ellipse cx="32" cy="8" rx="4" ry="3" fill="#4CAF50" />
    </svg>
  )
}

export default Repeater
