import { z } from "zod";
import { primeFactorization } from "../_helpers/number-theory";

export const inputSchema = z.object({
  value: z
    .number()
    .nonnegative("Value must be non-negative")
    .finite("Value must be finite"),
  nthRoot: z
    .number()
    .int("Root index must be an integer")
    .min(2, "Root index must be at least 2")
    .max(100, "Root index must be at most 100")
    .default(2),
});

export type SquareRootInputs = z.infer<typeof inputSchema>;

export interface SquareRootResult extends Record<string, unknown> {
  readonly root: number;
  readonly isPerfectSquare: boolean;
  readonly isPerfectNthRoot: boolean;
  readonly simplifiedCoefficient: number;
  readonly simplifiedRadicand: number;
}

/**
 * Compute simplified radical form for nth root of x.
 * Example: ∜48 = 2∜3 (coefficient=2, radicand=3 for n=4)
 */
function simplifyRadical(x: number, n: number): { coefficient: number; radicand: number } {
  // Only works for positive integers in the radicand
  if (x === 0) return { coefficient: 0, radicand: 0 };
  if (x === 1) return { coefficient: 1, radicand: 1 };

  // For non-integer x, we can't extract integer roots
  if (!Number.isInteger(x)) return { coefficient: 1, radicand: x };

  const factors = primeFactorization(x);
  let coefficient = 1;
  let radicand = 1;

  for (const [prime, exp] of factors) {
    const whole = Math.floor(exp / n); // how many times prime^n fits
    const remainder = exp % n;
    coefficient *= Math.pow(prime, whole);
    radicand *= Math.pow(prime, remainder);
  }

  return { coefficient, radicand };
}

export function compute(inputs: SquareRootInputs): SquareRootResult {
  const { value, nthRoot } = inputs;

  // Compute the nth root
  const rootValue =
    value === 0
      ? 0
      : nthRoot === 2
      ? Math.sqrt(value)
      : Math.pow(value, 1 / nthRoot);

  const rootRounded = Math.round(rootValue * 1000000) / 1000000;

  // Perfect square check (only for n=2, integer values)
  const isPerfectSquare =
    nthRoot === 2 &&
    Number.isInteger(value) &&
    Number.isInteger(Math.round(rootValue * 1e8) / 1e8);

  // Perfect nth root check
  const nthRootRounded = Math.round(rootValue);
  const isPerfectNthRoot =
    Number.isInteger(value) &&
    Math.abs(Math.pow(nthRootRounded, nthRoot) - value) < 1e-6;

  // Simplified radical form (only meaningful for integers)
  const { coefficient, radicand } =
    Number.isInteger(value) ? simplifyRadical(value, nthRoot) : { coefficient: 1, radicand: value };

  return {
    root: rootRounded,
    isPerfectSquare,
    isPerfectNthRoot,
    simplifiedCoefficient: coefficient,
    simplifiedRadicand: radicand,
  };
}
