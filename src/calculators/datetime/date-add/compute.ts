import { z } from "zod";
import { parseISO, toISO, addCalendar, diffDays } from "../_helpers/dates";

/**
 * Add or subtract years, months, weeks and days from a date. Month/year shifts
 * clamp the day to the last valid day of the target month. Pure and UTC-based.
 */
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD");

export const inputSchema = z.object({
  startDate: isoDate,
  operation: z.enum(["add", "subtract"]).default("add"),
  years: z.number().int().min(0).max(100000).default(0),
  months: z.number().int().min(0).max(1200).default(0),
  weeks: z.number().int().min(0).max(100000).default(0),
  days: z.number().int().min(0).max(1000000).default(0),
});

export type DateAddInputs = z.infer<typeof inputSchema>;

export interface DateAddResult extends Record<string, unknown> {
  readonly resultDate: string;
  readonly totalDaysOffset: number;
}

export function compute(inputs: DateAddInputs): DateAddResult {
  const start = parseISO(inputs.startDate);
  const sign = inputs.operation === "add" ? 1 : -1;

  const resultTs = addCalendar(start, {
    years: sign * inputs.years,
    months: sign * inputs.months,
    days: sign * (inputs.weeks * 7 + inputs.days),
  });

  return {
    resultDate: toISO(resultTs),
    totalDaysOffset: sign * diffDays(start, resultTs),
  };
}
