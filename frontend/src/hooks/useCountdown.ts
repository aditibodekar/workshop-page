import { useEffect, useState } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

function calculateCountdown(targetDate: string): CountdownValue {
  const total = new Date(targetDate).getTime() - Date.now();

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { days, hours, minutes, seconds, isOver: false };
}

export function useCountdown(targetDate: string): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() =>
    calculateCountdown(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(calculateCountdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return value;
}
