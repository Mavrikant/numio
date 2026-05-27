import { z } from "zod";

/** Average speed from distance (km) and elapsed time (hours + minutes). */
export const inputSchema = z.object({
  distance: z.number().positive().max(1e7),
  hours: z.number().min(0).max(100000).default(0),
  minutes: z.number().min(0).max(59.999).default(0),
});

export type AverageSpeedInputs = z.infer<typeof inputSchema>;

export interface AverageSpeedResult extends Record<string, unknown> {
  readonly speedKmh: number;
  readonly speedMs: number;
  readonly speedMph: number;
}

export function compute(inputs: AverageSpeedInputs): AverageSpeedResult {
  const totalHours = inputs.hours + inputs.minutes / 60;
  const speedKmh = inputs.distance / totalHours;
  return {
    speedKmh,
    speedMs: speedKmh / 3.6,
    speedMph: speedKmh / 1.609344,
  };
}
