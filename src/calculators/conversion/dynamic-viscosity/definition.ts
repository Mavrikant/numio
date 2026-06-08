import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, DYNAMIC_VISCOSITY_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(DYNAMIC_VISCOSITY_UNITS),
  toUnit: z.enum(DYNAMIC_VISCOSITY_UNITS),
});

const unitOptions = [
  { value: "Pa_s", label: "Pascal-second (Pa·s)" },
  { value: "mPa_s", label: "Millipascal-second (mPa·s)" },
  { value: "P", label: "Poise (P)" },
  { value: "cP", label: "Centipoise (cP)" },
];

export default defineCalculator({
  slug: "dynamic-viscosity",
  category: "conversion",
  priority: "P1",
  icon: "droplet",
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
      defaultValue: "Pa_s",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "cP",
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
      "Convert between dynamic viscosity units such as pascal-second, poise, and centipoise using NIST-verified factors with the pascal-second as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Poise (unit)",
        url: "https://en.wikipedia.org/wiki/Poise_(unit)",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["kinematic-viscosity", "pressure"],
  tags: [
    "conversion",
    "dynamic viscosity",
    "poise",
    "centipoise",
    "pascal-second",
  ],
});
