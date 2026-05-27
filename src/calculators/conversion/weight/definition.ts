import { z } from "zod";
import { defineCalculator } from "@/lib/define-calculator";
import i18n from "./i18n";
import { compute } from "./compute";

export const WeightInput = z.object({
  value: z.number().finite().positive("Mass must be positive"),
  fromUnit: z.enum(["kg", "g", "mg", "lb", "oz", "ton", "stone"]),
  toUnit: z.enum(["kg", "g", "mg", "lb", "oz", "ton", "stone"]),
});

export const WeightOutput = z.object({
  result: z.number(),
});

export default defineCalculator({
  id: "weight-converter",
  category: "conversion",
  name: i18n.en.name,
  slug: "weight",
  description: i18n.en.description,
  keywords: i18n.en.keywords,
  inputs: {
    value: {
      label: "Value",
      type: "number",
      format: "decimal",
      precision: 4,
    },
    fromUnit: {
      label: "From Unit",
      type: "select",
      options: [
        { value: "kg", label: "Kilogram (kg)" },
        { value: "g", label: "Gram (g)" },
        { value: "mg", label: "Milligram (mg)" },
        { value: "lb", label: "Pound (lb)" },
        { value: "oz", label: "Ounce (oz)" },
        { value: "ton", label: "Metric Ton (ton)" },
        { value: "stone", label: "Stone (st)" },
      ],
    },
    toUnit: {
      label: "To Unit",
      type: "select",
      options: [
        { value: "kg", label: "Kilogram (kg)" },
        { value: "g", label: "Gram (g)" },
        { value: "mg", label: "Milligram (mg)" },
        { value: "lb", label: "Pound (lb)" },
        { value: "oz", label: "Ounce (oz)" },
        { value: "ton", label: "Metric Ton (ton)" },
        { value: "stone", label: "Stone (st)" },
      ],
    },
  },
  outputs: {
    result: {
      label: "Result",
      type: "number",
      format: "decimal",
      precision: 4,
    },
  },
  compute,
  i18n,
  meta: {
    description: "Convert between different mass and weight units including metric, imperial, and specialty units",
    references: [
      {
        title: "Conversion factors for weight - NIST",
        url: "https://www.nist.gov/pml/wmd/metric/si-units",
      },
      {
        title: "Mass conversion - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units#Mass",
      },
    ],
  },
});
