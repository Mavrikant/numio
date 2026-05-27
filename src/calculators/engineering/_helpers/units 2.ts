/**
 * Engineering unit conversion helpers for electrical and wire calculations.
 * Focuses on: AWG wire gauge, electrical resistivity, wire cross-sections.
 */

// AWG to mm² conversion table (standard AWG to metric)
// Reference: IEC 60228, ASTM B258
export const AWG_TO_MM2_TABLE: Record<number, number> = {
  // Common wire gauges (14 AWG to 4/0 AWG)
  14: 2.08,
  12: 3.31,
  10: 5.26,
  8: 8.37,
  6: 13.3,
  4: 21.1,
  2: 33.6,
  1: 42.4,
  0: 53.5,   // 1/0
  "-1": 67.4, // 2/0
  "-2": 85.0, // 3/0
  "-3": 107,  // 4/0
};

/**
 * Convert AWG wire gauge to mm² cross-sectional area.
 * Uses direct lookup for standard gauges, formula for others.
 * Reference: ASTM B258 (American Wire Gauge)
 *
 * Formula: A(mm²) = 53.475 / 92^((AWG - 1) / 39)
 * (AWG = 1 → 53.475 mm²)
 *
 * @param awg - Wire gauge in AWG (e.g., 12, 10, or -2 for 3/0)
 * @returns Cross-sectional area in mm²
 */
export function awgToMm2(awg: number): number {
  // Direct lookup for standard gauges
  const exact = AWG_TO_MM2_TABLE[awg];
  if (exact !== undefined) return exact;

  // Interpolation formula for non-standard values
  // Coefficient: 92^(1/39) ≈ 1.122414
  // Exponent: (AWG - 1) / 39
  const coeff = 53.475;
  const ratio = Math.pow(92, (awg - 1) / 39);
  return coeff / ratio;
}

/**
 * Convert mm² cross-sectional area to AWG wire gauge (approximate).
 * Note: Reverse calculation is not exact; returns nearest standard AWG.
 * Reference: ASTM B258
 *
 * @param mm2 - Wire cross-section in mm²
 * @returns Approximate AWG (may not be a standard gauge)
 */
export function mm2ToAwg(mm2: number): number {
  // Reverse formula: AWG = 1 + 39 * log₉₂(53.475 / mm²)
  const ratio = 53.475 / mm2;
  const exponent = Math.log(ratio) / Math.log(92);
  return 1 + 39 * exponent;
}

/**
 * Electrical resistivity values at 20°C / 68°F
 * Reference: Copper Development Association, Aluminum Association
 * Units: Ω·m (ohm-meters)
 */
export const ELECTRICAL_RESISTIVITY: Record<"copper" | "aluminum", number> = {
  copper: 1.724e-8,      // 17.24 µΩ·cm
  aluminum: 2.65e-8,     // 26.5 µΩ·cm
};

/**
 * Calculate wire resistance using resistivity formula.
 * R = ρ * L / A
 * Reference: Ohm's Law, basic conductor physics
 *
 * @param resistivity - Material resistivity (Ω·m)
 * @param lengthM - Wire length in meters
 * @param areaMm2 - Wire cross-section in mm²
 * @returns Resistance in ohms (Ω)
 */
export function calculateWireResistance(
  resistivity: number,
  lengthM: number,
  areaMm2: number
): number {
  const areaM2 = areaMm2 * 1e-6; // mm² to m²
  return (resistivity * lengthM) / areaM2;
}

/**
 * NEC voltage drop guidelines (National Electrical Code, USA)
 * Reference: NEC Article 210.19(A)(1), Table 210.24
 *
 * Single-phase and 3-phase voltage drop thresholds:
 * - Feeder alone: ≤3%
 * - Combined feeder + branch: ≤5%
 */
export const NEC_VOLTAGE_DROP_LIMITS = {
  // Single feeder
  feederMaxPercent: 3,
  // Combined (feeder + branch circuit)
  combinedMaxPercent: 5,
  // Individual branch circuit (rough guideline)
  branchMaxPercent: 2,
} as const;

/**
 * Voltage drop categories for recommendations.
 * NEC-aligned thresholds.
 */
export type VoltageDropStatus = "ok" | "warning" | "critical";

/**
 * Classify voltage drop as ok/warning/critical based on NEC guidelines.
 * Reference: NEC Article 210, 215 (distribution systems)
 *
 * @param voltageDropPercent - Calculated voltage drop as percentage
 * @returns Status: "ok" (≤3%), "warning" (3-5%), "critical" (>5%)
 */
export function classifyVoltageDrop(voltageDropPercent: number): VoltageDropStatus {
  if (voltageDropPercent <= NEC_VOLTAGE_DROP_LIMITS.feederMaxPercent) {
    return "ok";
  } else if (voltageDropPercent <= NEC_VOLTAGE_DROP_LIMITS.combinedMaxPercent) {
    return "warning";
  }
  return "critical";
}

/**
 * Convert between electrical units (V, A, Ω, W).
 * Basic conversions following Ohm's Law: V = IR, P = VI
 * Reference: Ohm's Law, basic circuit theory
 */
export const ELECTRICAL_UNIT_CONVERSIONS = {
  // Voltage (V is base)
  V: 1,
  volt: 1,
  kV: 1e3,
  mV: 1e-3,

  // Current (A is base)
  A: 1,
  amp: 1,
  ampere: 1,
  mA: 1e-3,
  uA: 1e-6,

  // Resistance (Ω is base)
  ohm: 1,
  kohm: 1e3,
  mohm: 1e-3,

  // Power (W is base)
  W: 1,
  watt: 1,
  kW: 1e3,
  mW: 1e-3,
  hp: 746, // 1 hp = 746 W (mechanical)
} as const;

export default {
  AWG_TO_MM2_TABLE,
  awgToMm2,
  mm2ToAwg,
  ELECTRICAL_RESISTIVITY,
  calculateWireResistance,
  NEC_VOLTAGE_DROP_LIMITS,
  classifyVoltageDrop,
  ELECTRICAL_UNIT_CONVERSIONS,
};
