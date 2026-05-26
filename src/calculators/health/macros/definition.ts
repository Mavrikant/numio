import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
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

export default defineCalculator({
  slug: "macros",
  category: "health",
  priority: "P1",
  icon: "pie-chart",
  inputs: [
    {
      id: "tdee",
      type: { kind: "number", min: 800, max: 10000, step: 50, unit: "kcal" },
      defaultValue: 2000,
      required: true,
    },
    {
      id: "goal",
      type: {
        kind: "select",
        options: [
          { value: "cutting", i18nKey: "cutting" },
          { value: "maintenance", i18nKey: "maintenance" },
          { value: "bulking", i18nKey: "bulking" },
        ],
      },
      defaultValue: "maintenance",
      required: true,
    },
    {
      id: "proteinPct",
      type: { kind: "number", min: 10, max: 60, step: 1, unit: "percent" },
      defaultValue: 30,
      required: true,
    },
    {
      id: "fatPct",
      type: { kind: "number", min: 10, max: 60, step: 1, unit: "percent" },
      defaultValue: 30,
      required: true,
    },
  ],
  outputs: [
    { id: "proteinG", format: "number", precision: 1, unit: "g", highlight: true },
    { id: "fatG", format: "number", precision: 1, unit: "g" },
    { id: "carbsG", format: "number", precision: 1, unit: "g" },
    { id: "proteinKcal", format: "number", precision: 0, unit: "kcal" },
    { id: "fatKcal", format: "number", precision: 0, unit: "kcal" },
    { id: "carbsKcal", format: "number", precision: 0, unit: "kcal" },
    { id: "totalKcal", format: "number", precision: 0, unit: "kcal" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Protein (g)} = \\frac{P\\% \\times \\text{TDEE}}{4}, \\quad \\text{Fat (g)} = \\frac{F\\% \\times \\text{TDEE}}{9}, \\quad \\text{Carbs (g)} = \\frac{C\\% \\times \\text{TDEE}}{4}",
    references: [
      {
        title: "International Society of Sports Nutrition Position Stand: Nutrient Timing",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6566799/",
        authority: "International Society of Sports Nutrition (ISSN)",
      },
    ],
  },
  related: ["bmr", "calorie-deficit", "water-intake"],
  tags: ["health", "nutrition", "macros", "protein", "diet", "fitness"],
});
