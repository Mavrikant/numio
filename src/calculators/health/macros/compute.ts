// Reference: ISSN Position Stand — Nutrient Timing
// Kerksick CM et al. (2017) doi:10.1186/s12970-017-0189-4
// https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566799/
//
// Protein: 4 kcal/g
// Fat:     9 kcal/g
// Carbs:   4 kcal/g
//
// Default macro splits by goal:
//   cutting:     protein 40%, fat 30%, carbs 30%
//   maintenance: protein 30%, fat 30%, carbs 40%
//   bulking:     protein 25%, fat 25%, carbs 50%

import { z } from "zod";

export const inputSchema = z
  .object({
    tdee: z.number().min(800).max(10000),
    goal: z.enum(["cutting", "maintenance", "bulking"]),
    proteinPct: z.number().min(10).max(60),
    fatPct: z.number().min(10).max(60),
  })
  .superRefine((data, ctx) => {
    if (data.proteinPct + data.fatPct > 90) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["proteinPct"],
        message: "Protein % + Fat % must not exceed 90 (carbs must be at least 10%)",
      });
    }
  });

export type MacrosInputs = z.infer<typeof inputSchema>;

export interface MacrosResult extends Record<string, unknown> {
  readonly proteinG: number;
  readonly fatG: number;
  readonly carbsG: number;
  readonly proteinKcal: number;
  readonly fatKcal: number;
  readonly carbsKcal: number;
  readonly totalKcal: number;
}

const PROTEIN_KCAL_PER_G = 4;
const FAT_KCAL_PER_G = 9;
const CARBS_KCAL_PER_G = 4;

export function compute(inputs: MacrosInputs): MacrosResult {
  const { tdee, proteinPct, fatPct } = inputs;

  const carbsPct = 100 - proteinPct - fatPct;

  const proteinKcal = (proteinPct / 100) * tdee;
  const fatKcal = (fatPct / 100) * tdee;
  const carbsKcal = (carbsPct / 100) * tdee;

  const proteinG = proteinKcal / PROTEIN_KCAL_PER_G;
  const fatG = fatKcal / FAT_KCAL_PER_G;
  const carbsG = carbsKcal / CARBS_KCAL_PER_G;

  const totalKcal = proteinKcal + fatKcal + carbsKcal;

  return {
    proteinG: Math.round(proteinG * 10) / 10,
    fatG: Math.round(fatG * 10) / 10,
    carbsG: Math.round(carbsG * 10) / 10,
    proteinKcal: Math.round(proteinKcal),
    fatKcal: Math.round(fatKcal),
    carbsKcal: Math.round(carbsKcal),
    totalKcal: Math.round(totalKcal),
  };
}
