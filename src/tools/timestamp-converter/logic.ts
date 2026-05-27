export type TsUnit = "s" | "ms";

/** Convert a Unix timestamp to an ISO-8601 UTC string. Throws if out of range. */
export function unixToIso(value: number, unit: TsUnit): string {
  const ms = unit === "s" ? value * 1000 : value;
  const d = new Date(ms);
  if (Number.isNaN(d.getTime())) throw new Error("Invalid timestamp");
  return d.toISOString();
}

/** A readable UTC string ("YYYY-MM-DD HH:MM:SS UTC"). */
export function unixToUtc(value: number, unit: TsUnit): string {
  return unixToIso(value, unit).replace("T", " ").replace(/\.\d+Z$/, " UTC").replace("Z", " UTC");
}

/** Parse a date string to Unix seconds and milliseconds. Throws if invalid. */
export function dateToUnix(input: string): { seconds: number; ms: number } {
  const ms = Date.parse(input.trim());
  if (Number.isNaN(ms)) throw new Error("Invalid date");
  return { seconds: Math.floor(ms / 1000), ms };
}
