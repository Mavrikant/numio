import { z } from "zod";

export const inputSchema = z.object({
  principal: z.number().min(0).max(10_000_000),
  annualRate: z.number().min(0).max(50),
  years: z.number().int().min(1).max(50),
  compoundFrequency: z.union([
    z.literal(1),
    z.literal(4),
    z.literal(12),
    z.literal(365),
  ]),
  monthlyContribution: z.number().min(0).max(100_000).default(0),
});

export type CompoundInterestInputs = z.infer<typeof inputSchema>;

export interface YearlyBreakdownRow {
  readonly year: number;
  readonly balance: number;
  readonly contributed: number;
  readonly interest: number;
}

export interface CompoundInterestResult extends Record<string, unknown> {
  readonly futureValue: number;
  readonly totalContributions: number;
  readonly totalInterest: number;
  readonly yearlyBreakdown: YearlyBreakdownRow[];
}

export function compute(inputs: CompoundInterestInputs): CompoundInterestResult {
  const { principal, annualRate, years, compoundFrequency, monthlyContribution } = inputs;
  const r = annualRate / 100;
  const n = compoundFrequency;

  // FV without contributions: P × (1 + r/n)^(n×t)
  // FV contributions (monthly PMT): PMT × [(1 + r/n)^(n×t) - 1] / (r/n)
  // When r=0: FV = P + PMT × 12 × t

  const yearlyBreakdown: YearlyBreakdownRow[] = [];
  let cumulativeContributions = principal;

  for (let year = 1; year <= years; year++) {
    const t = year;
    let fvYear: number;

    if (r === 0) {
      fvYear = principal + monthlyContribution * 12 * t;
    } else {
      const periodFactor = Math.pow(1 + r / n, n * t);
      const fvPrincipal = principal * periodFactor;
      // Monthly contribution converts to per-period contribution
      // Effective per-period (using r/n rate, n*t periods, but monthly PMT):
      // Use per-month compounding conversion:
      const rPerPeriod = r / n;
      const periodsPerMonth = n / 12;
      // Compound monthly contribution: PMT × [(1+r/12)^(12t) - 1] / (r/12)
      const monthlyRate = r / 12;
      const fvContrib = monthlyContribution * ((Math.pow(1 + monthlyRate, 12 * t) - 1) / monthlyRate);
      void periodsPerMonth; // unused, kept for clarity
      void rPerPeriod;
      // Re-derive: use the standard formula with monthly compounding for contributions
      // regardless of compound frequency (contributions are monthly)
      fvYear = fvPrincipal + fvContrib;
    }

    cumulativeContributions = principal + monthlyContribution * 12 * t;

    yearlyBreakdown.push({
      year,
      balance: Math.round(fvYear * 100) / 100,
      contributed: Math.round(cumulativeContributions * 100) / 100,
      interest: Math.round((fvYear - cumulativeContributions) * 100) / 100,
    });
  }

  // Use the exact formula for final values
  let futureValue: number;
  if (r === 0) {
    futureValue = principal + monthlyContribution * 12 * years;
  } else {
    const periodFactor = Math.pow(1 + r / n, n * years);
    const fvPrincipal = principal * periodFactor;
    const monthlyRate = r / 12;
    const fvContrib = monthlyContribution * ((Math.pow(1 + monthlyRate, 12 * years) - 1) / monthlyRate);
    futureValue = fvPrincipal + fvContrib;
  }

  const totalContributions = principal + monthlyContribution * 12 * years;
  const totalInterest = futureValue - totalContributions;

  return {
    futureValue: Math.round(futureValue * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    yearlyBreakdown,
  };
}
