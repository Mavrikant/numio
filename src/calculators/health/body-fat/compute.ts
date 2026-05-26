import { z } from "zod";

export const inputSchema = z
  .object({
    gender: z.enum(["male", "female"]),
    height: z.number().positive(),
    weight: z.number().positive(),
    waist: z.number().positive(),
    neck: z.number().positive(),
    hip: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.height < 50 || data.height > 250) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 50–250 cm" });
    }
    if (data.weight < 1 || data.weight > 300) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["weight"], message: "Weight 1–300 kg" });
    }
    if (data.waist < 30 || data.waist > 200) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["waist"], message: "Waist 30–200 cm" });
    }
    if (data.neck < 20 || data.neck > 80) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["neck"], message: "Neck 20–80 cm" });
    }
    if (data.gender === "female") {
      if (data.hip == null) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["hip"], message: "Hip measurement required for females" });
      } else if (data.hip < 50 || data.hip > 200) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["hip"], message: "Hip 50–200 cm" });
      }
    }
    // waist must be larger than neck
    if (data.waist <= data.neck) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["waist"], message: "Waist must be larger than neck" });
    }
  });

export type BodyFatInputs = z.infer<typeof inputSchema>;

export type BodyFatCategory =
  | "essential"
  | "athlete"
  | "fitness"
  | "acceptable"
  | "obese";

export interface BodyFatResult extends Record<string, unknown> {
  readonly bodyFatPct: number;
  readonly fatMass: number;
  readonly leanMass: number;
  readonly category: BodyFatCategory;
}

/**
 * US Navy Body Composition Method (Hodgdon & Beckett, 1984)
 * All measurements in cm.
 *
 * Male:   %BF = 86.010 × log10(waist − neck) − 70.041 × log10(height) + 36.76
 * Female: %BF = 163.205 × log10(waist + hip − neck) − 97.684 × log10(height) − 78.387
 *
 * Reference: US Navy Body Composition Assessment
 * https://www.public.navy.mil/
 */

/** ACE body fat category thresholds */
function categorise(pct: number, gender: "male" | "female"): BodyFatCategory {
  if (gender === "male") {
    if (pct < 5) return "essential";
    if (pct < 14) return "athlete";
    if (pct < 18) return "fitness";
    if (pct < 25) return "acceptable";
    return "obese";
  } else {
    if (pct < 13) return "essential";
    if (pct < 21) return "athlete";
    if (pct < 25) return "fitness";
    if (pct < 32) return "acceptable";
    return "obese";
  }
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function compute(inputs: BodyFatInputs): BodyFatResult {
  const { gender, height, weight, waist, neck, hip } = inputs;

  let bodyFatPct: number;
  if (gender === "male") {
    // Cm-adapted Hodgdon & Beckett formula.
    // Original inches constants (36.76) adjusted for log10(cm) = log10(in) + log10(2.54):
    // intercept shifts by (70.041 - 86.010) × log10(2.54) ≈ −6.47 → 36.76 − 6.47 = 30.29
    bodyFatPct =
      86.010 * Math.log10(waist - neck) -
      70.041 * Math.log10(height) +
      30.295;
  } else {
    // Female cm intercept: −78.387 + (97.684 − 163.205) × log10(2.54) ≈ −78.387 − 26.52 = −104.91
    const hipVal = hip ?? 0;
    bodyFatPct =
      163.205 * Math.log10(waist + hipVal - neck) -
      97.684 * Math.log10(height) -
      104.911;
  }

  // Clamp to [1, 70]
  bodyFatPct = Math.max(1, Math.min(70, bodyFatPct));
  bodyFatPct = round2(bodyFatPct);

  const fatMass = round2(weight * (bodyFatPct / 100));
  const leanMass = round2(weight - fatMass);
  const category = categorise(bodyFatPct, gender);

  return { bodyFatPct, fatMass, leanMass, category };
}
