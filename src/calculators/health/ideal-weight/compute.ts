import { z } from "zod";

export const inputSchema = z
  .object({
    gender: z.enum(["male", "female"]),
    height: z.number().positive(),
    unit: z.enum(["metric", "imperial"]),
  })
  .superRefine((data, ctx) => {
    if (data.unit === "metric") {
      if (data.height < 50 || data.height > 250) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 50–250 cm" });
      }
    } else {
      // imperial: height in inches
      if (data.height < 20 || data.height > 100) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 20–100 inches" });
      }
    }
  });

export type IdealWeightInputs = z.infer<typeof inputSchema>;

export interface IdealWeightResult extends Record<string, unknown> {
  readonly devine: number;
  readonly robinson: number;
  readonly miller: number;
  readonly hamwi: number;
  /** Inches above 5 feet used in all formulas */
  readonly inchesOver5ft: number;
}

/**
 * All 4 formulas use "inches over 5 feet" (152.4 cm) as base.
 * For heights below 5 ft, inchesOver5ft = 0 (minimum IBW = base constant).
 *
 * Reference: Pai MP, Hall PD (1995). Ann Pharmacother.
 * doi:10.1177/106002809502900106
 */

/** Devine (1974) — most cited in pharmacology/critical care */
function devine(inchesOver: number, gender: "male" | "female"): number {
  return gender === "male"
    ? 50 + 2.3 * inchesOver
    : 45.5 + 2.3 * inchesOver;
}

/** Robinson (1983) */
function robinson(inchesOver: number, gender: "male" | "female"): number {
  return gender === "male"
    ? 52 + 1.9 * inchesOver
    : 49 + 1.7 * inchesOver;
}

/** Miller (1983) */
function miller(inchesOver: number, gender: "male" | "female"): number {
  return gender === "male"
    ? 56.2 + 1.41 * inchesOver
    : 53.1 + 1.36 * inchesOver;
}

/** Hamwi (1964) */
function hamwi(inchesOver: number, gender: "male" | "female"): number {
  return gender === "male"
    ? 48.0 + 2.7 * inchesOver
    : 45.5 + 2.2 * inchesOver;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function compute(inputs: IdealWeightInputs): IdealWeightResult {
  const { gender, unit } = inputs;

  // Convert to inches
  const totalInches: number =
    unit === "metric" ? inputs.height / 2.54 : inputs.height;

  // Inches over 5 feet (60 inches = 152.4 cm)
  const inchesOver5ft = Math.max(0, totalInches - 60);

  return {
    devine: round2(devine(inchesOver5ft, gender)),
    robinson: round2(robinson(inchesOver5ft, gender)),
    miller: round2(miller(inchesOver5ft, gender)),
    hamwi: round2(hamwi(inchesOver5ft, gender)),
    inchesOver5ft: round2(inchesOver5ft),
  };
}
