import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "present-value",
  category: "finance",
  priority: "P1",
  icon: "banknote",
  inputs: [
    { id: "futureValue", type: { kind: "number", min: 1, max: 1e12, step: 100, unit: "usd" }, defaultValue: 10000, required: true },
    { id: "rate", type: { kind: "number", min: 0, max: 100, step: 0.01, unit: "percent" }, defaultValue: 5, required: true },
    { id: "periods", type: { kind: "number", min: 0.01, max: 1000, step: 1, unit: "year" }, defaultValue: 10, required: true },
  ],
  outputs: [
    { id: "presentValue", format: "currency", precision: 2, highlight: true },
    { id: "totalDiscount", format: "currency", precision: 2 },
    { id: "discountFactor", format: "number", precision: 4 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "PV = \\frac{FV}{(1 + r)^n}",
    references: [{ title: "Present value", url: "https://www.investopedia.com/terms/p/presentvalue.asp", authority: "Investopedia" }],
    disclaimer: "Discounts a single future amount to today using a constant periodic rate. For recurring cash flows use a net present value (NPV) model.",
  },
  related: ["compound-interest", "investment-return", "retirement"],
  tags: ["present value", "pv calculator", "discounted value", "time value of money", "discount rate"],
});
