import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    loanAmount: z.number().min(1000).max(10_000_000),
    annualRate: z.number().min(0).max(30),
    termYears: z.number().int().min(1).max(30),
    downPayment: z.number().min(0).default(0),
  })
  .refine((d) => d.downPayment <= d.loanAmount, {
    path: ["downPayment"],
    message: "Down payment cannot exceed loan amount",
  });

export default defineCalculator({
  slug: "mortgage",
  category: "finance",
  priority: "P0",
  icon: "home",
  inputs: [
    {
      id: "loanAmount",
      type: { kind: "number", min: 1000, max: 10_000_000, step: 1000, unit: "usd" },
      defaultValue: 300000,
      required: true,
    },
    {
      id: "downPayment",
      type: { kind: "number", min: 0, max: 10_000_000, step: 1000, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "annualRate",
      type: { kind: "number", min: 0, max: 30, step: 0.01, unit: "percent" },
      defaultValue: 6.5,
      required: true,
    },
    {
      id: "termYears",
      type: { kind: "number", min: 1, max: 30, step: 1, unit: "year", integer: true },
      defaultValue: 30,
      required: true,
    },
  ],
  outputs: [
    { id: "monthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "totalPayment", format: "currency", precision: 2 },
    { id: "totalInterest", format: "currency", precision: 2 },
    { id: "principalAmount", format: "currency", precision: 2 },
    { id: "amortizationSchedule", format: "list" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "M = P \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}",
    references: [
      {
        title: "How to Calculate Your Monthly Mortgage Payment",
        url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-calculate-my-monthly-mortgage-payment-en-1940/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "Mortgage Calculator",
        url: "https://www.freddiemac.com/tools/calculators/mortgage-calculator",
        authority: "Freddie Mac",
      },
    ],
    disclaimer:
      "This calculator provides estimates only. Actual payments may vary based on lender fees, insurance, property taxes, and other factors. Consult a licensed mortgage professional before making financial decisions.",
  },
  related: ["loan-amortization", "auto-loan", "compound-interest"],
  tags: ["mortgage", "home loan", "monthly payment", "amortization", "real estate", "finance"],
});
