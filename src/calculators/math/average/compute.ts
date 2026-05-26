import { z } from "zod";

export const inputSchema = z.object({
  // TODO: Define schema inputs
  value: z.number(),
});

export type AverageInputs = z.infer<typeof inputSchema>;

export interface AverageResult extends Record<string, unknown> {
  // TODO: Define result outputs
  result: number;
}

export function compute(inputs: AverageInputs): AverageResult {
  // TODO: Implement compute logic
  return {
    result: inputs.value,
  };
}
