import { z } from "zod";

/**
 * Conversion factors to the SI base unit (pascal-second, Pa·s).
 * Sources: NIST SP 811 (Guide to the SI) and Wikipedia "Poise (unit)".
 * 1 poise (P) = 0.1 Pa·s exactly; 1 centipoise (cP) = 1 mPa·s = 0.001 Pa·s.
 */
export const UNIT_FACTORS = {
  Pa_s: 1,
  mPa_s: 0.001,
  P: 0.1,
  cP: 0.001,
} as const;

export const DYNAMIC_VISCOSITY_UNITS = ["Pa_s", "mPa_s", "P", "cP"] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(DYNAMIC_VISCOSITY_UNITS),
  toUnit: z.enum(DYNAMIC_VISCOSITY_UNITS),
});

export type DynamicViscosityInputs = z.infer<typeof inputSchema>;

export interface DynamicViscosityResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(
  inputs: DynamicViscosityInputs,
): DynamicViscosityResult {
  const fromFactor = UNIT_FACTORS[inputs.fromUnit];
  const toFactor = UNIT_FACTORS[inputs.toUnit];

  if (fromFactor === undefined || toFactor === undefined) {
    throw new Error(
      `Unknown unit: ${fromFactor === undefined ? inputs.fromUnit : inputs.toUnit}`,
    );
  }

  const result = (inputs.value * fromFactor) / toFactor;

  let resultFormatted: string;
  if (
    result !== 0 &&
    (Math.abs(result) < 0.0001 || Math.abs(result) > 1_000_000_000)
  ) {
    resultFormatted = result.toExponential(6);
  } else if (Math.abs(result) < 1) {
    resultFormatted = result.toFixed(8).replace(/\.?0+$/, "");
  } else {
    resultFormatted = (Math.round(result * 1_000_000) / 1_000_000).toString();
  }

  return {
    result: Math.round(result * 1_000_000) / 1_000_000,
    resultFormatted,
  };
}
