import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "waist-to-height-ratio",
  category: "health",
  priority: "P2",
  icon: "ruler",
  inputs: [
    { id: "waist", type: { kind: "number", min: 30, max: 300, step: 0.5, unit: "cm" }, defaultValue: 85, required: true },
    { id: "height", type: { kind: "number", min: 50, max: 260, step: 0.5, unit: "cm" }, defaultValue: 175, required: true },
  ],
  outputs: [
    { id: "ratio", format: "number", precision: 3, unit: "ratio", highlight: true },
    { id: "percentOfHeight", format: "percent", precision: 1 },
    { id: "healthyWaistMax", format: "number", precision: 1, unit: "cm" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{WHtR} = \\frac{\\text{waist}}{\\text{height}}",
    references: [
      { title: "Waist-to-height ratio", url: "https://en.wikipedia.org/wiki/Waist-to-height_ratio", authority: "Wikipedia" },
    ],
    disclaimer: "A screening indicator only, not a diagnosis. The common guideline is to keep waist circumference under half your height (ratio < 0.5). Measure your waist at the navel, relaxed.",
  },
  related: ["waist-hip-ratio", "bmi", "body-fat"],
  tags: ["waist to height ratio", "whtr", "central obesity", "waist height", "body shape"],
});
