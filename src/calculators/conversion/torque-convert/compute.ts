import { z } from "zod";

/**
 * Conversion factors to the SI base unit of torque (newton-metre, N·m).
 * Sources: NIST SP 811 and Wikipedia "Newton metre". The pound-force-foot
 * uses the international pound-force and foot; the kilogram-force-metre
 * uses standard gravity (gₙ = 9.806 65 m/s²) by definition.
 */
export const UNIT_FACTORS = {
  Nm: 1,
  kNm: 1000,
  lbf_ft: 1.3558179483314004,
  lbf_in: 0.1129848290276167,
  kgf_m: 9.80665,
  kgf_cm: 0.0980665,
} as const;

export const TORQUE_UNITS = [
  "Nm",
  "kNm",
  "lbf_ft",
  "lbf_in",
  "kgf_m",
  "kgf_cm",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(TORQUE_UNITS),
  toUnit: z.enum(TORQUE_UNITS),
});

export type TorqueInputs = z.infer<typeof inputSchema>;

export interface TorqueResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: TorqueInputs): TorqueResult {
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
