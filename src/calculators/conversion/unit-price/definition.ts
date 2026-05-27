import { defineCalculator } from "@/types/calculator";
import { inputSchema, compute } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "unit-price",
  category: "conversion",
  priority: "P2",
  icon: "shopping-cart",
  inputs: [
    { id: "priceA", type: { kind: "number", min: 0.01, max: 1e9, step: 0.01, unit: "usd" }, defaultValue: 3.5, required: true },
    { id: "quantityA", type: { kind: "number", min: 0.001, max: 1e9, step: 1 }, defaultValue: 500, required: true },
    { id: "priceB", type: { kind: "number", min: 0.01, max: 1e9, step: 0.01, unit: "usd" }, defaultValue: 6, required: true },
    { id: "quantityB", type: { kind: "number", min: 0.001, max: 1e9, step: 1 }, defaultValue: 1000, required: true },
  ],
  outputs: [
    { id: "unitPriceA", format: "currency", precision: 4, highlight: true },
    { id: "unitPriceB", format: "currency", precision: 4, highlight: true },
    { id: "savingsPercent", format: "percent", precision: 1 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "\\text{unit price} = \\frac{\\text{price}}{\\text{quantity}}",
    references: [{ title: "Unit price", url: "https://en.wikipedia.org/wiki/Unit_price", authority: "Wikipedia" }],
    disclaimer: "Compare like with like — use the same quantity unit (e.g. grams or millilitres) for both products.",
  },
  related: ["discount", "tip", "vat"],
  tags: ["unit price calculator", "price per unit", "cost comparison", "price comparison", "best value"],
});
