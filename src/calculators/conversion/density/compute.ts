import { z } from "zod";

/**
 * Conversion factors to the SI base unit (kilogram per cubic meter, kg/m³).
 * Sources: NIST SP 811 and Wikipedia "Density". The metric factors are exact
 * by definition (1 g/cm³ = 1 g/mL = 1000 kg/m³); the imperial factors derive
 * from the international pound (0.45359237 kg), foot (0.3048 m), inch
 * (0.0254 m) and the US liquid gallon (3.785411784 L).
 */
export const UNIT_FACTORS = {
  kg_m3: 1,
  g_cm3: 1000,
  g_mL: 1000,
  lb_ft3: 16.018463373960136,
  oz_in3: 1729.9940439319434,
  lb_gal_us: 119.82642731689663,
} as const;

export const DENSITY_UNITS = [
  "kg_m3",
  "g_cm3",
  "g_mL",
  "lb_ft3",
  "oz_in3",
  "lb_gal_us",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(DENSITY_UNITS),
  toUnit: z.enum(DENSITY_UNITS),
});

export type DensityInputs = z.infer<typeof inputSchema>;

export interface DensityResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: DensityInputs): DensityResult {
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
