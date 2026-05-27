import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  currentBalance: z.number().min(1).max(2_000_000),
  currentAPR: z.number().min(0).max(20),
  currentRemainingYears: z.number().int().min(1).max(30),
  newAPR: z.number().min(0).max(20),
  newTermYears: z.number().int().min(5).max(30).default(30),
  closingCosts: z.number().min(0).max(50_000).default(3000),
});

export default defineCalculator({
  slug: "refinance",
  category: "finance",
  priority: "P1",
  icon: "home",
  inputs: [
    {
      id: "currentBalance",
      type: { kind: "number", min: 1, max: 2_000_000, step: 1000, unit: "usd" },
      defaultValue: 300_000,
      required: true,
    },
    {
      id: "currentAPR",
      type: { kind: "number", min: 0, max: 20, step: 0.01, unit: "percent" },
      defaultValue: 7.5,
      required: true,
    },
    {
      id: "currentRemainingYears",
      type: { kind: "number", min: 1, max: 30, step: 1, unit: "year", integer: true },
      defaultValue: 25,
      required: true,
    },
    {
      id: "newAPR",
      type: { kind: "number", min: 0, max: 20, step: 0.01, unit: "percent" },
      defaultValue: 6.0,
      required: true,
    },
    {
      id: "newTermYears",
      type: { kind: "number", min: 5, max: 30, step: 1, unit: "year", integer: true },
      defaultValue: 30,
      required: true,
    },
    {
      id: "closingCosts",
      type: { kind: "number", min: 0, max: 50_000, step: 100, unit: "usd" },
      defaultValue: 3000,
      required: false,
    },
  ],
  outputs: [
    { id: "currentMonthlyPayment", format: "currency", precision: 2 },
    { id: "newMonthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "monthlySavings", format: "currency", precision: 2 },
    { id: "breakEvenMonths", format: "number", precision: 0 },
    { id: "lifetimeInterestSaved", format: "currency", precision: 2 },
    { id: "isWorthRefinancing", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex: "M_{new} = P \\cdot \\frac{r_{new}(1+r_{new})^{n_{new}}}{(1+r_{new})^{n_{new}} - 1}",
    references: [
      {
        title: "Mortgage Refinance — Consumer Financial Protection Bureau",
        url: "https://www.consumerfinance.gov/owning-a-home/loan-options/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "Should You Refinance Your Mortgage?",
        url: "https://www.investopedia.com/mortgage/refinance/when-and-how-to-refinance-a-mortgage/",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "This calculator estimates refinance savings based on the inputs provided. Actual savings depend on loan-specific terms, lender fees, and tax implications. Consult a mortgage professional before making refinancing decisions.",
  },
  related: ["student-loan", "budget", "net-worth"],
  tags: ["refinance", "mortgage", "break-even", "home loan", "interest savings", "finance"],
});
