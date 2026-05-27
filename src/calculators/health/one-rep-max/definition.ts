import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "one-rep-max",
  category: "health",
  priority: "P1",
  icon: "dumbbell",
  inputs: [
    { id: "weight", type: { kind: "number", min: 1, max: 2000, step: 0.5, unit: "kg" }, defaultValue: 100, required: true },
    { id: "reps", type: { kind: "number", min: 1, max: 30, step: 1, integer: true, unit: "count" }, defaultValue: 5, required: true },
  ],
  outputs: [
    { id: "average", format: "number", precision: 1, unit: "kg", highlight: true },
    { id: "epley", format: "number", precision: 1, unit: "kg" },
    { id: "brzycki", format: "number", precision: 1, unit: "kg" },
    { id: "weightAt90", format: "number", precision: 1, unit: "kg" },
    { id: "weightAt80", format: "number", precision: 1, unit: "kg" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{1RM}_{Epley} = w\\left(1 + \\frac{r}{30}\\right)",
    references: [
      { title: "Estimating one-rep max — Epley & Brzycki formulas", url: "https://en.wikipedia.org/wiki/One-repetition_maximum", authority: "Wikipedia" },
    ],
    disclaimer: "Estimates only. Predicted 1RM becomes less accurate above ~10 reps. Always use proper form, warm-ups and a spotter when testing maximal lifts.",
  },
  related: ["calories-burned", "macros", "body-fat"],
  tags: ["one rep max", "1rm calculator", "1rm", "max lift", "epley", "brzycki", "strength"],
});
