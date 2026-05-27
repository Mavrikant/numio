import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "fibonacci",
  category: "math",
  priority: "P2",
  icon: "spline",
  inputs: [
    { id: "n", type: { kind: "number", min: 1, max: 78, step: 1, integer: true }, defaultValue: 10, required: true },
  ],
  outputs: [
    { id: "nthTerm", format: "number", precision: 0, highlight: true },
    { id: "sumFirstN", format: "number", precision: 0 },
    { id: "ratio", format: "number", precision: 6 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "F_n = F_{n-1} + F_{n-2},\\ F_1 = F_2 = 1",
    references: [{ title: "Fibonacci number", url: "https://en.wikipedia.org/wiki/Fibonacci_sequence", authority: "Wikipedia" }],
    disclaimer: "Limited to n ≤ 78 so each term remains an exact integer (above that, double-precision loses accuracy).",
  },
  related: ["factorial", "prime-factorization", "exponent"],
  tags: ["fibonacci calculator", "nth fibonacci number", "fibonacci sequence", "golden ratio", "fibonacci term"],
});
