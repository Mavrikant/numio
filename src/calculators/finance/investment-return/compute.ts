import { z } from "zod";

export const inputSchema = z
  .object({
    initialInvestment: z.number().positive(),
    finalValue: z.number().positive().optional(),
    annualReturn: z.number().min(-100).max(1000).optional(),
    years: z.number().min(0.5).max(100),
  })
  .superRefine((data, ctx) => {
    if (data.finalValue === undefined && data.annualReturn === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["finalValue"],
        message:
          "Provide either finalValue or annualReturn to compute returns.",
      });
    }
    if (data.initialInvestment <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["initialInvestment"],
        message: "Initial investment must be greater than zero.",
      });
    }
  });

export type InvestmentReturnInputs = z.infer<typeof inputSchema>;

export interface InvestmentReturnResult extends Record<string, unknown> {
  readonly roi: number;
  readonly cagr: number;
  readonly totalGain: number;
  readonly finalValue: number;
  readonly annualizedReturn: number;
}

export function compute(inputs: InvestmentReturnInputs): InvestmentReturnResult {
  const { initialInvestment, years } = inputs;

  let finalValue: number;

  if (inputs.finalValue !== undefined) {
    // Mode A: finalValue given → compute ROI and CAGR
    finalValue = inputs.finalValue;
  } else if (inputs.annualReturn !== undefined) {
    // Mode B: annualReturn given → compute finalValue
    finalValue =
      initialInvestment * Math.pow(1 + inputs.annualReturn / 100, years);
  } else {
    // Guarded by superRefine — should not reach here
    finalValue = initialInvestment;
  }

  const totalGain = finalValue - initialInvestment;
  const roi =
    initialInvestment > 0 ? (totalGain / initialInvestment) * 100 : 0;

  // CAGR = (finalValue / initialInvestment)^(1/years) - 1, as %
  let cagr = 0;
  if (finalValue > 0 && initialInvestment > 0 && years > 0) {
    cagr =
      (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100;
  }

  return {
    roi: Math.round(roi * 100) / 100,
    cagr: Math.round(cagr * 100) / 100,
    totalGain: Math.round(totalGain * 100) / 100,
    finalValue: Math.round(finalValue * 100) / 100,
    annualizedReturn: Math.round(cagr * 100) / 100,
  };
}
