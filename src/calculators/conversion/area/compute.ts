import { z } from "zod";

/**
 * Conversion factors to the SI base unit (square meters, m²).
 * Sources: NIST SP 811 (Guide to the SI) and ISO 80000-3.
 */
export const UNIT_FACTORS = {
  m2: 1,
  cm2: 1e-4,
  mm2: 1e-6,
  km2: 1e6,
  ha: 10_000,
  acre: 4046.8564224,
  ft2: 0.09290304,
  in2: 0.00064516,
  yd2: 0.83612736,
  mi2: 2_589_988.110336,
} as const;

export const AREA_UNITS = [
  "m2",
  "cm2",
  "mm2",
  "km2",
  "ha",
  "acre",
  "ft2",
  "in2",
  "yd2",
  "mi2",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(AREA_UNITS),
  toUnit: z.enum(AREA_UNITS),
});

export type AreaInputs = z.infer<typeof inputSchema>;

export interface AreaResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: AreaInputs): AreaResult {
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
