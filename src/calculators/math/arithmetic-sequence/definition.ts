import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "arithmetic-sequence",
  category: "math",
  priority: "P2",
  icon: "list-ordered",
  inputs: [
    {
      id: "firstTerm",
      type: { kind: "number", min: -1_000_000_000, max: 1_000_000_000, step: 1 },
      defaultValue: 2,
      required: true,
    },
    {
      id: "commonDifference",
      type: { kind: "number", min: -1_000_000, max: 1_000_000, step: 1 },
      defaultValue: 3,
      required: true,
    },
    {
      id: "numberOfTerms",
      type: { kind: "number", min: 1, max: 1_000_000, step: 1, integer: true },
      defaultValue: 10,
      required: true,
    },
  ],
  outputs: [
    { id: "nthTerm", format: "number", precision: 4, highlight: true },
    { id: "sum", format: "number", precision: 4, highlight: true },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "a_n = a_1 + (n-1)d, \\quad S_n = \\dfrac{n}{2}\\,(a_1 + a_n)",
    references: [
      {
        title: "Arithmetic Series — Wolfram MathWorld",
        url: "https://mathworld.wolfram.com/ArithmeticSeries.html",
        authority: "Wolfram MathWorld",
      },
      {
        title: "Arithmetic Sequences and Series — Khan Academy",
        url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences/x2f8bb11595b61c86:constructing-arithmetic-sequences/a/sequences-review",
        authority: "Khan Academy",
      },
    ],
  },
  related: ["fibonacci", "average"],
  tags: ["arithmetic sequence", "arithmetic series", "nth term", "sum", "math"],
});
