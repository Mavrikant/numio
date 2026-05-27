import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "z-score",
  category: "math",
  priority: "P2",
  icon: "trending-up",
  inputs: [
    {
      id: "value",
      type: { kind: "number", step: 0.01 },
      defaultValue: 85,
      required: true,
      group: "data",
    },
    {
      id: "mean",
      type: { kind: "number", step: 0.01 },
      defaultValue: 100,
      required: true,
      group: "data",
    },
    {
      id: "standardDeviation",
      type: { kind: "number", min: 0, step: 0.01 },
      defaultValue: 15,
      required: true,
      group: "data",
    },
  ],
  outputs: [
    {
      id: "zScore",
      format: "number",
      precision: 4,
      highlight: true,
    },
    {
      id: "percentile",
      format: "percent",
      precision: 2,
    },
    {
      id: "oneTailPValue",
      format: "number",
      precision: 4,
    },
    {
      id: "twoTailPValue",
      format: "number",
      precision: 4,
    },
    {
      id: "interpretation",
      format: "text",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "z = \\frac{x - \\mu}{\\sigma}",
    references: [
      {
        title: "Z-Score — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Standard_score",
        authority: "Wikipedia",
      },
      {
        title: "Z-Scores and Percentiles — Khan Academy",
        url: "https://www.khanacademy.org/math/statistics-probability/modeling-distributions-of-data/z-scores/a/z-scores-introduction",
        authority: "Khan Academy",
      },
      {
        title: "Standard Normal Distribution Table",
        url: "https://www.mathsisfun.com/data/standard-normal-distribution-table.html",
        authority: "Math Is Fun",
      },
    ],
    disclaimer:
      "Z-scores assume a normal distribution. The percentile and p-values are based on the normal CDF approximation (accurate to ~0.000013). Results are indicative and should be verified with statistical software for critical applications.",
  },
  related: ["standard-deviation", "average", "statistics-basic"],
  tags: ["statistics", "z-score", "normal-distribution", "hypothesis-testing", "percentile"],
});
