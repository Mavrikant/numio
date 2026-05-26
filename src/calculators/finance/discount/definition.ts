import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  originalPrice: z.number().min(0.01).max(1_000_000_000),
  discountPct: z.number().min(0).max(100).default(20),
  taxRate: z.number().min(0).max(50).default(0),
  mode: z.enum(["discount_pct", "final_price"]),
  salePrice: z.number().min(0).max(1_000_000_000).optional(),
});

export default defineCalculator({
  slug: "discount",
  category: "finance",
  priority: "P1",
  icon: "tag",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "discount_pct", i18nKey: "discount_pct" },
          { value: "final_price", i18nKey: "final_price" },
        ],
      },
      defaultValue: "discount_pct",
      required: true,
    },
    {
      id: "originalPrice",
      type: { kind: "number", min: 0.01, max: 1_000_000_000, step: 0.01, unit: "usd" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "discountPct",
      type: { kind: "number", min: 0, max: 100, step: 1, unit: "percent" },
      defaultValue: 20,
      required: false,
    },
    {
      id: "salePrice",
      type: { kind: "number", min: 0, max: 1_000_000_000, step: 0.01, unit: "usd" },
      defaultValue: 80,
      required: false,
    },
    {
      id: "taxRate",
      type: { kind: "number", min: 0, max: 50, step: 0.5, unit: "percent" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "salePrice", format: "currency", precision: 2, highlight: true },
    { id: "savings", format: "currency", precision: 2 },
    { id: "discountPct", format: "percent", precision: 2 },
    { id: "finalPriceWithTax", format: "currency", precision: 2 },
    { id: "savingsPct", format: "percent", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Sale Price} = \\text{Original} \\times \\left(1 - \\frac{\\text{Discount}\\%}{100}\\right)",
    references: [
      {
        title: "Discount",
        url: "https://www.investopedia.com/terms/d/discount.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "Tax rates vary by jurisdiction. Always check your local sales tax rate. This calculator does not account for compound discounts or promotional stacking.",
  },
  related: ["vat", "tip", "budget"],
  tags: ["discount", "sale price", "savings", "retail", "shopping", "finance"],
});
