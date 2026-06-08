import { z } from "zod";

export const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum([
    "nanosecond",
    "microsecond",
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
    "decade",
    "century",
    "millennium",
  ]),
  toUnit: z.enum([
    "nanosecond",
    "microsecond",
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "week",
    "month",
    "year",
    "decade",
    "century",
    "millennium",
  ]),
});

export type TimeConvertInputs = z.infer<typeof inputSchema>;

export interface TimeConvertResult extends Record<string, unknown> {
  readonly result: number;
}

// Conversion factors to seconds (base unit)
// Month average: 365.25 days / 12 months ≈ 30.4375 days
// Year: 365.25 days (Gregorian calendar accounting for leap years)
const FACTORS: Record<string, number> = {
  nanosecond: 1e-9,
  microsecond: 1e-6,
  millisecond: 1e-3,
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800, // 7 days
  month: 2629746, // 30.4375 days in seconds (365.25 / 12 * 86400)
  year: 31556952, // 365.25 days in seconds
  decade: 315569520, // 10 years
  century: 3155695200, // 100 years
  millennium: 31556952000, // 1000 years
};

export function compute(inputs: TimeConvertInputs): TimeConvertResult {
  // Convert from source unit to seconds
  const seconds = inputs.value * FACTORS[inputs.fromUnit];

  // Convert from seconds to target unit
  const result = seconds / FACTORS[inputs.toUnit];

  return {
    result: result,
  };
}
