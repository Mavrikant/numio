import { z } from "zod";

export const inputSchema = z.object({
  base: z.number(),
  exponent: z.number(),
});

export type ExponentInputs = z.infer<typeof inputSchema>;

export interface ExponentResult extends Record<string, unknown> {
  readonly result: string | number;
  readonly expanded: string;
  readonly scientific: string;
}

export function compute(inputs: ExponentInputs): ExponentResult {
  const { base, exponent } = inputs;

  // Special case: 0^0 is undefined in mathematics
  if (base === 0 && exponent === 0) {
    return {
      result: "undefined",
      expanded: "0^0 is undefined in mathematics",
      scientific: "undefined",
    };
  }

  // Calculate base^exponent
  const result = Math.pow(base, exponent);

  // Check for infinity or NaN
  if (!Number.isFinite(result)) {
    return {
      result: result === Infinity ? "∞" : result === -Infinity ? "-∞" : "undefined",
      expanded: base === 0 && exponent < 0 ? "Division by zero" : "Result exceeds number range",
      scientific: result === Infinity ? "∞" : result === -Infinity ? "-∞" : "undefined",
    };
  }

  // Generate expanded notation for small integer exponents
  let expanded = "";
  if (Number.isInteger(exponent) && exponent > 0 && exponent <= 10 && Number.isFinite(base)) {
    const factors = Array(exponent).fill(base);
    expanded = factors.join(" × ");
  } else if (exponent === 0) {
    expanded = "1 (any number to power 0 equals 1)";
  } else if (exponent === 1) {
    expanded = base.toString();
  } else if (Number.isInteger(exponent) && exponent < 0) {
    const absExp = Math.abs(exponent);
    const factors = Array(absExp).fill(base);
    expanded = `1 / (${factors.join(" × ")})`;
  } else {
    expanded = `${base}^${exponent}`;
  }

  // Generate scientific notation
  const scientific = result.toExponential(4);

  return {
    result: Number.isInteger(result) ? Math.round(result) : Math.round(result * 10000) / 10000,
    expanded,
    scientific,
  };
}
