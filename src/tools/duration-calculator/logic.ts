export interface DurationResult {
  readonly totalMs: number;
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly weeks: number;
  readonly humanized: string;
  readonly error: string | null;
}

/** Compute the duration between two ISO-8601 datetime strings. */
export function calcDuration(startIso: string, endIso: string): DurationResult {
  const empty: DurationResult = { totalMs: 0, days: 0, hours: 0, minutes: 0, seconds: 0, weeks: 0, humanized: "", error: null };
  if (!startIso || !endIso) return empty;
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();
  if (Number.isNaN(start) || Number.isNaN(end)) return { ...empty, error: "Invalid date." };

  const totalMs = end - start;
  const sign = totalMs < 0 ? -1 : 1;
  let remaining = Math.abs(totalMs);

  const days = Math.floor(remaining / 86400000);
  remaining -= days * 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining -= hours * 3600000;
  const minutes = Math.floor(remaining / 60000);
  remaining -= minutes * 60000;
  const seconds = Math.floor(remaining / 1000);

  const parts: string[] = [];
  if (days) parts.push(`${days}d`);
  if (hours) parts.push(`${hours}h`);
  if (minutes) parts.push(`${minutes}m`);
  if (seconds || parts.length === 0) parts.push(`${seconds}s`);
  const humanized = (sign < 0 ? "-" : "") + parts.join(" ");

  // Breakdown components are unsigned magnitudes; the sign is conveyed by
  // totalMs and the humanized string.
  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
    weeks: Math.floor(days / 7),
    humanized,
    error: null,
  };
}
