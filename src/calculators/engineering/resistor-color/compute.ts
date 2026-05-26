import { z } from "zod";

// Color names: index 0–9 for digits, 10=Gold, 11=Silver
export const COLOR_NAMES = [
  "Black", "Brown", "Red", "Orange", "Yellow",
  "Green", "Blue", "Violet", "Gray", "White",
  "Gold", "Silver",
] as const;

export type ColorIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

// Multiplier: color index → multiplier value
const MULTIPLIER: Record<number, number> = {
  0: 1,
  1: 10,
  2: 100,
  3: 1_000,
  4: 10_000,
  5: 100_000,
  6: 1_000_000,
  7: 10_000_000,
  8: 100_000_000,
  9: 1_000_000_000,
  10: 0.1,   // Gold
  11: 0.01,  // Silver
};

// Tolerance: color index → percentage
const TOLERANCE: Record<number, number> = {
  1: 1,     // Brown
  2: 2,     // Red
  5: 0.5,   // Green
  6: 0.25,  // Blue
  7: 0.1,   // Violet
  8: 0.05,  // Gray
  10: 5,    // Gold
  11: 10,   // Silver
};

// Zod enum for digit bands (0-9)
const DigitBand = z.number().int().min(0).max(9);
// Zod enum for multiplier band (0-11)
const MultiplierBand = z.number().int().min(0).max(11);
// Zod enum for tolerance band (color indices that have a tolerance value)
const ToleranceBand = z.number().int().min(0).max(11);

export const inputSchema = z.object({
  bandCount: z.enum(["4", "5"]),
  band1: DigitBand,
  band2: DigitBand,
  band3: DigitBand.optional(), // only for 5-band
  multiplierBand: MultiplierBand,
  toleranceBand: ToleranceBand,
});

export type ResistorColorInputs = z.infer<typeof inputSchema>;

export interface ResistorColorResult extends Record<string, unknown> {
  readonly resistance: number;
  readonly tolerancePct: number;
  readonly minValue: number;
  readonly maxValue: number;
  readonly colorName1: string;
  readonly colorName2: string;
  readonly colorName3: string;
  readonly multiplierColorName: string;
  readonly toleranceColorName: string;
}

export function compute(inputs: ResistorColorInputs): ResistorColorResult {
  const { bandCount, band1, band2, band3, multiplierBand, toleranceBand } = inputs;

  let baseValue: number;
  if (bandCount === "4") {
    baseValue = band1 * 10 + band2;
  } else {
    baseValue = band1 * 100 + band2 * 10 + (band3 ?? 0);
  }

  const multiplier = MULTIPLIER[multiplierBand] ?? 1;
  const resistance = baseValue * multiplier;
  const tolerancePct = TOLERANCE[toleranceBand] ?? 20;

  const minValue = resistance * (1 - tolerancePct / 100);
  const maxValue = resistance * (1 + tolerancePct / 100);

  return {
    resistance,
    tolerancePct,
    minValue,
    maxValue,
    colorName1: COLOR_NAMES[band1],
    colorName2: COLOR_NAMES[band2],
    colorName3: bandCount === "5" ? COLOR_NAMES[band3 ?? 0] : "",
    multiplierColorName: COLOR_NAMES[multiplierBand] ?? "Unknown",
    toleranceColorName: COLOR_NAMES[toleranceBand] ?? "None",
  };
}
