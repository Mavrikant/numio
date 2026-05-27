import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  currentWeight: z.number().min(20).max(500),
  targetWeight: z.number().min(20).max(500),
  unit: z.enum(["metric", "imperial"]),
  dailyCalorieDeficit: z.number().min(50).max(2000),
});

export default defineCalculator({
  slug: "calorie-deficit",
  category: "health",
  priority: "P1",
  icon: "scale",
  inputs: [
    {
      id: "currentWeight",
      type: { kind: "number", min: 20, max: 500, step: 0.5, unit: "kg" },
      defaultValue: 80,
      required: true,
    },
    {
      id: "targetWeight",
      type: { kind: "number", min: 20, max: 500, step: 0.5, unit: "kg" },
      defaultValue: 70,
      required: true,
    },
    {
      id: "unit",
      type: {
        kind: "select",
        options: [
          { value: "metric", i18nKey: "metric" },
          { value: "imperial", i18nKey: "imperial" },
        ],
      },
      defaultValue: "metric",
      required: true,
    },
    {
      id: "dailyCalorieDeficit",
      type: { kind: "number", min: 50, max: 2000, step: 50, unit: "kcal" },
      defaultValue: 500,
      required: true,
    },
  ],
  outputs: [
    {
      id: "weightToLoseKg",
      format: "number",
      precision: 2,
      unit: "kg",
      highlight: true,
    },
    {
      id: "weeklyDeficit",
      format: "number",
      precision: 0,
      unit: "kcal",
    },
    {
      id: "weeksToGoal",
      format: "number",
      precision: 0,
    },
    {
      id: "monthsToGoal",
      format: "number",
      precision: 1,
    },
    {
      id: "weeklyLossKg",
      format: "number",
      precision: 3,
      unit: "kg",
    },
    {
      id: "totalCalorieDeficit",
      format: "number",
      precision: 0,
      unit: "kcal",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Weeks to Goal} = \\frac{\\text{Weight to Lose (kg)} \\times 7700}{\\text{Daily Deficit (kcal)} \\times 7}",
    references: [
      {
        title: "Hall KD et al. (2012). Quantification of the effect of energy imbalance on bodyweight.",
        url: "https://doi.org/10.1016/S0140-6736(11)60812-X",
        authority: "The Lancet",
      },
      {
        title: "Body Weight Planner",
        url: "https://www.niddk.nih.gov/bwp",
        authority: "National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK)",
      },
    ],
    accuracyNote:
      "The 7,700 kcal/kg rule is a clinical average. Actual results vary with body composition, metabolic adaptation, and individual factors.",
  },
  related: ["bmr", "macros", "bmi"],
  tags: ["health", "weight-loss", "calorie", "deficit", "fat-loss"],
});
