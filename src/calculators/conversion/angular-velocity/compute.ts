import { z } from "zod";

/**
 * Conversion factors to the SI base unit (radian per second, rad/s).
 * Sources: NIST SP 811 (Guide to the SI) and Wikipedia "Radian per second".
 * 1 rpm = 2π/60 rad/s, 1 Hz (revolution per second) = 2π rad/s,
 * 1 degree/second = π/180 rad/s.
 */
export const UNIT_FACTORS = {
  rad_s: 1,
  deg_s: 0.017453292519943295,
  deg_min: 0.0002908882086657216,
  rpm: 0.10471975511965977,
  hz: 6.283185307179586,
  rad_min: 0.016666666666666666,
} as const;

export const ANGULAR_VELOCITY_UNITS = [
  "rad_s",
  "deg_s",
  "deg_min",
  "rpm",
  "hz",
  "rad_min",
] as const;

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(ANGULAR_VELOCITY_UNITS),
  toUnit: z.enum(ANGULAR_VELOCITY_UNITS),
});

export type AngularVelocityInputs = z.infer<typeof inputSchema>;

export interface AngularVelocityResult extends Record<string, unknown> {
  readonly result: number;
  readonly resultFormatted: string;
}

export function compute(inputs: AngularVelocityInputs): AngularVelocityResult {
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
