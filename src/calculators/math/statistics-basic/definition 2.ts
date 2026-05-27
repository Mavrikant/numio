import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "statistics-basic",
  category: "math",
  priority: "P2",
  icon: "bar-chart-3",
  inputs: [
    {
      id: "values",
      type: { kind: "text", maxLength: 500 },
      defaultValue: "2, 5, 7, 9, 3, 8, 5",
      required: true,
    },
  ],
  outputs: [
    { id: "count", format: "number", precision: 0 },
    { id: "min", format: "number", precision: 4 },
    { id: "max", format: "number", precision: 4 },
    { id: "range", format: "number", precision: 4 },
    { id: "mean", format: "number", precision: 4, highlight: true },
    { id: "median", format: "number", precision: 4, highlight: true },
    { id: "mode", format: "text" },
    { id: "q1", format: "number", precision: 4 },
    { id: "q3", format: "number", precision: 4 },
    { id: "iqr", format: "number", precision: 4 },
    { id: "variance", format: "number", precision: 4 },
    { id: "stdDev", format: "number", precision: 4 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Mean} = \\frac{\\sum x_i}{n}, \\quad \\text{Variance} = \\frac{\\sum(x_i - \\mu)^2}{n}, \\quad \\text{IQR} = Q_3 - Q_1",
    references: [
      {
        title: "Descriptive Statistics — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Descriptive_statistics",
        authority: "Wikipedia",
      },
      {
        title: "Five-Number Summary — Khan Academy",
        url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/box-whisker-plots/a/box-plot-review",
        authority: "Khan Academy",
      },
    ],
    disclaimer:
      "This calculator provides population-based statistics (divisor n for variance/std dev). For sample data analysis, consider sample-specific adjustments (n-1 divisor).",
  },
  related: ["average", "standard-deviation", "z-score"],
  tags: ["statistics", "descriptive", "data-analysis", "summary"],
});
