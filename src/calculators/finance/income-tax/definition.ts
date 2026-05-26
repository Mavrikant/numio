import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    country: z.enum(["tr", "us"]),
    grossIncome: z.number().min(0),
    filingStatus: z.enum(["single", "married", "head"]).default("single"),
    deductions: z.number().min(0).default(0),
  })
  .superRefine((data, ctx) => {
    if (data.grossIncome < 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["grossIncome"],
        message: "Gross income must be zero or positive.",
      });
    }
  });

export default defineCalculator({
  slug: "income-tax",
  category: "finance",
  priority: "P1",
  icon: "landmark",
  inputs: [
    {
      id: "country",
      type: {
        kind: "select",
        options: [
          { value: "us", i18nKey: "us" },
          { value: "tr", i18nKey: "tr" },
        ],
      },
      defaultValue: "us",
      required: true,
    },
    {
      id: "grossIncome",
      type: { kind: "number", min: 0, max: 100_000_000, step: 1000, unit: "usd" },
      defaultValue: 50000,
      required: true,
    },
    {
      id: "filingStatus",
      type: {
        kind: "select",
        options: [
          { value: "single", i18nKey: "single" },
          { value: "married", i18nKey: "married" },
          { value: "head", i18nKey: "head" },
        ],
      },
      defaultValue: "single",
      required: false,
    },
    {
      id: "deductions",
      type: { kind: "number", min: 0, max: 10_000_000, step: 100, unit: "usd" },
      defaultValue: 0,
      required: false,
    },
  ],
  outputs: [
    {
      id: "estimatedTax",
      format: "number",
      precision: 2,
      highlight: true,
      unit: "usd",
    },
    {
      id: "effectiveRate",
      format: "number",
      precision: 2,
      unit: "percent",
    },
    {
      id: "taxableIncome",
      format: "number",
      precision: 2,
      unit: "usd",
    },
    {
      id: "afterTaxIncome",
      format: "number",
      precision: 2,
      unit: "usd",
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    formulaLatex:
      "\\text{Tax} = \\sum_{i} \\text{rate}_i \\times \\max(0, \\min(\\text{taxableIncome}, \\text{max}_i) - \\text{min}_i)",
    references: [
      {
        title: "IRS Revenue Procedure 2023-34",
        url: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2024",
        authority: "Internal Revenue Service (IRS)",
      },
      {
        title: "Gelir Vergisi Kanunu",
        url: "https://www.mevzuat.gov.tr/mevzuatmetin/1.3.193.pdf",
        authority: "T.C. Hazine ve Maliye Bakanlığı",
      },
    ],
    disclaimer:
      "This is an estimate of federal income tax only and does not include state/local taxes, FICA, or other deductions. Consult a tax professional for accurate filing.",
  },
  related: ["salary", "savings-goal"],
  tags: ["income tax", "tax calculator", "federal tax", "vergi hesaplama", "IRS"],
});
