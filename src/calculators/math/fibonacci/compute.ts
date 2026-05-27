import { z } from "zod";

/**
 * Fibonacci: the nth term (F₁ = F₂ = 1), the sum of the first n terms, and the
 * ratio of consecutive terms (which approaches the golden ratio φ ≈ 1.618).
 * Capped at n = 78 so every term stays an exact double.
 */
export const inputSchema = z.object({
  n: z.number().int().min(1).max(78),
});

export type FibonacciInputs = z.infer<typeof inputSchema>;

export interface FibonacciResult extends Record<string, unknown> {
  readonly nthTerm: number;
  readonly sumFirstN: number;
  readonly ratio: number;
}

export function compute(inputs: FibonacciInputs): FibonacciResult {
  const seq: number[] = [];
  let a = 1;
  let b = 1;
  for (let i = 1; i <= inputs.n; i++) {
    seq.push(a);
    [a, b] = [b, a + b];
  }
  const nthTerm = seq[inputs.n - 1]!;
  const sumFirstN = seq.reduce((s, x) => s + x, 0);
  const ratio = inputs.n >= 2 ? nthTerm / seq[inputs.n - 2]! : NaN;
  return { nthTerm, sumFirstN, ratio };
}
