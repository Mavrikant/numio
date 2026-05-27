import { z } from "zod";

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["W", "kW", "MW", "hp", "BTU_h"]),
  toUnit: z.enum(["W", "kW", "MW", "hp", "BTU_h"]),
});

export type PowerConvertInputs = z.infer<typeof inputSchema>;

export interface PowerConvertResult extends Record<string, unknown> {
  readonly result: number;
}

// Conversion factors to watts (base unit)
// 1 hp (mechanical) = 745.699872 W (standard definition)
// 1 kW = 1000 W
// 1 MW = 1,000,000 W
// 1 BTU/h = 0.293071 W
const FACTORS: Record<string, number> = {
  W: 1,
  kW: 1000,
  MW: 1000000,
  hp: 745.699872, // Mechanical horsepower
  BTU_h: 0.293071, // BTU per hour to watts
};

export function compute(inputs: PowerConvertInputs): PowerConvertResult {
  // Convert from source unit to watts
  const watts = inputs.value * FACTORS[inputs.fromUnit];

  // Convert from watts to target unit
  const result = watts / FACTORS[inputs.toUnit];

  return {
    result: result,
  };
}
