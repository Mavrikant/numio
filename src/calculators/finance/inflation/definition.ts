import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  amount: z.number().min(0.01).max(1_000_000_000),
  inflationRate: z.number().min(0).max(50),
  years: z.number().int().min(1).max(100),
  mode: z.enum(["future_cost", "present_value"]),
});

export default defineCalculator({
  slug: "inflation",
  category: "finance",
  priority: "P1",
  icon: "trending-down",
  inputs: [
    {
      id: "amount",
      type: { kind: "number", min: 0.01, max: 1_000_000_000, step: 100, unit: "usd" },
      defaultValue: 1000,
      required: true,
    },
    {
      id: "inflationRate",
      type: { kind: "number", min: 0, max: 50, step: 0.1, unit: "percent" },
      defaultValue: 3,
      required: true,
    },
    {
      id: "years",
      type: { kind: "number", min: 1, max: 100, step: 1, unit: "year", integer: true },
      defaultValue: 10,
      required: true,
    },
    {
      id: "mode",
      type: {
        kind: "select",
        options: [
          { value: "future_cost", i18nKey: "future_cost" },
          { value: "present_value", i18nKey: "present_value" },
        ],
      },
      defaultValue: "future_cost",
      required: true,
    },
  ],
  outputs: [
    { id: "result", format: "currency", precision: 2, highlight: true },
    { id: "purchasingPowerLoss", format: "percent", precision: 2 },
    { id: "cumulativeInflation", format: "percent", precision: 2 },
    { id: "realValueToday", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "FV = PV \\times (1 + r)^{n}",
    references: [
      {
        title: "Consumer Price Index (CPI)",
        url: "https://www.bls.gov/cpi/",
        authority: "U.S. Bureau of Labor Statistics",
      },
      {
        title: "Inflation",
        url: "https://www.investopedia.com/terms/i/inflation.asp",
        authority: "Investopedia",
      },
      {
        title: "Federal Reserve Inflation Target",
        url: "https://www.federalreserve.gov/faqs/economy_14400.htm",
        authority: "Federal Reserve",
      },
    ],
    disclaimer:
      "This calculator uses a fixed annual inflation rate. Actual inflation varies year to year. CPI data should be used for precise historical calculations.",
  },
  related: ["compound-interest", "savings-goal", "roi"],
  tags: ["inflation", "purchasing power", "CPI", "real value", "cost of living", "finance"],
});
