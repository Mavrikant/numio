import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  numerator: z.number().int().positive().max(1_000_000),
  denominator: z.number().int().positive().max(1_000_000),
});

export default defineCalculator({
  slug: "ratio",
  category: "math",
  priority: "P1",
  icon: "divide",
  inputs: [
    {
      id: "numerator",
      type: { kind: "number", min: 1, max: 1_000_000, step: 1, integer: true },
      defaultValue: 12,
      required: true,
    },
    {
      id: "denominator",
      type: { kind: "number", min: 1, max: 1_000_000, step: 1, integer: true },
      defaultValue: 18,
      required: true,
    },
  ],
  outputs: [
    {
      id: "simplifiedNumerator",
      format: "number",
      highlight: true,
    },
    {
      id: "simplifiedDenominator",
      format: "number",
      highlight: true,
    },
    {
      id: "decimal",
      format: "number",
      precision: 4,
    },
    {
      id: "percentValue",
      format: "percent",
      precision: 2,
    },
    {
      id: "oneToXForm",
      format: "text",
    },
    {
      id: "xToOneForm",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{GCD}(a,b) \\text{ via Euclidean algorithm}",
    references: [
      {
        title: "Greatest Common Divisor (GCD) — Algorithm & Examples",
        url: "https://en.wikipedia.org/wiki/Greatest_common_divisor",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["fraction", "percentage"],
  tags: ["math", "ratio", "gcd", "simplification", "equivalence"],
});
