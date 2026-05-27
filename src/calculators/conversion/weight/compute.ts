import { z } from "zod";

export const inputSchema = z.object({
  value: z.number().finite().positive("Mass must be positive"),
  fromUnit: z.enum(["kg", "g", "mg", "lb", "oz", "ton", "stone"]),
  toUnit: z.enum(["kg", "g", "mg", "lb", "oz", "ton", "stone"]),
});

export type WeightInputs = z.infer<typeof inputSchema>;

export interface WeightResult extends Record<string, unknown> {
  readonly result: number;
}

// Mass conversion factors (base unit: kg)
const MASS_UNITS: Record<string, number> = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.45359237,
  oz: 0.0283495231,
  ton: 1000,
  stone: 6.35029318,
};

export function compute(input: WeightInputs): WeightResult {
  const { value, fromUnit, toUnit } = input;

  if (!MASS_UNITS[fromUnit]) {
    throw new Error(`Unknown mass unit: ${fromUnit}`);
  }
  if (!MASS_UNITS[toUnit]) {
    throw new Error(`Unknown mass unit: ${toUnit}`);
  }

  // Convert to base unit (kg), then to target unit
  const inKg = value * MASS_UNITS[fromUnit];
  const result = inKg / MASS_UNITS[toUnit];

  return {
    result: Math.round(result * 10000) / 10000,
  };
}
