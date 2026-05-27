import { z } from "zod";

export const inputSchema = z.object({
  originalValue: z.number().finite(),
  newValue: z.number().finite(),
});

export type PercentageChangeInputs = z.infer<typeof inputSchema>;

export type ChangeDirection = "increase" | "decrease" | "no-change" | "from-zero";

export interface PercentageChangeResult extends Record<string, unknown> {
  /** Percent change. NaN when undefined (from-zero with non-zero new value). */
  readonly percentChange: number;
  /** Signed absolute change: new − original. */
  readonly absoluteChange: number;
  /** (new − original) / |original|. NaN when from-zero with non-zero new value. */
  readonly relativeChange: number;
  /** Qualitative direction; "from-zero" when original is 0 and new ≠ 0. */
  readonly direction: ChangeDirection;
  /** True when result is undefined because base is zero. */
  readonly fromZero: 0 | 1;
  /** Human-readable explanation (English). */
  readonly explanation: string;
}

/**
 * Percentage change between an original value and a new value.
 *
 *   percentChange = ((new − original) / |original|) × 100
 *
 * Special cases:
 *   - original = 0 AND new = 0 → 0% (no change).
 *   - original = 0 AND new ≠ 0 → undefined (returned as NaN); flagged as
 *     "from-zero" so consumers can render an explanation.
 *   - original < 0 → relative change uses |original| in the denominator so
 *     that going from -100 to -50 (a +50 improvement) shows as +50%.
 */
export function compute(inputs: PercentageChangeInputs): PercentageChangeResult {
  const { originalValue, newValue } = inputs;
  const absoluteChange = newValue - originalValue;

  // From-zero handling.
  if (originalValue === 0) {
    if (newValue === 0) {
      return {
        percentChange: 0,
        absoluteChange: 0,
        relativeChange: 0,
        direction: "no-change",
        fromZero: 0,
        explanation: "Both values are zero — no change.",
      };
    }
    return {
      percentChange: Number.NaN,
      absoluteChange,
      relativeChange: Number.NaN,
      direction: "from-zero",
      fromZero: 1,
      explanation:
        "Percentage change from zero is undefined because dividing by zero is not defined. Report the absolute change instead.",
    };
  }

  const denominator = Math.abs(originalValue);
  const relativeChange = absoluteChange / denominator;
  const percentChange = relativeChange * 100;

  let direction: ChangeDirection;
  if (absoluteChange > 0) direction = "increase";
  else if (absoluteChange < 0) direction = "decrease";
  else direction = "no-change";

  const explanation =
    direction === "no-change"
      ? `No change: original and new values are both ${originalValue}.`
      : `${direction === "increase" ? "Increase" : "Decrease"} from ${originalValue} to ${newValue} = ${
          Math.round(percentChange * 10000) / 10000
        }%.`;

  return {
    percentChange: Math.round(percentChange * 10000) / 10000,
    absoluteChange: Math.round(absoluteChange * 10000) / 10000,
    relativeChange: Math.round(relativeChange * 1000000) / 1000000,
    direction,
    fromZero: 0,
    explanation,
  };
}
