import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema, DEPRECIATION_METHODS } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "depreciation",
  category: "finance",
  priority: "P2",
  icon: "trending-down",
  inputs: [
    {
      id: "assetCost",
      type: { kind: "number", min: 1, max: 1_000_000_000, step: 100, unit: "usd" },
      defaultValue: 50000,
      required: true,
    },
    {
      id: "salvageValue",
      type: { kind: "number", min: 0, max: 1_000_000_000, step: 100, unit: "usd" },
      defaultValue: 5000,
      required: true,
    },
    {
      id: "usefulLife",
      type: { kind: "number", min: 1, max: 100, step: 1, unit: "year", integer: true },
      defaultValue: 5,
      required: true,
    },
    {
      id: "method",
      type: {
        kind: "select",
        options: DEPRECIATION_METHODS.map((m) => ({
          value: m,
          i18nKey: m,
        })),
      },
      defaultValue: "straight-line",
      required: true,
    },
    {
      id: "decliningRate",
      type: { kind: "number", min: 0, max: 100, step: 0.5, unit: "percent" },
      defaultValue: 20,
      required: false,
    },
  ],
  outputs: [
    { id: "totalDepreciation", format: "currency", precision: 2, highlight: true },
    { id: "bookValueEndOfLife", format: "currency", precision: 2, highlight: true },
    { id: "annualSchedule", format: "list" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{SL: } D = \\dfrac{C - S}{n}, \\quad \\text{DDB: } D_t = B_t \\cdot \\dfrac{2}{n}, \\quad \\text{SYD: } D_t = (C - S) \\cdot \\dfrac{n - t + 1}{n(n+1)/2}",
    references: [
      {
        title: "Publication 946 — How To Depreciate Property",
        url: "https://www.irs.gov/publications/p946",
        authority: "Internal Revenue Service (IRS)",
      },
      {
        title: "Depreciation: Definition and Types, With Calculation Examples",
        url: "https://www.investopedia.com/terms/d/depreciation.asp",
        authority: "Investopedia",
      },
      {
        title: "Sum-of-the-Years' Digits Depreciation Method",
        url: "https://www.investopedia.com/terms/s/sum-of-the-years-digits.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "This calculator illustrates common book-depreciation methods. Tax depreciation in many jurisdictions (e.g., MACRS in the United States) uses prescribed tables and conventions that may differ from the textbook formulas shown here. Consult a qualified accountant for tax filings.",
  },
  related: ["roi", "loan-amortization", "compound-interest"],
  tags: ["depreciation", "straight-line", "declining-balance", "double-declining", "sum-of-years", "accounting", "asset"],
});
