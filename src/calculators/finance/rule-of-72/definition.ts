import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "rule-of-72",
  category: "finance",
  priority: "P2",
  icon: "trending-up",
  inputs: [
    { id: "rate", type: { kind: "number", min: 0.01, max: 100, step: 0.1, unit: "percent" }, defaultValue: 8, required: true },
  ],
  outputs: [
    { id: "years72", format: "number", precision: 1, unit: "year", highlight: true },
    { id: "years70", format: "number", precision: 1, unit: "year" },
    { id: "years69", format: "number", precision: 1, unit: "year" },
    { id: "exactYears", format: "number", precision: 2, unit: "year" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "t \\approx \\frac{72}{r}",
    references: [{ title: "Rule of 72", url: "https://en.wikipedia.org/wiki/Rule_of_72", authority: "Wikipedia" }],
    disclaimer: "An approximation for a fixed annual return. The exact doubling time is ln(2)/ln(1+r), also shown for comparison.",
  },
  related: ["compound-interest", "investment-return", "roi"],
  tags: ["rule of 72", "doubling time", "investment doubling", "rule of 70", "compound growth"],
});
