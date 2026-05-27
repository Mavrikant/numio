import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "a1c-glucose-converter",
  category: "health",
  priority: "P2",
  icon: "droplet",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "a1c-to-glucose", i18nKey: "a1c-to-glucose" },
          { value: "glucose-to-a1c", i18nKey: "glucose-to-a1c" },
        ],
      },
      defaultValue: "a1c-to-glucose",
      required: true,
    },
    { id: "value", type: { kind: "number", min: 0.1, max: 1000, step: 0.1 }, defaultValue: 6.5, required: true },
  ],
  outputs: [
    { id: "a1cPercent", format: "number", precision: 1, unit: "percent", highlight: true },
    { id: "glucoseMgDl", format: "number", precision: 0 },
    { id: "glucoseMmol", format: "number", precision: 1 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{eAG}_{mg/dL} = 28.7 \\cdot \\text{A1C} - 46.7",
    references: [
      { title: "ADAG study — estimated average glucose & A1C", url: "https://diabetesjournals.org/care/article/31/8/1473/28589", authority: "Diabetes Care" },
    ],
    disclaimer: "Estimated average glucose is a population-based approximation and is not a substitute for a blood test or medical advice. Lab A1C and daily glucose readings can differ from these estimates.",
  },
  related: ["bmi", "cholesterol", "blood-pressure"],
  tags: ["a1c to glucose", "eag calculator", "hba1c converter", "average glucose", "a1c calculator"],
});
