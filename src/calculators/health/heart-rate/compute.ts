import { z } from "zod";

export const inputSchema = z.object({
  age: z.number().int().min(10).max(100),
  restingHeartRate: z.number().int().min(30).max(100),
  formula: z.enum(["simple", "karvonen"]),
});

export type HeartRateInputs = z.infer<typeof inputSchema>;

export interface HeartRateResult extends Record<string, unknown> {
  readonly maxHR: number;
  readonly hrr: number;
  readonly zone1Min: number;
  readonly zone1Max: number;
  readonly zone2Min: number;
  readonly zone2Max: number;
  readonly zone3Min: number;
  readonly zone3Max: number;
  readonly zone4Min: number;
  readonly zone4Max: number;
  readonly zone5Min: number;
  readonly zone5Max: number;
}

// Zone percentages: [min%, max%]
const ZONES: ReadonlyArray<readonly [number, number]> = [
  [0.50, 0.60], // Zone 1: recovery
  [0.60, 0.70], // Zone 2: base/aerobic base
  [0.70, 0.80], // Zone 3: aerobic
  [0.80, 0.90], // Zone 4: threshold
  [0.90, 1.00], // Zone 5: maximum
];

function roundHR(value: number): number {
  return Math.round(value);
}

export function compute(inputs: HeartRateInputs): HeartRateResult {
  const { age, restingHeartRate, formula } = inputs;
  const maxHR = 220 - age;
  const hrr = maxHR - restingHeartRate; // Heart Rate Reserve

  if (formula === "simple") {
    const [z1min, z1max] = ZONES[0];
    const [z2min, z2max] = ZONES[1];
    const [z3min, z3max] = ZONES[2];
    const [z4min, z4max] = ZONES[3];
    const [z5min, z5max] = ZONES[4];

    return {
      maxHR,
      hrr,
      zone1Min: roundHR(maxHR * z1min),
      zone1Max: roundHR(maxHR * z1max),
      zone2Min: roundHR(maxHR * z2min),
      zone2Max: roundHR(maxHR * z2max),
      zone3Min: roundHR(maxHR * z3min),
      zone3Max: roundHR(maxHR * z3max),
      zone4Min: roundHR(maxHR * z4min),
      zone4Max: roundHR(maxHR * z4max),
      zone5Min: roundHR(maxHR * z5min),
      zone5Max: roundHR(maxHR * z5max),
    };
  } else {
    // Karvonen: zone = (HRR × %) + restingHR
    const [z1min, z1max] = ZONES[0];
    const [z2min, z2max] = ZONES[1];
    const [z3min, z3max] = ZONES[2];
    const [z4min, z4max] = ZONES[3];
    const [z5min, z5max] = ZONES[4];

    return {
      maxHR,
      hrr,
      zone1Min: roundHR(hrr * z1min + restingHeartRate),
      zone1Max: roundHR(hrr * z1max + restingHeartRate),
      zone2Min: roundHR(hrr * z2min + restingHeartRate),
      zone2Max: roundHR(hrr * z2max + restingHeartRate),
      zone3Min: roundHR(hrr * z3min + restingHeartRate),
      zone3Max: roundHR(hrr * z3max + restingHeartRate),
      zone4Min: roundHR(hrr * z4min + restingHeartRate),
      zone4Max: roundHR(hrr * z4max + restingHeartRate),
      zone5Min: roundHR(hrr * z5min + restingHeartRate),
      zone5Max: roundHR(hrr * z5max + restingHeartRate),
    };
  }
}
