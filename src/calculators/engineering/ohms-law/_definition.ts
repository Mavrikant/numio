import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "ohms-law",
  category: "engineering",
  priority: "P0",
  icon: "zap",
  inputs: [
    {
      id: "knownQty1",
      type: {
        kind: "select",
        options: [
          { value: "voltage", i18nKey: "voltage" },
          { value: "current", i18nKey: "current" },
          { value: "resistance", i18nKey: "resistance" },
          { value: "power", i18nKey: "power" },
        ],
      },
      defaultValue: "voltage",
      required: true,
    },
    {
      id: "value1",
      type: {
        kind: "number",
        min: 0,
        step: 0.001,
      },
      defaultValue: 12,
      required: true,
    },
    {
      id: "knownQty2",
      type: {
        kind: "select",
        options: [
          { value: "voltage", i18nKey: "voltage" },
          { value: "current", i18nKey: "current" },
          { value: "resistance", i18nKey: "resistance" },
          { value: "power", i18nKey: "power" },
        ],
      },
      defaultValue: "current",
      required: true,
    },
    {
      id: "value2",
      type: {
        kind: "number",
        min: 0,
        step: 0.001,
      },
      defaultValue: 2,
      required: true,
    },
  ],
  outputs: [
    {
      id: "voltage",
      format: "number",
      precision: 3,
      unit: "volt",
      highlight: true,
    },
    {
      id: "current",
      format: "number",
      precision: 4,
      unit: "amp",
    },
    {
      id: "resistance",
      format: "number",
      precision: 3,
      unit: "ohm",
    },
    {
      id: "power",
      format: "number",
      precision: 3,
      unit: "watt",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "V = IR,\\quad P = VI = I^2R = \\frac{V^2}{R}",
    references: [
      {
        title: "Ohm's Law — IEEE",
        url: "https://www.ieee.org/",
        authority: "Institute of Electrical and Electronics Engineers (IEEE)",
      },
      {
        title: "Die galvanische Kette (1827)",
        authority: "Georg Simon Ohm",
      },
    ],
    disclaimer:
      "This calculator assumes ideal (linear) resistive circuits. Real-world components may deviate due to temperature, non-linearity, or AC effects.",
  },
  related: ["voltage-drop", "resistor-color"],
  tags: ["ohm", "voltage", "current", "resistance", "power", "electronics", "circuit"],
});
