import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "prime-factorization",
  category: "math",
  priority: "P1",
  icon: "git-fork",
  inputs: [
    {
      id: "number",
      type: { kind: "number", min: 2, max: 1_000_000, step: 1, integer: true },
      defaultValue: 60,
      required: true,
    },
  ],
  outputs: [
    {
      id: "notation",
      format: "text",
      highlight: true,
    },
    {
      id: "factors",
      format: "list",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "n = p_1^{a_1} \\times p_2^{a_2} \\times \\cdots \\times p_k^{a_k}",
    references: [
      {
        title: "Prime Factorization — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Prime_factorization",
        authority: "Wikipedia",
      },
      {
        title: "Fundamental Theorem of Arithmetic",
        url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic",
        authority: "Wikipedia",
      },
    ],
  },
  related: ["lcm-gcd", "factorial", "combinations"],
  tags: ["math", "prime", "factorization", "number-theory", "algebra"],
});
