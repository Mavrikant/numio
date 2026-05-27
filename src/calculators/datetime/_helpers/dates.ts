/**
 * Pure date utilities for the datetime calculators.
 *
 * All arithmetic is done in UTC so results never drift with the runtime's
 * timezone, and nothing here reads the system clock — callers pass explicit
 * ISO (YYYY-MM-DD) strings, keeping every `compute` deterministic. The "today"
 * default is resolved on the client before it reaches compute.
 */

export const MS_PER_DAY = 86_400_000;

/** Parse a YYYY-MM-DD string to a UTC timestamp (ms). Returns NaN if invalid. */
export function parseISO(iso: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return NaN;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return NaN;
  const ts = Date.UTC(y, mo - 1, d);
  const dt = new Date(ts);
  // Reject overflow (e.g. 2023-02-30 rolling into March).
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) {
    return NaN;
  }
  return ts;
}

/** Format a UTC timestamp (ms) as YYYY-MM-DD. */
export function toISO(ts: number): string {
  const d = new Date(ts);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${mo}-${day}`;
}

export function daysInMonth(year: number, monthIndex0: number): number {
  // Day 0 of the next month is the last day of this month.
  return new Date(Date.UTC(year, monthIndex0 + 1, 0)).getUTCDate();
}

/** Add a number of calendar days to a timestamp. */
export function addDays(ts: number, days: number): number {
  return ts + days * MS_PER_DAY;
}

/**
 * Add years/months/days as calendar units. Month/year overflow clamps the day
 * to the last valid day of the target month (e.g. Jan 31 + 1 month → Feb 28).
 */
export function addCalendar(
  ts: number,
  { years = 0, months = 0, days = 0 }: { years?: number; months?: number; days?: number },
): number {
  const d = new Date(ts);
  let y = d.getUTCFullYear() + years;
  const totalMonths = d.getUTCMonth() + months;
  y += Math.floor(totalMonths / 12);
  const mo = ((totalMonths % 12) + 12) % 12;
  const day = Math.min(d.getUTCDate(), daysInMonth(y, mo));
  return addDays(Date.UTC(y, mo, day), days);
}

export interface YMD {
  readonly years: number;
  readonly months: number;
  readonly days: number;
}

/**
 * Calendar breakdown between two dates as whole years, months and days.
 *
 * Uses the "advance whole months until overshoot" method: find the largest
 * number of whole calendar months that fit, then count the leftover days. This
 * is the standard age convention and, unlike naive component subtraction, never
 * produces negative days at month-end boundaries (e.g. Jan 31 → Mar 1 = 1 month
 * 1 day, since Jan 31 + 1 month clamps to Feb 29/28).
 */
export function diffYMD(fromTs: number, toTs: number): YMD {
  const a = Math.min(fromTs, toTs);
  const b = Math.max(fromTs, toTs);
  const ad = new Date(a);
  const bd = new Date(b);

  let totalMonths =
    (bd.getUTCFullYear() - ad.getUTCFullYear()) * 12 +
    (bd.getUTCMonth() - ad.getUTCMonth());
  // Back off if advancing totalMonths overshoots the target date.
  if (addCalendar(a, { months: totalMonths }) > b) totalMonths -= 1;

  const anchor = addCalendar(a, { months: totalMonths });
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    days: diffDays(anchor, b),
  };
}

/** Whole days between two timestamps (absolute value). */
export function diffDays(aTs: number, bTs: number): number {
  return Math.round(Math.abs(bTs - aTs) / MS_PER_DAY);
}

/** 0 = Sunday … 6 = Saturday. */
export function dayOfWeek(ts: number): number {
  return new Date(ts).getUTCDay();
}

/**
 * Count Monday–Friday days in the half-open interval (from, to] — i.e. the
 * number of business days you gain moving from `from` to `to`. Order-agnostic.
 */
export function businessDaysBetween(aTs: number, bTs: number): number {
  const start = Math.min(aTs, bTs);
  const end = Math.max(aTs, bTs);
  let count = 0;
  for (let t = start + MS_PER_DAY; t <= end; t += MS_PER_DAY) {
    const dow = new Date(t).getUTCDay();
    if (dow !== 0 && dow !== 6) count += 1;
  }
  return count;
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/** Day of the year (1–366) for a timestamp. */
export function dayOfYear(ts: number): number {
  const d = new Date(ts);
  const start = Date.UTC(d.getUTCFullYear(), 0, 1);
  return Math.floor((ts - start) / MS_PER_DAY) + 1;
}

/** ISO-8601 week number and the week-based year for a timestamp. */
export function isoWeek(ts: number): { week: number; year: number } {
  const d = new Date(ts);
  // Shift to the Thursday of the current ISO week.
  const day = (d.getUTCDay() + 6) % 7; // Mon=0 … Sun=6
  const thursday = ts + (3 - day) * MS_PER_DAY;
  const year = new Date(thursday).getUTCFullYear();
  const firstThursday = Date.UTC(year, 0, 4);
  const firstDay = (new Date(firstThursday).getUTCDay() + 6) % 7;
  const week1Monday = firstThursday - firstDay * MS_PER_DAY;
  const week = Math.floor((thursday - week1Monday) / (7 * MS_PER_DAY)) + 1;
  return { week, year };
}

/** Add N business days (Mon–Fri) to a timestamp; returns the resulting timestamp. */
export function addBusinessDays(ts: number, businessDays: number): number {
  const step = businessDays >= 0 ? 1 : -1;
  let remaining = Math.abs(businessDays);
  let t = ts;
  while (remaining > 0) {
    t = addDays(t, step);
    const dow = new Date(t).getUTCDay();
    if (dow !== 0 && dow !== 6) remaining -= 1;
  }
  return t;
}
