import { z } from "zod";

export const inputSchema = z
  .object({
    supplyVoltage: z.number().min(1).max(60),
    forwardVoltage: z.number().min(0.5).max(5),
    forwardCurrentMa: z.number().min(1).max(100),
    ledCount: z.number().int().min(1).max(10),
  })
  .superRefine((data, ctx) => {
    const totalForwardVoltage = data.forwardVoltage * data.ledCount;
    if (data.supplyVoltage <= totalForwardVoltage) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["supplyVoltage"],
        message: `Supply voltage (${data.supplyVoltage}V) must be greater than total LED forward voltage (${totalForwardVoltage}V).`,
      });
    }
  });

export type LedResistorInputs = z.infer<typeof inputSchema>;

export interface LedResistorResult extends Record<string, unknown> {
  readonly exactResistanceOhm: number;
  readonly standardResistanceOhm: number;
  readonly powerDissipatedW: number;
  readonly actualCurrentMa: number;
  readonly resistorColorCode: string;
}

// EIA E12 series base values
const E12_BASE = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];

/**
 * Generate E12 series values up to 1MΩ
 * Returns values: 10, 12, 15, ..., 82, 100, 120, ..., 820000, 1000000
 */
function getE12Values(): number[] {
  const values: number[] = [];
  for (let decade = 0; decade <= 5; decade++) {
    const multiplier = Math.pow(10, decade);
    for (const base of E12_BASE) {
      values.push(base * multiplier);
    }
  }
  // Add 1MΩ
  values.push(1_000_000);
  return values;
}

/**
 * Find nearest E12 standard resistor value >= target (round up for LED safety)
 * Round up means less current through LED → LED is safe
 */
function nearestE12RoundUp(target: number): number {
  const e12Values = getE12Values();
  for (const val of e12Values) {
    if (val >= target) return val;
  }
  // If target exceeds our table, return 1MΩ
  return 1_000_000;
}

// Color code bands for 4-band resistors
const COLOR_NAMES = [
  "black",   // 0
  "brown",   // 1
  "red",     // 2
  "orange",  // 3
  "yellow",  // 4
  "green",   // 5
  "blue",    // 6
  "violet",  // 7
  "grey",    // 8
  "white",   // 9
];

/**
 * Compute 4-band resistor color code for a standard E12 value.
 * Format: [band1 digit][band2 digit][multiplier][tolerance=gold(±5%)]
 * Example: 470Ω → yellow(4), violet(7), brown(×10), gold
 */
function resistorColorCode(resistance: number): string {
  // Normalize to 2 significant digits
  let sig = resistance;
  let multiplierExp = 0;

  // Scale down to 10-99 range for 2 significant digits
  while (sig >= 100) {
    sig /= 10;
    multiplierExp++;
  }
  while (sig < 10 && sig > 0) {
    sig *= 10;
    multiplierExp--;
  }

  const digit1 = Math.floor(sig / 10);
  const digit2 = Math.round(sig % 10);

  // multiplierExp is power of 10 (e.g., 470 → sig=47, exp=1 → ×10=brown)
  // Clamp to valid range (gold=-1 for 0.1, silver=-2 for 0.01, black=0)
  const multiplierBand = multiplierExp >= 0 ? COLOR_NAMES[multiplierExp] ?? "orange" : "gold";

  const b1 = COLOR_NAMES[digit1] ?? "black";
  const b2 = COLOR_NAMES[digit2] ?? "black";

  return `${b1} / ${b2} / ${multiplierBand} / gold`;
}

export function compute(inputs: LedResistorInputs): LedResistorResult {
  const { supplyVoltage, forwardVoltage, forwardCurrentMa, ledCount } = inputs;

  const totalForwardVoltage = forwardVoltage * ledCount;
  const forwardCurrentA = forwardCurrentMa / 1000;

  // R = (Vsupply - Vforward_total) / Iforward
  const exactResistanceOhm = (supplyVoltage - totalForwardVoltage) / forwardCurrentA;

  // Power dissipated by resistor: P = (Vsupply - Vforward_total) × Iforward
  const powerDissipatedW = (supplyVoltage - totalForwardVoltage) * forwardCurrentA;

  // Find nearest E12 value >= exact (round up for LED safety — less current)
  const standardResistanceOhm = nearestE12RoundUp(exactResistanceOhm);

  // Actual current with standard resistor
  const actualCurrentA = (supplyVoltage - totalForwardVoltage) / standardResistanceOhm;
  const actualCurrentMa = actualCurrentA * 1000;

  // 4-band color code for the standard resistor
  const colorCode = resistorColorCode(standardResistanceOhm);

  return {
    exactResistanceOhm,
    standardResistanceOhm,
    powerDissipatedW,
    actualCurrentMa,
    resistorColorCode: colorCode,
  };
}
