import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, ENERGY_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(ENERGY_UNITS),
  toUnit: z.enum(ENERGY_UNITS),
});

const unitOptions = [
  { value: "J", i18nKey: "J" },
  { value: "kJ", i18nKey: "kJ" },
  { value: "MJ", i18nKey: "MJ" },
  { value: "cal", i18nKey: "cal" },
  { value: "kcal", i18nKey: "kcal" },
  { value: "Wh", i18nKey: "Wh" },
  { value: "kWh", i18nKey: "kWh" },
  { value: "BTU", i18nKey: "BTU" },
  { value: "ft_lb", i18nKey: "ft_lb" },
  { value: "eV", i18nKey: "eV" },
];

export default defineCalculator({
  slug: "energy",
  category: "conversion",
  priority: "P1",
  icon: "zap",
  inputs: [
    {
      id: "value",
      type: { kind: "number", min: 0.000001, max: 1_000_000_000_000, step: 0.1 },
      defaultValue: 1,
      required: true,
    },
    {
      id: "fromUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "kWh",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "MJ",
      required: true,
    },
  ],
  outputs: [{ id: "result", format: "number", precision: 6, highlight: true }],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "E_{to} = E_{from} \\times \\frac{f_{from}}{f_{to}}",
    description:
      "Convert between joules, calories, kilowatt-hours, BTU and other energy units using NIST-verified factors and CODATA constants.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "CODATA Recommended Values of the Fundamental Constants",
        url: "https://physics.nist.gov/cuu/Constants/",
        authority: "NIST",
      },
      {
        title: "International System of Units",
        url: "https://en.wikipedia.org/wiki/International_System_of_Units",
        authority: "Wikipedia",
      },
      {
        title: "Conversion of units — Energy",
        url: "https://en.wikipedia.org/wiki/Conversion_of_units#Energy,_work,_or_amount_of_heat",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["power-convert", "pressure", "temperature"],
  tags: ["conversion", "energy", "joule", "calorie", "kwh", "btu", "ev"],
});
