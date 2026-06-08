import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, FLOW_RATE_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(FLOW_RATE_UNITS),
  toUnit: z.enum(FLOW_RATE_UNITS),
});

const unitOptions = [
  { value: "m3_s", label: "Cubic meter/second (m³/s)" },
  { value: "m3_h", label: "Cubic meter/hour (m³/h)" },
  { value: "L_s", label: "Liter/second (L/s)" },
  { value: "L_min", label: "Liter/minute (L/min)" },
  { value: "ft3_min", label: "Cubic foot/minute (CFM)" },
  { value: "ft3_s", label: "Cubic foot/second (CFS)" },
  { value: "gal_min_us", label: "US gallon/minute (GPM)" },
];

export default defineCalculator({
  slug: "flow-rate-convert",
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
      defaultValue: "m3_h",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "L_min",
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
      "Convert between metric and imperial volumetric flow-rate units using NIST-verified factors with the cubic metre per second as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Cubic metre per second",
        url: "https://en.wikipedia.org/wiki/Cubic_metre_per_second",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["volume", "speed"],
  tags: ["conversion", "flow rate", "cfm", "gpm", "m3/s"],
});
