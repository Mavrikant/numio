import { z } from "zod";

export const DEPRECIATION_METHODS = [
  "straight-line",
  "declining-balance",
  "sum-of-years-digits",
  "double-declining",
] as const;

export const inputSchema = z
  .object({
    assetCost: z.number().min(1).max(1_000_000_000),
    salvageValue: z.number().min(0).max(1_000_000_000),
    usefulLife: z.number().int().min(1).max(100),
    method: z.enum(DEPRECIATION_METHODS).default("straight-line"),
    decliningRate: z.number().min(0).max(100).default(20),
  })
  .refine((d) => d.salvageValue <= d.assetCost, {
    path: ["salvageValue"],
    message: "Salvage value cannot exceed asset cost",
  });

export type DepreciationInputs = z.infer<typeof inputSchema>;

export interface DepreciationRow {
  readonly year: number;
  readonly openingValue: number;
  readonly depreciation: number;
  readonly closingValue: number;
}

export interface DepreciationResult extends Record<string, unknown> {
  readonly annualSchedule: DepreciationRow[];
  readonly totalDepreciation: number;
  readonly bookValueEndOfLife: number;
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export function compute(inputs: DepreciationInputs): DepreciationResult {
  const depreciableBase = inputs.assetCost - inputs.salvageValue;
  const schedule: DepreciationRow[] = [];

  if (inputs.method === "straight-line") {
    const annual = depreciableBase / inputs.usefulLife;
    let opening = inputs.assetCost;
    for (let year = 1; year <= inputs.usefulLife; year++) {
      const closing = opening - annual;
      schedule.push({
        year,
        openingValue: round(opening),
        depreciation: round(annual),
        closingValue: round(closing),
      });
      opening = closing;
    }
  } else if (inputs.method === "sum-of-years-digits") {
    const sumOfYears = (inputs.usefulLife * (inputs.usefulLife + 1)) / 2;
    let opening = inputs.assetCost;
    for (let year = 1; year <= inputs.usefulLife; year++) {
      const remainingLife = inputs.usefulLife - year + 1;
      const annual = (remainingLife / sumOfYears) * depreciableBase;
      const closing = opening - annual;
      schedule.push({
        year,
        openingValue: round(opening),
        depreciation: round(annual),
        closingValue: round(closing),
      });
      opening = closing;
    }
  } else if (
    inputs.method === "declining-balance" ||
    inputs.method === "double-declining"
  ) {
    const rate =
      inputs.method === "double-declining"
        ? 2 / inputs.usefulLife
        : inputs.decliningRate / 100;
    let opening = inputs.assetCost;
    for (let year = 1; year <= inputs.usefulLife; year++) {
      // Don't depreciate below salvage value
      const tentative = opening * rate;
      const maxAllowed = Math.max(0, opening - inputs.salvageValue);
      const annual = Math.min(tentative, maxAllowed);
      const closing = opening - annual;
      schedule.push({
        year,
        openingValue: round(opening),
        depreciation: round(annual),
        closingValue: round(closing),
      });
      opening = closing;
    }
  }

  const totalDepreciation = schedule.reduce(
    (sum, row) => sum + row.depreciation,
    0,
  );
  const bookValueEndOfLife =
    schedule.length > 0
      ? schedule[schedule.length - 1].closingValue
      : inputs.assetCost;

  return {
    annualSchedule: schedule,
    totalDepreciation: round(totalDepreciation),
    bookValueEndOfLife: round(bookValueEndOfLife),
  };
}
