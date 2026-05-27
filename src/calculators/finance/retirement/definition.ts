import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    currentAge: z.number().int().min(18).max(80),
    retirementAge: z.number().int().min(45).max(90),
    currentSavings: z.number().min(0),
    monthlyContribution: z.number().min(0),
    annualReturn: z.number().min(0).max(20),
    withdrawalRate: z.number().min(1).max(10),
  })
  .superRefine((data, ctx) => {
    if (data.retirementAge <= data.currentAge) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["retirementAge"],
        message: "Retirement age must be greater than current age",
      });
    }
  });

export default defineCalculator({
  slug: "retirement",
  category: "finance",
  priority: "P0",
  icon: "piggy-bank",
  inputs: [
    {
      id: "currentAge",
      type: { kind: "number", min: 18, max: 80, step: 1, integer: true, unit: "year" },
      defaultValue: 30,
      required: true,
    },
    {
      id: "retirementAge",
      type: { kind: "number", min: 45, max: 90, step: 1, integer: true, unit: "year" },
      defaultValue: 65,
      required: true,
    },
    {
      id: "currentSavings",
      type: { kind: "number", min: 0, max: 10_000_000, step: 1000, unit: "usd" },
      defaultValue: 50000,
      required: true,
    },
    {
      id: "monthlyContribution",
      type: { kind: "number", min: 0, max: 100_000, step: 50, unit: "usd" },
      defaultValue: 500,
      required: true,
    },
    {
      id: "annualReturn",
      type: { kind: "number", min: 0, max: 20, step: 0.1, unit: "percent" },
      defaultValue: 7,
      required: true,
    },
    {
      id: "withdrawalRate",
      type: { kind: "number", min: 1, max: 10, step: 0.1, unit: "percent" },
      defaultValue: 4,
      required: true,
    },
  ],
  outputs: [
    { id: "totalAtRetirement", format: "currency", precision: 0, highlight: true },
    { id: "monthlyIncome", format: "currency", precision: 0 },
    { id: "yearsOfIncome", format: "number", precision: 1 },
    { id: "totalContributions", format: "currency", precision: 0 },
    { id: "totalInterest", format: "currency", precision: 0 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex: "FV = PV(1+r)^n + PMT \\cdot \\frac{(1+r)^n - 1}{r}",
    references: [
      {
        title: "Retirement Income Calculator",
        url: "https://investor.vanguard.com/tools-calculators/retirement-income-calculator",
        authority: "Vanguard",
      },
      {
        title: "IRS Retirement Plans",
        url: "https://www.irs.gov/retirement-plans",
        authority: "Internal Revenue Service",
      },
      {
        title: "Determining Withdrawal Rates Using Historical Data (4% Rule)",
        url: "https://www.financialplanningassociation.org/article/journal/OCT94-determining-withdrawal-rates-using-historical-data",
        authority: "Journal of Financial Planning (Bengen, 1994)",
      },
    ],
    disclaimer:
      "This calculator is for illustrative purposes only. Actual investment returns vary and are not guaranteed. Consult a financial advisor for personalized retirement planning.",
  },
  related: ["salary", "compound-interest", "loan-amortization"],
  tags: ["retirement", "savings", "investment", "future value", "4% rule", "401k", "pension"],
});
