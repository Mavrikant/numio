import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import i18n from "./i18n";
import { compute, ANGULAR_VELOCITY_UNITS } from "./compute";

const inputSchema = z.object({
  value: z.number().positive(),
  fromUnit: z.enum(ANGULAR_VELOCITY_UNITS),
  toUnit: z.enum(ANGULAR_VELOCITY_UNITS),
});

const unitOptions = [
  { value: "rad_s", label: "Radian/second (rad/s)" },
  { value: "deg_s", label: "Degree/second (°/s)" },
  { value: "deg_min", label: "Degree/minute (°/min)" },
  { value: "rpm", label: "Revolutions/minute (rpm)" },
  { value: "hz", label: "Hertz, rev/second (Hz)" },
  { value: "rad_min", label: "Radian/minute (rad/min)" },
];

export default defineCalculator({
  slug: "angular-velocity",
  category: "conversion",
  priority: "P1",
  icon: "rotate-cw",
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
      defaultValue: "rpm",
      required: true,
    },
    {
      id: "toUnit",
      type: { kind: "select", options: unitOptions },
      defaultValue: "rad_s",
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
      "Convert between angular velocity units such as rad/s, rpm, hertz, and degrees per second using NIST-verified factors with the radian per second as the SI base.",
    references: [
      {
        title: "NIST Guide to the SI (SP 811)",
        url: "https://www.nist.gov/pml/special-publication-811",
        authority: "NIST",
      },
      {
        title: "Radian per second",
        url: "https://en.wikipedia.org/wiki/Radian_per_second",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["frequency", "speed"],
  tags: ["conversion", "angular velocity", "rpm", "rad/s", "hertz"],
});
