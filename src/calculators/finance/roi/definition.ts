import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  initialInvestment: z.number().min(0.01).max(1_000_000_000),
  finalValue: z.number().min(0).max(1_000_000_000_000),
  years: z.number().min(0.01).max(50),
});

export default defineCalculator({
  slug: "roi",
  category: "finance",
  priority: "P1",
  icon: "trending-up",
  inputs: [
    {
      id: "initialInvestment",
      type: { kind: "number", min: 0.01, max: 1_000_000_000, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "finalValue",
      type: { kind: "number", min: 0, max: 1_000_000_000_000, step: 100, unit: "usd" },
      defaultValue: 15000,
      required: true,
    },
    {
      id: "years",
      type: { kind: "number", min: 0.01, max: 50, step: 0.5, unit: "year" },
      defaultValue: 1,
      required: true,
    },
  ],
  outputs: [
    { id: "roi", format: "percent", precision: 2, highlight: true },
    { id: "annualizedRoi", format: "percent", precision: 2 },
    { id: "netProfit", format: "currency", precision: 2 },
    { id: "moic", format: "number", precision: 2 },
    { id: "ruleOf72Years", format: "number", precision: 1 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{ROI} = \\frac{\\text{Final Value} - \\text{Initial Investment}}{\\text{Initial Investment}} \\times 100",
    references: [
      {
        title: "Return on Investment (ROI)",
        url: "https://www.investopedia.com/terms/r/returnoninvestment.asp",
        authority: "Investopedia",
      },
      {
        title: "Compound Annual Growth Rate (CAGR)",
        url: "https://www.investopedia.com/terms/c/cagr.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "ROI calculations are based on simple inputs and do not account for taxes, fees, inflation, or the time value of money beyond the annualized rate.",
  },
  related: ["compound-interest", "investment-return", "net-worth"],
  tags: ["roi", "return on investment", "cagr", "investment", "profit", "finance"],
});
