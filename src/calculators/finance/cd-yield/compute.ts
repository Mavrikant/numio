import { z } from "zod";

export const inputSchema = z.object({
  principal: z.number().min(1).max(10_000_000),
  apr: z.number().min(0).max(20),
  termMonths: z.number().int().min(1).max(120),
  compoundFreq: z.union([z.literal(1), z.literal(4), z.literal(12), z.literal(365)]).default(12),
  earlyWithdrawalMonths: z.number().int().min(0).default(0),
});

export type CdYieldInputs = z.infer<typeof inputSchema>;

export interface CdYieldResult extends Record<string, unknown> {
  readonly apy: number;
  readonly futureValue: number;
  readonly interestEarned: number;
  readonly effectiveYield: number;
  readonly earlyWithdrawalPenalty: number;
  readonly netReturnAfterPenalty: number;
}

export function compute(inputs: CdYieldInputs): CdYieldResult {
  const { principal, apr, termMonths, compoundFreq, earlyWithdrawalMonths } = inputs;

  const r = apr / 100;
  const n = compoundFreq;
  const years = termMonths / 12;

  // APY = (1 + APR/n)^n - 1
  let apy: number;
  if (r === 0) {
    apy = 0;
  } else {
    apy = Math.pow(1 + r / n, n) - 1;
  }

  // Future Value: FV = P × (1 + APR/n)^(n × years)
  let futureValue: number;
  if (r === 0) {
    futureValue = principal;
  } else {
    futureValue = principal * Math.pow(1 + r / n, n * years);
  }

  const interestEarned = futureValue - principal;

  // Effective yield over the term
  const effectiveYield = years > 0 ? (interestEarned / principal) * 100 : 0;

  // Early withdrawal penalty: interest earned for earlyWithdrawalMonths
  // Common standard: penalty = interest that would have accrued in penaltyMonths
  // For CDs <= 1 year: 90 days penalty; > 1 year: 180 days
  // Here we use earlyWithdrawalMonths as the user-specified penalty period
  let earlyWithdrawalPenalty = 0;
  if (earlyWithdrawalMonths > 0) {
    const penaltyYears = earlyWithdrawalMonths / 12;
    // Penalty = interest that would accrue during the penalty period at the stated rate
    if (r === 0) {
      earlyWithdrawalPenalty = 0;
    } else {
      const penaltyFV = principal * Math.pow(1 + r / n, n * penaltyYears);
      earlyWithdrawalPenalty = penaltyFV - principal;
    }
  }

  const netReturnAfterPenalty = interestEarned - earlyWithdrawalPenalty;

  return {
    apy: Math.round(apy * 10000) / 100, // as percent, 2 decimal places
    futureValue: Math.round(futureValue * 100) / 100,
    interestEarned: Math.round(interestEarned * 100) / 100,
    effectiveYield: Math.round(effectiveYield * 100) / 100,
    earlyWithdrawalPenalty: Math.round(earlyWithdrawalPenalty * 100) / 100,
    netReturnAfterPenalty: Math.round(netReturnAfterPenalty * 100) / 100,
  };
}
