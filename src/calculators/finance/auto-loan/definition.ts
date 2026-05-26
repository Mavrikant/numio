import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    vehiclePrice: z.number().min(1000).max(500_000),
    downPayment: z.number().min(0),
    tradeInValue: z.number().min(0).default(0),
    annualRate: z.number().min(0).max(40),
    termMonths: z.number().int().min(12).max(96),
  })
  .refine((d) => d.downPayment + d.tradeInValue <= d.vehiclePrice, {
    path: ["downPayment"],
    message: "Down payment and trade-in value combined cannot exceed vehicle price",
  });

export default defineCalculator({
  slug: "auto-loan",
  category: "finance",
  priority: "P1",
  icon: "car",
  inputs: [
    {
      id: "vehiclePrice",
      type: { kind: "number", min: 1000, max: 500_000, step: 500, unit: "usd" },
      defaultValue: 30000,
      required: true,
    },
    {
      id: "downPayment",
      type: { kind: "number", min: 0, max: 500_000, step: 500, unit: "usd" },
      defaultValue: 3000,
      required: true,
    },
    {
      id: "tradeInValue",
      type: { kind: "number", min: 0, max: 500_000, step: 500, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
    {
      id: "annualRate",
      type: { kind: "number", min: 0, max: 40, step: 0.01, unit: "percent" },
      defaultValue: 6.5,
      required: true,
    },
    {
      id: "termMonths",
      type: { kind: "number", min: 12, max: 96, step: 12, unit: "month", integer: true },
      defaultValue: 60,
      required: true,
    },
  ],
  outputs: [
    { id: "monthlyPayment", format: "currency", precision: 2, highlight: true },
    { id: "loanAmount", format: "currency", precision: 2 },
    { id: "totalPayment", format: "currency", precision: 2 },
    { id: "totalInterest", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "M = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}",
    references: [
      {
        title: "Auto Loans",
        url: "https://www.consumerfinance.gov/consumer-tools/auto-loans/",
        authority: "Consumer Financial Protection Bureau (CFPB)",
      },
      {
        title: "Car Loans",
        url: "https://www.nerdwallet.com/best/loans/auto-loans/best-auto-loans",
        authority: "NerdWallet",
      },
    ],
    disclaimer:
      "This calculator estimates principal and interest only. Actual costs may include dealer fees, taxes, registration, and insurance.",
  },
  related: ["mortgage", "loan-amortization", "compound-interest"],
  tags: ["auto loan", "car loan", "vehicle financing", "monthly payment", "finance"],
});
