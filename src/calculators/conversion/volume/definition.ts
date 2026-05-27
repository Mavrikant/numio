import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, VOLUME_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(VOLUME_UNITS),
  toUnit: z.enum(VOLUME_UNITS),
});

const unitOptions = [
  { value: "m3", i18nKey: "m3" },
  { value: "L", i18nKey: "L" },
  { value: "mL", i18nKey: "mL" },
  { value: "cm3", i18nKey: "cm3" },
  { value: "ft3", i18nKey: "ft3" },
  { value: "in3", i18nKey: "in3" },
  { value: "gal_us", i18nKey: "gal_us" },
  { value: "gal_uk", i18nKey: "gal_uk" },
  { value: "qt_us", i18nKey: "qt_us" },
  { value: "pt_us", i18nKey: "pt_us" },
  { value: "fl_oz_us", i18nKey: "fl_oz_us" },
];

export default defineCalculator({
  slug: "volume",
  category: "conversion",
  priority: "P1",
  icon: "box",
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
      defaultValue: "L",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "gal_us",
      required: true,
    },
  ],
  outputs: [{ id: "result", format: "number", precision: 6, highlight: true }],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "V_{to} = V_{from} \\times \\frac{f_{from}}{f_{to}}",
    description:
      "Convert between metric, US customary, and imperial volume units using NIST-verified factors with cubic meters as the SI base.",
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
        title: "Conversion of units — Volume",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units#Volume",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["length", "area", "cooking"],
  tags: ["conversion", "volume", "liter", "gallon", "metric", "imperial"],
});
