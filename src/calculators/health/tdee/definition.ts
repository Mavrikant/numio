import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  weight: z.number().positive().min(20).max(300),
  height: z.number().positive().min(100).max(250),
  age: z.number().int().min(15).max(100),
  gender: z.enum(["male", "female"]),
  activityLevel: z.enum([
    "sedentary",
    "lightlyActive",
    "moderatelyActive",
    "veryActive",
    "extraActive",
    "athlete",
  ]),
});

export default defineCalculator({
  slug: "tdee",
  category: "health",
  priority: "P1",
  icon: "flame",
  inputs: [
    {
      id: "weight",
      type: { kind: "number", min: 20, max: 300, step: 0.5, unit: "kg" },
      defaultValue: 70,
      required: true,
    },
    {
      id: "height",
      type: { kind: "number", min: 100, max: 250, step: 1, unit: "cm" },
      defaultValue: 170,
      required: true,
    },
    {
      id: "age",
      type: { kind: "number", min: 15, max: 100, step: 1, unit: "year", integer: true },
      defaultValue: 30,
      required: true,
    },
    {
      id: "gender",
      type: {
        kind: "select",
        options: [
          { value: "male", i18nKey: "male" },
          { value: "female", i18nKey: "female" },
        ],
      },
      defaultValue: "male",
      required: true,
    },
    {
      id: "activityLevel",
      type: {
        kind: "select",
        options: [
          { value: "sedentary", i18nKey: "sedentary" },
          { value: "lightlyActive", i18nKey: "lightlyActive" },
          { value: "moderatelyActive", i18nKey: "moderatelyActive" },
          { value: "veryActive", i18nKey: "veryActive" },
          { value: "extraActive", i18nKey: "extraActive" },
          { value: "athlete", i18nKey: "athlete" },
        ],
      },
      defaultValue: "moderatelyActive",
      required: true,
    },
  ],
  outputs: [
    { id: "bmr", format: "number", precision: 0, unit: "kcal" },
    { id: "tdee", format: "number", precision: 0, unit: "kcal", highlight: true },
    { id: "proteinTarget", format: "number", precision: 0 },
    { id: "carbTarget", format: "number", precision: 0 },
    { id: "fatTarget", format: "number", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{BMR}_{\\text{male}} = 10w + 6.25h - 5a + 5 \\quad \\text{TDEE} = \\text{BMR} \\times \\text{PAL}",
    references: [
      {
        title: "A new predictive equation for resting energy expenditure in healthy individuals",
        url: "https://doi.org/10.1093/ajcn/51.2.241",
        authority: "Mifflin MD, St Jeor ST et al. (1990) — American Journal of Clinical Nutrition",
      },
      {
        title: "Energy requirements of adults",
        url: "https://www.fao.org/3/y5686e/y5686e.pdf",
        authority: "FAO/WHO/UNU Expert Consultation (2001)",
      },
    ],
    disclaimer:
      "TDEE estimates are population-level averages. Individual metabolic rates can vary by 10–20%. Use as a starting point and adjust based on real-world weight trends.",
  },
  related: ["bmi", "heart-rate", "blood-pressure"],
  tags: ["TDEE", "calories", "Mifflin-St Jeor", "BMR", "nutrition", "weight management"],
});
