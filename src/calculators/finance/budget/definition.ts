import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  monthlyIncome: z.number().min(0).max(1_000_000),
  needsPct: z.number().min(0).max(100).default(50),
  wantsPct: z.number().min(0).max(100).default(30),
  savingsPct: z.number().min(0).max(100).default(20),
}).refine(
  (data) => Math.abs(data.needsPct + data.wantsPct + data.savingsPct - 100) < 0.001,
  { message: "needsPct + wantsPct + savingsPct must equal 100" },
);

export default defineCalculator({
  slug: "budget",
  category: "finance",
  priority: "P1",
  icon: "wallet",
  inputs: [
    {
      id: "monthlyIncome",
      type: { kind: "number", min: 0, max: 1_000_000, step: 100, unit: "usd" },
      defaultValue: 5000,
      required: true,
    },
    {
      id: "needsPct",
      type: { kind: "number", min: 0, max: 100, step: 1, unit: "percent" },
      defaultValue: 50,
      required: true,
    },
    {
      id: "wantsPct",
      type: { kind: "number", min: 0, max: 100, step: 1, unit: "percent" },
      defaultValue: 30,
      required: true,
    },
    {
      id: "savingsPct",
      type: { kind: "number", min: 0, max: 100, step: 1, unit: "percent" },
      defaultValue: 20,
      required: true,
    },
  ],
  outputs: [
    { id: "needsAmount", format: "currency", precision: 2 },
    { id: "wantsAmount", format: "currency", precision: 2 },
    { id: "savingsAmount", format: "currency", precision: 2, highlight: true },
    { id: "annualIncome", format: "currency", precision: 2 },
    { id: "annualSavings", format: "currency", precision: 2 },
    { id: "savingsRate", format: "percent", precision: 1 },
    { id: "isBalanced", format: "text" },
    { id: "monthlyEmergencyFund", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Needs} = I \\times \\frac{N\\%}{100},\\quad \\text{Wants} = I \\times \\frac{W\\%}{100},\\quad \\text{Savings} = I \\times \\frac{S\\%}{100}",
    references: [
      {
        title: "50/30/20 Budget Rule — Consumer Financial Protection Bureau",
        url: "https://www.consumerfinance.gov/about-us/blog/the-50-30-20-rule/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "50/30/20 Rule: A Simple Method for Budgeting",
        url: "https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "This calculator applies the 50/30/20 budgeting framework as a guideline. Individual financial circumstances vary. Consult a financial advisor for personalized budgeting advice.",
  },
  related: ["net-worth", "savings-goal", "student-loan"],
  tags: ["budget", "50/30/20", "savings", "needs", "wants", "personal finance", "planning"],
});
