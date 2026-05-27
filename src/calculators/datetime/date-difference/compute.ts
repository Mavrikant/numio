import { z } from "zod";
import { parseISO, diffYMD, diffDays, businessDaysBetween } from "../_helpers/dates";

/**
 * Days (and calendar breakdown) between two dates. Order-agnostic: the result
 * is the absolute span. Pure and UTC-based.
 */
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD");

export const inputSchema = z.object({
  startDate: isoDate,
  endDate: isoDate,
});

export type DateDiffInputs = z.infer<typeof inputSchema>;

export interface DateDiffResult extends Record<string, unknown> {
  readonly totalDays: number;
  readonly weeks: number;
  readonly remainderDays: number;
  readonly years: number;
  readonly months: number;
  readonly days: number;
  readonly businessDays: number;
}

export function compute(inputs: DateDiffInputs): DateDiffResult {
  const a = parseISO(inputs.startDate);
  const b = parseISO(inputs.endDate);
  const totalDays = diffDays(a, b);
  const ymd = diffYMD(a, b);

  return {
    totalDays,
    weeks: Math.floor(totalDays / 7),
    remainderDays: totalDays % 7,
    years: ymd.years,
    months: ymd.months,
    days: ymd.days,
    businessDays: businessDaysBetween(a, b),
  };
}
