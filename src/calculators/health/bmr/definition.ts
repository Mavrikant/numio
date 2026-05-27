import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    formula: z.enum(["mifflin", "harris"]),
    gender: z.enum(["male", "female"]),
    weight: z.number().positive(),
    height: z.number().positive(),
    age: z.number().positive(),
  })
  .superRefine((data, ctx) => {
    if (data.weight < 1 || data.weight > 300) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["weight"],
        message: "Weight must be between 1 and 300 kg",
      });
    }
    if (data.height < 50 || data.height > 250) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["height"],
        message: "Height must be between 50 and 250 cm",
      });
    }
    if (data.age < 1 || data.age > 120) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["age"],
        message: "Age must be between 1 and 120 years",
      });
    }
  });

export default defineCalculator({
  slug: "bmr",
  category: "health",
  priority: "P0",
  icon: "flame",
  inputs: [
    {
      id: "formula",
      type: {
        kind: "select",
        options: [
          { value: "mifflin", i18nKey: "mifflin" },
          { value: "harris", i18nKey: "harris" },
        ],
      },
      defaultValue: "mifflin",
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
      id: "weight",
      type: {
        kind: "number",
        min: 1,
        max: 300,
        step: 0.1,
        unit: "kg",
      },
      defaultValue: 70,
      required: true,
    },
    {
      id: "height",
      type: {
        kind: "number",
        min: 50,
        max: 250,
        step: 1,
        unit: "cm",
      },
      defaultValue: 170,
      required: true,
    },
    {
      id: "age",
      type: {
        kind: "number",
        min: 1,
        max: 120,
        step: 1,
        integer: true,
      },
      defaultValue: 30,
      required: true,
    },
  ],
  outputs: [
    {
      id: "bmr",
      format: "number",
      precision: 0,
      unit: "kcal",
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex:
      "\\text{BMR (Mifflin)} = 10w + 6.25h - 5a + s \\quad (s=+5\\text{ male},\\ -161\\text{ female})",
    references: [
      {
        title: "Mifflin MD et al. (1990). A new predictive equation for resting energy expenditure in healthy individuals.",
        url: "https://doi.org/10.1093/ajcn/51.2.241",
        authority: "American Journal of Clinical Nutrition",
      },
      {
        title: "Roza AM, Shizgal HM (1984). The Harris Benedict equation reevaluated.",
        url: "https://doi.org/10.1093/ajcn/40.1.168",
        authority: "American Journal of Clinical Nutrition",
      },
    ],
    disclaimer:
      "BMR is an estimate of resting energy expenditure. Individual values may vary due to genetics, body composition, and health status. Consult a registered dietitian for personalised guidance.",
  },
  related: ["calorie", "bmi", "ideal-weight"],
  tags: ["health", "bmr", "metabolism", "calories", "nutrition", "fitness"],
});
