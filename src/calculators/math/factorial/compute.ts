import { z } from "zod";
import { factorial } from "../_helpers/number-theory";

export const inputSchema = z.object({ n: z.number().int().min(0).max(170) });
export type FactorialInputs = z.infer<typeof inputSchema>;
export interface FactorialResult extends Record<string, unknown> {
  readonly value: number | bigint;
  readonly isBigInt: boolean;
}

export function compute(inputs: FactorialInputs): FactorialResult {
  const val = factorial(inputs.n);
  return { value: val, isBigInt: typeof val === "bigint" };
}
