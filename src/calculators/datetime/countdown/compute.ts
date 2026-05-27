import { z } from "zod";
import { parseISO, diffYMD, diffDays, businessDaysBetween } from "../_helpers/dates";

export const inputSchema = z.object({
  fromDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
  targetDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
});

export type CountdownInputs = z.infer<typeof inputSchema>;

export interface CountdownResult extends Record<string, unknown> {
  readonly totalDays: number;
  readonly fullWeeks: number;
  readonly businessDays: number;
  readonly years: number;
  readonly months: number;
  readonly days: number;
}

export function compute(inputs: CountdownInputs): CountdownResult {
  const from = parseISO(inputs.fromDate);
  const target = parseISO(inputs.targetDate);
  const totalDays = diffDays(from, target);
  const ymd = diffYMD(from, target);
  return {
    totalDays,
    fullWeeks: Math.floor(totalDays / 7),
    businessDays: businessDaysBetween(from, target),
    years: ymd.years,
    months: ymd.months,
    days: ymd.days,
  };
}
