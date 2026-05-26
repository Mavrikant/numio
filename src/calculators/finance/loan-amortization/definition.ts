import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  principal: z.number().min(100).max(10_000_000),
  annualRate: z.number().min(0).max(50),
  termMonths: z.number().int().min(1).max(600),
  startDate: z.string().optional(),
});

export default defineCalculator({
  slug: "loan-amortization",
  category: "finance",
  priority: "P0",
  icon: "table",
  inputs: [
    {
      id: "principal",
      type: { kind: "number", min: 100, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "annualRate",
      type: { kind: "number", min: 0, max: 50, step: 0.01, unit: "percent" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "termMonths",
      type: { kind: "number", min: 1, max: 600, step: 1, unit: "month", integer: true },
      defaultValue: 60,
      required: true,
    },
    {
      id: "startDate",
      type: { kind: "date" },
      defaultValue: "",
      required: false,
    },
  ],
  outputs: [
    { id: "monthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "totalPayment", format: "currency", precision: 2 },
    { id: "totalInterest", format: "currency", precision: 2 },
    { id: "amortizationSchedule", format: "list" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "M = P \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}",
    references: [
      {
        title: "Amortization",
        url: "https://www.investopedia.com/terms/a/amortization.asp",
        authority: "Investopedia",
      },
      {
        title: "Loan Amortization Schedule",
        url: "https://www.consumerfinance.gov/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
    ],
    disclaimer:
      "This calculator provides estimates for principal and interest only. Actual loan costs depend on lender fees, insurance, and other factors.",
  },
  related: ["mortgage", "auto-loan", "compound-interest"],
  tags: ["loan", "amortization", "schedule", "payment", "finance", "debt"],
});
