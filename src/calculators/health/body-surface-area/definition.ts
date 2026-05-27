import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "body-surface-area",
  category: "health",
  priority: "P2",
  icon: "ruler",
  inputs: [
    { id: "weight", type: { kind: "number", min: 1, max: 500, step: 0.1, unit: "kg" }, defaultValue: 70, required: true },
    { id: "height", type: { kind: "number", min: 30, max: 260, step: 0.5, unit: "cm" }, defaultValue: 175, required: true },
  ],
  outputs: [
    { id: "mosteller", format: "number", precision: 3, unit: "m2", highlight: true },
    { id: "duBois", format: "number", precision: 3, unit: "m2" },
    { id: "haycock", format: "number", precision: 3, unit: "m2" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{BSA}_{Mosteller} = \\sqrt{\\frac{h \\cdot w}{3600}}",
    references: [
      { title: "Body surface area — Mosteller, Du Bois, Haycock formulas", url: "https://en.wikipedia.org/wiki/Body_surface_area", authority: "Wikipedia" },
    ],
    disclaimer: "Estimates for general reference. Clinical use (e.g. chemotherapy dosing) must follow institutional protocols and professional judgement.",
  },
  related: ["bmi", "ideal-weight", "lean-body-mass"],
  tags: ["body surface area", "bsa calculator", "mosteller", "du bois", "haycock", "bsa"],
});
