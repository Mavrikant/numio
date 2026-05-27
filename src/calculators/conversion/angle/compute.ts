import { z } from "zod";

export const inputSchema = z.object({
  value: z.number(),
  fromUnit: z.enum(["degree", "radian", "gradian", "arcminute", "arcsecond"]),
  toUnit: z.enum(["degree", "radian", "gradian", "arcminute", "arcsecond"]),
});

export type AngleInputs = z.infer<typeof inputSchema>;

export interface AngleResult extends Record<string, unknown> {
  readonly result: number;
}

// Conversion factors to degrees (base unit)
// 1 radian = 180/π degrees ≈ 57.2958 degrees
// 1 gradian = 0.9 degrees (400 gradians = 360 degrees)
// 1 arcminute = 1/60 degree
// 1 arcsecond = 1/3600 degree
const FACTORS: Record<string, number> = {
  degree: 1,
  radian: 180 / Math.PI, // ≈ 57.29577951308232
  gradian: 0.9, // 100 gradians = 90 degrees
  arcminute: 1 / 60,
  arcsecond: 1 / 3600,
};

export function compute(inputs: AngleInputs): AngleResult {
  // Convert from source unit to degrees
  const degrees = inputs.value * FACTORS[inputs.fromUnit];

  // Convert from degrees to target unit
  const result = degrees / FACTORS[inputs.toUnit];

  return {
    result: result,
  };
}
