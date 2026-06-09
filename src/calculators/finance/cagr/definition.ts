import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "cagr",
  category: "finance",
  priority: "P1",
  icon: "trending-up",
  inputs: [
    {
      id: "beginningValue",
      type: { kind: "number", min: 0.01, max: 1_000_000_000_000, step: 100, unit: "usd" },
      defaultValue: 1000,
      required: true,
    },
    {
      id: "endingValue",
      type: { kind: "number", min: 0, max: 1_000_000_000_000, step: 100, unit: "usd" },
      defaultValue: 2000,
      required: true,
    },
    {
      id: "years",
      type: { kind: "number", min: 0.01, max: 200, step: 0.5, unit: "year" },
      defaultValue: 5,
      required: true,
    },
  ],
  outputs: [
    { id: "cagr", format: "percent", precision: 2, highlight: true },
    { id: "totalReturn", format: "percent", precision: 2 },
    { id: "multiple", format: "number", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex:
      "\\text{CAGR} = \\left(\\dfrac{V_{\\text{end}}}{V_{\\text{begin}}}\\right)^{1/n} - 1",
    references: [
      {
        title: "Compound Annual Growth Rate (CAGR)",
        url: "https://www.investopedia.com/terms/c/cagr.asp",
        authority: "Investopedia",
      },
      {
        title: "CAGR — Corporate Finance Institute",
        url: "https://corporatefinanceinstitute.com/resources/valuation/what-is-cagr/",
        authority: "Corporate Finance Institute",
      },
    ],
    disclaimer:
      "CAGR is a smoothed average growth rate and assumes steady compounding. It does not reflect year-to-year volatility, contributions, or withdrawals, and past performance does not guarantee future results.",
  },
  related: ["roi", "investment-return", "compound-interest", "rule-of-72"],
  tags: ["cagr", "annual growth rate", "investment return", "compound", "finance"],
});
