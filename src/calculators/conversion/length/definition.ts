import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(["m", "cm", "mm", "km", "in", "ft", "yd", "mi", "nm", "μm"]),
  toUnit: z.enum(["m", "cm", "mm", "km", "in", "ft", "yd", "mi", "nm", "μm"]),
});

export default defineCalculator({
  slug: "length",
  category: "conversion",
  priority: "P0",
  icon: "ruler",
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
          { value: "m", label: "Meter (m)" },
          { value: "cm", label: "Centimeter (cm)" },
          { value: "mm", label: "Millimeter (mm)" },
          { value: "km", label: "Kilometer (km)" },
          { value: "in", label: "Inch (in)" },
          { value: "ft", label: "Foot (ft)" },
          { value: "yd", label: "Yard (yd)" },
          { value: "mi", label: "Mile (mi)" },
          { value: "nm", label: "Nautical Mile (nm)" },
          { value: "μm", label: "Micrometer (μm)" },
        ],
      },
      defaultValue: "m",
      required: true,
    },
    {
      id: "toUnit",
      type: {
        kind: "select",
        options: [
          { value: "m", label: "Meter (m)" },
          { value: "cm", label: "Centimeter (cm)" },
          { value: "mm", label: "Millimeter (mm)" },
          { value: "km", label: "Kilometer (km)" },
          { value: "in", label: "Inch (in)" },
          { value: "ft", label: "Foot (ft)" },
          { value: "yd", label: "Yard (yd)" },
          { value: "mi", label: "Mile (mi)" },
          { value: "nm", label: "Nautical Mile (nm)" },
          { value: "μm", label: "Micrometer (μm)" },
        ],
      },
      defaultValue: "cm",
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
    description: "Convert between metric and imperial length units",
    references: [
      {
        title: "Meter — International System of Units (SI)",
        url: "https://en.wikipedia.org/wiki/Meter",
        authority: "Wikipedia",
      },
      {
        title: "Conversion of units of length",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units#Length",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["weight", "temperature"],
  tags: ["conversion", "length", "distance", "metric", "imperial"],
});
