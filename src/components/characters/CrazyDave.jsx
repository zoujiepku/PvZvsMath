function CrazyDave({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-crazydave ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Pot on head */}
      <rect x="14" y="2" width="36" height="8" rx="2" fill="#9E9E9E" />
      <rect x="18" y="0" width="28" height="4" rx="2" fill="#BDBDBD" />
      <rect x="12" y="8" width="40" height="4" rx="1" fill="#757575" />
      {/* Head */}
      <rect x="16" y="10" width="32" height="30" rx="8" fill="#FFCC80" />
      {/* Eyes - wide and crazy */}
      <circle cx="26" cy="22" r="6" fill="#FFF" />
      <circle cx="38" cy="22" r="6" fill="#FFF" />
      <circle cx="26" cy="22" r="3" fill="#1B5E20" />
      <circle cx="38" cy="22" r="3" fill="#1B5E20" />
      <circle cx="27" cy="21" r="1.2" fill="#FFF" />
      <circle cx="39" cy="21" r="1.2" fill="#FFF" />
      {/* Eyebrows - raised */}
      <path d="M20 15 Q26 12 32 15" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 15 Q38 12 44 15" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Big smile */}
      <path d="M22 30 Q32 38 42 30" fill="#B71C1C" stroke="#5D4037" strokeWidth="1" />
      <rect x="26" y="30" width="4" height="3" rx="0.5" fill="#FFF" />
      <rect x="34" y="30" width="4" height="3" rx="0.5" fill="#FFF" />
      {/* Beard */}
      <path d="M16 34 Q18 48 32 52 Q46 48 48 34" fill="#5D4037" />
      <path d="M20 38 Q22 42 24 38" fill="none" stroke="#4E342E" strokeWidth="1" />
      <path d="M28 40 Q30 44 32 40" fill="none" stroke="#4E342E" strokeWidth="1" />
      <path d="M36 38 Q38 42 40 38" fill="none" stroke="#4E342E" strokeWidth="1" />
      {/* Body hint */}
      <rect x="20" y="52" width="24" height="12" rx="4" fill="#1565C0" />
    </svg>
  )
}

export default CrazyDave
