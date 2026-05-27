import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "break-even",
  category: "finance",
  priority: "P2",
  icon: "trending-up",
  inputs: [
    {
      id: "fixedCosts",
      type: { kind: "number", min: 0, max: 1_000_000_000, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "variableCostPerUnit",
      type: { kind: "number", min: 0, max: 1_000_000, step: 0.01, unit: "usd" },
      defaultValue: 5,
      required: true,
    },
    {
      id: "pricePerUnit",
      type: { kind: "number", min: 0.01, max: 1_000_000, step: 0.01, unit: "usd" },
      defaultValue: 15,
      required: true,
    },
  ],
  outputs: [
    { id: "breakEvenUnits", format: "number", precision: 2, highlight: true },
    { id: "breakEvenRevenue", format: "currency", precision: 2, highlight: true },
    { id: "contributionMarginPerUnit", format: "currency", precision: 2 },
    { id: "contributionMarginPercent", format: "percent", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "Q_{BE} = \\dfrac{F}{P - V}, \\quad CM\\% = \\dfrac{P - V}{P} \\times 100",
    references: [
      {
        title: "Break-Even Analysis: Formula and Calculation",
        url: "https://www.investopedia.com/terms/b/breakevenanalysis.asp",
        authority: "Investopedia",
      },
      {
        title: "Contribution Margin: Definition, Overview, and How to Calculate",
        url: "https://www.investopedia.com/terms/c/contributionmargin.asp",
        authority: "Investopedia",
      },
      {
        title: "Horngren's Cost Accounting: A Managerial Emphasis",
        authority: "Datar & Rajan, Pearson",
      },
    ],
    disclaimer:
      "Break-even analysis assumes constant unit price and variable cost across the relevant range. Real-world pricing, discounts, mix changes, and step-fixed costs may shift the break-even point.",
  },
  related: ["margin", "roi", "discount"],
  tags: ["break-even", "contribution margin", "cost-volume-profit", "CVP", "business", "finance"],
});
