import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "standard-deviation",
  category: "math",
  priority: "P1",
  icon: "bar-chart-2",
  inputs: [
    {
      id: "values",
      type: { kind: "text", maxLength: 500 },
      defaultValue: "2, 4, 4, 4, 5, 5, 7, 9",
      required: true,
      group: "data",
    },
    {
      id: "type",
      type: {
        kind: "select",
        options: [
          { value: "population", i18nKey: "population" },
          { value: "sample", i18nKey: "sample" },
        ],
      },
      defaultValue: "sample",
      required: true,
      group: "options",
    },
  ],
  outputs: [
    {
      id: "count",
      format: "number",
      precision: 0,
    },
    {
      id: "mean",
      format: "number",
      precision: 4,
      highlight: false,
    },
    {
      id: "variance",
      format: "number",
      precision: 4,
    },
    {
      id: "standardDeviation",
      format: "number",
      precision: 4,
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\mu)^2}{n}} \\text{ (population)} \\quad \\text{or} \\quad s = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}} \\text{ (sample)}",
    references: [
      {
        title: "Standard Deviation — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Standard_deviation",
        authority: "Wikipedia",
      },
      {
        title: "Standard Deviation and Variance — Khan Academy",
        url: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/variance-standard-deviation-sample/a/population-and-sample-standard-deviation-review",
        authority: "Khan Academy",
      },
    ],
    disclaimer:
      "Population standard deviation (σ) assumes data represents the entire population. Sample standard deviation (s) uses n-1 divisor for unbiased estimation from a sample.",
  },
  related: ["average", "z-score", "statistics-basic"],
  tags: ["statistics", "standard-deviation", "variance", "spread"],
});
