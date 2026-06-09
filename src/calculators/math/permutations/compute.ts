import { z } from "zod";

export const inputSchema = z.object({
  n: z.number().int().min(0).max(170),
  r: z.number().int().min(0).max(170),
  allowRepetition: z.boolean(),
});

export type PermutationsInputs = z.infer<typeof inputSchema>;

export interface PermutationsResult extends Record<string, unknown> {
  permutations: number;
}

export function compute(inputs: PermutationsInputs): PermutationsResult {
  const { n, r, allowRepetition } = inputs;

  let permutations: number;

  if (allowRepetition) {
    // Permutations with repetition: each of the r positions can be any of the
    // n items, so the count is n^r. (0^0 = 1, matching the empty arrangement.)
    permutations = Math.pow(n, r);
  } else if (r > n) {
    // Without repetition you cannot arrange more distinct items than exist.
    permutations = 0;
  } else {
    // nPr = n! / (n − r)!, computed as the falling factorial
    // n · (n−1) · … · (n−r+1) to avoid overflowing intermediate factorials.
    // An empty selection (r = 0) yields the single empty arrangement: 1.
    permutations = 1;
    for (let i = 0; i < r; i++) {
      permutations *= n - i;
    }
  }

  return { permutations };
}
