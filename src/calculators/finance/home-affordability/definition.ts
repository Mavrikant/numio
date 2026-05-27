import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "home-affordability",
  category: "finance",
  priority: "P1",
  icon: "home",
  inputs: [
    {
      id: "annualIncome",
      type: { kind: "number", min: 1, max: 100_000_000, step: 1000, unit: "usd" },
      defaultValue: 100000,
      required: true,
    },
    {
      id: "monthlyDebts",
      type: { kind: "number", min: 0, max: 1_000_000, step: 50, unit: "usd" },
      defaultValue: 500,
      required: false,
    },
    {
      id: "downPayment",
      type: { kind: "number", min: 0, max: 100_000_000, step: 1000, unit: "usd" },
      defaultValue: 40000,
      required: false,
    },
    {
      id: "annualRate",
      type: { kind: "number", min: 0, max: 30, step: 0.01, unit: "percent" },
      defaultValue: 7,
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
      type: { kind: "number", min: 0, max: 10, step: 0.05, unit: "percent" },
      defaultValue: 1.2,
      required: false,
    },
    {
      id: "insuranceRate",
      type: { kind: "number", min: 0, max: 5, step: 0.05, unit: "percent" },
      defaultValue: 0.35,
      required: false,
    },
  ],
  outputs: [
    { id: "maxHomePrice", format: "currency", precision: 0, highlight: true },
    { id: "maxLoanAmount", format: "currency", precision: 0 },
    { id: "monthlyPaymentAtMax", format: "currency", precision: 2, highlight: true },
    { id: "monthlyPi", format: "currency", precision: 2 },
    { id: "monthlyTax", format: "currency", precision: 2 },
    { id: "monthlyInsurance", format: "currency", precision: 2 },
    { id: "frontEndDti", format: "percent", precision: 2 },
    { id: "backEndDti", format: "percent", precision: 2 },
    { id: "bindingRule", format: "text" },
    { id: "affordabilityCategory", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "H = \\frac{\\text{maxPITI} + DP \\cdot M_{p,i}}{M_{p,i} + (t + i)/12},\\quad M_{p,i} = \\frac{r(1+r)^n}{(1+r)^n - 1}",
    references: [
      {
        title: "How much house can I afford? — the 28/36 rule",
        url: "https://www.consumerfinance.gov/owning-a-home/process/prepare/know-loan-options/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "Ability-to-Repay/Qualified Mortgage Rule (12 CFR §1026.43)",
        url: "https://www.consumerfinance.gov/rules-policy/regulations/1026/43/",
        authority: "CFPB — Regulation Z",
      },
      {
        title: "Selling Guide — Debt-to-Income Ratios",
        url: "https://selling-guide.fanniemae.com/sel/b3-6-02/debt-income-ratios",
        authority: "Fannie Mae",
      },
    ],
    disclaimer:
      "Affordability is an estimate based on the standard 28/36 underwriting heuristic and does not include HOA fees, mortgage insurance (PMI), closing costs, utilities, or maintenance. Lenders use their own DTI limits and credit-score adjustments; consult a mortgage professional before making an offer.",
  },
  related: ["mortgage", "refinance", "loan-amortization"],
  tags: [
    "home affordability",
    "28/36 rule",
    "DTI",
    "max home price",
    "PITI",
    "mortgage qualification",
    "first time buyer",
  ],
});
