export interface TimestampRow {
  readonly input: string;
  readonly iso: string;
  readonly utc: string;
  readonly local: string;
  readonly relative: string;
  readonly error?: string;
}

function isoToTimestamp(s: string): number | null {
  const t = Date.parse(s);
  return Number.isNaN(t) ? null : Math.floor(t / 1000);
}

function inputToDate(value: string): Date | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^\d{10}$/.test(trimmed)) return new Date(Number(trimmed) * 1000);
  if (/^\d{13}$/.test(trimmed)) return new Date(Number(trimmed));
  if (/^\d+$/.test(trimmed)) {
    // Treat any other plain integer as seconds since epoch.
    return new Date(Number(trimmed) * 1000);
  }
  const ts = isoToTimestamp(trimmed);
  if (ts !== null) return new Date(ts * 1000);
  return null;
}

const UNITS: [number, string][] = [
  [60, "second"],
  [60, "minute"],
  [24, "hour"],
  [7, "day"],
  [4.34524, "week"],
  [12, "month"],
];

function relative(ms: number): string {
  const sign = ms < 0 ? "ago" : "from now";
  let diff = Math.abs(ms) / 1000;
  let label = "second";
  for (const [step, name] of UNITS) {
    if (diff < step) {
      label = name;
      break;
    }
    diff /= step;
    label = name;
  }
  const n = Math.round(diff);
  return `${n} ${label}${n === 1 ? "" : "s"} ${sign}`;
}

/** Parse one timestamp per line (seconds, milliseconds, or ISO) and return a row per input. */
export function parseTimestamps(input: string, now: Date): TimestampRow[] {
  return input
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const date = inputToDate(line);
      if (!date || Number.isNaN(date.getTime())) {
        return { input: line, iso: "", utc: "", local: "", relative: "", error: "Could not parse." };
      }
      return {
        input: line,
        iso: date.toISOString(),
        utc: date.toUTCString(),
        local: date.toLocaleString(),
        relative: relative(date.getTime() - now.getTime()),
      };
    });
}
