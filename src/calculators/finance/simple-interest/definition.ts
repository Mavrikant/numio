import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "simple-interest",
  category: "finance",
  priority: "P1",
  icon: "percent",
  inputs: [
    {
      id: "principal",
      type: { kind: "number", min: 1, max: 1e12, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "annualRatePct",
      type: { kind: "number", min: 0, max: 1000, step: 0.01, unit: "percent" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "timeValue",
      type: { kind: "number", min: 0.01, max: 1e6, step: 1 },
      defaultValue: 3,
      required: true,
    },
    {
      id: "timeUnit",
      type: {
        kind: "select",
        options: [
          { value: "years", i18nKey: "years" },
          { value: "months", i18nKey: "months" },
          { value: "days", i18nKey: "days" },
        ],
      },
      defaultValue: "years",
      required: true,
    },
  ],
  outputs: [
    { id: "interest", format: "currency", precision: 2, highlight: true },
    { id: "totalAmount", format: "currency", precision: 2 },
    { id: "years", format: "number", precision: 4, unit: "year" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "I = P \\cdot r \\cdot t, \\quad A = P + I",
    references: [
      {
        title: "Simple interest — definition and formula",
        url: "https://www.investopedia.com/terms/s/simple_interest.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "Simple interest accrues only on the original principal. Most loans and savings accounts use compound interest — use the compound-interest calculator for those.",
  },
  related: ["compound-interest", "loan-amortization", "cd-yield"],
  tags: ["simple interest", "interest", "principal", "loan interest", "savings interest", "I=Prt"],
});
