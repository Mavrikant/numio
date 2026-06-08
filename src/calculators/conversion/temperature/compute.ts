import { z } from "zod";

export const TEMPERATURE_UNITS = [
  "celsius",
  "fahrenheit",
  "kelvin",
  "reaumur",
  "rankine",
] as const;

export type TemperatureUnit = (typeof TEMPERATURE_UNITS)[number];

export const inputSchema = z.object({
  value: z.number().finite(),
  fromUnit: z.enum(TEMPERATURE_UNITS),
});

export type TemperatureInputs = z.infer<typeof inputSchema>;

export interface TemperatureResult extends Record<string, unknown> {
  readonly celsius: number;
  readonly fahrenheit: number;
  readonly kelvin: number;
  readonly reaumur: number;
  readonly rankine: number;
}

// Convert a value in any supported unit to Celsius, the pivot for all outputs.
function toCelsius(value: number, unit: TemperatureUnit): number {
  switch (unit) {
    case "celsius":
      return value;
    case "fahrenheit":
      return (value - 32) * (5 / 9);
    case "kelvin":
      return value - 273.15;
    case "reaumur":
      return value * (5 / 4);
    case "rankine":
      return (value - 491.67) * (5 / 9);
  }
}

export function compute(input: TemperatureInputs): TemperatureResult {
  const celsiusValue = toCelsius(input.value, input.fromUnit);

  return {
    celsius: celsiusValue,
    fahrenheit: celsiusValue * (9 / 5) + 32,
    kelvin: celsiusValue + 273.15,
    reaumur: celsiusValue * (4 / 5),
    rankine: (celsiusValue + 273.15) * (9 / 5),
  };
}
