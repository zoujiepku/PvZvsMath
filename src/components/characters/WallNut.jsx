function WallNut({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-wallnut ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Main shell */}
      <ellipse cx="32" cy="34" rx="26" ry="28" fill="#8D6E63" />
      <ellipse cx="32" cy="34" rx="23" ry="25" fill="#A1887F" />
      {/* Shell texture / crack lines */}
      <path d="M20 18 Q24 28 18 42" fill="none" stroke="#795548" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M44 16 Q40 26 46 40" fill="none" stroke="#795548" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 10 Q32 14 38 10" fill="none" stroke="#795548" strokeWidth="1.5" strokeLinecap="round" />
      {/* Eyes - determined/worried expression */}
      <ellipse cx="24" cy="28" rx="4" ry="5" fill="#FFF" />
      <ellipse cx="40" cy="28" rx="4" ry="5" fill="#FFF" />
      <circle cx="25" cy="29" r="2.5" fill="#3E2723" />
      <circle cx="41" cy="29" r="2.5" fill="#3E2723" />
      <circle cx="25.5" cy="28" r="1" fill="#FFF" />
      <circle cx="41.5" cy="28" r="1" fill="#FFF" />
      {/* Furrowed brows */}
      <path d="M19 22 L28 24" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      <path d="M45 22 L36 24" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Determined mouth */}
      <path d="M26 38 Q32 42 38 38" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default WallNut
