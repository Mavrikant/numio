import { z } from "zod";

/**
 * Solve the proportion a/b = c/x for x by cross-multiplication: x = b·c / a.
 */
export const inputSchema = z.object({
  a: z.number().refine((v) => v !== 0, "a cannot be zero"),
  b: z.number().min(-1e15).max(1e15),
  c: z.number().min(-1e15).max(1e15),
});

export type ProportionInputs = z.infer<typeof inputSchema>;

export interface ProportionResult extends Record<string, unknown> {
  readonly x: number;
  readonly ratio: number;
  readonly crossProduct: number;
}

export function compute(inputs: ProportionInputs): ProportionResult {
  const { a, b, c } = inputs;
  return {
    x: (b * c) / a,
    ratio: a / b,
    crossProduct: b * c,
  };
}
