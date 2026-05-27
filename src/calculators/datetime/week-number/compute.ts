import { z } from "zod";
import { parseISO, isoWeek, dayOfYear } from "../_helpers/dates";

/** ISO-8601 week number for a date (weeks start Monday; week 1 contains Jan 4). */
export const inputSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
});

export type WeekNumberInputs = z.infer<typeof inputSchema>;

export interface WeekNumberResult extends Record<string, unknown> {
  readonly week: number;
  readonly weekYear: number;
  readonly dayOfYear: number;
}

export function compute(inputs: WeekNumberInputs): WeekNumberResult {
  const ts = parseISO(inputs.date);
  const { week, year } = isoWeek(ts);
  return { week, weekYear: year, dayOfYear: dayOfYear(ts) };
}
