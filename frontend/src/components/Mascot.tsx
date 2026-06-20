interface MascotProps {
  className?: string;
}

/**
 * Custom illustrated robot mascot — the recurring signature character
 * used across the hero, CTA banner, and footer to tie the AI & Robotics
 * theme together in a friendly, kid-approachable way.
 */
export default function Mascot({ className = "" }: MascotProps) {
  return (
    <svg
      viewBox="0 0 220 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Friendly robot mascot waving"
    >
      {/* Antenna */}
      <line x1="110" y1="20" x2="110" y2="46" stroke="#392188" strokeWidth="5" strokeLinecap="round" />
      <circle cx="110" cy="14" r="11" fill="#FFD84A" stroke="#392188" strokeWidth="4" />

      {/* Head */}
      <rect x="46" y="46" width="128" height="92" rx="34" fill="#FFFAF1" stroke="#392188" strokeWidth="5" />
      <rect x="46" y="46" width="128" height="92" rx="34" fill="url(#headGradient)" opacity="0.16" />

      {/* Eyes */}
      <circle cx="86" cy="92" r="13" fill="#6C4EF2" />
      <circle cx="90" cy="87" r="4" fill="#FFFAF1" />
      <circle cx="134" cy="92" r="13" fill="#6C4EF2" />
      <circle cx="138" cy="87" r="4" fill="#FFFAF1" />

      {/* Smile */}
      <path
        d="M88 112c8 10 36 10 44 0"
        stroke="#392188"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Cheeks */}
      <circle cx="68" cy="108" r="7" fill="#FF9C8C" opacity="0.7" />
      <circle cx="152" cy="108" r="7" fill="#FF9C8C" opacity="0.7" />

      {/* Body */}
      <rect x="58" y="138" width="104" height="78" rx="26" fill="#FF5A4D" stroke="#392188" strokeWidth="5" />
      <rect x="84" y="156" width="52" height="36" rx="12" fill="#FFFAF1" opacity="0.9" />
      <circle cx="98" cy="174" r="6" fill="#0AAB98" />
      <circle cx="122" cy="174" r="6" fill="#FFD84A" />

      {/* Left arm waving */}
      <path
        d="M58 158c-18-4-30 4-34 20"
        stroke="#392188"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22" cy="180" r="10" fill="#FFD84A" stroke="#392188" strokeWidth="4" />

      {/* Right arm */}
      <path
        d="M162 162c16 2 26 14 26 30"
        stroke="#392188"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="190" cy="196" r="10" fill="#0AAB98" stroke="#392188" strokeWidth="4" />

      {/* Feet */}
      <rect x="78" y="214" width="20" height="14" rx="6" fill="#392188" />
      <rect x="122" y="214" width="20" height="14" rx="6" fill="#392188" />

      <defs>
        <linearGradient id="headGradient" x1="46" y1="46" x2="174" y2="138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C4EF2" />
          <stop offset="1" stopColor="#FF5A4D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
