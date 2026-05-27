import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["L_100km", "km_L", "mpg_us", "mpg_uk"]),
  toUnit: z.enum(["L_100km", "km_L", "mpg_us", "mpg_uk"]),
});

export default defineCalculator({
  slug: "fuel-economy",
  category: "conversion",
  priority: "P2",
  icon: "fuel",
  inputs: [
    {
      id: "value",
      type: {
        kind: "number",
        min: 0.1,
        step: 0.01,
      },
      defaultValue: 10,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
        options: [
          { value: "L_100km", i18nKey: "l_per_100km" },
          { value: "km_L", i18nKey: "km_per_l" },
          { value: "mpg_us", i18nKey: "mpg_us" },
          { value: "mpg_uk", i18nKey: "mpg_uk" },
        ],
      },
      defaultValue: "L_100km",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "L_100km", i18nKey: "l_per_100km" },
          { value: "km_L", i18nKey: "km_per_l" },
          { value: "mpg_us", i18nKey: "mpg_us" },
          { value: "mpg_uk", i18nKey: "mpg_uk" },
        ],
      },
      defaultValue: "mpg_us",
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      precision: 2,
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{L/100km} = \\frac{235.214}{\\text{mpg(US)}}",
    references: [
      {
        title: "Fuel Economy Standards and Conversions",
        url: "https://en.wikipedia.org/wiki/Fuel_efficiency",
        authority: "Wikipedia",
      },
      {
        title: "MPG to L/100km Converter",
        url: "https://www.rapidtables.com/convert/fuel/mpg-to-l100km.html",
        authority: "RapidTables",
      },
    ],
    disclaimer:
      "Fuel economy has an inverse relationship: higher MPG = lower L/100km. Different regions use different standards (US gallons vs UK gallons). Always verify your vehicle's specifications.",
  },
  related: ["speed", "data-storage"],
  tags: ["fuel", "economy", "mpg", "liters", "conversion", "efficiency", "car"],
});
