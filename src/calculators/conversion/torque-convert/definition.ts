import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, TORQUE_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(TORQUE_UNITS),
  toUnit: z.enum(TORQUE_UNITS),
});

const unitOptions = [
  { value: "Nm", label: "Newton-meter (N·m)" },
  { value: "kNm", label: "Kilonewton-meter (kN·m)" },
  { value: "lbf_ft", label: "Pound-force-foot (lbf·ft)" },
  { value: "lbf_in", label: "Pound-force-inch (lbf·in)" },
  { value: "kgf_m", label: "Kilogram-force-meter (kgf·m)" },
  { value: "kgf_cm", label: "Kilogram-force-centimeter (kgf·cm)" },
];

export default defineCalculator({
  slug: "torque-convert",
  category: "conversion",
  priority: "P1",
  icon: "wrench",
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
      defaultValue: "Nm",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "lbf_ft",
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
      "Convert between metric and imperial torque (moment) units using NIST-verified factors with the newton-metre as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Newton metre",
        url: "https://en.wikipedia.org/wiki/Newton_metre",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["force", "energy"],
  tags: ["conversion", "torque", "moment", "newton meter", "lbf-ft"],
});
