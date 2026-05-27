import { z } from "zod";

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["L_100km", "km_L", "mpg_us", "mpg_uk"]),
  toUnit: z.enum(["L_100km", "km_L", "mpg_us", "mpg_uk"]),
});

export type FuelEconomyInputs = z.infer<typeof inputSchema>;

export interface FuelEconomyResult extends Record<string, unknown> {
  readonly result: number;
}

// Fuel economy conversions
// L/100km and mpg have INVERSE relationship (higher mpg = lower L/100km)
// Reference conversions:
// - 1 mpg(US) = 235.214 / mpg(US) L/100km
// - 1 mpg(UK) = 282.481 / mpg(UK) L/100km
// - 1 L/100km = 100 / liters * km
// - 1 km/L = 100 / liters per 100 km

export function compute(inputs: FuelEconomyInputs): FuelEconomyResult {
  // Normalize all inputs to L/100km (efficiency metric)
  let liters_per_100km: number;

  switch (inputs.fromUnit) {
    case "L_100km":
      liters_per_100km = inputs.value;
      break;
    case "km_L":
      // km/L is inverse: L/100km = 100 / km_per_liter
      liters_per_100km = 100 / inputs.value;
      break;
    case "mpg_us":
      // US MPG: 1 mpg = 235.214 / mpg L/100km
      liters_per_100km = 235.214 / inputs.value;
      break;
    case "mpg_uk":
      // UK MPG: 1 mpg = 282.481 / mpg L/100km
      liters_per_100km = 282.481 / inputs.value;
      break;
  }

  // Convert from L/100km to target unit
  let result: number;

  switch (inputs.toUnit) {
    case "L_100km":
      result = liters_per_100km;
      break;
    case "km_L":
      // km/L = 100 / L/100km
      result = 100 / liters_per_100km;
      break;
    case "mpg_us":
      // mpg = 235.214 / L/100km
      result = 235.214 / liters_per_100km;
      break;
    case "mpg_uk":
      // mpg = 282.481 / L/100km
      result = 282.481 / liters_per_100km;
      break;
  }

  return {
    result: result,
  };
}
