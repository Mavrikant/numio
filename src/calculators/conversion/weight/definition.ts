import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute } from "./compute";

const inputSchema = z.object({
  value: z.number().finite().positive("Mass must be positive"),
  fromUnit: z.enum(["kg", "g", "mg", "lb", "oz", "ton", "stone"]),
  toUnit: z.enum(["kg", "g", "mg", "lb", "oz", "ton", "stone"]),
});

export default defineCalculator({
  slug: "weight",
  category: "conversion",
  priority: "P0",
  icon: "scale",
  inputs: [
    {
      id: "value",
      type: { kind: "number", min: 0.001, max: 1_000_000, step: 0.1 },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: {
        kind: "select",
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
      defaultValue: "kg",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
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
      defaultValue: "g",
      required: true,
    },
  ],
  outputs: [
    { id: "result", format: "number", precision: 4, highlight: true },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    description: "Convert between metric, imperial, and specialty weight units",
    references: [
      {
        title: "Conversion factors for weight - NIST",
        url: "https://www.nist.gov/pml/wmd/metric/si-units",
        authority: "NIST",
      },
      {
        title: "Mass conversion - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units#Mass",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["length", "temperature"],
  tags: ["conversion", "weight", "mass", "metric", "imperial"],
});
