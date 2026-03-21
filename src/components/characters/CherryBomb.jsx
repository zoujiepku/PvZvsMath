function CherryBomb({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-cherrybomb ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Stems */}
      <path d="M24 20 Q26 10 32 6" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M40 20 Q38 10 32 6" stroke="#4CAF50" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Leaf at top */}
      <ellipse cx="32" cy="6" rx="6" ry="3" fill="#66BB6A" transform="rotate(-15 32 6)" />
      {/* Left cherry */}
      <circle cx="22" cy="34" r="16" fill="#D32F2F" />
      <circle cx="22" cy="34" r="14" fill="#F44336" />
      {/* Left cherry highlight */}
      <ellipse cx="17" cy="28" rx="5" ry="3" fill="#EF9A9A" opacity="0.6" />
      {/* Left face - angry */}
      <ellipse cx="17" cy="32" rx="3" ry="3.5" fill="#FFF" />
      <ellipse cx="27" cy="32" rx="3" ry="3.5" fill="#FFF" />
      <circle cx="17.5" cy="32" r="2" fill="#B71C1C" />
      <circle cx="27.5" cy="32" r="2" fill="#B71C1C" />
      {/* Left angry eyebrows */}
      <path d="M13 28 L20 30" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" />
      <path d="M31 30 L24 28" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" />
      {/* Left mouth */}
      <path d="M17 38 Q22 42 27 38" stroke="#B71C1C" strokeWidth="2" fill="none" />
      {/* Right cherry */}
      <circle cx="42" cy="34" r="16" fill="#D32F2F" />
      <circle cx="42" cy="34" r="14" fill="#F44336" />
      {/* Right cherry highlight */}
      <ellipse cx="37" cy="28" rx="5" ry="3" fill="#EF9A9A" opacity="0.6" />
      {/* Right face - angry */}
      <ellipse cx="37" cy="32" rx="3" ry="3.5" fill="#FFF" />
      <ellipse cx="47" cy="32" rx="3" ry="3.5" fill="#FFF" />
      <circle cx="37.5" cy="32" r="2" fill="#B71C1C" />
      <circle cx="47.5" cy="32" r="2" fill="#B71C1C" />
      {/* Right angry eyebrows */}
      <path d="M33 28 L40 30" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" />
      <path d="M51 30 L44 28" stroke="#B71C1C" strokeWidth="2" strokeLinecap="round" />
      {/* Right mouth */}
      <path d="M37 38 Q42 42 47 38" stroke="#B71C1C" strokeWidth="2" fill="none" />
      {/* Fuse spark */}
      <circle cx="32" cy="4" r="2" fill="#FFEB3B" />
      <circle cx="32" cy="4" r="1" fill="#FFF" />
    </svg>
  )
}

export default CherryBomb
