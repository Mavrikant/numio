import { z } from "zod";

/**
 * GPA (grade point average) — credit-weighted mean of grade points.
 *
 *   GPA = Σ(gradePointᵢ · creditᵢ) / Σ creditᵢ
 *
 * Grade points are entered on whatever scale you use (commonly 0–4.0). Credits
 * are optional: leave them blank to weight every course equally. Inputs are
 * comma/space/newline-separated lists, parsed in compute so the calculator is
 * pure and list-length-agnostic.
 */
export const inputSchema = z.object({
  gradePoints: z.string().min(1),
  creditHours: z.string().default(""),
});

export type GpaInputs = z.infer<typeof inputSchema>;

export interface GpaResult extends Record<string, unknown> {
  readonly gpa: number;
  readonly totalCredits: number;
  readonly totalQualityPoints: number;
  readonly courseCount: number;
}

function parseList(raw: string): number[] {
  return raw
    .split(/[,;\n\t ]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

export function compute(inputs: GpaInputs): GpaResult {
  const points = parseList(inputs.gradePoints);
  let credits = parseList(inputs.creditHours);

  if (credits.length === 0) {
    credits = points.map(() => 1); // equal weighting
  }

  const n = Math.min(points.length, credits.length);
  let totalQualityPoints = 0;
  let totalCredits = 0;
  for (let i = 0; i < n; i++) {
    totalQualityPoints += points[i]! * credits[i]!;
    totalCredits += credits[i]!;
  }

  return {
    gpa: totalCredits > 0 ? totalQualityPoints / totalCredits : NaN,
    totalCredits,
    totalQualityPoints,
    courseCount: n,
  };
}
