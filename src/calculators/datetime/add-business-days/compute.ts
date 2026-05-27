import { z } from "zod";
import { parseISO, toISO, addBusinessDays, diffDays } from "../_helpers/dates";

export const inputSchema = z.object({
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
  businessDays: z.number().int().min(-100000).max(100000),
});

export type AddBusinessDaysInputs = z.infer<typeof inputSchema>;

export interface AddBusinessDaysResult extends Record<string, unknown> {
  readonly resultDate: string;
  readonly calendarDays: number;
  readonly weekendDays: number;
}

export function compute(inputs: AddBusinessDaysInputs): AddBusinessDaysResult {
  const start = parseISO(inputs.startDate);
  const result = addBusinessDays(start, inputs.businessDays);
  const calendarDays = diffDays(start, result);
  return {
    resultDate: toISO(result),
    calendarDays,
    weekendDays: calendarDays - Math.abs(inputs.businessDays),
  };
}
