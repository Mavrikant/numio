import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "lcm-gcd",
  category: "math",
  priority: "P1",
  icon: "git-fork",
  inputs: [
    {
      id: "a",
      type: { kind: "number", min: 1, max: 1_000_000, step: 1, integer: true },
      defaultValue: 12,
      required: true,
    },
    {
      id: "b",
      type: { kind: "number", min: 1, max: 1_000_000, step: 1, integer: true },
      defaultValue: 18,
      required: true,
    },
  ],
  outputs: [
    {
      id: "gcdValue",
      format: "number",
      highlight: true,
    },
    {
      id: "lcmValue",
      format: "number",
      highlight: true,
    },
    {
      id: "product",
      format: "number",
    },
    {
      id: "gcdSteps",
      format: "list",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{GCD}(a, b) = \\text{Euclidean algorithm}; \\text{LCM}(a, b) = \\frac{a \\times b}{\\text{GCD}(a, b)}",
    references: [
      {
        title: "Euclidean Algorithm — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Euclidean_algorithm",
        authority: "Wikipedia",
      },
      {
        title: "Least Common Multiple and Greatest Common Divisor",
        url: "https://en.wikipedia.org/wiki/Least_common_multiple",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["prime-factorization", "factorial", "combinations"],
  tags: ["math", "gcd", "lcm", "divisor", "multiple", "euclidean"],
});
