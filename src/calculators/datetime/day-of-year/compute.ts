import { z } from "zod";
import { parseISO, dayOfYear, isLeapYear } from "../_helpers/dates";

export const inputSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
});

export type DayOfYearInputs = z.infer<typeof inputSchema>;

export interface DayOfYearResult extends Record<string, unknown> {
  readonly dayOfYear: number;
  readonly daysRemaining: number;
  readonly daysInYear: number;
  readonly percentElapsed: number;
}

export function compute(inputs: DayOfYearInputs): DayOfYearResult {
  const ts = parseISO(inputs.date);
  const year = new Date(ts).getUTCFullYear();
  const daysInYear = isLeapYear(year) ? 366 : 365;
  const doy = dayOfYear(ts);
  return {
    dayOfYear: doy,
    daysRemaining: daysInYear - doy,
    daysInYear,
    percentElapsed: (doy / daysInYear) * 100,
  };
}
