import { z } from "zod";

/**
 * Simple interest — interest charged only on the original principal, never on
 * accumulated interest (unlike compound interest).
 *
 *   I = P · r · t
 *   A = P + I
 *
 * where P is principal, r the annual rate (as a fraction) and t the time in
 * years. The time input is normalised to years from the chosen unit.
 */
export const inputSchema = z.object({
  principal: z.number().positive().max(1e12),
  annualRatePct: z.number().min(0).max(1000),
  timeValue: z.number().positive().max(1e6),
  timeUnit: z.enum(["years", "months", "days"]).default("years"),
});

export type SimpleInterestInputs = z.infer<typeof inputSchema>;

export interface SimpleInterestResult extends Record<string, unknown> {
  readonly interest: number;
  readonly totalAmount: number;
  readonly years: number;
}

const YEARS_PER_UNIT: Record<SimpleInterestInputs["timeUnit"], number> = {
  years: 1,
  months: 1 / 12,
  days: 1 / 365,
};

export function compute(inputs: SimpleInterestInputs): SimpleInterestResult {
  const years = inputs.timeValue * YEARS_PER_UNIT[inputs.timeUnit];
  const r = inputs.annualRatePct / 100;
  const interest = inputs.principal * r * years;
  return {
    interest,
    totalAmount: inputs.principal + interest,
    years,
  };
}
