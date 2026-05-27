import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["W", "kW", "MW", "hp", "BTU_h"]),
  toUnit: z.enum(["W", "kW", "MW", "hp", "BTU_h"]),
});

export default defineCalculator({
  slug: "power-convert",
  category: "conversion",
  priority: "P2",
  icon: "zap",
  inputs: [
    {
      id: "value",
      type: {
        kind: "number",
        min: 0,
        step: 0.01,
      },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "W", i18nKey: "watt" },
          { value: "kW", i18nKey: "kilowatt" },
          { value: "MW", i18nKey: "megawatt" },
          { value: "hp", i18nKey: "horsepower" },
          { value: "BTU_h", i18nKey: "btu_hour" },
        ],
      },
      defaultValue: "W",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "W", i18nKey: "watt" },
          { value: "kW", i18nKey: "kilowatt" },
          { value: "MW", i18nKey: "megawatt" },
          { value: "hp", i18nKey: "horsepower" },
          { value: "BTU_h", i18nKey: "btu_hour" },
        ],
      },
      defaultValue: "kW",
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 3,
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Result} = \\text{Value} \\times \\frac{\\text{Factor}_{from}}{\\text{Factor}_{to}}",
    references: [
      {
        title: "Horsepower Definition and Conversion",
        url: "https://en.wikipedia.org/wiki/Horsepower",
        authority: "Wikipedia",
      },
      {
        title: "SI Unit of Power: Watt",
        url: "https://en.wikipedia.org/wiki/Watt",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Horsepower (hp) refers to mechanical horsepower (745.7 W). Electrical horsepower differs slightly (746 W). BTU/h is commonly used in HVAC applications.",
  },
  related: ["energy", "electrical-power"],
  tags: ["power", "units", "conversion", "energy", "watts", "horsepower"],
});
