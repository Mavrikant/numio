import { z } from "zod";

/**
 * Conversion factors to the SI base unit (newton, N).
 * Sources: NIST SP 811 (Guide to the SI) and Wikipedia "Newton (unit)".
 * The kilonewton and dyne are exact by definition (1 kN = 1000 N,
 * 1 dyn = 1e-5 N); kgf uses standard gravity (9.80665 m/s²); lbf and ozf
 * derive from the international pound-force (4.4482216152605 N).
 */
export const UNIT_FACTORS = {
  N: 1,
  kN: 1000,
  dyn: 0.00001,
  lbf: 4.4482216152605,
  kgf: 9.80665,
  ozf: 0.27801385095378125,
} as const;

export const FORCE_UNITS = ["N", "kN", "dyn", "lbf", "kgf", "ozf"] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(FORCE_UNITS),
  toUnit: z.enum(FORCE_UNITS),
});

export type ForceInputs = z.infer<typeof inputSchema>;

export interface ForceResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: ForceInputs): ForceResult {
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
