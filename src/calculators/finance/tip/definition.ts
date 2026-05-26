import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  billAmount: z.number().min(0.01).max(100000),
  tipPct: z.number().min(0).max(100),
  numberOfPeople: z.number().int().min(1).max(100),
  roundUp: z.boolean(),
});

export default defineCalculator({
  slug: "tip",
  category: "finance",
  priority: "P1",
  icon: "receipt",
  inputs: [
    {
      id: "billAmount",
      type: { kind: "number", min: 0.01, max: 100000, step: 0.5, unit: "usd" },
      defaultValue: 50,
      required: true,
    },
    {
      id: "tipPct",
      type: { kind: "number", min: 0, max: 100, step: 1, unit: "percent" },
      defaultValue: 18,
      required: true,
    },
    {
      id: "numberOfPeople",
      type: { kind: "number", min: 1, max: 100, step: 1, integer: true },
      defaultValue: 1,
      required: true,
    },
    {
      id: "roundUp",
      type: { kind: "toggle" },
      defaultValue: true,
      required: false,
    },
  ],
  outputs: [
    { id: "tipAmount", format: "currency", precision: 2, highlight: true },
    { id: "totalAmount", format: "currency", precision: 2 },
    { id: "perPersonTotal", format: "currency", precision: 2 },
    { id: "perPersonTip", format: "currency", precision: 2 },
    { id: "totalRounded", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Tip} = \\text{Bill} \\times \\frac{\\text{Tip\\%}}{100}",
    references: [
      {
        title: "Tipping Etiquette",
        url: "https://www.emilypost.com/advice/tipping-guidelines-for-restaurants",
        authority: "Emily Post Institute",
      },
      {
        title: "Reporting Tip Income",
        url: "https://www.irs.gov/businesses/small-businesses-self-employed/tip-recordkeeping-and-reporting",
        authority: "IRS",
      },
    ],
    disclaimer:
      "Tip customs vary by country, region, and establishment. Always check local customs and any included service charges.",
  },
  related: ["discount", "vat", "budget"],
  tags: ["tip", "gratuity", "restaurant", "split bill", "dining", "finance"],
});
