import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "logarithm",
  category: "math",
  priority: "P1",
  icon: "function",
  inputs: [
    { id: "value", type: { kind: "number", min: 0.01, max: 1000000, step: 0.1 }, defaultValue: 100, required: true },
    { id: "base", type: { kind: "number", min: 0.01, max: 1000, step: 0.1 }, defaultValue: 10, required: true },
  ],
  outputs: [
    { id: "result", format: "number", precision: 4, highlight: true },
    { id: "natural_log", format: "number", precision: 4 },
    { id: "log10", format: "number", precision: 4 },
    { id: "log2", format: "number", precision: 4 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\log_b(x) = \\frac{\\ln(x)}{\\ln(b)}",
    references: [
      { title: "Logarithm", url: "https://en.wikipedia.org/wiki/Logarithm", authority: "Wikipedia" },
    ],
  },
  related: ["exponent", "square-root"],
  tags: ["logarithm", "log", "math", "algebra"],
});
