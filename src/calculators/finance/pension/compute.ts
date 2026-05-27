import { z } from "zod";

export const inputSchema = z
  .object({
    currentPot: z.number().min(0).max(100_000_000),
    currentAge: z.number().int().min(16).max(90),
    retirementAge: z.number().int().min(40).max(95),
    annualContribution: z.number().min(0).max(1_000_000),
    expectedReturn: z.number().min(-10).max(25),
    targetIncome: z.number().min(0).max(10_000_000),
    lifeExpectancy: z.number().int().min(50).max(120).default(85),
  })
  .superRefine((d, ctx) => {
    if (d.retirementAge <= d.currentAge) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["retirementAge"],
        message: "Retirement age must be greater than current age",
      });
    }
    if (d.lifeExpectancy <= d.retirementAge) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["lifeExpectancy"],
        message: "Life expectancy must be greater than retirement age",
      });
    }
  });

export type PensionInputs = z.infer<typeof inputSchema>;

export interface PensionResult extends Record<string, unknown> {
  readonly potAtRetirement: number;
  readonly safeAnnualIncome: number;
  readonly yearsUntilExhaustion: number;
  readonly realValueAtRetirement: number;
}

// 4% safe-withdrawal rule (Trinity Study, Bengen 1994)
const SAFE_WITHDRAWAL_RATE = 0.04;

// Long-run inflation assumption used to convert nominal → real value
const ASSUMED_INFLATION = 0.025;

export function compute(inputs: PensionInputs): PensionResult {
  const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
  const r = inputs.expectedReturn / 100;

  // Future value of current pot under compound growth: FV = P × (1+r)^n
  const fvCurrentPot = inputs.currentPot * Math.pow(1 + r, yearsToRetirement);

  // Future value of an annuity of constant annual contributions (end of year):
  //   FV = C × [((1+r)^n − 1) / r]
  // For r = 0 the closed form collapses to FV = C × n.
  let fvContributions: number;
  if (Math.abs(r) < 1e-9) {
    fvContributions = inputs.annualContribution * yearsToRetirement;
  } else {
    fvContributions =
      inputs.annualContribution *
      ((Math.pow(1 + r, yearsToRetirement) - 1) / r);
  }

  const potAtRetirement = fvCurrentPot + fvContributions;

  // 4% safe-withdrawal annual income from the projected pot
  const safeAnnualIncome = potAtRetirement * SAFE_WITHDRAWAL_RATE;

  // Drawdown depletion model: assumes pot continues to grow at the same `r`
  // during retirement while target income is withdrawn at year-end.
  //   t = ln(W / (W − r·P)) / ln(1+r)            (r > 0, sustainable)
  //   t = P / W                                    (r = 0)
  // If W ≤ r·P, drawdown is sustainable indefinitely — capped at
  // (lifeExpectancy − retirementAge).
  const maxRetirementYears = inputs.lifeExpectancy - inputs.retirementAge;
  let yearsUntilExhaustion: number;
  const w = inputs.targetIncome;

  if (potAtRetirement <= 0 || w <= 0) {
    yearsUntilExhaustion = w <= 0 ? maxRetirementYears : 0;
  } else if (Math.abs(r) < 1e-9) {
    yearsUntilExhaustion = Math.min(potAtRetirement / w, maxRetirementYears);
  } else {
    const sustainable = r * potAtRetirement;
    if (w <= sustainable) {
      // Income covered by growth — pot lasts beyond life expectancy
      yearsUntilExhaustion = maxRetirementYears;
    } else {
      // Closed-form drawdown years
      const numerator = Math.log(w / (w - r * potAtRetirement));
      const denominator = Math.log(1 + r);
      yearsUntilExhaustion = Math.min(
        numerator / denominator,
        maxRetirementYears,
      );
    }
  }

  // Real (inflation-adjusted) value: divide nominal pot by (1+π)^n
  const realValueAtRetirement =
    potAtRetirement / Math.pow(1 + ASSUMED_INFLATION, yearsToRetirement);

  return {
    potAtRetirement: Math.round(potAtRetirement * 100) / 100,
    safeAnnualIncome: Math.round(safeAnnualIncome * 100) / 100,
    yearsUntilExhaustion: Math.round(yearsUntilExhaustion * 10) / 10,
    realValueAtRetirement: Math.round(realValueAtRetirement * 100) / 100,
  };
}
