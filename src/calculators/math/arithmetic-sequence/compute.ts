import { z } from "zod";

export const inputSchema = z.object({
  firstTerm: z.number().min(-1_000_000_000).max(1_000_000_000),
  commonDifference: z.number().min(-1_000_000).max(1_000_000),
  numberOfTerms: z.number().int().min(1).max(1_000_000),
});

export type ArithmeticSequenceInputs = z.infer<typeof inputSchema>;

export interface ArithmeticSequenceResult extends Record<string, unknown> {
  nthTerm: number;
  sum: number;
}

export function compute(inputs: ArithmeticSequenceInputs): ArithmeticSequenceResult {
  const { firstTerm, commonDifference, numberOfTerms } = inputs;
  const n = numberOfTerms;

  // nth term: aₙ = a₁ + (n − 1)·d
  const nthTerm = firstTerm + (n - 1) * commonDifference;

  // Sum of the first n terms: Sₙ = n/2 · (a₁ + aₙ)
  const sum = (n / 2) * (firstTerm + nthTerm);

  return { nthTerm, sum };
}
