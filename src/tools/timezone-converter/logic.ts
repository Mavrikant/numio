/** Curated list of common IANA time zones. Comprehensive enough for a city picker without a giant data file. */
export const TIMEZONES: string[] = [
  "UTC",
  "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Toronto", "America/Mexico_City", "America/Sao_Paulo", "America/Buenos_Aires", "America/Anchorage", "America/Halifax", "America/Phoenix", "America/Bogota", "America/Lima",
  "Europe/London", "Europe/Dublin", "Europe/Paris", "Europe/Berlin", "Europe/Madrid", "Europe/Rome", "Europe/Amsterdam", "Europe/Brussels", "Europe/Vienna", "Europe/Stockholm", "Europe/Helsinki", "Europe/Warsaw", "Europe/Prague", "Europe/Athens", "Europe/Istanbul", "Europe/Moscow", "Europe/Zurich", "Europe/Lisbon", "Europe/Bucharest",
  "Africa/Cairo", "Africa/Johannesburg", "Africa/Lagos", "Africa/Nairobi", "Africa/Casablanca",
  "Asia/Dubai", "Asia/Tehran", "Asia/Kolkata", "Asia/Karachi", "Asia/Bangkok", "Asia/Singapore", "Asia/Hong_Kong", "Asia/Tokyo", "Asia/Seoul", "Asia/Shanghai", "Asia/Taipei", "Asia/Manila", "Asia/Jakarta", "Asia/Kuala_Lumpur", "Asia/Jerusalem", "Asia/Riyadh",
  "Australia/Sydney", "Australia/Melbourne", "Australia/Brisbane", "Australia/Perth", "Australia/Adelaide",
  "Pacific/Auckland", "Pacific/Fiji", "Pacific/Honolulu", "Pacific/Guam",
];

/** Format a Date as a "YYYY-MM-DD HH:mm" string in the given IANA timezone. */
export function formatInTimezone(date: Date, timezone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}`;
}

/** Return the GMT offset for a timezone at the given instant, formatted like "+05:30". */
export function offsetLabel(date: Date, timezone: string): string {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: timezone, timeZoneName: "shortOffset" }).formatToParts(date);
  const name = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
  return name.replace(/^GMT/, "UTC") || "UTC+0";
}
