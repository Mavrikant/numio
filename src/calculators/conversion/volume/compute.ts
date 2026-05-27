import { z } from "zod";

/**
 * Conversion factors to the SI base unit (cubic meters, m³).
 * Sources: NIST SP 811 and ISO 80000-3. US customary units use the
 * "US survey" gallon (231 in³) and the imperial UK gallon (4.54609 L).
 */
export const UNIT_FACTORS = {
  m3: 1,
  L: 0.001,
  mL: 1e-6,
  cm3: 1e-6,
  ft3: 0.028316846592,
  in3: 0.000016387064,
  gal_us: 0.003785411784,
  gal_uk: 0.00454609,
  qt_us: 0.000946352946,
  pt_us: 0.000473176473,
  fl_oz_us: 0.0000295735295625,
} as const;

export const VOLUME_UNITS = [
  "m3",
  "L",
  "mL",
  "cm3",
  "ft3",
  "in3",
  "gal_us",
  "gal_uk",
  "qt_us",
  "pt_us",
  "fl_oz_us",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(VOLUME_UNITS),
  toUnit: z.enum(VOLUME_UNITS),
});

export type VolumeInputs = z.infer<typeof inputSchema>;

export interface VolumeResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: VolumeInputs): VolumeResult {
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
