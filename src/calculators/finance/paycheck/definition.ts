import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "paycheck",
  category: "finance",
  priority: "P1",
  icon: "wallet",
  inputs: [
    {
      id: "grossSalary",
      type: { kind: "number", min: 0, max: 10_000_000, step: 1000, unit: "usd" },
      defaultValue: 75000,
      required: true,
    },
    {
      id: "payFrequency",
      type: {
        kind: "select",
        options: [
          { value: "weekly", i18nKey: "weekly" },
          { value: "biweekly", i18nKey: "biweekly" },
          { value: "semimonthly", i18nKey: "semimonthly" },
          { value: "monthly", i18nKey: "monthly" },
          { value: "annual", i18nKey: "annual" },
        ],
      },
      defaultValue: "biweekly",
      required: true,
    },
    {
      id: "filingStatus",
      type: {
        kind: "select",
        options: [
          { value: "single", i18nKey: "single" },
          { value: "married", i18nKey: "married" },
        ],
      },
      defaultValue: "single",
      required: true,
    },
    {
      id: "stateTaxRate",
      type: { kind: "number", min: 0, max: 15, step: 0.1, unit: "percent" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "pretax401k",
      type: { kind: "number", min: 0, max: 100_000, step: 100, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "pretaxHsa",
      type: { kind: "number", min: 0, max: 50_000, step: 100, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "perPeriodNet", format: "currency", precision: 2, highlight: true },
    { id: "perPeriodGross", format: "currency", precision: 2 },
    { id: "perPeriodFederalTax", format: "currency", precision: 2 },
    { id: "perPeriodFica", format: "currency", precision: 2 },
    { id: "perPeriodStateTax", format: "currency", precision: 2 },
    { id: "annualNet", format: "currency", precision: 2 },
    { id: "annualGross", format: "currency", precision: 2 },
    { id: "annualFederalTax", format: "currency", precision: 2 },
    { id: "annualFica", format: "currency", precision: 2 },
    { id: "annualStateTax", format: "currency", precision: 2 },
    { id: "annualPretax", format: "currency", precision: 2 },
    { id: "effectiveTaxRate", format: "percent", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{Net} = \\text{Gross} - \\text{FedTax} - \\text{FICA} - \\text{StateTax} - \\text{Pretax}",
    references: [
      {
        title: "IRS Revenue Procedure 2023-34 (2024 tax-year inflation adjustments)",
        url: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2024",
        authority: "Internal Revenue Service (IRS)",
      },
      {
        title: "Contribution and Benefit Base (Social Security)",
        url: "https://www.ssa.gov/oact/cola/cbb.html",
        authority: "Social Security Administration",
      },
      {
        title: "Topic No. 751 — Social Security and Medicare Withholding Rates",
        url: "https://www.irs.gov/taxtopics/tc751",
        authority: "Internal Revenue Service (IRS)",
      },
      {
        title: "Questions and Answers for the Additional Medicare Tax",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax",
        authority: "Internal Revenue Service (IRS)",
      },
    ],
    disclaimer:
      "This calculator provides an estimate of US federal income tax, FICA, and optional flat-rate state tax based on 2024 IRS and SSA figures. It does not include local taxes, supplemental withholding, post-tax deductions, or special tax credits. Consult a tax professional for accurate payroll planning.",
  },
  related: ["income-tax", "salary", "budget"],
  tags: [
    "paycheck",
    "take home pay",
    "net pay",
    "FICA",
    "federal tax",
    "payroll",
    "withholding",
    "US tax",
  ],
});
