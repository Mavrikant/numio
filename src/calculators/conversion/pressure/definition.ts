import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, PRESSURE_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(PRESSURE_UNITS),
  toUnit: z.enum(PRESSURE_UNITS),
});

const unitOptions = [
  { value: "Pa", i18nKey: "Pa" },
  { value: "kPa", i18nKey: "kPa" },
  { value: "MPa", i18nKey: "MPa" },
  { value: "bar", i18nKey: "bar" },
  { value: "psi", i18nKey: "psi" },
  { value: "atm", i18nKey: "atm" },
  { value: "mmHg", i18nKey: "mmHg" },
  { value: "torr", i18nKey: "torr" },
  { value: "inHg", i18nKey: "inHg" },
];

export default defineCalculator({
  slug: "pressure",
  category: "conversion",
  priority: "P1",
  icon: "gauge",
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
      defaultValue: "bar",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "psi",
      required: true,
    },
  ],
  outputs: [{ id: "result", format: "number", precision: 6, highlight: true }],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "P_{to} = P_{from} \\times \\frac{f_{from}}{f_{to}}",
    description:
      "Convert between SI, engineering, and barometric pressure units using NIST-verified factors with the pascal as the SI base.",
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
        title: "Pascal (unit) — Conversion table",
        url: "https://en.wikipedia.org/wiki/Pascal_(unit)",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["energy", "force", "temperature"],
  tags: ["conversion", "pressure", "pascal", "bar", "psi", "atm", "mmhg"],
});
