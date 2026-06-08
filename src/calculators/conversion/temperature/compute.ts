import { z } from "zod";

export const inputSchema = z.object({
  celsius: z.number().finite().optional(),
  fahrenheit: z.number().finite().optional(),
  kelvin: z.number().finite().optional(),
  rankine: z.number().finite().optional(),
});

export type TemperatureInputs = z.infer<typeof inputSchema>;

export interface TemperatureResult extends Record<string, unknown> {
  readonly celsius: number;
  readonly fahrenheit: number;
  readonly kelvin: number;
  readonly rankine: number;
}

export function compute(input: TemperatureInputs): TemperatureResult {
  const { celsius, fahrenheit, kelvin, rankine } = input;

  // Determine which input was provided and convert all others
  let celsiusValue: number;

  if (celsius !== undefined && celsius !== null) {
    celsiusValue = celsius;
  } else if (fahrenheit !== undefined && fahrenheit !== null) {
    celsiusValue = (fahrenheit - 32) * (5 / 9);
  } else if (kelvin !== undefined && kelvin !== null) {
    celsiusValue = kelvin - 273.15;
  } else if (rankine !== undefined && rankine !== null) {
    celsiusValue = (rankine - 491.67) * (5 / 9);
  } else {
    throw new Error("At least one temperature value must be provided");
  }

  // Convert from Celsius to other units
  const fahrenheitValue = celsiusValue * (9 / 5) + 32;
  const kelvinValue = celsiusValue + 273.15;
  const rankineValue = (celsiusValue + 273.15) * (9 / 5);

  return {
    celsius: celsiusValue,
    fahrenheit: fahrenheitValue,
    kelvin: kelvinValue,
    rankine: rankineValue,
  };
}
