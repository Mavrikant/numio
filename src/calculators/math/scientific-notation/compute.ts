import { z } from "zod";

export const inputSchema = z.object({
  value: z.number(),
  mode: z.enum(["toScientific", "toStandard", "toEngineering"])
});

export type ScientificInputs = z.infer<typeof inputSchema>;
export interface ScientificResult extends Record<string, unknown> {
  readonly scientific: string;
  readonly standard: string;
}

export function compute(inputs: ScientificInputs): ScientificResult {
  return {
    scientific: inputs.value.toExponential(6),
    standard: inputs.value.toString()
  };
}
