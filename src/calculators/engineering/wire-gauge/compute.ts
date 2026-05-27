import { z } from "zod";

/**
 * Wire Gauge Calculator
 *
 * Computes wire resistance, voltage drop, power loss, and NEC ampacity
 * for an AWG- or mm²-sized conductor of either copper or aluminum, on
 * DC or AC (50/60 Hz) circuits.
 *
 * Resistivity at 20 °C (Ω·m):
 *   ρ_Cu = 1.724e-8
 *   ρ_Al = 2.82e-8
 *
 * AC adjustment (small at power frequencies, conservative):
 *   DC      → 1.00
 *   AC 50Hz → 1.02
 *   AC 60Hz → 1.03
 *
 * AWG ↔ mm²:
 *   d_mm = 0.127 × 92^((36 − AWG) / 39)
 *   A_mm² = π × (d_mm / 2)²
 *   AWG(A) ≈ 36 − 39 × log_92(d_mm / 0.127)
 */

export const SIZE_UNITS = ["mm2", "awg"] as const;
export type SizeUnit = (typeof SIZE_UNITS)[number];

export const MATERIALS = ["copper", "aluminum"] as const;
export type Material = (typeof MATERIALS)[number];

export const FREQUENCIES = ["dc", "ac50", "ac60"] as const;
export type Frequency = (typeof FREQUENCIES)[number];

export const RHO: Record<Material, number> = {
  copper: 1.724e-8, // Ω·m at 20 °C
  aluminum: 2.82e-8, // Ω·m at 20 °C
};

export const AC_FACTOR: Record<Frequency, number> = {
  dc: 1.0,
  ac50: 1.02,
  ac60: 1.03,
};

/**
 * NEC 310.16 ampacity (60 °C copper column, single conductor in raceway).
 * Aluminum is derated to ~78 % of copper (typical NEC ratio).
 * Indexed by nominal mm² size; nearest-rung lookup at runtime.
 */
const AMPACITY_TABLE_MM2_COPPER: ReadonlyArray<readonly [number, number]> = [
  [0.5, 7],
  [0.75, 10],
  [1.0, 13],
  [1.5, 15],
  [2.5, 20],
  [4, 25],
  [6, 32],
  [10, 50],
  [16, 65],
  [25, 85],
  [35, 100],
  [50, 125],
  [70, 160],
  [95, 200],
  [120, 250],
  [150, 285],
  [185, 325],
  [240, 380],
  [300, 430],
  [400, 510],
  [500, 600],
  [630, 690],
  [800, 780],
  [1000, 880],
];

const ALUMINUM_DERATE = 0.78;

export const inputSchema = z.object({
  sizeUnit: z.enum(SIZE_UNITS),
  wireSize: z.number().positive(),
  wireLength: z.number().positive(),
  current: z.number().positive(),
  material: z.enum(MATERIALS),
  frequency: z.enum(FREQUENCIES),
});

export type WireGaugeInputs = z.infer<typeof inputSchema>;

export interface WireGaugeResult extends Record<string, unknown> {
  readonly crossSectionArea: number;
  readonly awgEquivalent: number;
  readonly resistance: number;
  readonly voltageDrop: number;
  readonly powerLoss: number;
  readonly ampacityRating: number;
}

/** AWG number → diameter in millimetres. AWG may be fractional or negative (1/0 = 0, 2/0 = -1 ...). */
export function awgToDiameterMm(awg: number): number {
  return 0.127 * Math.pow(92, (36 - awg) / 39);
}

/** AWG → cross-section area in mm². */
export function awgToAreaMm2(awg: number): number {
  const d = awgToDiameterMm(awg);
  return Math.PI * (d / 2) ** 2;
}

/** mm² → equivalent AWG number (inverse of the diameter formula). */
export function areaMm2ToAwg(areaMm2: number): number {
  const dMm = 2 * Math.sqrt(areaMm2 / Math.PI);
  // d = 0.127 × 92^((36 − AWG)/39)  →  AWG = 36 − 39 × log_92(d / 0.127)
  return 36 - 39 * (Math.log(dMm / 0.127) / Math.log(92));
}

/** Interpolate-by-nearest copper ampacity (NEC 60 °C column) for an arbitrary area. */
export function ampacityForAreaMm2(areaMm2: number, material: Material): number {
  // Below the smallest table rung — scale linearly off the first entry.
  const [firstA, firstAmps] = AMPACITY_TABLE_MM2_COPPER[0]!;
  if (areaMm2 <= firstA) {
    const cu = firstAmps * (areaMm2 / firstA);
    return material === "aluminum" ? cu * ALUMINUM_DERATE : cu;
  }
  // Above the largest table rung — extrapolate linearly off the last two entries.
  const last = AMPACITY_TABLE_MM2_COPPER[AMPACITY_TABLE_MM2_COPPER.length - 1]!;
  if (areaMm2 >= last[0]) {
    const prev = AMPACITY_TABLE_MM2_COPPER[AMPACITY_TABLE_MM2_COPPER.length - 2]!;
    const slope = (last[1] - prev[1]) / (last[0] - prev[0]);
    const cu = last[1] + slope * (areaMm2 - last[0]);
    return material === "aluminum" ? cu * ALUMINUM_DERATE : cu;
  }
  // Linearly interpolate between the bracketing rungs.
  for (let i = 1; i < AMPACITY_TABLE_MM2_COPPER.length; i++) {
    const [a1, amps1] = AMPACITY_TABLE_MM2_COPPER[i - 1]!;
    const [a2, amps2] = AMPACITY_TABLE_MM2_COPPER[i]!;
    if (areaMm2 >= a1 && areaMm2 <= a2) {
      const t = (areaMm2 - a1) / (a2 - a1);
      const cu = amps1 + t * (amps2 - amps1);
      return material === "aluminum" ? cu * ALUMINUM_DERATE : cu;
    }
  }
  // Unreachable but keeps the compiler happy.
  return material === "aluminum" ? firstAmps * ALUMINUM_DERATE : firstAmps;
}

export function compute(inputs: WireGaugeInputs): WireGaugeResult {
  const { sizeUnit, wireSize, wireLength, current, material, frequency } = inputs;

  // 1. Resolve cross-section area (mm²) and AWG equivalent.
  let crossSectionArea: number;
  let awgEquivalent: number;
  if (sizeUnit === "awg") {
    crossSectionArea = awgToAreaMm2(wireSize);
    awgEquivalent = wireSize;
  } else {
    crossSectionArea = wireSize;
    awgEquivalent = areaMm2ToAwg(wireSize);
  }

  // 2. Round-trip resistance: R = 2 × L × ρ / A. (L in m, ρ in Ω·m, A in m².)
  //    The factor of two accounts for both conductors in a real circuit
  //    (supply + return), matching the conventional "voltage drop" formula
  //    used in NEC tables and electrician handbooks.
  const areaM2 = crossSectionArea * 1e-6;
  const rDc = (2 * wireLength * RHO[material]) / areaM2;
  const resistance = rDc * AC_FACTOR[frequency];

  // 3. Derived electrical losses.
  const voltageDrop = current * resistance;
  const powerLoss = current * current * resistance;

  // 4. NEC ampacity (interpolated, with aluminum derate applied inside the helper).
  const ampacityRating = ampacityForAreaMm2(crossSectionArea, material);

  return {
    crossSectionArea,
    awgEquivalent,
    resistance,
    voltageDrop,
    powerLoss,
    ampacityRating,
  };
}
