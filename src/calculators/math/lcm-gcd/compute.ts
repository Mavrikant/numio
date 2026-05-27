import { z } from "zod";
import { gcd, lcm } from "../_helpers/number-theory";

export const inputSchema = z.object({
  a: z.number().int().min(1).max(1_000_000),
  b: z.number().int().min(1).max(1_000_000),
});

export type GcdLcmInputs = z.infer<typeof inputSchema>;

export interface GcdLcmResult extends Record<string, unknown> {
  readonly gcdValue: number;
  readonly lcmValue: number;
  readonly product: number;
  readonly gcdSteps: Array<{
    readonly step: number;
    readonly a: number;
    readonly b: number;
    readonly remainder: number;
  }>;
}

export function compute(inputs: GcdLcmInputs): GcdLcmResult {
  const { a, b } = inputs;
  const gcdValue = gcd(a, b);
  const lcmValue = lcm(a, b);
  const product = a * b;

  // Euclidean algorithm steps for GCD
  const gcdSteps: Array<{
    readonly step: number;
    readonly a: number;
    readonly b: number;
    readonly remainder: number;
  }> = [];

  let x = a;
  let y = b;
  let step = 1;

  while (y !== 0) {
    const remainder = x % y;
    gcdSteps.push({
      step,
      a: x,
      b: y,
      remainder,
    });
    x = y;
    y = remainder;
    step++;
  }

  return {
    gcdValue,
    lcmValue,
    product,
    gcdSteps,
  };
}
