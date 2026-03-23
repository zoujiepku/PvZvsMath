function KernelPult({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-kernelpult ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Pot / base */}
      <ellipse cx="32" cy="58" rx="14" ry="5" fill="#5D4037" />
      <rect x="18" y="46" width="28" height="12" rx="3" fill="#6D4C41" />
      <rect x="20" y="48" width="24" height="8" rx="2" fill="#795548" />
      {/* Stem */}
      <rect x="29" y="32" width="6" height="16" rx="3" fill="#558B2F" />
      {/* Catapult arm */}
      <line x1="32" y1="36" x2="16" y2="18" stroke="#795548" strokeWidth="3" strokeLinecap="round" />
      {/* Arm basket */}
      <path d="M10,16 Q13,22 20,20 Q16,14 10,16Z" fill="#8D6E63" />
      {/* Kernel projectile in basket */}
      <ellipse cx="13" cy="13" rx="5" ry="6" fill="#FFD54F" />
      <ellipse cx="13" cy="13" rx="3.5" ry="4.5" fill="#FFEB3B" />
      {/* Kernel detail lines */}
      <line x1="13" y1="8" x2="13" y2="18" stroke="#FFC107" strokeWidth="0.8" />
      <line x1="9" y1="13" x2="17" y2="13" stroke="#FFC107" strokeWidth="0.8" />
      {/* Leaves at base */}
      <ellipse cx="22" cy="44" rx="10" ry="4" fill="#7CB342" transform="rotate(-15 22 44)" />
      <ellipse cx="42" cy="44" rx="9" ry="4" fill="#689F38" transform="rotate(10 42 44)" />
      {/* Eyes on the stem/head area */}
      <circle cx="28" cy="34" r="3" fill="#FFF" />
      <circle cx="36" cy="34" r="3" fill="#FFF" />
      <circle cx="29" cy="34" r="1.5" fill="#33691E" />
      <circle cx="37" cy="34" r="1.5" fill="#33691E" />
      <circle cx="29.5" cy="33.5" r="0.6" fill="#FFF" />
      <circle cx="37.5" cy="33.5" r="0.6" fill="#FFF" />
      {/* Smile */}
      <path d="M29,38 Q32,41 35,38" fill="none" stroke="#33691E" strokeWidth="1.5" strokeLinecap="round" />
      {/* Small butter pat indicator */}
      <rect x="44" y="8" width="10" height="7" rx="1.5" fill="#FFD54F" opacity="0.7" />
      <rect x="45" y="9" width="8" height="5" rx="1" fill="#FFF176" opacity="0.7" />
    </svg>
  )
}

export default KernelPult
