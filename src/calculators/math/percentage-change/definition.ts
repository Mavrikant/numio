import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "percentage-change",
  category: "math",
  priority: "P0",
  icon: "trending-up",
  inputs: [
    {
      id: "originalValue",
      type: { kind: "number" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "newValue",
      type: { kind: "number" },
      defaultValue: 125,
      required: true,
    },
  ],
  outputs: [
    { id: "percentChange", format: "percent", precision: 4, highlight: true },
    { id: "absoluteChange", format: "number", precision: 4 },
    { id: "relativeChange", format: "number", precision: 6 },
    { id: "direction", format: "text" },
    { id: "fromZero", format: "number", precision: 0 },
    { id: "explanation", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\Delta\\% = \\frac{V_{new} - V_{old}}{|V_{old}|} \\times 100",
    references: [
      {
        title: "Percentage change — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Relative_change",
        authority: "Wikipedia",
      },
      {
        title: "How to Calculate Percent Change",
        url: "https://www.bls.gov/cpi/factsheets/calculate-percent-change.htm",
        authority: "U.S. Bureau of Labor Statistics",
      },
    ],
    disclaimer:
      "Percentage change is undefined when the original value is zero. The calculator reports this as 'from-zero' so you can report absolute change instead.",
  },
  related: ["percentage", "fraction", "ratio"],
  tags: ["math", "percentage change", "increase", "decrease", "percent change", "growth rate"],
});
