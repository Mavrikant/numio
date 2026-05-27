import { z } from "zod";
import { gcd } from "../_helpers/number-theory";

export const inputSchema = z.object({
  numerator1: z.number().int(),
  denominator1: z.number().int().refine((n) => n !== 0, "Denominator cannot be zero"),
  numerator2: z.number().int().default(0),
  denominator2: z.number().int().default(1),
  operation: z.enum(["simplify", "add", "subtract", "multiply", "divide"]).default("simplify"),
});

export type FractionInputs = z.infer<typeof inputSchema>;

export interface FractionResult extends Record<string, unknown> {
  readonly numerator: number;
  readonly denominator: number;
  readonly decimal: number;
  readonly mixedWhole: number;
  readonly mixedNumerator: number;
  readonly mixedDenominator: number;
  readonly isNegative: boolean;
}

/** Simplify a fraction and ensure denominator is positive */
function simplify(n: number, d: number): [number, number] {
  if (d === 0) throw new Error("Denominator cannot be zero");
  if (n === 0) return [0, 1];
  const sign = (n < 0) !== (d < 0) ? -1 : 1;
  const absN = Math.abs(n);
  const absD = Math.abs(d);
  const g = gcd(absN, absD);
  return [sign * (absN / g), absD / g];
}

/** Convert simplified fraction to mixed number parts */
function toMixed(n: number, d: number): { whole: number; num: number; den: number } {
  if (d === 0) return { whole: 0, num: 0, den: 1 };
  const sign = n < 0 ? -1 : 1;
  const absN = Math.abs(n);
  const whole = Math.floor(absN / d);
  const remainder = absN % d;
  return {
    whole: sign * whole,
    num: remainder,
    den: d,
  };
}

export function compute(inputs: FractionInputs): FractionResult {
  const { numerator1, denominator1, numerator2, denominator2, operation } = inputs;

  if (denominator1 === 0) throw new Error("First denominator cannot be zero");

  let resultN: number;
  let resultD: number;

  switch (operation) {
    case "simplify":
      [resultN, resultD] = simplify(numerator1, denominator1);
      break;

    case "add":
      // a/b + c/d = (a*d + c*b) / (b*d)
      resultN = numerator1 * denominator2 + numerator2 * denominator1;
      resultD = denominator1 * denominator2;
      [resultN, resultD] = simplify(resultN, resultD);
      break;

    case "subtract":
      // a/b - c/d = (a*d - c*b) / (b*d)
      resultN = numerator1 * denominator2 - numerator2 * denominator1;
      resultD = denominator1 * denominator2;
      [resultN, resultD] = simplify(resultN, resultD);
      break;

    case "multiply":
      // a/b * c/d = (a*c) / (b*d)
      resultN = numerator1 * numerator2;
      resultD = denominator1 * denominator2;
      [resultN, resultD] = simplify(resultN, resultD);
      break;

    case "divide":
      // a/b ÷ c/d = (a*d) / (b*c)
      if (numerator2 === 0) throw new Error("Cannot divide by zero fraction");
      resultN = numerator1 * denominator2;
      resultD = denominator1 * numerator2;
      [resultN, resultD] = simplify(resultN, resultD);
      break;

    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  const decimal = Math.round((resultN / resultD) * 1000000) / 1000000;
  const mixed = toMixed(resultN, resultD);

  return {
    numerator: resultN,
    denominator: resultD,
    decimal,
    mixedWhole: mixed.whole,
    mixedNumerator: mixed.num,
    mixedDenominator: mixed.den,
    isNegative: resultN < 0,
  };
}
