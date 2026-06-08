import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, KINEMATIC_VISCOSITY_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(KINEMATIC_VISCOSITY_UNITS),
  toUnit: z.enum(KINEMATIC_VISCOSITY_UNITS),
});

const unitOptions = [
  { value: "m2_s", label: "Square meter/second (m²/s)" },
  { value: "mm2_s", label: "Square millimeter/second (mm²/s)" },
  { value: "St", label: "Stokes (St)" },
  { value: "cSt", label: "Centistokes (cSt)" },
  { value: "ft2_s", label: "Square foot/second (ft²/s)" },
];

export default defineCalculator({
  slug: "kinematic-viscosity",
  category: "conversion",
  priority: "P1",
  icon: "droplets",
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
      defaultValue: "St",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "cSt",
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
      "Convert between kinematic viscosity units such as square meter per second, stokes, and centistokes using NIST-verified factors with the square meter per second as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Stokes (unit)",
        url: "https://en.wikipedia.org/wiki/Stokes_(unit)",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["dynamic-viscosity", "area"],
  tags: ["conversion", "kinematic viscosity", "stokes", "centistokes"],
});
