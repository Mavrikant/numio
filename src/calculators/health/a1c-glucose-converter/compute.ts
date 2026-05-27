import { z } from "zod";

/**
 * Convert between HbA1c (%) and estimated average glucose (eAG).
 *   eAG(mg/dL) = 28.7 · A1C − 46.7   (ADAG study)
 *   A1C(%)     = (eAG + 46.7) / 28.7
 *   mmol/L     = mg/dL / 18.0182
 */
export const inputSchema = z.object({
  mode: z.enum(["a1c-to-glucose", "glucose-to-a1c"]).default("a1c-to-glucose"),
  value: z.number().positive().max(1000),
});

export type A1cInputs = z.infer<typeof inputSchema>;

export interface A1cResult extends Record<string, unknown> {
  readonly a1cPercent: number;
  readonly glucoseMgDl: number;
  readonly glucoseMmol: number;
}

const MGDL_PER_MMOL = 18.0182;

export function compute(inputs: A1cInputs): A1cResult {
  let a1cPercent: number;
  let glucoseMgDl: number;
  if (inputs.mode === "a1c-to-glucose") {
    a1cPercent = inputs.value;
    glucoseMgDl = 28.7 * inputs.value - 46.7;
  } else {
    glucoseMgDl = inputs.value;
    a1cPercent = (inputs.value + 46.7) / 28.7;
  }
  return { a1cPercent, glucoseMgDl, glucoseMmol: glucoseMgDl / MGDL_PER_MMOL };
}
