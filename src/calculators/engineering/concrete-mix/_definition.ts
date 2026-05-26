import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "concrete-mix",
  category: "engineering",
  priority: "P1",
  icon: "building",
  inputs: [
    {
      id: "mixGrade",
      type: {
        kind: "select",
        options: [
          { value: "M10", i18nKey: "M10" },
          { value: "M15", i18nKey: "M15" },
          { value: "M20", i18nKey: "M20" },
          { value: "M25", i18nKey: "M25" },
          { value: "M30", i18nKey: "M30" },
          { value: "custom", i18nKey: "custom" },
        ],
      },
      defaultValue: "M20",
      required: true,
    },
    {
      id: "volumeM3",
      type: { kind: "number", min: 0.01, max: 10000, step: 0.1, unit: "m3" },
      defaultValue: 1,
      required: true,
    },
    {
      id: "cementParts",
      type: { kind: "number", min: 1, max: 10, step: 0.5 },
      defaultValue: 1,
      required: false,
    },
    {
      id: "sandParts",
      type: { kind: "number", min: 0.5, max: 10, step: 0.5 },
      defaultValue: 2,
      required: false,
    },
    {
      id: "aggregateParts",
      type: { kind: "number", min: 0.5, max: 20, step: 0.5 },
      defaultValue: 4,
      required: false,
    },
    {
      id: "waterCementRatio",
      type: { kind: "number", min: 0.3, max: 0.8, step: 0.01, unit: "ratio" },
      defaultValue: 0.5,
      required: false,
    },
  ],
  outputs: [
    {
      id: "cementKg",
      format: "number",
      precision: 1,
      unit: "kg",
      highlight: true,
    },
    {
      id: "sandKg",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "aggregateKg",
      format: "number",
      precision: 1,
      unit: "kg",
    },
    {
      id: "waterLiters",
      format: "number",
      precision: 1,
    },
    {
      id: "cementBags",
      format: "number",
      precision: 2,
    },
    {
      id: "totalDryVolumeM3",
      format: "number",
      precision: 3,
    },
    {
      id: "actualWaterCementRatio",
      format: "number",
      precision: 3,
      unit: "ratio",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "V_{dry} = V_{wet} \\times 1.54,\\quad m_{cement} = \\frac{C_{parts}}{C+S+A} \\times V_{dry} \\times \\rho_{cement}",
    references: [
      {
        title: "IS 456:2000 — Plain and Reinforced Concrete Code of Practice",
        url: "https://www.bis.gov.in/",
        authority: "Bureau of Indian Standards (BIS)",
      },
      {
        title: "ACI 211.1 — Standard Practice for Selecting Proportions for Normal Concrete",
        url: "https://www.concrete.org/",
        authority: "American Concrete Institute (ACI)",
      },
    ],
    disclaimer:
      "Material quantities assume standard bulk densities (cement 1440 kg/m³, sand 1600 kg/m³, aggregate 1500 kg/m³). Actual quantities may vary based on material moisture content and gradation. Always verify with a structural engineer for load-bearing applications.",
  },
  related: ["square-footage", "wire-gauge", "ohms-law"],
  tags: ["concrete", "cement", "sand", "aggregate", "mix ratio", "construction", "civil engineering"],
});
