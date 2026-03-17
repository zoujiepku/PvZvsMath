function Sunflower({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-sunflower ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Stem */}
      <rect x="29" y="42" width="6" height="16" rx="2" fill="#388E3C" />
      {/* Leaves */}
      <ellipse cx="24" cy="50" rx="8" ry="4" fill="#4CAF50" transform="rotate(-25 24 50)" />
      <ellipse cx="40" cy="52" rx="7" ry="3.5" fill="#43A047" transform="rotate(20 40 52)" />
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="32"
          cy="12"
          rx="5"
          ry="9"
          fill="#FFD700"
          transform={`rotate(${angle} 32 26)`}
        />
      ))}
      {/* Face circle */}
      <circle cx="32" cy="26" r="10" fill="#795548" />
      <circle cx="32" cy="26" r="8.5" fill="#8D6E63" />
      {/* Eyes */}
      <ellipse cx="28" cy="24" rx="2.5" ry="3" fill="#FFF" />
      <ellipse cx="36" cy="24" rx="2.5" ry="3" fill="#FFF" />
      <circle cx="28.5" cy="24" r="1.5" fill="#3E2723" />
      <circle cx="36.5" cy="24" r="1.5" fill="#3E2723" />
      <circle cx="29" cy="23.5" r="0.7" fill="#FFF" />
      <circle cx="37" cy="23.5" r="0.7" fill="#FFF" />
      {/* Smile */}
      <path d="M28 29 Q32 33 36 29" fill="none" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="25" cy="28" r="2" fill="#FF8A65" opacity="0.5" />
      <circle cx="39" cy="28" r="2" fill="#FF8A65" opacity="0.5" />
    </svg>
  )
}

export default Sunflower
