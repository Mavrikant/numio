import { z } from "zod";

/**
 * Convert between APR (nominal annual rate) and APY/EAR (effective annual
 * yield) for a given compounding frequency.
 *   APY = (1 + APR/n)^n − 1
 *   APR = n · ((1 + APY)^(1/n) − 1)
 */
export const inputSchema = z.object({
  mode: z.enum(["apr-to-apy", "apy-to-apr"]).default("apr-to-apy"),
  rate: z.number().min(0).max(1000),
  compounding: z.enum(["daily", "monthly", "quarterly", "semiannual", "annual"]).default("monthly"),
});

export type AprApyInputs = z.infer<typeof inputSchema>;

export interface AprApyResult extends Record<string, unknown> {
  readonly apr: number;
  readonly apy: number;
  readonly difference: number;
}

const N: Record<AprApyInputs["compounding"], number> = {
  daily: 365,
  monthly: 12,
  quarterly: 4,
  semiannual: 2,
  annual: 1,
};

export function compute(inputs: AprApyInputs): AprApyResult {
  const n = N[inputs.compounding];
  let apr: number;
  let apy: number;
  if (inputs.mode === "apr-to-apy") {
    apr = inputs.rate;
    apy = (Math.pow(1 + apr / 100 / n, n) - 1) * 100;
  } else {
    apy = inputs.rate;
    apr = n * (Math.pow(1 + apy / 100, 1 / n) - 1) * 100;
  }
  return { apr, apy, difference: apy - apr };
}
