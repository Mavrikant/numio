import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  weight: z.number().min(1).max(300),
  activityLevel: z.enum(["sedentary", "light", "moderate", "active", "very_active"]),
  climate: z.enum(["temperate", "hot", "very_hot"]),
  isPregnant: z.boolean(),
  isBreastfeeding: z.boolean(),
});

export default defineCalculator({
  slug: "water-intake",
  category: "health",
  priority: "P1",
  icon: "droplets",
  inputs: [
    {
      id: "weight",
      type: { kind: "number", min: 1, max: 300, step: 0.5, unit: "kg" },
      defaultValue: 70,
      required: true,
    },
    {
      id: "activityLevel",
      type: {
        kind: "select",
        options: [
          { value: "sedentary", i18nKey: "sedentary" },
          { value: "light", i18nKey: "light" },
          { value: "moderate", i18nKey: "moderate" },
          { value: "active", i18nKey: "active" },
          { value: "very_active", i18nKey: "very_active" },
        ],
      },
      defaultValue: "moderate",
      required: true,
    },
    {
      id: "climate",
      type: {
        kind: "select",
        options: [
          { value: "temperate", i18nKey: "temperate" },
          { value: "hot", i18nKey: "hot" },
          { value: "very_hot", i18nKey: "very_hot" },
        ],
      },
      defaultValue: "temperate",
      required: true,
    },
    {
      id: "isPregnant",
      type: { kind: "toggle" },
      defaultValue: false,
      required: false,
    },
    {
      id: "isBreastfeeding",
      type: { kind: "toggle" },
      defaultValue: false,
      required: false,
    },
  ],
  outputs: [
    { id: "dailyWaterMl", format: "number", precision: 0, unit: "ml", highlight: true },
    { id: "dailyWaterL", format: "number", precision: 2, unit: "l" },
    { id: "dailyWaterOz", format: "number", precision: 1, unit: "floz" },
    { id: "dailyWaterCups", format: "number", precision: 1 },
    { id: "glassesOf250ml", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Water (ml)} = \\text{weight (kg)} \\times 35 + \\text{activity bonus} + \\text{climate bonus} + \\text{pregnancy bonus}",
    references: [
      {
        title: "Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK541077/",
        authority: "National Academies of Sciences, Engineering, and Medicine",
      },
    ],
    disclaimer:
      "Individual water needs vary based on health conditions, medications, and other factors. Consult a healthcare professional for personalised hydration advice.",
  },
  related: ["bmr", "bmi", "calorie-deficit"],
  tags: ["health", "hydration", "water", "wellness", "nutrition"],
});
