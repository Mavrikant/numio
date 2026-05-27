import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "flow-rate",
  category: "engineering",
  priority: "P1",
  icon: "droplet",
  inputs: [
    {
      id: "flowRateM3h",
      type: { kind: "number", min: 0.01, max: 100000, step: 0.1, unit: "m" },
      defaultValue: 10,
      required: true,
    },
    {
      id: "diameterMm",
      type: { kind: "number", min: 1, max: 5000, step: 0.1, unit: "mm" },
      defaultValue: 50,
      required: true,
    },
    {
      id: "pipeLength",
      type: { kind: "number", min: 0, max: 10000, step: 1, unit: "m" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "pipeType",
      type: {
        kind: "select",
        options: [
          { value: "smooth_pvc", i18nKey: "smooth_pvc" },
          { value: "commercial_steel", i18nKey: "commercial_steel" },
          { value: "galvanized_iron", i18nKey: "galvanized_iron" },
          { value: "concrete", i18nKey: "concrete" },
        ],
      },
      defaultValue: "commercial_steel",
      required: true,
    },
    {
      id: "fluidType",
      type: {
        kind: "select",
        options: [
          { value: "water", i18nKey: "water" },
          { value: "oil", i18nKey: "oil" },
        ],
      },
      defaultValue: "water",
      required: true,
    },
  ],
  outputs: [
    {
      id: "velocityMs",
      format: "number",
      precision: 3,
      unit: "m",
      highlight: true,
    },
    {
      id: "flowRateM3s",
      format: "number",
      precision: 6,
    },
    {
      id: "flowRateLs",
      format: "number",
      precision: 2,
    },
    {
      id: "reynoldsNumber",
      format: "number",
      precision: 0,
    },
    {
      id: "flowRegime",
      format: "text",
    },
    {
      id: "frictionFactor",
      format: "number",
      precision: 4,
    },
    {
      id: "headLossM",
      format: "number",
      precision: 3,
      unit: "m",
    },
    {
      id: "headLossPa",
      format: "number",
      precision: 0,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "v = \\frac{Q}{A}, \\quad \\text{Re} = \\frac{vD}{\\nu}, \\quad h_f = f \\frac{L}{D} \\frac{v^2}{2g}",
    references: [
      {
        title: "Darcy-Weisbach Equation — Fluid Mechanics",
        url: "https://en.wikipedia.org/wiki/Darcy%E2%80%93Weisbach_equation",
        authority: "Wikipedia",
      },
      {
        title: "ASHRAE Handbook — Fundamentals (SI)",
        url: "https://www.ashrae.org/",
        authority: "American Society of Heating, Refrigerating and Air-Conditioning Engineers",
      },
    ],
    disclaimer:
      "Head loss calculations assume steady-state turbulent or laminar flow. Actual friction factors may vary with pipe surface condition, age, and fouling. Always verify with field measurements and engineering standards for critical applications.",
  },
  related: ["square-footage", "concrete"],
  tags: ["flow rate", "pipe flow", "Darcy-Weisbach", "Reynolds number", "head loss", "hydraulics"],
});
