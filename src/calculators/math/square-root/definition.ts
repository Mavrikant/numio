import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "square-root",
  category: "math",
  priority: "P1",
  icon: "square-root",
  inputs: [
    {
      id: "value",
      type: { kind: "number", min: 0, max: 1e15, step: 1 },
      defaultValue: 144,
      required: true,
      group: "main",
    },
    {
      id: "nthRoot",
      type: { kind: "number", min: 2, max: 100, step: 1, integer: true },
      defaultValue: 2,
      required: false,
      group: "main",
    },
  ],
  outputs: [
    {
      id: "root",
      format: "number",
      precision: 6,
      highlight: true,
    },
    {
      id: "simplifiedCoefficient",
      format: "number",
      precision: 0,
    },
    {
      id: "simplifiedRadicand",
      format: "number",
      precision: 0,
    },
    {
      id: "isPerfectSquare",
      format: "text",
    },
    {
      id: "isPerfectNthRoot",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\sqrt[n]{x} = x^{1/n} \\qquad \\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b} \\qquad \\text{Simplification: } \\sqrt{p^{2k} \\cdot r} = p^k\\sqrt{r}",
    references: [
      {
        title: "Square Root — Wolfram MathWorld",
        url: "https://mathworld.wolfram.com/SquareRoot.html",
        authority: "Wolfram MathWorld",
      },
      {
        title: "Radicals and Square Roots — Khan Academy",
        url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:rational-exponents-radicals",
        authority: "Khan Academy",
      },
      {
        title: "nth Root — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Nth_root",
        authority: "Wikipedia",
      },
    ],
    disclaimer:
      "Results are rounded to 6 decimal places. Simplified radical form is only computed for non-negative integers.",
  },
  related: ["fraction", "percentage", "exponent"],
  tags: ["square root", "nth root", "radical", "perfect square", "simplify radical"],
});
