import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    balance: z.number().min(1).max(500_000),
    apr: z.number().min(0).max(100),
    paymentMode: z.enum(["minimum", "fixed"]),
    fixedPayment: z.number().min(0).optional(),
    minimumPaymentPct: z.number().min(0.1).max(100).default(2),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMode === "fixed") {
      if (data.fixedPayment === undefined || data.fixedPayment <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["fixedPayment"],
          message:
            "Fixed payment must be a positive number when payment mode is 'fixed'.",
        });
      }
    }
  });

export default defineCalculator({
  slug: "credit-card-payoff",
  category: "finance",
  priority: "P1",
  icon: "credit-card",
  inputs: [
    {
      id: "balance",
      type: { kind: "number", min: 1, max: 500000, step: 100, unit: "usd" },
      defaultValue: 5000,
      required: true,
    },
    {
      id: "apr",
      type: { kind: "number", min: 0, max: 100, step: 0.1, unit: "percent" },
      defaultValue: 20,
      required: true,
    },
    {
      id: "paymentMode",
      type: {
        kind: "select",
        options: [
          { value: "minimum", i18nKey: "minimum" },
          { value: "fixed", i18nKey: "fixed" },
        ],
      },
      defaultValue: "fixed",
      required: true,
    },
    {
      id: "fixedPayment",
      type: { kind: "number", min: 1, max: 100000, step: 10, unit: "usd" },
      defaultValue: 200,
      required: false,
    },
    {
      id: "minimumPaymentPct",
      type: { kind: "number", min: 0.1, max: 100, step: 0.1, unit: "percent" },
      defaultValue: 2,
      required: false,
    },
  ],
  outputs: [
    {
      id: "monthsToPayoff",
      format: "number",
      precision: 0,
      highlight: true,
    },
    {
      id: "totalPaid",
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
    {
      id: "interestSavings",
      format: "number",
      precision: 2,
      unit: "usd",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{interest}_n = \\text{balance}_{n-1} \\times \\frac{\\text{APR}}{12 \\times 100}",
    references: [
      {
        title: "Credit Card Payoff Calculator",
        url: "https://www.consumerfinance.gov/owning-a-home/loan-options/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
    ],
    disclaimer:
      "This is an estimate of time and cost to pay off a credit card balance. It does not account for new charges, penalty rates, or promotional APR periods.",
  },
  related: ["savings-goal", "income-tax"],
  tags: [
    "credit card",
    "debt payoff",
    "minimum payment",
    "APR",
    "interest calculator",
  ],
});
