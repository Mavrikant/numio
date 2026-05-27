import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "combinations",
  category: "math",
  priority: "P2",
  icon: "shuffle",
  inputs: [
    { id: "n", type: { kind: "number", min: 0, max: 1000, step: 1, integer: true }, defaultValue: 5, required: true },
    { id: "r", type: { kind: "number", min: 0, max: 1000, step: 1, integer: true }, defaultValue: 2, required: true }
  ],
  outputs: [{ id: "nCr", format: "number", highlight: true }, { id: "nPr", format: "number" }],
  inputSchema, compute, i18n,
  meta: {
    formulaLatex: "C(n,r) = \\frac{n!}{r!(n-r)!} \\quad P(n,r) = \\frac{n!}{(n-r)!}",
    references: [
      { title: "Combination — Wolfram MathWorld", url: "https://mathworld.wolfram.com/Combination.html", authority: "Wolfram MathWorld" },
      { title: "Permutation — Wolfram MathWorld", url: "https://mathworld.wolfram.com/Permutation.html", authority: "Wolfram MathWorld" },
      { title: "Permutations and Combinations — Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations", authority: "Khan Academy" },
    ]
  },
  related: ["factorial"],
  tags: ["combinations", "permutations", "combinatorics", "binomial", "math"],
});
