import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, DENSITY_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(DENSITY_UNITS),
  toUnit: z.enum(DENSITY_UNITS),
});

const unitOptions = [
  { value: "kg_m3", label: "Kilogram/cubic meter (kg/m³)" },
  { value: "g_cm3", label: "Gram/cubic centimeter (g/cm³)" },
  { value: "g_mL", label: "Gram/milliliter (g/mL)" },
  { value: "lb_ft3", label: "Pound/cubic foot (lb/ft³)" },
  { value: "oz_in3", label: "Ounce/cubic inch (oz/in³)" },
  { value: "lb_gal_us", label: "Pound/US gallon (lb/gal)" },
];

export default defineCalculator({
  slug: "density",
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
      defaultValue: "g_cm3",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "kg_m3",
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
      "Convert between metric and imperial density units using NIST-verified factors with the kilogram per cubic meter as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Density",
        url: "https://en.wikipedia.org/wiki/Density",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["mass", "volume"],
  tags: ["conversion", "density", "kg/m3", "g/cm3"],
});
