import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "exponent",
  category: "math",
  priority: "P1",
  icon: "function",
  inputs: [
    { id: "base", type: { kind: "number", min: -1000, max: 1000, step: 0.1 }, defaultValue: 2, required: true },
    { id: "exponent", type: { kind: "number", min: -100, max: 100, step: 0.1 }, defaultValue: 3, required: true },
  ],
  outputs: [
    { id: "result", format: "number", precision: 4, highlight: true },
    { id: "expanded", format: "text", precision: 0 },
    { id: "scientific", format: "text", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "a^n = a \\times a \\times \\cdots \\times a \\text{ (n times)}",
    references: [
      { title: "Exponentiation", url: "https://en.wikipedia.org/wiki/Exponentiation", authority: "Wikipedia" },
    ],
  },
  related: ["logarithm", "square-root"],
  tags: ["exponent", "power", "math", "algebra"],
});
