import { z } from "zod";

/**
 * Conversion factors to the SI base unit (pascal, Pa).
 * Sources: NIST SP 811 and BIPM SI Brochure. The standard atmosphere
 * (atm) is exactly 101 325 Pa by definition; psi uses the international
 * pound-force per square inch.
 */
export const UNIT_FACTORS = {
  Pa: 1,
  kPa: 1000,
  MPa: 1e6,
  bar: 100_000,
  psi: 6894.757293168,
  atm: 101_325,
  mmHg: 133.322387415,
  torr: 133.32236842,
  inHg: 3386.389,
} as const;

export const PRESSURE_UNITS = [
  "Pa",
  "kPa",
  "MPa",
  "bar",
  "psi",
  "atm",
  "mmHg",
  "torr",
  "inHg",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(PRESSURE_UNITS),
  toUnit: z.enum(PRESSURE_UNITS),
});

export type PressureInputs = z.infer<typeof inputSchema>;

export interface PressureResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: PressureInputs): PressureResult {
  const fromFactor = UNIT_FACTORS[inputs.fromUnit];
  const toFactor = UNIT_FACTORS[inputs.toUnit];

  if (fromFactor === undefined || toFactor === undefined) {
    throw new Error(
      `Unknown unit: ${fromFactor === undefined ? inputs.fromUnit : inputs.toUnit}`,
    );
  }

  const result = (inputs.value * fromFactor) / toFactor;

  let resultFormatted: string;
  if (result !== 0 && (Math.abs(result) < 0.0001 || Math.abs(result) > 1_000_000_000)) {
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
