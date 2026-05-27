import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  principal: z.number().min(0).max(10_000_000),
  annualRate: z.number().min(0).max(50),
  years: z.number().int().min(1).max(50),
  compoundFrequency: z.union([
    z.literal(1),
    z.literal(4),
    z.literal(12),
    z.literal(365),
  ]),
  monthlyContribution: z.number().min(0).max(100_000).default(0),
});

export default defineCalculator({
  slug: "compound-interest",
  category: "finance",
  priority: "P0",
  icon: "trending-up",
  inputs: [
    {
      id: "principal",
      type: { kind: "number", min: 0, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "annualRate",
      type: { kind: "number", min: 0, max: 50, step: 0.1, unit: "percent" },
      defaultValue: 7,
      required: true,
    },
    {
      id: "years",
      type: { kind: "number", min: 1, max: 50, step: 1, unit: "year", integer: true },
      defaultValue: 10,
      required: true,
    },
    {
      id: "compoundFrequency",
      type: {
        kind: "select",
        options: [
          { value: "1", i18nKey: "annually" },
          { value: "4", i18nKey: "quarterly" },
          { value: "12", i18nKey: "monthly" },
          { value: "365", i18nKey: "daily" },
        ],
      },
      defaultValue: "12",
      required: true,
    },
    {
      id: "monthlyContribution",
      type: { kind: "number", min: 0, max: 100_000, step: 10, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "futureValue", format: "currency", precision: 2, highlight: true },
    { id: "totalContributions", format: "currency", precision: 2 },
    { id: "totalInterest", format: "currency", precision: 2 },
    { id: "yearlyBreakdown", format: "list" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex:
      "FV = P\\left(1 + \\frac{r}{n}\\right)^{nt} + PMT \\cdot \\frac{\\left(1 + \\frac{r}{12}\\right)^{12t} - 1}{r/12}",
    references: [
      {
        title: "Compound Interest",
        url: "https://www.investopedia.com/terms/c/compoundinterest.asp",
        authority: "Investopedia",
      },
      {
        title: "Compound Interest Calculator",
        url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
        authority: "U.S. Securities and Exchange Commission (SEC)",
      },
    ],
    disclaimer:
      "This calculator assumes a constant rate of return and regular contributions. Actual investment returns vary and are not guaranteed.",
  },
  related: ["retirement", "mortgage", "loan-amortization"],
  tags: ["compound interest", "investment", "savings", "future value", "finance", "growth"],
});
