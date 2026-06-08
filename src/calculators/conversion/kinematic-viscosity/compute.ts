import { z } from "zod";

/**
 * Conversion factors to the SI base unit (square meter per second, m²/s).
 * Sources: NIST SP 811 (Guide to the SI) and Wikipedia "Stokes (unit)".
 * 1 stokes (St) = 1e-4 m²/s exactly; 1 centistokes (cSt) = 1 mm²/s = 1e-6 m²/s.
 * 1 ft²/s = 0.09290304 m²/s exactly (0.3048² m per foot squared).
 */
export const UNIT_FACTORS = {
  m2_s: 1,
  mm2_s: 0.000001,
  St: 0.0001,
  cSt: 0.000001,
  ft2_s: 0.09290304,
} as const;

export const KINEMATIC_VISCOSITY_UNITS = [
  "m2_s",
  "mm2_s",
  "St",
  "cSt",
  "ft2_s",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(KINEMATIC_VISCOSITY_UNITS),
  toUnit: z.enum(KINEMATIC_VISCOSITY_UNITS),
});

export type KinematicViscosityInputs = z.infer<typeof inputSchema>;

export interface KinematicViscosityResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(
  inputs: KinematicViscosityInputs,
): KinematicViscosityResult {
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
