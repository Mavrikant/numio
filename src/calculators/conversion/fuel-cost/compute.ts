import { z } from "zod";

/**
 * Trip fuel cost from distance, fuel economy (L/100km) and fuel price per litre.
 */
export const inputSchema = z.object({
  distance: z.number().positive().max(1e7),
  efficiency: z.number().positive().max(1000),
  fuelPrice: z.number().positive().max(1e6),
});

export type FuelCostInputs = z.infer<typeof inputSchema>;

export interface FuelCostResult extends Record<string, unknown> {
  readonly fuelUsed: number;
  readonly totalCost: number;
  readonly costPerDistance: number;
}

export function compute(inputs: FuelCostInputs): FuelCostResult {
  const fuelUsed = (inputs.distance / 100) * inputs.efficiency;
  const totalCost = fuelUsed * inputs.fuelPrice;
  return {
    fuelUsed,
    totalCost,
    costPerDistance: totalCost / inputs.distance,
  };
}
