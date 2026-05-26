import { z } from "zod";
import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z.object({
  principal: z.number().min(1).max(10_000_000),
  apr: z.number().min(0).max(20),
  termMonths: z.number().int().min(1).max(120),
  compoundFreq: z.union([z.literal(1), z.literal(4), z.literal(12), z.literal(365)]).default(12),
  earlyWithdrawalMonths: z.number().int().min(0).default(0),
});

export default defineCalculator({
  slug: "cd-yield",
  category: "finance",
  priority: "P1",
  icon: "landmark",
  inputs: [
    {
      id: "principal",
      type: { kind: "number", min: 1, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 10_000,
      required: true,
    },
    {
      id: "apr",
      type: { kind: "number", min: 0, max: 20, step: 0.01, unit: "percent" },
      defaultValue: 5.0,
      required: true,
    },
    {
      id: "termMonths",
      type: { kind: "number", min: 1, max: 120, step: 1, unit: "month", integer: true },
      defaultValue: 12,
      required: true,
    },
    {
      id: "compoundFreq",
      type: {
        kind: "select",
        options: [
          { value: "1", i18nKey: "annually" },
          { value: "4", i18nKey: "quarterly" },
          { value: "12", i18nKey: "monthly" },
          { value: "365", i18nKey: "daily" },
        ],
      },
      defaultValue: "12",
      required: true,
    },
    {
      id: "earlyWithdrawalMonths",
      type: { kind: "number", min: 0, max: 120, step: 1, unit: "month", integer: true },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    { id: "futureValue", format: "currency", precision: 2, highlight: true },
    { id: "interestEarned", format: "currency", precision: 2 },
    { id: "apy", format: "percent", precision: 2 },
    { id: "effectiveYield", format: "percent", precision: 2 },
    { id: "earlyWithdrawalPenalty", format: "currency", precision: 2 },
    { id: "netReturnAfterPenalty", format: "currency", precision: 2 },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex: "FV = P \\cdot \\left(1 + \\frac{r}{n}\\right)^{n \\cdot t}",
    references: [
      {
        title: "Certificate of Deposit (CD) — How CDs Work",
        url: "https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/",
        authority: "Federal Deposit Insurance Corporation (FDIC)",
      },
      {
        title: "Certificate of Deposit",
        url: "https://www.investopedia.com/terms/c/certificateofdeposit.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "CD rates are subject to change. Rates are fixed at time of purchase for the term. Early withdrawal penalties vary by institution.",
  },
  related: ["compound-interest", "savings-goal", "net-worth"],
  tags: ["CD", "certificate of deposit", "savings", "interest", "banking", "APY"],
});
