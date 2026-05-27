import { z } from "zod";

export const inputSchema = z.object({
  value: z.number().positive(),
  base: z.number().min(0.01).refine(b => b !== 1, "base cannot be 1"),
});

export type LogarithmInputs = z.infer<typeof inputSchema>;

export interface LogarithmResult extends Record<string, unknown> {
  readonly value: number;
  readonly base: number;
  readonly result: number;
  readonly natural_log: number;
  readonly log10: number;
  readonly log2: number;
}

export function compute(inputs: LogarithmInputs): LogarithmResult {
  const { value, base } = inputs;
  const result = Math.log(value) / Math.log(base);
  
  return {
    value,
    base,
    result: Math.round(result * 10000) / 10000,
    natural_log: Math.round(Math.log(value) * 10000) / 10000,
    log10: Math.round(Math.log10(value) * 10000) / 10000,
    log2: Math.round(Math.log2(value) * 10000) / 10000,
  };
}
