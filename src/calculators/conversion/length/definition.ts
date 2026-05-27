import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  value: z.number().positive().max(1_000_000),
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
          { value: "m", i18nKey: "meter" },
          { value: "cm", i18nKey: "centimeter" },
          { value: "mm", i18nKey: "millimeter" },
          { value: "km", i18nKey: "kilometer" },
          { value: "in", i18nKey: "inch" },
          { value: "ft", i18nKey: "foot" },
          { value: "yd", i18nKey: "yard" },
          { value: "mi", i18nKey: "mile" },
          { value: "nm", i18nKey: "nautical_mile" },
          { value: "μm", i18nKey: "micrometer" },
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
          { value: "m", i18nKey: "meter" },
          { value: "cm", i18nKey: "centimeter" },
          { value: "mm", i18nKey: "millimeter" },
          { value: "km", i18nKey: "kilometer" },
          { value: "in", i18nKey: "inch" },
          { value: "ft", i18nKey: "foot" },
          { value: "yd", i18nKey: "yard" },
          { value: "mi", i18nKey: "mile" },
          { value: "nm", i18nKey: "nautical_mile" },
          { value: "μm", i18nKey: "micrometer" },
        ],
      },
      defaultValue: "cm",
      required: true,
    },
  ],
  outputs: [
    { id: "result", format: "number", precision: 4, highlight: true },
    { id: "resultFormatted", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{result} = \\text{value} \\times \\frac{\\text{toBase unit}}{\\text{fromBase unit}}",
    references: [
      {
        title: "Meter — International System of Units (SI)",
        url: "https://en.wikipedia.org/wiki/Meter",
        authority: "Wikipedia",
      },
      {
        title: "International yard and pound",
        url: "https://en.wikipedia.org/wiki/International_yard_and_pound",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["weight", "temperature"],
  tags: ["conversion", "length", "distance", "metric", "imperial"],
});
