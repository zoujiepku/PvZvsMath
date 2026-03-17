function Zombie({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-zombie ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="20" y="34" width="24" height="20" rx="3" fill="#5D4037" />
      {/* Tie */}
      <polygon points="32,36 29,42 32,54 35,42" fill="#B71C1C" />
      {/* Arms reaching forward */}
      <rect x="6" y="34" width="16" height="6" rx="3" fill="#6B8E6B" />
      <rect x="42" y="34" width="16" height="6" rx="3" fill="#6B8E6B" />
      {/* Hands */}
      <circle cx="6" cy="37" r="4" fill="#7DA07D" />
      <circle cx="58" cy="37" r="4" fill="#7DA07D" />
      {/* Head */}
      <rect x="18" y="4" width="28" height="32" rx="6" fill="#6B8E6B" />
      <rect x="20" y="6" width="24" height="28" rx="5" fill="#7DA07D" />
      {/* Messy hair */}
      <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
      <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
      <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
      <rect x="38" y="3" width="8" height="8" rx="2" fill="#3E3E3E" />
      {/* Eyes */}
      <ellipse cx="27" cy="18" rx="4" ry="4.5" fill="#FFF" />
      <ellipse cx="37" cy="18" rx="4" ry="4.5" fill="#FFF" />
      <circle cx="28" cy="19" r="2.5" fill="#B71C1C" />
      <circle cx="38" cy="19" r="2.5" fill="#B71C1C" />
      <circle cx="28.5" cy="18.5" r="0.8" fill="#FFF" />
      <circle cx="38.5" cy="18.5" r="0.8" fill="#FFF" />
      {/* Dark circles under eyes */}
      <ellipse cx="27" cy="23" rx="4" ry="1.5" fill="#556B2F" opacity="0.6" />
      <ellipse cx="37" cy="23" rx="4" ry="1.5" fill="#556B2F" opacity="0.6" />
      {/* Mouth with teeth */}
      <rect x="24" y="26" width="16" height="6" rx="2" fill="#3E2723" />
      <rect x="26" y="26" width="3" height="3" rx="0.5" fill="#E0E0E0" />
      <rect x="31" y="26" width="3" height="4" rx="0.5" fill="#E0E0E0" />
      <rect x="36" y="26" width="3" height="2.5" rx="0.5" fill="#E0E0E0" />
    </svg>
  )
}

export default Zombie
