import { z } from "zod";

// AWG lookup table: AWG → cross-section area in mm²
const AWG_TABLE: Record<number, number> = {
  14: 2.08,
  12: 3.31,
  10: 5.26,
  8: 8.37,
  6: 13.3,
  4: 21.1,
  2: 33.6,
  0: 53.5,   // 1/0
  "-1": 67.4, // 2/0
  "-2": 85.0, // 3/0
  "-3": 107,  // 4/0
};

export const inputSchema = z.object({
  conductorMaterial: z.enum(["copper", "aluminum"]),
  wireGaugeUnit: z.enum(["awg", "mm2"]),
  wireGauge: z.number().positive(),
  lengthM: z.number().positive(),
  currentA: z.number().positive(),
  voltage: z.number().positive(),
});

export type VoltageDropInputs = z.infer<typeof inputSchema>;

export type VoltageDropRecommendation = "ok" | "warning" | "critical";

export interface VoltageDropResult extends Record<string, unknown> {
  readonly voltageDrop: number;
  readonly voltageDropPct: number;
  readonly receivingVoltage: number;
  readonly recommendation: VoltageDropRecommendation;
  readonly areaMm2: number;
}

// Resistivity: Ω·m
const RESISTIVITY: Record<"copper" | "aluminum", number> = {
  copper: 1.724e-8,
  aluminum: 2.65e-8,
};

function awgToMm2(awg: number): number {
  // Try exact lookup first
  const exact = AWG_TABLE[awg];
  if (exact !== undefined) return exact;
  // Formula for other AWG values
  return 53.475 / Math.pow(92, (awg - 1) / 39);
}

export function compute(inputs: VoltageDropInputs): VoltageDropResult {
  const { conductorMaterial, wireGaugeUnit, wireGauge, lengthM, currentA, voltage } = inputs;

  let areaMm2: number;
  if (wireGaugeUnit === "awg") {
    areaMm2 = awgToMm2(wireGauge);
  } else {
    areaMm2 = wireGauge;
  }

  const areaM2 = areaMm2 * 1e-6;
  const rho = RESISTIVITY[conductorMaterial];

  // Single-phase: 2-way path
  const voltageDrop = (2 * rho * currentA * lengthM) / areaM2;
  const voltageDropPct = (voltageDrop / voltage) * 100;
  const receivingVoltage = voltage - voltageDrop;

  let recommendation: VoltageDropRecommendation;
  if (voltageDropPct > 5) {
    recommendation = "critical";
  } else if (voltageDropPct > 3) {
    recommendation = "warning";
  } else {
    recommendation = "ok";
  }

  return { voltageDrop, voltageDropPct, receivingVoltage, recommendation, areaMm2 };
}
