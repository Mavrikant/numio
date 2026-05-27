import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, AREA_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(AREA_UNITS),
  toUnit: z.enum(AREA_UNITS),
});

const unitOptions = [
  { value: "m2", i18nKey: "m2" },
  { value: "cm2", i18nKey: "cm2" },
  { value: "mm2", i18nKey: "mm2" },
  { value: "km2", i18nKey: "km2" },
  { value: "ha", i18nKey: "ha" },
  { value: "acre", i18nKey: "acre" },
  { value: "ft2", i18nKey: "ft2" },
  { value: "in2", i18nKey: "in2" },
  { value: "yd2", i18nKey: "yd2" },
  { value: "mi2", i18nKey: "mi2" },
];

export default defineCalculator({
  slug: "area",
  category: "conversion",
  priority: "P1",
  icon: "square",
  inputs: [
    {
      id: "value",
      type: { kind: "number", min: 0.000001, max: 1_000_000_000, step: 0.1 },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "m2",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "ft2",
      required: true,
    },
  ],
  outputs: [{ id: "result", format: "number", precision: 6, highlight: true }],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "A_{to} = A_{from} \\times \\frac{f_{from}}{f_{to}}",
    description:
      "Convert between metric and imperial area units using NIST-verified factors with square meters as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "International System of Units",
        url: "https://en.wikipedia.org/wiki/International_System_of_Units",
        authority: "Wikipedia",
      },
      {
        title: "Conversion of units — Area",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units#Area",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["length", "volume", "square-footage"],
  tags: ["conversion", "area", "metric", "imperial", "hectare", "acre"],
});
