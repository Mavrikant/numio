import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "average",
  category: "math",
  priority: "P1",
  icon: "bar-chart",
  inputs: [
    {
      id: "values",
      type: { kind: "text", maxLength: 1000 },
      defaultValue: "4, 8, 15, 16, 23, 42",
      required: true,
      group: "data",
    },
  ],
  outputs: [
    {
      id: "mean",
      format: "number",
      precision: 4,
      highlight: true,
    },
    {
      id: "median",
      format: "number",
      precision: 4,
    },
    {
      id: "mode",
      format: "number",
      precision: 4,
    },
    {
      id: "count",
      format: "number",
      precision: 0,
    },
    {
      id: "sum",
      format: "number",
      precision: 4,
    },
    {
      id: "range",
      format: "number",
      precision: 4,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n} \\quad \\text{(mean)} \\qquad \\text{median} = x_{\\lceil n/2 \\rceil} \\text{ (sorted)}",
    references: [
      {
        title: "Mean, Median, Mode — Khan Academy",
        url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/a/mean-median-and-mode-review",
        authority: "Khan Academy",
      },
      {
        title: "Arithmetic Mean — Wolfram MathWorld",
        url: "https://mathworld.wolfram.com/ArithmeticMean.html",
        authority: "Wolfram MathWorld",
      },
      {
        title: "Measures of Central Tendency — NIST/SEMATECH",
        url: "https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm",
        authority: "NIST",
      },
    ],
    disclaimer:
      "When no single value appears more than once, no unique mode exists; the mean is shown in the mode field for display purposes.",
  },
  related: ["standard-deviation", "z-score", "median"],
  tags: ["average", "mean", "median", "mode", "statistics", "central-tendency"],
});
