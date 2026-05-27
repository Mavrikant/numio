import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "down-payment",
  category: "finance",
  priority: "P1",
  icon: "home",
  inputs: [
    {
      id: "homePrice",
      type: { kind: "number", min: 1000, max: 100_000_000, step: 1000, unit: "usd" },
      defaultValue: 400000,
      required: true,
    },
    {
      id: "downPaymentPercent",
      type: { kind: "number", min: 0, max: 100, step: 0.5, unit: "percent" },
      defaultValue: 20,
      required: false,
    },
    {
      id: "downPaymentAmount",
      type: { kind: "number", min: 0, max: 100_000_000, step: 500, unit: "usd" },
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
      type: { kind: "number", min: 1, max: 40, step: 1, unit: "year", integer: true },
      defaultValue: 30,
      required: true,
    },
    {
      id: "propertyTaxRate",
      type: { kind: "number", min: 0, max: 10, step: 0.01, unit: "percent" },
      defaultValue: 1.1,
      required: false,
    },
    {
      id: "insuranceRate",
      type: { kind: "number", min: 0, max: 10, step: 0.01, unit: "percent" },
      defaultValue: 0.35,
      required: false,
    },
    {
      id: "pmiRate",
      type: { kind: "number", min: 0, max: 5, step: 0.05, unit: "percent" },
      defaultValue: 0.7,
      required: false,
    },
  ],
  outputs: [
    { id: "downPaymentAmount", format: "currency", precision: 2, highlight: true },
    { id: "downPaymentPercent", format: "percent", precision: 2 },
    { id: "loanAmount", format: "currency", precision: 2 },
    { id: "monthlyPrincipalInterest", format: "currency", precision: 2 },
    { id: "monthlyTax", format: "currency", precision: 2 },
    { id: "monthlyInsurance", format: "currency", precision: 2 },
    { id: "monthlyPmi", format: "currency", precision: 2 },
    { id: "totalMonthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "pmiRequired", format: "number", precision: 0 },
    { id: "loanToValue", format: "percent", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "M = P \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1} \\; + \\; \\frac{t \\cdot H}{12} + \\frac{i \\cdot H}{12} + \\frac{p \\cdot P}{12}",
    references: [
      {
        title: "How much should you save for a down payment?",
        url: "https://www.consumerfinance.gov/owning-a-home/process/explore/how-much-down-payment/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "Private Mortgage Insurance (PMI) — what it is and when it's required",
        url: "https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "Mortgage Calculator",
        url: "https://www.freddiemac.com/tools/calculators/mortgage-calculator",
        authority: "Freddie Mac",
      },
    ],
    disclaimer:
      "Estimates only. Actual payments depend on lender fees, escrow, HOA dues, and locale-specific taxes. PMI rates vary by lender and credit profile. Consult a licensed mortgage professional before making financial decisions.",
  },
  related: ["mortgage", "loan-amortization", "refinance"],
  tags: [
    "down payment",
    "mortgage",
    "home loan",
    "PMI",
    "PITI",
    "monthly payment",
    "real estate",
  ],
});
