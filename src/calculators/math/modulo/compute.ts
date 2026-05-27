import { z } from "zod";

/**
 * Modulo / remainder. Shows the truncated remainder (JavaScript %), the
 * floored modulo (sign follows the divisor — like Python's %), and both
 * quotients.
 */
export const inputSchema = z.object({
  dividend: z.number().min(-1e15).max(1e15),
  divisor: z.number().refine((v) => v !== 0, "Divisor cannot be zero"),
});

export type ModuloInputs = z.infer<typeof inputSchema>;

export interface ModuloResult extends Record<string, unknown> {
  readonly remainder: number;
  readonly moduloFloored: number;
  readonly quotient: number;
  readonly flooredQuotient: number;
}

export function compute(inputs: ModuloInputs): ModuloResult {
  const { dividend: a, divisor: b } = inputs;
  return {
    remainder: a % b,
    moduloFloored: ((a % b) + b) % b,
    quotient: Math.trunc(a / b),
    flooredQuotient: Math.floor(a / b),
  };
}
