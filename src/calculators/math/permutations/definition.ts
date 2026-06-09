import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "permutations",
  category: "math",
  priority: "P2",
  icon: "shuffle",
  inputs: [
    {
      id: "n",
      type: { kind: "number", min: 0, max: 170, step: 1, integer: true },
      defaultValue: 10,
      required: true,
    },
    {
      id: "r",
      type: { kind: "number", min: 0, max: 170, step: 1, integer: true },
      defaultValue: 3,
      required: true,
    },
    {
      id: "allowRepetition",
      type: { kind: "toggle" },
      defaultValue: false,
      required: false,
    },
  ],
  outputs: [{ id: "permutations", format: "number", precision: 0, highlight: true }],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "{}_nP_r = \\dfrac{n!}{(n-r)!}, \\quad \\text{with repetition: } n^r",
    references: [
      {
        title: "Permutation — Wolfram MathWorld",
        url: "https://mathworld.wolfram.com/Permutation.html",
        authority: "Wolfram MathWorld",
      },
      {
        title: "Permutations — Khan Academy",
        url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:prob-comb/x9e81a4f98389efdf:combinatorics-precalc/a/permutations",
        authority: "Khan Academy",
      },
    ],
  },
  related: ["combinations", "factorial"],
  tags: ["permutations", "nPr", "combinatorics", "arrangements", "math"],
});
