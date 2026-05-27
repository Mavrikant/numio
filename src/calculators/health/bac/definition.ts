import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  drinks: z.number().min(0).max(30),
  weightKg: z.number().min(30).max(300),
  sex: z.enum(["male", "female"]),
  hoursElapsed: z.number().min(0).max(24),
});

export default defineCalculator({
  slug: "bac",
  category: "health",
  priority: "P1",
  icon: "wine",
  inputs: [
    {
      id: "drinks",
      type: { kind: "number", min: 0, max: 30, step: 0.5 },
      defaultValue: 2,
      required: true,
    },
    {
      id: "weightKg",
      type: { kind: "number", min: 30, max: 300, step: 0.5, unit: "kg" },
      defaultValue: 70,
      required: true,
    },
    {
      id: "sex",
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
      id: "hoursElapsed",
      type: { kind: "number", min: 0, max: 24, step: 0.25, unit: "hour" },
      defaultValue: 1,
      required: true,
    },
  ],
  outputs: [
    {
      id: "bac",
      format: "number",
      precision: 3,
      highlight: true,
    },
    {
      id: "hoursUntilSober",
      format: "number",
      precision: 1,
      unit: "hour",
    },
    {
      id: "isLegal",
      format: "text",
    },
    {
      id: "isDangerous",
      format: "text",
    },
    {
      id: "category",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{BAC} = \\frac{\\text{alcohol (g)}}{\\text{weight (kg)} \\times r \\times 1000} \\times 100 - \\text{elimination rate} \\times t",
    references: [
      {
        title: "Widmark EMP (1932). Die theoretischen Grundlagen und die praktische Verwendbarkeit der gerichtlich-medizinischen Alkoholbestimmung.",
        authority: "Urban & Schwarzenberg",
      },
      {
        title: "Alcohol Facts and Statistics",
        url: "https://www.niaaa.nih.gov/publications/brochures-and-fact-sheets/alcohol-facts-and-statistics",
        authority: "National Institute on Alcohol Abuse and Alcoholism (NIAAA)",
      },
    ],
    disclaimer:
      "This calculator provides an educational estimate only. Never use it to determine fitness to drive. Always check local laws regarding blood alcohol limits.",
  },
  related: ["bmr", "water-intake"],
  tags: ["health", "alcohol", "bac", "widmark", "driving"],
});
