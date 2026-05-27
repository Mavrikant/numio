import { z } from "zod";

export const inputSchema = z
  .object({
    fixedCosts: z.number().min(0).max(1_000_000_000),
    variableCostPerUnit: z.number().min(0).max(1_000_000),
    pricePerUnit: z.number().min(0.01).max(1_000_000),
  })
  .refine((d) => d.pricePerUnit > d.variableCostPerUnit, {
    path: ["pricePerUnit"],
    message: "Price per unit must exceed variable cost per unit",
  });

export type BreakEvenInputs = z.infer<typeof inputSchema>;

export interface BreakEvenResult extends Record<string, unknown> {
  readonly breakEvenUnits: number;
  readonly breakEvenRevenue: number;
  readonly contributionMarginPerUnit: number;
  readonly contributionMarginPercent: number;
}

export function compute(inputs: BreakEvenInputs): BreakEvenResult {
  const contributionMarginPerUnit =
    inputs.pricePerUnit - inputs.variableCostPerUnit;
  const contributionMarginPercent =
    (contributionMarginPerUnit / inputs.pricePerUnit) * 100;
  const breakEvenUnits = inputs.fixedCosts / contributionMarginPerUnit;
  const breakEvenRevenue = breakEvenUnits * inputs.pricePerUnit;

  return {
    breakEvenUnits: Math.round(breakEvenUnits * 100) / 100,
    breakEvenRevenue: Math.round(breakEvenRevenue * 100) / 100,
    contributionMarginPerUnit:
      Math.round(contributionMarginPerUnit * 100) / 100,
    contributionMarginPercent:
      Math.round(contributionMarginPercent * 100) / 100,
  };
}
