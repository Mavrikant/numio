import { z } from "zod";

/**
 * Running / walking pace calculator.
 *
 * Given a distance and an elapsed time, computes pace (time per unit distance)
 * and average speed. Pace is the inverse of speed and is what runners train by.
 *
 *   totalSeconds = h·3600 + m·60 + s
 *   distance_km  = value · (unit → km factor)
 *   pace_s/km    = totalSeconds / distance_km
 *   speed_km/h   = distance_km / (totalSeconds / 3600)
 *
 * All inputs are exact; no empirical constants.
 */
export const inputSchema = z.object({
  distanceValue: z.number().positive().max(1e6),
  distanceUnit: z.enum(["km", "mi", "m"]).default("km"),
  hours: z.number().min(0).max(1000).default(0),
  minutes: z.number().min(0).max(59.999).default(0),
  seconds: z.number().min(0).max(59.999).default(0),
});

export type PaceInputs = z.infer<typeof inputSchema>;

export interface PaceResult extends Record<string, unknown> {
  readonly pacePerKm: string;
  readonly pacePerMile: string;
  readonly paceSecPerKm: number;
  readonly paceSecPerMile: number;
  readonly speedKmh: number;
  readonly speedMph: number;
}

const KM_FACTOR: Record<PaceInputs["distanceUnit"], number> = {
  km: 1,
  mi: 1.609344,
  m: 0.001,
};

/** Format a number of seconds as m:ss (or h:mm:ss when ≥ 1 hour). */
function formatPace(totalSeconds: number): string {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) return "—";
  const rounded = Math.round(totalSeconds);
  const h = Math.floor(rounded / 3600);
  const m = Math.floor((rounded % 3600) / 60);
  const s = rounded % 60;
  const ss = String(s).padStart(2, "0");
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${ss}`;
  return `${m}:${ss}`;
}

export function compute(inputs: PaceInputs): PaceResult {
  const totalSeconds = inputs.hours * 3600 + inputs.minutes * 60 + inputs.seconds;
  const distanceKm = inputs.distanceValue * KM_FACTOR[inputs.distanceUnit];

  const paceSecPerKm = totalSeconds / distanceKm;
  const paceSecPerMile = paceSecPerKm * 1.609344;
  const speedKmh = distanceKm / (totalSeconds / 3600);
  const speedMph = speedKmh / 1.609344;

  return {
    pacePerKm: formatPace(paceSecPerKm),
    pacePerMile: formatPace(paceSecPerMile),
    paceSecPerKm,
    paceSecPerMile,
    speedKmh,
    speedMph,
  };
}
