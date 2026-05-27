import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "electrical-power",
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
        step: 0.01,
      },
      defaultValue: 120,
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
        step: 0.01,
      },
      defaultValue: 10,
      required: true,
    },
  ],
  outputs: [
    {
      id: "voltage",
      format: "number",
      precision: 3,
      unit: "volt",
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
      highlight: true,
    },
    {
      id: "energy24h",
      format: "number",
      precision: 2,
    },
    {
      id: "energy30d",
      format: "number",
      precision: 2,
    },
    {
      id: "costPerMonth",
      format: "currency",
      precision: 2,
      unit: "usd",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "P = VI = I^2R = \\frac{V^2}{R}, \\quad E = P \\times t",
    references: [
      {
        title: "Ohm's Law and Power — IEEE",
        url: "https://www.ieee.org/",
        authority: "Institute of Electrical and Electronics Engineers (IEEE)",
      },
      {
        title: "Electricity Cost Calculator — U.S. Energy Information Administration",
        url: "https://www.eia.gov/",
        authority: "U.S. Energy Information Administration (EIA)",
      },
    ],
    disclaimer:
      "This calculator estimates energy consumption and costs based on a fixed electricity rate ($0.15/kWh, US average). Your actual costs depend on your local utility rates, time-of-use pricing, and seasonal variations. Always refer to your utility bill for accurate information.",
  },
  related: ["ohms-law", "voltage-drop"],
  tags: ["power", "energy", "electricity", "cost", "consumption", "wattage"],
});
