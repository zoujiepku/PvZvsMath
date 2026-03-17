function Peashooter({ size = 48, className = '', animate = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`character character-peashooter ${animate ? 'animate' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Stem */}
      <rect x="28" y="40" width="8" height="18" rx="3" fill="#388E3C" />
      {/* Leaves */}
      <ellipse cx="22" cy="48" rx="10" ry="5" fill="#4CAF50" transform="rotate(-20 22 48)" />
      <ellipse cx="42" cy="50" rx="9" ry="4" fill="#43A047" transform="rotate(15 42 50)" />
      {/* Head */}
      <circle cx="32" cy="24" r="18" fill="#66BB6A" />
      <circle cx="32" cy="24" r="15" fill="#4CAF50" />
      {/* Eyes */}
      <ellipse cx="26" cy="20" rx="4" ry="5" fill="#FFF" />
      <ellipse cx="38" cy="20" rx="4" ry="5" fill="#FFF" />
      <circle cx="27" cy="20" r="2.5" fill="#1B5E20" />
      <circle cx="39" cy="20" r="2.5" fill="#1B5E20" />
      <circle cx="27.5" cy="19" r="1" fill="#FFF" />
      <circle cx="39.5" cy="19" r="1" fill="#FFF" />
      {/* Mouth / Shooter tube */}
      <rect x="38" y="26" width="18" height="8" rx="4" fill="#2E7D32" />
      <rect x="38" y="27" width="18" height="6" rx="3" fill="#388E3C" />
      <circle cx="56" cy="30" r="3" fill="#1B5E20" />
      {/* Pea projectile */}
      <circle cx="62" cy="30" r="2.5" fill="#8BC34A" />
    </svg>
  )
}

export default Peashooter
