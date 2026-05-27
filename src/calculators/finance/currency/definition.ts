import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema, CURRENCY_CODES } from "./compute";
import i18n from "./i18n";

const currencyOptions = CURRENCY_CODES.map((code) => ({
  value: code,
  label: code,
}));

export default defineCalculator({
  slug: "currency",
  category: "finance",
  priority: "P2",
  icon: "dollar-sign",
  inputs: [
    {
      id: "amount",
      type: { kind: "number", min: 0, max: 1_000_000_000_000, step: 0.01 },
      defaultValue: 100,
      required: true,
    },
    {
      id: "fromCurrency",
      type: { kind: "select", options: currencyOptions },
      defaultValue: "USD",
      required: true,
    },
    {
      id: "toCurrency",
      type: { kind: "select", options: currencyOptions },
      defaultValue: "EUR",
      required: true,
    },
  ],
  outputs: [
    { id: "convertedAmount", format: "number", precision: 4, highlight: true },
    { id: "rate", format: "number", precision: 6 },
    { id: "reverseRate", format: "number", precision: 6 },
    { id: "lastUpdated", format: "text" },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    compareEnabled: true,
    nlEnabled: true,
    formulaLatex:
      "\\text{amount}_{to} = \\text{amount}_{from} \\times \\dfrac{R_{to/USD}}{R_{from/USD}}",
    references: [
      {
        title: "Euro foreign exchange reference rates",
        url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
        authority: "European Central Bank (ECB)",
      },
      {
        title: "SDR Valuation",
        url: "https://www.imf.org/external/np/fin/data/rms_sdrv.aspx",
        authority: "International Monetary Fund (IMF)",
      },
      {
        title: "Foreign exchange rates",
        url: "https://www.bis.org/statistics/xrusd.htm",
        authority: "Bank for International Settlements (BIS)",
      },
    ],
    disclaimer:
      "Reference rates only — snapshot from January 2025. Rates are static and will be outdated. Do not use for live trading, transfers, or any transaction that depends on real-time market pricing. Banks and FX providers apply their own spreads.",
  },
  related: ["inflation", "tip", "vat"],
  tags: ["currency", "exchange rate", "FX", "foreign exchange", "converter", "finance"],
});
