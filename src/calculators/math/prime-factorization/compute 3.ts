import { z } from "zod";
import { primeFactorization } from "../_helpers/number-theory";

export const inputSchema = z.object({
  number: z.number().int().min(2).max(1_000_000),
});

export type PrimeFactorizationInputs = z.infer<typeof inputSchema>;

export interface PrimeFactorizationResult extends Record<string, unknown> {
  readonly number: number;
  readonly factors: Array<{ readonly prime: number; readonly exponent: number }>;
  readonly notation: string; // e.g., "2³ × 3² × 5"
}

export function compute(
  inputs: PrimeFactorizationInputs
): PrimeFactorizationResult {
  const { number } = inputs;
  const factors = primeFactorization(number);

  // Format exponent notation: 2³ × 3² × 5¹
  const notation = factors
    .map(([prime, exp]) => {
      if (exp === 1) return `${prime}`;
      const superscripts: Record<string, string> = {
        "1": "¹",
        "2": "²",
        "3": "³",
        "4": "⁴",
        "5": "⁵",
        "6": "⁶",
        "7": "⁷",
        "8": "⁸",
        "9": "⁹",
        "0": "⁰",
      };
      const expStr = String(exp);
      const superExp = expStr
        .split("")
        .map((c) => superscripts[c] || c)
        .join("");
      return `${prime}${superExp}`;
    })
    .join(" × ");

  return {
    number,
    factors: factors.map(([prime, exponent]) => ({ prime, exponent })),
    notation: notation || String(number), // If no factors, it's 1 or prime itself
  };
}
