function Zombie({ size = 48, className = '', animate = false, variant = 'basic' }) {
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

      {/* === Variant-specific headgear === */}

      {/* Basic: messy hair */}
      {variant === 'basic' && <>
        <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
        <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
        <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
        <rect x="38" y="3" width="8" height="8" rx="2" fill="#3E3E3E" />
      </>}

      {/* Cone: orange traffic cone on head */}
      {variant === 'cone' && <>
        <polygon points="32,-6 18,8 46,8" fill="#FF6F00" />
        <polygon points="32,-6 20,7 44,7" fill="#FF8F00" />
        <rect x="18" y="6" width="28" height="4" rx="1" fill="#E65100" />
        {/* Cone stripes */}
        <rect x="26" y="-2" width="12" height="2" rx="0.5" fill="#FFF" opacity="0.6" />
        <rect x="23" y="2" width="18" height="2" rx="0.5" fill="#FFF" opacity="0.6" />
      </>}

      {/* Bucket: metal bucket on head */}
      {variant === 'bucket' && <>
        <rect x="16" y="-4" width="32" height="16" rx="2" fill="#78909C" />
        <rect x="16" y="-4" width="32" height="4" rx="2" fill="#90A4AE" />
        {/* Bucket rim */}
        <rect x="14" y="10" width="36" height="3" rx="1" fill="#607D8B" />
        {/* Handle */}
        <path d="M18,-2 Q18,-8 32,-8 Q46,-8 46,-2" fill="none" stroke="#546E7A" strokeWidth="2" />
        {/* Dents */}
        <circle cx="28" cy="2" r="2" fill="#607D8B" opacity="0.5" />
        <circle cx="38" cy="5" r="1.5" fill="#607D8B" opacity="0.5" />
      </>}

      {/* Flag: messy hair + flag on a stick */}
      {variant === 'flag' && <>
        <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
        <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
        <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
        <rect x="38" y="3" width="8" height="8" rx="2" fill="#3E3E3E" />
        {/* Flag pole */}
        <rect x="42" y="-10" width="2" height="30" fill="#8D6E63" />
        {/* Flag */}
        <polygon points="44,-10 60,-6 44,-2" fill="#C62828" />
        <polygon points="44,-9 58,-6 44,-3" fill="#E53935" />
      </>}

      {/* Pole Vaulter with pole: messy hair + long diagonal pole */}
      {variant === 'polevaulter' && <>
        <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
        <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
        <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
        {/* Headband */}
        <rect x="18" y="8" width="28" height="3" rx="1" fill="#D32F2F" />
        {/* Pole - long diagonal stick held in outstretched hands */}
        <rect x="-4" y="30" width="52" height="3" rx="1.5" fill="#A1887F" transform="rotate(-25, 24, 32)" />
        <rect x="-4" y="30" width="52" height="1.5" rx="0.75" fill="#BCAAA4" transform="rotate(-25, 24, 32)" />
      </>}

      {/* Pole Vaulter without pole: after vaulting */}
      {variant === 'polevaulter_nopole' && <>
        <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
        <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
        <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
        {/* Headband remains */}
        <rect x="18" y="8" width="28" height="3" rx="1" fill="#D32F2F" />
      </>}

      {/* Newspaper zombie: holding newspaper up as a shield */}
      {variant === 'newspaper' && <>
        <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
        <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
        <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
        <rect x="38" y="3" width="8" height="8" rx="2" fill="#3E3E3E" />
        {/* Newspaper held in front */}
        <rect x="-2" y="14" width="22" height="30" rx="2" fill="#F5F0E1" />
        <rect x="0" y="14" width="18" height="30" rx="1" fill="#EDE8D5" />
        {/* Headline */}
        <rect x="2" y="16" width="14" height="2" rx="0.5" fill="#333" />
        <rect x="2" y="20" width="14" height="1" rx="0.3" fill="#888" />
        <rect x="2" y="23" width="10" height="1" rx="0.3" fill="#888" />
        <rect x="2" y="26" width="14" height="1" rx="0.3" fill="#888" />
        <rect x="2" y="29" width="8" height="1" rx="0.3" fill="#888" />
        <rect x="2" y="32" width="14" height="1" rx="0.3" fill="#888" />
        <rect x="2" y="35" width="12" height="1" rx="0.3" fill="#888" />
        {/* Fold line */}
        <line x1="0" y1="28" x2="20" y2="28" stroke="#CCC" strokeWidth="0.5" />
      </>}

      {/* Newspaper zombie: newspaper destroyed, enraged */}
      {variant === 'newspaper_broken' && <>
        <rect x="18" y="2" width="8" height="10" rx="2" fill="#2E2E2E" />
        <rect x="24" y="0" width="8" height="10" rx="2" fill="#3E3E3E" />
        <rect x="32" y="1" width="8" height="9" rx="2" fill="#2E2E2E" />
        <rect x="38" y="3" width="8" height="8" rx="2" fill="#3E3E3E" />
        {/* Torn newspaper scraps in hand */}
        <polygon points="-2,30 4,26 6,34" fill="#EDE8D5" opacity="0.7" />
        <polygon points="2,32 8,28 7,36" fill="#F5F0E1" opacity="0.6" />
      </>}

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
