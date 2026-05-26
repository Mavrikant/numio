import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "waist-hip-ratio",
  category: "health",
  priority: "P1",
  icon: "ruler",
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
      id: "waist",
      type: {
        kind: "number",
        min: 40,
        max: 250,
        step: 0.1,
        unit: "cm",
      },
      defaultValue: 80,
      required: true,
    },
    {
      id: "hip",
      type: {
        kind: "number",
        min: 50,
        max: 300,
        step: 0.1,
        unit: "cm",
      },
      defaultValue: 95,
      required: true,
    },
  ],
  outputs: [
    {
      id: "whr",
      format: "number",
      precision: 2,
      unit: "ratio",
      highlight: true,
    },
    {
      id: "riskCategory",
      format: "text",
    },
    {
      id: "waistCm",
      format: "number",
      precision: 1,
      unit: "cm",
    },
    {
      id: "centralObesityRisk",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{WHR} = \\frac{\\text{Waist circumference}}{\\text{Hip circumference}}",
    references: [
      {
        title: "WHO Technical Report Series 894 — Obesity: Preventing and Managing the Global Epidemic",
        url: "https://www.who.int/europe/publications/i/item/9789289037501",
        authority: "World Health Organization (WHO)",
      },
      {
        title: "Waist circumference and waist-hip ratio: report of a WHO expert consultation",
        url: "https://apps.who.int/iris/handle/10665/44583",
        authority: "World Health Organization (WHO)",
      },
    ],
    disclaimer:
      "WHR is a screening tool and should not replace clinical assessment. Measurements may vary with technique.",
  },
  related: ["bmi", "body-fat-percentage", "lean-body-mass"],
  tags: ["waist-hip ratio", "WHR", "central obesity", "abdominal fat", "cardiovascular risk"],
});
