import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  balance: z.number().min(100).max(500_000),
  apr: z.number().min(0).max(30),
  loanTerm: z.number().int().min(1).max(30),
  graceMonths: z.number().int().min(0).max(12).default(6),
  extraMonthlyPayment: z.number().min(0).default(0),
});

export default defineCalculator({
  slug: "student-loan",
  category: "finance",
  priority: "P0",
  icon: "graduation-cap",
  inputs: [
    {
      id: "balance",
      type: { kind: "number", min: 100, max: 500_000, step: 100, unit: "usd" },
      defaultValue: 30_000,
      required: true,
    },
    {
      id: "apr",
      type: { kind: "number", min: 0, max: 30, step: 0.01, unit: "percent" },
      defaultValue: 5.5,
      required: true,
    },
    {
      id: "loanTerm",
      type: { kind: "number", min: 1, max: 30, step: 1, unit: "year", integer: true },
      defaultValue: 10,
      required: true,
    },
    {
      id: "graceMonths",
      type: { kind: "number", min: 0, max: 12, step: 1, unit: "month", integer: true },
      defaultValue: 6,
      required: false,
    },
    {
      id: "extraMonthlyPayment",
      type: { kind: "number", min: 0, max: 10_000, step: 10, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "monthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "totalPaid", format: "currency", precision: 2 },
    { id: "totalInterest", format: "currency", precision: 2 },
    { id: "balanceAfterGrace", format: "currency", precision: 2 },
    { id: "monthsToPayoff", format: "number", precision: 0 },
    { id: "interestSavedByExtra", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "M = P \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}",
    references: [
      {
        title: "Federal Student Aid — Repayment Plans",
        url: "https://studentaid.gov/manage-loans/repayment/plans",
        authority: "Federal Student Aid (U.S. Department of Education)",
      },
      {
        title: "Student Loan Repayment Calculator",
        url: "https://www.consumerfinance.gov/paying-for-college/repay-student-debt/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
    ],
    disclaimer:
      "This calculator provides estimates based on standard amortization. Actual repayment terms depend on your loan servicer and chosen repayment plan. Income-driven repayment plans are not modeled here.",
  },
  related: ["compound-interest", "budget", "net-worth"],
  tags: ["student loan", "education debt", "loan payoff", "amortization", "finance"],
});
