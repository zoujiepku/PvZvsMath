function Sun({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-sun ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <polygon
          key={angle}
          points="32,8 29,16 35,16"
          fill="#FFC107"
          transform={`rotate(${angle} 32 32)`}
        />
      ))}
      {/* Outer glow */}
      <circle cx="32" cy="32" r="16" fill="#FFD700" />
      {/* Inner face */}
      <circle cx="32" cy="32" r="13" fill="#FFC107" />
      {/* Eyes */}
      <ellipse cx="27" cy="30" rx="2.5" ry="3" fill="#F57F17" />
      <ellipse cx="37" cy="30" rx="2.5" ry="3" fill="#F57F17" />
      <circle cx="27.5" cy="29.5" r="1" fill="#FFF" />
      <circle cx="37.5" cy="29.5" r="1" fill="#FFF" />
      {/* Smile */}
      <path d="M26 35 Q32 40 38 35" fill="none" stroke="#F57F17" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="23" cy="34" r="2" fill="#FF9800" opacity="0.5" />
      <circle cx="41" cy="34" r="2" fill="#FF9800" opacity="0.5" />
    </svg>
  )
}

export default Sun
