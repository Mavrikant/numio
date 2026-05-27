import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "apy-apr-converter",
  category: "finance",
  priority: "P2",
  icon: "percent",
  inputs: [
    {
      id: "mode",
      type: { kind: "select", options: [{ value: "apr-to-apy", i18nKey: "apr-to-apy" }, { value: "apy-to-apr", i18nKey: "apy-to-apr" }] },
      defaultValue: "apr-to-apy",
      required: true,
    },
    { id: "rate", type: { kind: "number", min: 0, max: 1000, step: 0.01, unit: "percent" }, defaultValue: 12, required: true },
    {
      id: "compounding",
      type: {
        kind: "select",
        options: [
          { value: "daily", i18nKey: "daily" },
          { value: "monthly", i18nKey: "monthly" },
          { value: "quarterly", i18nKey: "quarterly" },
          { value: "semiannual", i18nKey: "semiannual" },
          { value: "annual", i18nKey: "annual" },
        ],
      },
      defaultValue: "monthly",
      required: true,
    },
  ],
  outputs: [
    { id: "apy", format: "percent", precision: 3, highlight: true },
    { id: "apr", format: "percent", precision: 3 },
    { id: "difference", format: "percent", precision: 3 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{APY} = \\left(1 + \\frac{\\text{APR}}{n}\\right)^n - 1",
    references: [{ title: "Annual percentage yield", url: "https://en.wikipedia.org/wiki/Annual_percentage_yield", authority: "Wikipedia" }],
    disclaimer: "APR is the nominal annual rate; APY (or EAR) reflects the effect of compounding. Lenders and banks may quote either — use this to compare like for like.",
  },
  related: ["compound-interest", "cd-yield", "rule-of-72"],
  tags: ["apr to apy", "apy apr converter", "effective annual rate", "ear calculator", "nominal vs effective rate"],
});
