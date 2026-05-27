import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema, MARGIN_MODES } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "margin",
  category: "finance",
  priority: "P2",
  icon: "percent",
  inputs: [
    {
      id: "mode",
      type: {
        kind: "select",
        options: MARGIN_MODES.map((m) => ({ value: m, i18nKey: m })),
      },
      defaultValue: "compute-margin",
      required: true,
    },
    {
      id: "cost",
      type: { kind: "number", min: 0, max: 1_000_000_000, step: 0.01, unit: "usd" },
      defaultValue: 100,
      required: true,
    },
    {
      id: "revenue",
      type: { kind: "number", min: 0, max: 1_000_000_000, step: 0.01, unit: "usd" },
      defaultValue: 150,
      required: false,
    },
    {
      id: "marginPercent",
      type: { kind: "number", min: -99.99, max: 99.99, step: 0.01, unit: "percent" },
      defaultValue: 30,
      required: false,
    },
    {
      id: "markupPercent",
      type: { kind: "number", min: 0, max: 10000, step: 0.01, unit: "percent" },
      defaultValue: 50,
      required: false,
    },
  ],
  outputs: [
    { id: "revenue", format: "currency", precision: 2, highlight: true },
    { id: "profit", format: "currency", precision: 2, highlight: true },
    { id: "profitMarginPercent", format: "percent", precision: 2 },
    { id: "markupPercent", format: "percent", precision: 2 },
    { id: "cost", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{Margin\\%} = \\dfrac{R - C}{R} \\times 100, \\quad \\text{Markup\\%} = \\dfrac{R - C}{C} \\times 100",
    references: [
      {
        title: "Profit Margin Defined: How to Calculate and Compare",
        url: "https://www.investopedia.com/terms/p/profitmargin.asp",
        authority: "Investopedia",
      },
      {
        title: "Markup vs. Margin: What's the Difference?",
        url: "https://www.investopedia.com/ask/answers/100214/what-difference-between-gross-margin-and-markup.asp",
        authority: "Investopedia",
      },
      {
        title: "How to Calculate Gross Profit Margin",
        url: "https://corporatefinanceinstitute.com/resources/accounting/gross-margin-ratio/",
        authority: "Corporate Finance Institute",
      },
    ],
    disclaimer:
      "This calculator computes gross figures. Net profit margin requires subtracting operating expenses, taxes, and interest from gross profit.",
  },
  related: ["break-even", "roi", "discount"],
  tags: ["margin", "markup", "profit", "gross margin", "pricing", "business"],
});
