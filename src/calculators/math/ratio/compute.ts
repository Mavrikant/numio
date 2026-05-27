import { z } from "zod";

export const inputSchema = z.object({
  numerator: z.number().int().positive(),
  denominator: z.number().int().positive(),
});

export type RatioInputs = z.infer<typeof inputSchema>;

export interface RatioResult extends Record<string, unknown> {
  readonly simplifiedNumerator: number;
  readonly simplifiedDenominator: number;
  readonly decimal: number;
  readonly percentValue: number;
  readonly oneToXForm: string;
  readonly xToOneForm: string;
}

// GCD algorithm — Euclidean method
function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export function compute(inputs: RatioInputs): RatioResult {
  const divisor = gcd(inputs.numerator, inputs.denominator);

  const simplifiedNumerator = inputs.numerator / divisor;
  const simplifiedDenominator = inputs.denominator / divisor;

  // Decimal form: num / denom
  const decimal = simplifiedNumerator / simplifiedDenominator;

  // Percent form
  const percentValue = (simplifiedNumerator / simplifiedDenominator) * 100;

  // 1:x form — numerator is always 1
  const oneToXForm = `1:${(simplifiedDenominator / simplifiedNumerator).toFixed(4).replace(/\.?0+$/, "")}`;

  // x:1 form — denominator is always 1
  const xToOneForm = `${(simplifiedNumerator / simplifiedDenominator).toFixed(4).replace(/\.?0+$/, "")}:1`;

  return {
    simplifiedNumerator,
    simplifiedDenominator,
    decimal: Math.round(decimal * 10000) / 10000,
    percentValue: Math.round(percentValue * 100) / 100,
    oneToXForm,
    xToOneForm,
  };
}
