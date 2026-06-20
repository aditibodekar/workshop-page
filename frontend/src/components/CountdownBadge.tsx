import { useCountdown } from "../hooks/useCountdown";
import { WORKSHOP_START_DATE } from "../utils/constants";

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-2xl font-bold text-white sm:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
        {label}
      </span>
    </div>
  );
}

export default function CountdownBadge() {
  const { days, hours, minutes, seconds, isOver } = useCountdown(WORKSHOP_START_DATE);

  if (isOver) {
    return (
      <div className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 shadow-soft">
        <span className="font-display font-semibold text-white">
          Doors are open — the workshop has started!
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-4 rounded-2xl bg-violet-600/95 px-5 py-3 shadow-soft sm:gap-5 sm:px-6">
      <span className="hidden font-display text-sm font-semibold text-white/90 sm:inline">
        Starts in
      </span>
      <div className="flex items-center gap-3 sm:gap-4">
        <CountdownUnit value={days} label="Days" />
        <span className="text-white/50">:</span>
        <CountdownUnit value={hours} label="Hrs" />
        <span className="text-white/50">:</span>
        <CountdownUnit value={minutes} label="Min" />
        <span className="text-white/50">:</span>
        <CountdownUnit value={seconds} label="Sec" />
      </div>
    </div>
  );
}
