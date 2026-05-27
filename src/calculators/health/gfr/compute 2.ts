import { z } from "zod";

export const inputSchema = z.object({
  creatinineUmolL: z.number().positive("Creatinine must be positive"),
  ageYears: z.number().int().min(18).max(120),
  sex: z.enum(["male", "female"]),
  race: z.enum(["black", "other"]),
});

export type GfrInputs = z.infer<typeof inputSchema>;

export type CkdStage = "stage1" | "stage2" | "stage3a" | "stage3b" | "stage4" | "stage5";

export interface GfrResult extends Record<string, unknown> {
  readonly eGfr: number;
  readonly stage: CkdStage;
  readonly stageLabel: string;
  readonly riskLevel: "normal" | "low" | "moderate" | "high" | "veryHigh";
}

/**
 * CKD-EPI 2021 creatinine equation for eGFR calculation
 * Reference: Inker et al. 2021, https://doi.org/10.1681/ASN.2020121280
 * "A New Estimated GFR Should Be Used with Both Creatinine and Cystatin C in the General Population"
 *
 * Formula:
 * eGFR = 142 × (Scr/λ)^α × (0.9938)^age × (0.942 if female) × (1.012 if Black)
 *
 * where:
 * - Scr = serum creatinine (mg/dL)
 * - λ = 0.7 for females, 0.9 for males
 * - α = -0.302 for females, -0.241 for males
 * - Age in years
 * - Race adjustment: Black vs Other
 */
function calculateEgfrCkdEpi2021(inputs: GfrInputs): number {
  const { creatinineUmolL, ageYears, sex, race } = inputs;

  // Convert: 1 µmol/L = 0.0113 mg/dL
  const creatinineMgDl = creatinineUmolL * 0.0113;

  // CKD-EPI 2021 coefficients
  const isMale = sex === "male";
  const lambda = isMale ? 0.9 : 0.7;
  const alpha = isMale ? -0.241 : -0.302;

  // Base equation
  const scr_ratio = creatinineMgDl / lambda;
  const eGfr =
    142 *
    Math.pow(scr_ratio, alpha) *
    Math.pow(0.9938, ageYears) *
    (isMale ? 1 : 0.942);

  // Race adjustment: add 1.012 multiplier for Black individuals
  // Note: Recent guidance recommends this be optional/context-dependent
  const raceMultiplier = race === "black" ? 1.012 : 1;

  return eGfr * raceMultiplier;
}

/**
 * Classify CKD stage based on eGFR value
 * Reference: KDIGO 2012, https://kdigo.org/
 */
function classifyStage(eGfr: number): CkdStage {
  if (eGfr >= 90) return "stage1";
  if (eGfr >= 60) return "stage2";
  if (eGfr >= 45) return "stage3a";
  if (eGfr >= 30) return "stage3b";
  if (eGfr >= 15) return "stage4";
  return "stage5";
}

/**
 * Get human-readable stage label
 */
function getStageLabelAndRisk(stage: CkdStage): {
  label: string;
  riskLevel: "normal" | "low" | "moderate" | "high" | "veryHigh";
} {
  const stages = {
    stage1: {
      label: "Stage 1 (Normal or High)",
      riskLevel: "normal" as const,
    },
    stage2: {
      label: "Stage 2 (Mildly Decreased)",
      riskLevel: "low" as const,
    },
    stage3a: {
      label: "Stage 3a (Mildly to Moderately Decreased)",
      riskLevel: "moderate" as const,
    },
    stage3b: {
      label: "Stage 3b (Moderately to Severely Decreased)",
      riskLevel: "high" as const,
    },
    stage4: {
      label: "Stage 4 (Severely Decreased)",
      riskLevel: "veryHigh" as const,
    },
    stage5: {
      label: "Stage 5 (Kidney Failure)",
      riskLevel: "veryHigh" as const,
    },
  };

  return stages[stage];
}

export function compute(inputs: GfrInputs): GfrResult {
  const eGfr = calculateEgfrCkdEpi2021(inputs);
  const stage = classifyStage(eGfr);
  const { label: stageLabel, riskLevel } = getStageLabelAndRisk(stage);

  return {
    eGfr: Math.round(eGfr * 10) / 10, // Round to 1 decimal
    stage,
    stageLabel,
    riskLevel,
  };
}
