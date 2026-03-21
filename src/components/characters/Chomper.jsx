function Chomper({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-chomper ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M30 58 Q28 45 26 38 Q24 32 28 28" stroke="#2E7D32" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Leaves on stem */}
      <ellipse cx="20" cy="46" rx="9" ry="4" fill="#4CAF50" transform="rotate(-30 20 46)" />
      <ellipse cx="36" cy="42" rx="8" ry="4" fill="#43A047" transform="rotate(25 36 42)" />
      {/* Lower jaw */}
      <ellipse cx="32" cy="26" rx="16" ry="10" fill="#7B1FA2" />
      <ellipse cx="32" cy="26" rx="14" ry="8" fill="#9C27B0" />
      {/* Lower teeth */}
      <polygon points="20,22 23,26 18,26" fill="#FFF" />
      <polygon points="26,21 29,26 23,26" fill="#FFF" />
      <polygon points="38,21 41,26 35,26" fill="#FFF" />
      <polygon points="44,22 47,26 41,26" fill="#FFF" />
      {/* Upper head / jaw */}
      <ellipse cx="32" cy="18" rx="17" ry="12" fill="#9C27B0" />
      <ellipse cx="32" cy="18" rx="15" ry="10" fill="#AB47BC" />
      {/* Upper teeth */}
      <polygon points="20,24 23,20 18,20" fill="#FFF" />
      <polygon points="26,25 29,20 23,20" fill="#FFF" />
      <polygon points="38,25 41,20 35,20" fill="#FFF" />
      <polygon points="44,24 47,20 41,20" fill="#FFF" />
      {/* Eyes */}
      <ellipse cx="26" cy="12" rx="4" ry="5" fill="#FFF" />
      <ellipse cx="38" cy="12" rx="4" ry="5" fill="#FFF" />
      <circle cx="27" cy="12" r="2.5" fill="#4A148C" />
      <circle cx="39" cy="12" r="2.5" fill="#4A148C" />
      <circle cx="27.5" cy="11" r="1" fill="#FFF" />
      <circle cx="39.5" cy="11" r="1" fill="#FFF" />
      {/* Spots on head */}
      <circle cx="24" cy="8" r="2" fill="#8E24AA" opacity="0.5" />
      <circle cx="40" cy="9" r="1.5" fill="#8E24AA" opacity="0.5" />
      <circle cx="32" cy="6" r="1.5" fill="#8E24AA" opacity="0.5" />
    </svg>
  )
}

export default Chomper
