import { z } from "zod";
import { combinations, permutations } from "../_helpers/number-theory";

export const inputSchema = z.object({ n: z.number().int().min(0).max(1000), r: z.number().int().min(0).max(1000) });
export type CombinationsInputs = z.infer<typeof inputSchema>;
export interface CombinationsResult extends Record<string, unknown> {
  readonly nCr: number;
  readonly nPr: number;
}

export function compute(inputs: CombinationsInputs): CombinationsResult {
  return { nCr: combinations(inputs.n, inputs.r), nPr: permutations(inputs.n, inputs.r) };
}
