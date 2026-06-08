import { z } from "zod";

/**
 * Conversion factors to the SI base unit of volumetric flow rate
 * (cubic metre per second, m³/s).
 * Sources: NIST Guide to the SI (SP 811) and Wikipedia "Cubic metre per
 * second". Imperial factors use the international foot (0.3048 m) and the
 * US liquid gallon (3.785411784 L). Time conversions use 60 s/min and
 * 3600 s/h exactly.
 */
export const UNIT_FACTORS = {
  m3_s: 1,
  m3_h: 0.0002777777777777778,
  L_s: 0.001,
  L_min: 0.000016666666666666667,
  ft3_min: 0.0004719474432,
  ft3_s: 0.028316846592,
  gal_min_us: 0.0000630901964,
} as const;

export const FLOW_RATE_UNITS = [
  "m3_s",
  "m3_h",
  "L_s",
  "L_min",
  "ft3_min",
  "ft3_s",
  "gal_min_us",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(FLOW_RATE_UNITS),
  toUnit: z.enum(FLOW_RATE_UNITS),
});

export type FlowRateInputs = z.infer<typeof inputSchema>;

export interface FlowRateResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: FlowRateInputs): FlowRateResult {
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
