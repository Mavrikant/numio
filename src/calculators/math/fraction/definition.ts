import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "fraction",
  category: "math",
  priority: "P1",
  icon: "divide",
  inputs: [
    {
      id: "numerator1",
      type: { kind: "number", min: -100000, max: 100000, step: 1, integer: true },
      defaultValue: 3,
      required: true,
      group: "fraction1",
    },
    {
      id: "denominator1",
      type: { kind: "number", min: -100000, max: 100000, step: 1, integer: true },
      defaultValue: 4,
      required: true,
      group: "fraction1",
    },
    {
      id: "operation",
      type: {
        kind: "select",
        options: [
          { value: "simplify", i18nKey: "simplify" },
          { value: "add", i18nKey: "add" },
          { value: "subtract", i18nKey: "subtract" },
          { value: "multiply", i18nKey: "multiply" },
          { value: "divide", i18nKey: "divide" },
        ],
      },
      defaultValue: "simplify",
      required: true,
      group: "options",
    },
    {
      id: "numerator2",
      type: { kind: "number", min: -100000, max: 100000, step: 1, integer: true },
      defaultValue: 1,
      required: false,
      group: "fraction2",
    },
    {
      id: "denominator2",
      type: { kind: "number", min: -100000, max: 100000, step: 1, integer: true },
      defaultValue: 2,
      required: false,
      group: "fraction2",
    },
  ],
  outputs: [
    {
      id: "numerator",
      format: "number",
      precision: 0,
      highlight: false,
    },
    {
      id: "denominator",
      format: "number",
      precision: 0,
      highlight: false,
    },
    {
      id: "decimal",
      format: "number",
      precision: 6,
      highlight: true,
    },
    {
      id: "mixedWhole",
      format: "number",
      precision: 0,
    },
    {
      id: "mixedNumerator",
      format: "number",
      precision: 0,
    },
    {
      id: "mixedDenominator",
      format: "number",
      precision: 0,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd} \\qquad \\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd} \\qquad \\gcd(|a|,|b|) \\text{ used for simplification}",
    references: [
      {
        title: "Fractions — Khan Academy",
        url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic",
        authority: "Khan Academy",
      },
      {
        title: "Fraction Arithmetic — Wolfram MathWorld",
        url: "https://mathworld.wolfram.com/Fraction.html",
        authority: "Wolfram MathWorld",
      },
      {
        title: "Greatest Common Divisor — Wolfram MathWorld",
        url: "https://mathworld.wolfram.com/GreatestCommonDivisor.html",
        authority: "Wolfram MathWorld",
      },
    ],
    disclaimer:
      "All fraction arithmetic uses exact integer arithmetic. The decimal output is rounded to 6 decimal places.",
  },
  related: ["average", "percentage", "ratio"],
  tags: ["fraction", "simplify", "GCD", "arithmetic", "numerator", "denominator"],
});
