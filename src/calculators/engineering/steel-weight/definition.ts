import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "steel-weight",
  category: "engineering",
  priority: "P2",
  icon: "bars",
  inputs: [
    {
      id: "type",
      type: {
        kind: "select",
        options: [
          { value: "bar", i18nKey: "bar" },
          { value: "rebar", i18nKey: "rebar" },
          { value: "pipe", i18nKey: "pipe" },
          { value: "plate", i18nKey: "plate" },
        ],
      },
      defaultValue: "rebar",
      required: true,
    },
    {
      id: "material",
      type: {
        kind: "select",
        options: [
          { value: "steel", i18nKey: "steel" },
          { value: "aluminum", i18nKey: "aluminum" },
          { value: "copper", i18nKey: "copper" },
        ],
      },
      defaultValue: "steel",
      required: true,
    },
    {
      id: "rebarDiameter",
      type: { kind: "number", min: 1, max: 100, step: 0.1, unit: "mm" },
      defaultValue: 16,
      required: false,
    },
    {
      id: "pipeOuterDia",
      type: { kind: "number", min: 1, max: 500, step: 0.1, unit: "mm" },
      defaultValue: 50,
      required: false,
    },
    {
      id: "pipeWallThickness",
      type: { kind: "number", min: 0.1, max: 50, step: 0.1, unit: "mm" },
      defaultValue: 3,
      required: false,
    },
    {
      id: "plateWidth",
      type: { kind: "number", min: 1, max: 10000, step: 1, unit: "mm" },
      defaultValue: 100,
      required: false,
    },
    {
      id: "plateHeight",
      type: { kind: "number", min: 1, max: 10000, step: 1, unit: "mm" },
      defaultValue: 1,
      required: false,
    },
    {
      id: "plateThickness",
      type: { kind: "number", min: 0.1, max: 500, step: 0.1, unit: "mm" },
      defaultValue: 10,
      required: false,
    },
    {
      id: "lengthM",
      type: { kind: "number", min: 0.01, max: 100, step: 0.1, unit: "m" },
      defaultValue: 6,
      required: true,
    },
    {
      id: "quantity",
      type: { kind: "number", min: 1, max: 10000, step: 1, integer: true, unit: "count" },
      defaultValue: 1,
      required: true,
    },
  ],
  outputs: [
    {
      id: "weightKgPerMeter",
      format: "number",
      precision: 3,
      unit: "kg",
      highlight: true,
    },
    {
      id: "totalWeightKg",
      format: "number",
      precision: 2,
      unit: "kg",
    },
    {
      id: "totalWeightLb",
      format: "number",
      precision: 2,
    },
    {
      id: "materialDensity",
      format: "number",
      precision: 0,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "W = A \\times L \\times \\rho, \\quad A = \\pi r^2 \\text{ (bar)}, \\quad A = \\pi (R_{o}^2 - R_{i}^2) \\text{ (pipe)}",
    references: [
      {
        title: "IS 1786:2008 - High Strength Deformed Steel Bars and Wires",
        url: "https://www.bis.gov.in/",
        authority: "Bureau of Indian Standards",
      },
      {
        title: "EN 10080 - Steel for reinforcement of concrete",
        url: "https://www.en-standard.eu/",
        authority: "European Committee for Standardization",
      },
    ],
    disclaimer:
      "Calculated weights are theoretical based on nominal dimensions and assumed material densities (steel 7850 kg/m³, aluminum 2700 kg/m³, copper 8960 kg/m³). Actual weights may vary due to manufacturing tolerances and material composition. Always verify with certified weight tables.",
  },
  related: ["concrete", "beam-deflection"],
  tags: ["steel", "weight", "rebar", "pipe", "plate", "material", "construction"],
});
