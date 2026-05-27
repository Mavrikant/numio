import { z } from "zod";

export const MARGIN_MODES = [
  "compute-margin",
  "compute-revenue-from-margin",
  "compute-revenue-from-markup",
] as const;

export const inputSchema = z
  .object({
    mode: z.enum(MARGIN_MODES).default("compute-margin"),
    cost: z.number().min(0).max(1_000_000_000),
    revenue: z.number().min(0).max(1_000_000_000).default(0),
    marginPercent: z.number().min(-99.99).max(99.99).default(0),
    markupPercent: z.number().min(0).max(10000).default(0),
  })
  .superRefine((d, ctx) => {
    if (d.mode === "compute-margin" && d.revenue <= 0) {
      ctx.addIssue({
        code: "custom",
        path: ["revenue"],
        message: "Revenue must be greater than 0 when computing margin",
      });
    }
    if (d.mode === "compute-revenue-from-margin") {
      if (d.marginPercent >= 100) {
        ctx.addIssue({
          code: "custom",
          path: ["marginPercent"],
          message: "Margin percent must be less than 100",
        });
      }
    }
  });

export type MarginInputs = z.infer<typeof inputSchema>;

export interface MarginResult extends Record<string, unknown> {
  readonly cost: number;
  readonly revenue: number;
  readonly profit: number;
  readonly profitMarginPercent: number;
  readonly markupPercent: number;
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export function compute(inputs: MarginInputs): MarginResult {
  let cost = inputs.cost;
  let revenue = inputs.revenue;

  if (inputs.mode === "compute-revenue-from-margin") {
    // margin% = (revenue - cost) / revenue × 100
    // revenue = cost / (1 - margin%/100)
    const m = inputs.marginPercent / 100;
    revenue = cost / (1 - m);
  } else if (inputs.mode === "compute-revenue-from-markup") {
    // markup% = (revenue - cost) / cost × 100
    // revenue = cost × (1 + markup%/100)
    revenue = cost * (1 + inputs.markupPercent / 100);
  }

  const profit = revenue - cost;
  const profitMarginPercent = revenue !== 0 ? (profit / revenue) * 100 : 0;
  const markupPercent = cost !== 0 ? (profit / cost) * 100 : 0;

  return {
    cost: round(cost),
    revenue: round(revenue),
    profit: round(profit),
    profitMarginPercent: round(profitMarginPercent),
    markupPercent: round(markupPercent),
  };
}
