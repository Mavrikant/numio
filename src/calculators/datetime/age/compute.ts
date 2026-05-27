import { z } from "zod";
import {
  parseISO,
  toISO,
  diffYMD,
  diffDays,
  daysInMonth,
} from "../_helpers/dates";

/**
 * Age calculator. Given a birth date and an "as of" date (defaulting to today
 * on the client), reports the calendar age (years/months/days), several total
 * counts, and the next birthday. All arithmetic is pure and UTC-based.
 */
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD");

export const inputSchema = z.object({
  birthDate: isoDate,
  asOfDate: isoDate,
});

export type AgeInputs = z.infer<typeof inputSchema>;

export interface AgeResult extends Record<string, unknown> {
  readonly ageYears: number;
  readonly ageMonths: number;
  readonly ageDays: number;
  readonly totalMonths: number;
  readonly totalWeeks: number;
  readonly totalDays: number;
  readonly nextBirthday: string;
  readonly daysToNextBirthday: number;
}

export function compute(inputs: AgeInputs): AgeResult {
  const birth = parseISO(inputs.birthDate);
  const asOf = parseISO(inputs.asOfDate);

  const ymd = diffYMD(birth, asOf);
  const totalDays = diffDays(birth, asOf);

  // Next birthday on or after the "as of" date.
  const b = new Date(birth);
  const asOfDt = new Date(asOf);
  const bMonth = b.getUTCMonth();
  const clampDay = (year: number) => Math.min(b.getUTCDate(), daysInMonth(year, bMonth));
  let year = asOfDt.getUTCFullYear();
  let candidate = Date.UTC(year, bMonth, clampDay(year));
  if (candidate < asOf) {
    year += 1;
    candidate = Date.UTC(year, bMonth, clampDay(year));
  }

  return {
    ageYears: ymd.years,
    ageMonths: ymd.months,
    ageDays: ymd.days,
    totalMonths: ymd.years * 12 + ymd.months,
    totalWeeks: Math.floor(totalDays / 7),
    totalDays,
    nextBirthday: toISO(candidate),
    daysToNextBirthday: diffDays(asOf, candidate),
  };
}
