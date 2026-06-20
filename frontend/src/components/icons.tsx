interface IconProps {
  className?: string;
}

const base = "stroke-current";

export function BrainIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 8c-5 0-8 4-8 8 0 2 .6 3.4 1.6 4.6C9.8 21.6 8 24 8 27c0 4 3 7 7 7 .8 0 1.6-.1 2.3-.4M18 8c3 0 5 1.6 6 3.6M18 8v26m0 0c0 3 2.4 6 6 6s6-3 6-6m-12 0c-1.6 0-3-.5-4-1.4M30 8c5 0 8 4 8 8 0 2-.6 3.4-1.6 4.6 1.8 1 3.6 3.4 3.6 6.4 0 4-3 7-7 7-.8 0-1.6-.1-2.3-.4M30 8c-3 0-5 1.6-6 3.6"
      />
    </svg>
  );
}

export function RobotIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect className={base} strokeWidth="2.6" x="10" y="16" width="28" height="22" rx="7" />
      <circle className={base} strokeWidth="2.6" cx="19" cy="26" r="2.6" fill="currentColor" />
      <circle className={base} strokeWidth="2.6" cx="29" cy="26" r="2.6" fill="currentColor" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M19 33h10" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M24 16v-5" />
      <circle className={base} strokeWidth="2.6" cx="24" cy="8" r="2.6" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M10 24H5m38 0h-5" />
    </svg>
  );
}

export function CodeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 14 8 24l10 10M30 14l10 10-10 10M27 11l-6 26"
      />
    </svg>
  );
}

export function SensorIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle className={base} strokeWidth="2.6" cx="24" cy="24" r="4.5" fill="currentColor" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M24 12v-4M24 40v-4M12 24H8m32 0h-4" />
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinecap="round"
        d="M15.5 15.5a12 12 0 0 1 17 0M32.5 32.5a12 12 0 0 1-17 0"
      />
    </svg>
  );
}

export function PuzzleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinejoin="round"
        d="M10 12h9a3 3 0 1 1 5.6 1.7c-.4.9 0 2 1 2.3h9V25a3 3 0 1 0 0 5.7V38H10v-9a3 3 0 1 1 0-5.7z"
      />
    </svg>
  );
}

export function ChipIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect className={base} strokeWidth="2.6" x="14" y="14" width="20" height="20" rx="4" />
      <rect className={base} strokeWidth="2.6" x="20" y="20" width="8" height="8" rx="1.5" />
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinecap="round"
        d="M18 6v6M24 6v6M30 6v6M18 36v6M24 36v6M30 36v6M6 18h6M6 24h6M6 30h6M36 18h6M36 24h6M36 30h6"
      />
    </svg>
  );
}

export function GearIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle className={base} strokeWidth="2.6" cx="24" cy="24" r="6.5" />
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinecap="round"
        d="M24 6v5M24 37v5M6 24h5M37 24h5M11 11l3.5 3.5M33.5 33.5 37 37M37 11l-3.5 3.5M14.5 33.5 11 37"
      />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
      <path d="M24 6c1 7 3 10 12 12-9 2-11 5-12 12-1-7-3-10-12-12 9-2 11-5 12-12z" />
      <path d="M38 30c.6 3.6 1.6 4.8 5 5.6-3.4.8-4.4 2-5 5.6-.6-3.6-1.6-4.8-5-5.6 3.4-.8 4.4-2 5-5.6z" />
    </svg>
  );
}

export function StarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.4l-6.1 3.3 1.5-6.7-5.1-4.6 6.8-.7L12 2.5z" />
    </svg>
  );
}

export function AgeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle className={base} strokeWidth="2.6" cx="24" cy="16" r="7" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M10 40c0-8 6-13 14-13s14 5 14 13" />
    </svg>
  );
}

export function DurationIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle className={base} strokeWidth="2.6" cx="24" cy="25" r="15" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M24 16v9l7 4M18 6h12" />
    </svg>
  );
}

export function ModeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect className={base} strokeWidth="2.6" x="6" y="10" width="36" height="22" rx="3" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M16 40h16M24 32v8" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M14 21l5 5 9-9" />
    </svg>
  );
}

export function FeeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle className={base} strokeWidth="2.6" cx="24" cy="24" r="17" />
      <path
        className={base}
        strokeWidth="2.6"
        strokeLinecap="round"
        d="M18 16h9a4.5 4.5 0 0 1 0 9h-9m0-4.5h12M18 16v16m0-7 9 7"
      />
    </svg>
  );
}

export function CalendarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect className={base} strokeWidth="2.6" x="7" y="10" width="34" height="30" rx="4" />
      <path className={base} strokeWidth="2.6" strokeLinecap="round" d="M7 19h34M15 6v8M33 6v8" />
      <circle cx="17" cy="27" r="2" fill="currentColor" />
      <circle cx="24" cy="27" r="2" fill="currentColor" />
      <circle cx="31" cy="27" r="2" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="11" className={base} strokeWidth="1.6" />
      <path d="M7 12.5l3.2 3.2L17 9" className={base} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9l6 6 6-6" className={base} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
