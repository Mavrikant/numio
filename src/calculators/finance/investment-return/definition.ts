import { z } from "zod";

import { defineCalculator } from "@/types/calculator";
import { compute } from "./compute";
import i18n from "./i18n";

const inputSchema = z
  .object({
    initialInvestment: z.number().positive(),
    finalValue: z.number().positive().optional(),
    annualReturn: z.number().min(-100).max(1000).optional(),
    years: z.number().min(0.5).max(100),
  })
  .superRefine((data, ctx) => {
    if (data.finalValue === undefined && data.annualReturn === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["finalValue"],
        message:
          "Provide either finalValue or annualReturn to compute returns.",
      });
    }
    if (data.initialInvestment <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["initialInvestment"],
        message: "Initial investment must be greater than zero.",
      });
    }
  });

export default defineCalculator({
  slug: "investment-return",
  category: "finance",
  priority: "P1",
  icon: "trending-up",
  inputs: [
    {
      id: "initialInvestment",
      type: { kind: "number", min: 1, max: 100_000_000, step: 100, unit: "usd" },
      defaultValue: 10000,
      required: true,
    },
    {
      id: "finalValue",
      type: { kind: "number", min: 1, max: 100_000_000, step: 100, unit: "usd" },
      defaultValue: undefined,
      required: false,
    },
    {
      id: "annualReturn",
      type: { kind: "number", min: -100, max: 1000, step: 0.1, unit: "percent" },
      defaultValue: 8,
      required: false,
    },
    {
      id: "years",
      type: { kind: "number", min: 0.5, max: 100, step: 0.5, unit: "year" },
      defaultValue: 10,
      required: true,
    },
  ],
  outputs: [
    {
      id: "roi",
      format: "number",
      precision: 2,
      highlight: true,
      unit: "percent",
    },
    {
      id: "cagr",
      format: "number",
      precision: 2,
      unit: "percent",
    },
    {
      id: "totalGain",
      format: "number",
      precision: 2,
      unit: "usd",
    },
    {
      id: "finalValue",
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
      "\\text{CAGR} = \\left(\\frac{V_f}{V_i}\\right)^{\\frac{1}{n}} - 1 \\quad \\text{ROI} = \\frac{V_f - V_i}{V_i} \\times 100",
    references: [
      {
        title: "Compound Annual Growth Rate (CAGR)",
        url: "https://www.investopedia.com/terms/c/cagr.asp",
        authority: "Investopedia",
      },
      {
        title: "Return on Investment (ROI)",
        url: "https://www.investopedia.com/terms/r/returnoninvestment.asp",
        authority: "Investopedia",
      },
    ],
    disclaimer:
      "Past returns do not guarantee future results. This calculator assumes no taxes or fees.",
  },
  related: ["savings-goal", "salary"],
  tags: ["ROI", "CAGR", "investment return", "compound growth", "returns calculator"],
});
