import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "sales-commission",
  category: "finance",
  priority: "P2",
  icon: "badge-dollar-sign",
  inputs: [
    { id: "saleAmount", type: { kind: "number", min: 0, max: 1e12, step: 100, unit: "usd" }, defaultValue: 50000, required: true },
    { id: "commissionRate", type: { kind: "number", min: 0, max: 100, step: 0.1, unit: "percent" }, defaultValue: 5, required: true },
    { id: "baseSalary", type: { kind: "number", min: 0, max: 1e12, step: 100, unit: "usd" }, defaultValue: 0, required: false },
  ],
  outputs: [
    { id: "commission", format: "currency", precision: 2, highlight: true },
    { id: "totalPay", format: "currency", precision: 2 },
    { id: "effectiveRate", format: "percent", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{commission} = \\text{sale} \\times \\frac{\\text{rate}}{100}",
    references: [{ title: "Sales commission", url: "https://www.investopedia.com/terms/c/commission.asp", authority: "Investopedia" }],
  },
  related: ["salary", "paycheck", "margin"],
  tags: ["sales commission", "commission calculator", "commission rate", "earnings", "base plus commission"],
});
