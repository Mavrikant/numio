import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "lean-body-mass",
  category: "health",
  priority: "P1",
  icon: "dumbbell",
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
      id: "formula",
      type: {
        kind: "select",
        options: [
          { value: "boer", i18nKey: "boer" },
          { value: "james", i18nKey: "james" },
          { value: "hume", i18nKey: "hume" },
        ],
      },
      defaultValue: "boer",
      required: true,
    },
  ],
  outputs: [
    {
      id: "lbm",
      format: "number",
      precision: 2,
      unit: "kg",
      highlight: true,
    },
    {
      id: "bodyFatMass",
      format: "number",
      precision: 2,
      unit: "kg",
    },
    {
      id: "bodyFatPct",
      format: "percent",
      precision: 1,
    },
    {
      id: "lbmLb",
      format: "number",
      precision: 2,
      unit: "lb",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{LBM (Boer, male)} = 0.407 \\times W + 0.267 \\times H - 19.2",
    references: [
      {
        title: "Boer P. (1984). Estimated lean body mass as an index for normalization of body fluid volumes in humans. Crit Care Med.",
        url: "https://doi.org/10.1097/00003246-198403000-00006",
        authority: "Critical Care Medicine",
      },
      {
        title: "Hume R. (1966). Prediction of lean body mass from height and weight. J Clin Pathol.",
        url: "https://doi.org/10.1136/jcp.19.4.389",
        authority: "Journal of Clinical Pathology",
      },
      {
        title: "James WPT. (1976). Research on Obesity. HMSO, London.",
        authority: "HMSO",
      },
    ],
    disclaimer:
      "LBM formulas are population-level estimates. Individual body composition may differ. For precise measurements, use DXA or hydrostatic weighing.",
  },
  related: ["bmi", "body-fat-percentage", "ideal-weight"],
  tags: ["lean body mass", "body composition", "fitness", "muscle", "health"],
});
