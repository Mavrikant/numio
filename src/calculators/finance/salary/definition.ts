import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  annualSalary: z.number().min(1).max(10_000_000),
  filingStatus: z.enum(["single", "married", "head"]),
  stateIncomeTaxRate: z.number().min(0).max(15),
  preTaxDeductions: z.number().min(0),
});

export default defineCalculator({
  slug: "salary",
  category: "finance",
  priority: "P0",
  icon: "banknote",
  inputs: [
    {
      id: "annualSalary",
      type: { kind: "number", min: 1, max: 10_000_000, step: 1000, unit: "usd" },
      defaultValue: 75000,
      required: true,
    },
    {
      id: "filingStatus",
      type: {
        kind: "select",
        options: [
          { value: "single", i18nKey: "single" },
          { value: "married", i18nKey: "married" },
          { value: "head", i18nKey: "head" },
        ],
      },
      defaultValue: "single",
      required: true,
    },
    {
      id: "stateIncomeTaxRate",
      type: { kind: "number", min: 0, max: 15, step: 0.1, unit: "percent" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "preTaxDeductions",
      type: { kind: "number", min: 0, max: 100_000, step: 500, unit: "usd" },
      defaultValue: 0,
      required: true,
    },
  ],
  outputs: [
    { id: "netAnnual", format: "currency", precision: 0, highlight: true },
    { id: "netMonthly", format: "currency", precision: 0 },
    { id: "federalIncomeTax", format: "currency", precision: 0 },
    { id: "socialSecurityTax", format: "currency", precision: 0 },
    { id: "medicareTax", format: "currency", precision: 0 },
    { id: "stateIncomeTax", format: "currency", precision: 0 },
    { id: "totalTax", format: "currency", precision: 0 },
    { id: "effectiveTaxRate", format: "percent", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{Net} = \\text{Gross} - T_{federal} - T_{SS} - T_{Medicare} - T_{state}",
    references: [
      {
        title: "IRS Publication 15-T: Federal Income Tax Withholding Methods (2024)",
        url: "https://www.irs.gov/publications/p15t",
        authority: "Internal Revenue Service",
      },
      {
        title: "Social Security Wage Base 2024",
        url: "https://www.ssa.gov/oact/cola/cbb.html",
        authority: "Social Security Administration",
      },
      {
        title: "IRS Topic No. 751: Social Security and Medicare Withholding Rates",
        url: "https://www.irs.gov/taxtopics/tc751",
        authority: "Internal Revenue Service",
      },
    ],
    disclaimer:
      "This calculator provides estimates based on 2024 US federal tax brackets and standard FICA rates. It does not account for tax credits, deductions beyond the pre-tax deductions entered, or state-specific rules. Consult a tax professional for personalized advice.",
  },
  related: ["retirement", "compound-interest", "loan-amortization"],
  tags: ["salary", "take-home pay", "tax", "federal income tax", "FICA", "paycheck", "net pay"],
});
