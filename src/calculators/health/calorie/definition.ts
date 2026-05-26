import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    gender: z.enum(["male", "female"]),
    weight: z.number().positive(),
    height: z.number().positive(),
    age: z.number().positive(),
    activity: z.enum(["sedentary", "light", "moderate", "active", "veryActive"]),
    goal: z.enum(["maintain", "lose", "lose-fast", "gain", "gain-fast"]),
  })
  .superRefine((data, ctx) => {
    if (data.weight < 1 || data.weight > 300) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["weight"], message: "Weight 1–300 kg" });
    }
    if (data.height < 50 || data.height > 250) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["height"], message: "Height 50–250 cm" });
    }
    if (data.age < 1 || data.age > 120) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["age"], message: "Age 1–120 years" });
    }
  });

export default defineCalculator({
  slug: "calorie",
  category: "health",
  priority: "P0",
  icon: "utensils",
  inputs: [
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
      id: "weight",
      type: { kind: "number", min: 1, max: 300, step: 0.1, unit: "kg" },
      defaultValue: 70,
      required: true,
    },
    {
      id: "height",
      type: { kind: "number", min: 50, max: 250, step: 1, unit: "cm" },
      defaultValue: 170,
      required: true,
    },
    {
      id: "age",
      type: { kind: "number", min: 1, max: 120, step: 1, integer: true },
      defaultValue: 30,
      required: true,
    },
    {
      id: "activity",
      type: {
        kind: "select",
        options: [
          { value: "sedentary", i18nKey: "sedentary" },
          { value: "light", i18nKey: "light" },
          { value: "moderate", i18nKey: "moderate" },
          { value: "active", i18nKey: "active" },
          { value: "veryActive", i18nKey: "veryActive" },
        ],
      },
      defaultValue: "moderate",
      required: true,
    },
    {
      id: "goal",
      type: {
        kind: "select",
        options: [
          { value: "maintain", i18nKey: "maintain" },
          { value: "lose", i18nKey: "lose" },
          { value: "lose-fast", i18nKey: "loseFast" },
          { value: "gain", i18nKey: "gain" },
          { value: "gain-fast", i18nKey: "gainFast" },
        ],
      },
      defaultValue: "maintain",
      required: true,
    },
  ],
  outputs: [
    {
      id: "tdee",
      format: "number",
      precision: 0,
      unit: "kcal",
      highlight: true,
    },
    {
      id: "target",
      format: "number",
      precision: 0,
      unit: "kcal",
    },
    {
      id: "deficit",
      format: "number",
      precision: 0,
      unit: "kcal",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{TDEE} = \\text{BMR} \\times \\text{activity factor}",
    references: [
      {
        title: "Academy of Nutrition and Dietetics — Calorie Counts",
        url: "https://www.eatright.org/",
        authority: "Academy of Nutrition and Dietetics",
      },
      {
        title: "Mifflin MD et al. (1990). A new predictive equation for resting energy expenditure.",
        url: "https://doi.org/10.1093/ajcn/51.2.241",
        authority: "American Journal of Clinical Nutrition",
      },
    ],
    disclaimer:
      "Calorie needs are estimates. Individual metabolism varies. Consult a registered dietitian for personalised guidance, especially for weight loss goals below 1200 kcal/day.",
  },
  related: ["bmr", "bmi", "ideal-weight"],
  tags: ["health", "calories", "tdee", "nutrition", "weight", "diet", "fitness"],
});
