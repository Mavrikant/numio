import { z } from "zod";

export const inputSchema = z
  .object({
    mode: z.enum(["pf_from_power", "power_from_pf", "correction"]),
    // pf_from_power inputs
    realPowerKw: z.number().min(0).max(1_000_000).optional(),
    reactivePowerKvar: z.number().min(-1_000_000).max(1_000_000).optional(),
    // power_from_pf inputs
    kva: z.number().min(0).max(1_000_000).optional(),
    pf: z.number().min(0.01).max(1).optional(),
    // correction inputs
    currentPf: z.number().min(0.01).max(1).optional(),
    targetPf: z.number().min(0.01).max(1).optional(),
    voltageV: z.number().min(100).max(13800).optional(),
    frequencyHz: z.enum(["50", "60"]).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.mode === "pf_from_power") {
      if (data.realPowerKw === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["realPowerKw"], message: "Real power is required for this mode." });
      }
      if (data.reactivePowerKvar === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["reactivePowerKvar"], message: "Reactive power is required for this mode." });
      }
    }
    if (data.mode === "power_from_pf") {
      if (data.kva === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["kva"], message: "Apparent power (kVA) is required for this mode." });
      }
      if (data.pf === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["pf"], message: "Power factor is required for this mode." });
      }
    }
    if (data.mode === "correction") {
      if (data.realPowerKw === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["realPowerKw"], message: "Real power (kW) is required for correction mode." });
      }
      if (data.currentPf === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["currentPf"], message: "Current power factor is required." });
      }
      if (data.targetPf === undefined) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["targetPf"], message: "Target power factor is required." });
      }
      if (data.targetPf !== undefined && data.currentPf !== undefined && data.targetPf <= data.currentPf) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["targetPf"], message: "Target PF must be greater than current PF." });
      }
    }
  });

export type PowerFactorInputs = z.infer<typeof inputSchema>;

export interface PowerFactorResult extends Record<string, unknown> {
  readonly powerFactorPf: number;
  readonly realPowerKw: number;
  readonly apparentPowerKva: number;
  readonly reactivePowerKvar: number;
  readonly phaseAngleDeg: number;
  readonly correctionCapacitorMicrofarad: number | null;
  readonly kvarRequired: number | null;
}

export function compute(inputs: PowerFactorInputs): PowerFactorResult {
  const { mode } = inputs;

  let P = 0; // kW
  let Q = 0; // kVAR
  let S = 0; // kVA
  let pf = 0;

  if (mode === "pf_from_power") {
    P = inputs.realPowerKw ?? 0;
    Q = inputs.reactivePowerKvar ?? 0;
    // S = √(P² + Q²)
    S = Math.sqrt(P * P + Q * Q);
    pf = S > 0 ? P / S : 0;
  } else if (mode === "power_from_pf") {
    S = inputs.kva ?? 0;
    pf = inputs.pf ?? 0;
    P = S * pf;
    // Q = √(S² - P²)
    Q = Math.sqrt(Math.max(0, S * S - P * P));
  } else if (mode === "correction") {
    P = inputs.realPowerKw ?? 0;
    const pf1 = inputs.currentPf ?? 0;
    const pf2 = inputs.targetPf ?? 1;

    // Current reactive power
    const phi1 = Math.acos(pf1);
    const phi2 = Math.acos(pf2);
    Q = P * Math.tan(phi1);
    pf = pf1;
    S = P / pf1;
  }

  const phaseAngleDeg = (Math.acos(Math.max(-1, Math.min(1, pf))) * 180) / Math.PI;

  let correctionCapacitorMicrofarad: number | null = null;
  let kvarRequired: number | null = null;

  if (mode === "correction") {
    const pf1 = inputs.currentPf ?? 0;
    const pf2 = inputs.targetPf ?? 1;
    const V = inputs.voltageV ?? 230;
    const freqHz = parseInt(inputs.frequencyHz ?? "50", 10);

    const phi1 = Math.acos(pf1);
    const phi2 = Math.acos(pf2);

    // Q_cap = P × (tan(φ1) - tan(φ2))
    const QcapKvar = P * (Math.tan(phi1) - Math.tan(phi2));
    kvarRequired = QcapKvar;

    // C = Q_cap / (2π × f × V²) in Farads → convert to µF
    const QcapVAR = QcapKvar * 1000;
    const C_F = QcapVAR / (2 * Math.PI * freqHz * V * V);
    correctionCapacitorMicrofarad = C_F * 1e6;
  }

  return {
    powerFactorPf: pf,
    realPowerKw: P,
    apparentPowerKva: S,
    reactivePowerKvar: Q,
    phaseAngleDeg,
    correctionCapacitorMicrofarad,
    kvarRequired,
  };
}
