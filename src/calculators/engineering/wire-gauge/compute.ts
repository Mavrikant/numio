import { z } from "zod";

export const AWG_VALUES = ["22", "20", "18", "16", "14", "12", "10", "8", "6", "4", "2", "1", "1/0", "2/0", "3/0", "4/0"] as const;
export type AwgValue = typeof AWG_VALUES[number];

// NEC 310.15(B)(16) — 60°C column, copper, single conductor in free air
const AMPACITY_TABLE: Record<AwgValue, number> = {
  "22": 3,
  "20": 5,
  "18": 7,
  "16": 13,
  "14": 15,
  "12": 20,
  "10": 30,
  "8": 40,
  "6": 55,
  "4": 70,
  "2": 95,
  "1": 110,
  "1/0": 125,
  "2/0": 145,
  "3/0": 165,
  "4/0": 195,
};

// AWG numeric value for diameter formula
// AWG 1/0=0, 2/0=-1, 3/0=-2, 4/0=-3 in standard notation; but formula uses AWG numeric
// diameter_mm = 0.127 × 92^((36-AWG)/39)
// For 1/0 (AWG=0), 2/0 (AWG=-1), 3/0 (AWG=-2), 4/0 (AWG=-3)
const AWG_NUMERIC: Record<AwgValue, number> = {
  "22": 22,
  "20": 20,
  "18": 18,
  "16": 16,
  "14": 14,
  "12": 12,
  "10": 10,
  "8": 8,
  "6": 6,
  "4": 4,
  "2": 2,
  "1": 1,
  "1/0": 0,
  "2/0": -1,
  "3/0": -2,
  "4/0": -3,
};

export const inputSchema = z.object({
  awg: z.enum(AWG_VALUES),
  current: z.number().min(0).max(400),
  lengthM: z.number().min(0.1).max(1000),
  loadCurrent: z.number().min(0).max(400).optional(),
});

export type WireGaugeInputs = z.infer<typeof inputSchema>;

export interface WireGaugeResult extends Record<string, unknown> {
  readonly diameterMm: number;
  readonly areaMm2: number;
  readonly resistancePerMeterOhm: number;
  readonly ampacity: number;
  readonly voltageDrop: number;
  readonly voltageDropPct: number;
  readonly isSuitable: boolean;
}

const RHO_COPPER = 1.724e-8; // Ω·m at 20°C

export function compute(inputs: WireGaugeInputs): WireGaugeResult {
  const { awg, current, lengthM, loadCurrent } = inputs;
  const effectiveCurrent = loadCurrent !== undefined ? loadCurrent : current;

  const awgNum = AWG_NUMERIC[awg];

  // AWG diameter formula: diameter_mm = 0.127 × 92^((36-AWG)/39)
  const diameterMm = 0.127 * Math.pow(92, (36 - awgNum) / 39);
  const diameterM = diameterMm / 1000;
  const radiusM = diameterM / 2;

  // Cross-sectional area in m²
  const areaM2 = Math.PI * radiusM * radiusM;
  const areaMm2 = areaM2 * 1e6;

  // Resistance per meter: R/m = ρ / A
  const resistancePerMeterOhm = RHO_COPPER / areaM2;

  // Ampacity from NEC table
  const ampacity = AMPACITY_TABLE[awg];

  // Voltage drop: V_drop = I × R_per_m × 2 × length (round trip)
  const voltageDrop = effectiveCurrent * resistancePerMeterOhm * 2 * lengthM;

  // Voltage drop percentage relative to nominal voltage (we use current as proxy for % calc)
  // Standard practice: voltage drop % = V_drop / V_nominal × 100
  // Without explicit voltage, we report as fraction of 120V (NEC standard assumption)
  // Actually we compute the raw values and leave % relative to a 120V system
  // Better: output V_drop and let user interpret; voltageDropPct is drop/120V × 100
  const nominalVoltage = 120; // Standard NEC reference voltage
  const voltageDropPct = (voltageDrop / nominalVoltage) * 100;

  // Suitability check: loadCurrent <= ampacity AND voltageDropPct <= 3
  const isSuitable = effectiveCurrent <= ampacity && voltageDropPct <= 3;

  return {
    diameterMm,
    areaMm2,
    resistancePerMeterOhm,
    ampacity,
    voltageDrop,
    voltageDropPct,
    isSuitable,
  };
}
