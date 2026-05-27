import { z } from "zod";

export const inputSchema = z
  .object({
    totalCholesterol: z.number().positive(),
    hdl: z.number().positive(),
    triglycerides: z.number().positive(),
    // Optional direct LDL measurement. Pass 0 (or omit) to estimate via
    // the Friedewald equation. Any other value must lie in 30–400 mg/dL.
    ldl: z.number().nonnegative().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.totalCholesterol < 50 || data.totalCholesterol > 500) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["totalCholesterol"],
        message: "Total cholesterol must be between 50 and 500 mg/dL",
      });
    }
    if (data.hdl < 10 || data.hdl > 200) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["hdl"],
        message: "HDL must be between 10 and 200 mg/dL",
      });
    }
    if (data.triglycerides < 30 || data.triglycerides > 1000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["triglycerides"],
        message: "Triglycerides must be between 30 and 1000 mg/dL",
      });
    }
    if (
      data.ldl !== undefined &&
      data.ldl !== 0 &&
      (data.ldl < 30 || data.ldl > 400)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["ldl"],
        message: "LDL must be 0 (auto-compute) or between 30 and 400 mg/dL",
      });
    }
  });

export type CholesterolInputs = z.infer<typeof inputSchema>;

export type CholesterolCategory =
  | "optimal"
  | "near-optimal"
  | "borderline"
  | "high"
  | "very-high";

export interface CholesterolResult extends Record<string, unknown> {
  readonly ldlComputed: number;
  readonly totalHdlRatio: number;
  readonly ldlHdlRatio: number;
  readonly nonHdlCholesterol: number;
  readonly category: CholesterolCategory;
}

// NCEP ATP III LDL classification (mg/dL)
const LDL_OPTIMAL_MAX = 100;
const LDL_NEAR_OPTIMAL_MAX = 130;
const LDL_BORDERLINE_MAX = 160;
const LDL_HIGH_MAX = 190;

function classifyLdl(ldl: number): CholesterolCategory {
  if (ldl < LDL_OPTIMAL_MAX) return "optimal";
  if (ldl < LDL_NEAR_OPTIMAL_MAX) return "near-optimal";
  if (ldl < LDL_BORDERLINE_MAX) return "borderline";
  if (ldl < LDL_HIGH_MAX) return "high";
  return "very-high";
}

/**
 * Lipid panel evaluation.
 *
 * If LDL is not supplied, it is estimated using the Friedewald equation
 * (Friedewald WT, Levy RI, Fredrickson DS. 1972. Clin Chem 18:499–502):
 *   LDL = TC − HDL − TG/5  (valid for TG < 400 mg/dL)
 *
 * Classification thresholds follow NCEP ATP III and are consistent with
 * the 2018 AHA/ACC Cholesterol Clinical Practice Guideline.
 */
export function compute(inputs: CholesterolInputs): CholesterolResult {
  let ldl: number;
  // 0 (or undefined) means "estimate via Friedewald".
  if (inputs.ldl !== undefined && inputs.ldl > 0) {
    ldl = inputs.ldl;
  } else if (inputs.triglycerides < 400) {
    // Friedewald — only valid below 400 mg/dL triglycerides
    ldl = inputs.totalCholesterol - inputs.hdl - inputs.triglycerides / 5;
  } else {
    // Out of Friedewald range — fall back to a conservative direct subtraction
    // (non-HDL). Returning a negative or absurd value would be misleading; we
    // clamp at 0 to flag that a direct LDL measurement is needed.
    ldl = Math.max(0, inputs.totalCholesterol - inputs.hdl);
  }

  const totalHdlRatio = inputs.totalCholesterol / inputs.hdl;
  const ldlHdlRatio = ldl / inputs.hdl;
  const nonHdlCholesterol = inputs.totalCholesterol - inputs.hdl;
  const category = classifyLdl(ldl);

  return {
    ldlComputed: Math.round(ldl * 10) / 10,
    totalHdlRatio: Math.round(totalHdlRatio * 100) / 100,
    ldlHdlRatio: Math.round(ldlHdlRatio * 100) / 100,
    nonHdlCholesterol: Math.round(nonHdlCholesterol * 10) / 10,
    category,
  };
}
