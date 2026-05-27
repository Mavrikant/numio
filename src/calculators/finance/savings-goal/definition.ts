import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    targetAmount: z.number().positive(),
    currentSavings: z.number().min(0),
    monthlyContribution: z.number().positive(),
    annualReturn: z.number().min(0).max(100).default(5),
  })
  .superRefine((data, ctx) => {
    if (data.targetAmount <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["targetAmount"],
        message: "Target amount must be greater than zero.",
      });
    }
    if (data.monthlyContribution <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["monthlyContribution"],
        message: "Monthly contribution must be greater than zero.",
      });
    }
  });

export default defineCalculator({
  slug: "savings-goal",
  category: "finance",
  priority: "P1",
  icon: "piggy-bank",
  inputs: [
    {
      id: "targetAmount",
      type: { kind: "number", min: 1, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "currentSavings",
      type: { kind: "number", min: 0, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 0,
      required: true,
    },
    {
      id: "monthlyContribution",
      type: { kind: "number", min: 1, max: 100_000, step: 50, unit: "usd" },
      defaultValue: 200,
      required: true,
    },
    {
      id: "annualReturn",
      type: { kind: "number", min: 0, max: 100, step: 0.1, unit: "percent" },
      defaultValue: 5,
      required: false,
    },
  ],
  outputs: [
    {
      id: "monthsToGoal",
      format: "number",
      precision: 0,
      highlight: true,
    },
    {
      id: "yearsToGoal",
      format: "number",
      precision: 2,
    },
    {
      id: "totalContributions",
      format: "number",
      precision: 2,
      unit: "usd",
    },
    {
      id: "totalInterest",
      format: "number",
      precision: 2,
      unit: "usd",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{balance} = \\text{currentSavings} \\times (1+r)^n + \\text{PMT} \\times \\frac{(1+r)^n - 1}{r}",
    references: [
      {
        title: "Savings Calculator",
        url: "https://tools.finra.org/",
        authority: "FINRA",
      },
      {
        title: "Compound Interest",
        url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
        authority: "SEC Investor.gov",
      },
    ],
    disclaimer:
      "Results are estimates based on a constant annual return. Actual investment returns vary and are not guaranteed.",
  },
  related: ["investment-return", "salary", "credit-card-payoff"],
  tags: ["savings", "goal", "compound interest", "finance", "investment"],
});
