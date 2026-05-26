import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  amount: z.number().min(0.01).max(1_000_000_000),
  vatRate: z.number().min(0).max(50).default(20),
  mode: z.enum(["exclusive", "inclusive"]).default("exclusive"),
});

export default defineCalculator({
  slug: "vat",
  category: "finance",
  priority: "P1",
  icon: "receipt",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "exclusive", i18nKey: "exclusive" },
          { value: "inclusive", i18nKey: "inclusive" },
        ],
      },
      defaultValue: "exclusive",
      required: true,
    },
    {
      id: "amount",
      type: { kind: "number", min: 0.01, max: 1_000_000_000, step: 0.01, unit: "usd" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "vatRate",
      type: { kind: "number", min: 0, max: 50, step: 0.5, unit: "percent" },
      defaultValue: 20,
      required: true,
    },
  ],
  outputs: [
    { id: "totalPrice", format: "currency", precision: 2, highlight: true },
    { id: "basePrice", format: "currency", precision: 2 },
    { id: "vatAmount", format: "currency", precision: 2 },
    { id: "effectiveRate", format: "percent", precision: 4 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{VAT} = \\text{Base} \\times \\frac{\\text{Rate}}{100}, \\quad \\text{Total} = \\text{Base} + \\text{VAT}",
    references: [
      {
        title: "Value-Added Tax (VAT)",
        url: "https://www.investopedia.com/terms/v/valueaddedtax.asp",
        authority: "Investopedia",
      },
      {
        title: "VAT rates overview",
        url: "https://taxation-customs.ec.europa.eu/taxation/vat/vat-rates_en",
        authority: "European Commission",
      },
    ],
    disclaimer:
      "VAT rates vary by country and product category. Always verify the applicable rate with local tax authorities. This calculator does not account for reduced, zero, or exempt VAT categories.",
  },
  related: ["discount", "tip", "budget"],
  tags: ["vat", "sales tax", "gst", "tax", "invoice", "finance"],
});
