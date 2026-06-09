import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema, SALES_TAX_MODES } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "sales-tax",
  category: "finance",
  priority: "P1",
  icon: "receipt",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: SALES_TAX_MODES.map((m) => ({ value: m, i18nKey: m })),
      },
      defaultValue: "add",
      required: true,
    },
    {
      id: "amount",
      type: { kind: "number", min: 0, max: 1_000_000_000, step: 0.01, unit: "usd" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "taxRate",
      type: { kind: "number", min: 0, max: 100, step: 0.01, unit: "percent" },
      defaultValue: 8.25,
      required: true,
    },
  ],
  outputs: [
    { id: "totalAmount", format: "currency", precision: 2, highlight: true },
    { id: "taxAmount", format: "currency", precision: 2, highlight: true },
    { id: "preTaxAmount", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    formulaLatex:
      "\\text{Total} = \\text{Amount} \\times \\left(1 + \\dfrac{\\text{Rate}}{100}\\right)",
    references: [
      {
        title: "Sales Tax Definition: How It Works and How to Calculate It",
        url: "https://www.investopedia.com/terms/s/salestax.asp",
        authority: "Investopedia",
      },
      {
        title: "State and Local Sales Tax Rates",
        url: "https://taxfoundation.org/data/all/state/2024-sales-taxes/",
        authority: "Tax Foundation",
      },
    ],
    disclaimer:
      "Sales tax rates vary by state, county, and city, and some goods are exempt or taxed at special rates. Confirm the combined rate that applies to your purchase.",
  },
  related: ["vat", "discount", "tip", "income-tax"],
  tags: ["sales tax", "tax", "vat", "total price", "pre-tax", "finance"],
});
