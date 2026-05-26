import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  cashAndSavings: z.number().min(0).default(0),
  investmentAccounts: z.number().min(0).default(0),
  retirementAccounts: z.number().min(0).default(0),
  homeValue: z.number().min(0).default(0),
  otherRealEstate: z.number().min(0).default(0),
  vehicleValue: z.number().min(0).default(0),
  otherAssets: z.number().min(0).default(0),
  mortgage: z.number().min(0).default(0),
  carLoans: z.number().min(0).default(0),
  studentLoans: z.number().min(0).default(0),
  creditCardDebt: z.number().min(0).default(0),
  otherDebts: z.number().min(0).default(0),
});

export default defineCalculator({
  slug: "net-worth",
  category: "finance",
  priority: "P1",
  icon: "chart-pie",
  inputs: [
    {
      id: "cashAndSavings",
      type: { kind: "number", min: 0, step: 1000, unit: "usd" },
      defaultValue: 10000,
      required: false,
    },
    {
      id: "investmentAccounts",
      type: { kind: "number", min: 0, step: 1000, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "retirementAccounts",
      type: { kind: "number", min: 0, step: 1000, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "homeValue",
      type: { kind: "number", min: 0, step: 1000, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "otherRealEstate",
      type: { kind: "number", min: 0, step: 1000, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "vehicleValue",
      type: { kind: "number", min: 0, step: 500, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "otherAssets",
      type: { kind: "number", min: 0, step: 500, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "mortgage",
      type: { kind: "number", min: 0, step: 1000, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "carLoans",
      type: { kind: "number", min: 0, step: 500, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "studentLoans",
      type: { kind: "number", min: 0, step: 500, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "creditCardDebt",
      type: { kind: "number", min: 0, step: 100, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "otherDebts",
      type: { kind: "number", min: 0, step: 500, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "totalAssets", format: "currency", precision: 2 },
    { id: "totalLiabilities", format: "currency", precision: 2 },
    { id: "netWorth", format: "currency", precision: 2, highlight: true },
    { id: "debtToAssetRatio", format: "percent", precision: 1 },
    { id: "liquidAssets", format: "currency", precision: 2 },
    { id: "illiquidAssets", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Net Worth} = \\text{Total Assets} - \\text{Total Liabilities}",
    references: [
      {
        title: "How to Calculate Your Net Worth — Investopedia",
        url: "https://www.investopedia.com/articles/personal-finance/040915/how-calculate-your-net-worth.asp",
        authority: "Investopedia",
      },
      {
        title: "Calculating Your Net Worth — Consumer Financial Protection Bureau",
        url: "https://www.consumerfinance.gov/consumer-tools/financial-well-being/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
    ],
    disclaimer:
      "This calculator provides an estimate of your net worth based on the values you enter. Asset values (especially real estate and investments) fluctuate over time. Consult a financial advisor for a comprehensive financial assessment.",
  },
  related: ["budget", "savings-goal", "refinance"],
  tags: ["net worth", "assets", "liabilities", "wealth", "personal finance", "balance sheet"],
});
