import { z } from "zod";
import { isLeapYear } from "../_helpers/dates";

export const inputSchema = z.object({
  year: z.number().int().min(1).max(999999),
});

export type LeapYearInputs = z.infer<typeof inputSchema>;

export interface LeapYearResult extends Record<string, unknown> {
  readonly daysInYear: number;
  readonly daysInFebruary: number;
  readonly nextLeapYear: number;
  readonly previousLeapYear: number;
}

export function compute(inputs: LeapYearInputs): LeapYearResult {
  const leap = isLeapYear(inputs.year);
  let next = inputs.year + 1;
  while (!isLeapYear(next)) next++;
  let prev = inputs.year - 1;
  while (prev >= 1 && !isLeapYear(prev)) prev--;
  return {
    daysInYear: leap ? 366 : 365,
    daysInFebruary: leap ? 29 : 28,
    nextLeapYear: next,
    previousLeapYear: prev,
  };
}
