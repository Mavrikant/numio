import { z } from "zod";

export const inputSchema = z.object({
  moment: z.number().positive(),        // kN·m (bending moment)
  sectionModulus: z.number().positive(), // cm³ (section modulus Z)
  materialType: z.enum(["steel", "aluminum", "concrete", "timber"]),
});

export type BendingStressInputs = z.infer<typeof inputSchema>;

export interface BendingStressResult extends Record<string, unknown> {
  readonly stressMPa: number;
  readonly yieldStrengthMPa: number;
  readonly safetyFactor: number;
  readonly utilizationRatio: number;
  readonly safe: boolean;
  readonly classification: "ok" | "warning" | "critical";
}

// Material yield/allowable strengths (MPa)
// Reference: EN 1993-1-1 (Eurocode 3), EN 1992-1-1 (Eurocode 2)
const MATERIAL_STRENGTHS: Record<string, number> = {
  steel: 250,      // S275 (common structural steel, fy)
  aluminum: 240,   // 6061-T6, fy
  concrete: 30,    // C30, compressive strength
  timber: 10,      // Softwood, bending strength (simplified)
};

export function compute(inputs: BendingStressInputs): BendingStressResult {
  const { moment, sectionModulus, materialType } = inputs;

  // Unit conversions
  // moment: kN·m → N·m
  // sectionModulus: cm³ → m³
  // σ = M / Z
  const momentNm = moment * 1000;        // kN·m → N·m
  const ZinM3 = sectionModulus * 1e-6;   // cm³ → m³

  const stressPa = momentNm / ZinM3;     // Pa
  const stressMPa = stressPa / 1e6;      // Pa → MPa

  const yieldStrengthMPa = MATERIAL_STRENGTHS[materialType];

  // Safety factor: fy / σ (should be ≥ 1.0)
  const safetyFactor = yieldStrengthMPa / Math.max(stressMPa, 0.001);

  // Utilization ratio: σ / (fy / γM), where γM = 1.5 (typical design safety)
  const designSafetyFactor = 1.5;
  const allowedStress = yieldStrengthMPa / designSafetyFactor;
  const utilizationRatio = stressMPa / Math.max(allowedStress, 0.001);

  let classification: "ok" | "warning" | "critical" = "ok";
  if (utilizationRatio > 1.0) {
    classification = "critical";
  } else if (utilizationRatio > 0.85) {
    classification = "warning";
  }

  return {
    stressMPa: Math.round(stressMPa * 10) / 10,
    yieldStrengthMPa: Math.round(yieldStrengthMPa * 10) / 10,
    safetyFactor: Math.round(safetyFactor * 100) / 100,
    utilizationRatio: Math.round(utilizationRatio * 1000) / 1000,
    safe: utilizationRatio <= 1.0,
    classification,
  };
}
