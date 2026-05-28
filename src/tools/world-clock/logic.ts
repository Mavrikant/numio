export interface ClockEntry {
  readonly label: string;
  readonly timezone: string;
}

export const PRESET_CITIES: ClockEntry[] = [
  { label: "San Francisco", timezone: "America/Los_Angeles" },
  { label: "New York", timezone: "America/New_York" },
  { label: "London", timezone: "Europe/London" },
  { label: "Berlin", timezone: "Europe/Berlin" },
  { label: "Istanbul", timezone: "Europe/Istanbul" },
  { label: "Dubai", timezone: "Asia/Dubai" },
  { label: "Mumbai", timezone: "Asia/Kolkata" },
  { label: "Singapore", timezone: "Asia/Singapore" },
  { label: "Shanghai", timezone: "Asia/Shanghai" },
  { label: "Tokyo", timezone: "Asia/Tokyo" },
  { label: "Sydney", timezone: "Australia/Sydney" },
  { label: "Auckland", timezone: "Pacific/Auckland" },
];

/** Format a Date as a "HH:mm:ss" string in the given IANA timezone. */
export function clockTime(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(date);
}

/** Format a Date as a "Day DD Mon" string in the given IANA timezone. */
export function clockDate(date: Date, timezone: string): string {
  return new Intl.DateTimeFormat("en-GB", { timeZone: timezone, weekday: "short", day: "numeric", month: "short" }).format(date);
}
