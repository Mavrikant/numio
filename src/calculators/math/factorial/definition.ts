import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "factorial",
  category: "math",
  priority: "P2",
  icon: "plus",
  inputs: [{ id: "n", type: { kind: "number", min: 0, max: 170, step: 1, integer: true }, defaultValue: 5, required: true }],
  outputs: [{ id: "value", format: "text", highlight: true }, { id: "isBigInt", format: "text" }],
  inputSchema, compute, i18n,
  meta: {
    formulaLatex: "n! = n \\times (n-1) \\times \\cdots \\times 1, \\quad 0! = 1",
    references: [
      { title: "Factorial — Wolfram MathWorld", url: "https://mathworld.wolfram.com/Factorial.html", authority: "Wolfram MathWorld" },
      { title: "NIST DLMF §5.2 — Factorial and Gamma Function", url: "https://dlmf.nist.gov/5.2", authority: "NIST DLMF" },
      { title: "Factorial — Khan Academy", url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:prob-comb/x9e81a4f98389efdf:factorial-counting-principle/a/factorial-review", authority: "Khan Academy" },
    ]
  },
  related: ["combinations"],
  tags: ["factorial", "combinatorics", "gamma", "math"],
});
