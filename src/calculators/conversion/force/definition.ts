import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, FORCE_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(FORCE_UNITS),
  toUnit: z.enum(FORCE_UNITS),
});

const unitOptions = [
  { value: "N", label: "Newton (N)" },
  { value: "kN", label: "Kilonewton (kN)" },
  { value: "dyn", label: "Dyne (dyn)" },
  { value: "lbf", label: "Pound-force (lbf)" },
  { value: "kgf", label: "Kilogram-force (kgf, kp)" },
  { value: "ozf", label: "Ounce-force (ozf)" },
];

export default defineCalculator({
  slug: "force",
  category: "conversion",
  priority: "P1",
  icon: "move-down",
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
      defaultValue: "kgf",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "N",
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
      "Convert between SI and engineering force units using NIST-verified factors with the newton as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Newton (unit)",
        url: "https://en.wikipedia.org/wiki/Newton_(unit)",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["pressure", "torque-convert"],
  tags: ["conversion", "force", "newton", "pound-force", "kilogram-force"],
});
