import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";
import { compute } from "../compute";

describe("Percentage Change — edge cases", () => {
  it("original = 0, new = 0 → 0% no-change (not Infinity, not NaN)", () => {
    const r = compute({ originalValue: 0, newValue: 0 });
    expect(r.percentChange).toBe(0);
    expect(r.absoluteChange).toBe(0);
    expect(r.direction).toBe("no-change");
    expect(r.fromZero).toBe(0);
  });

  it("original = 0, new != 0 → 'from-zero' direction, NaN percent", () => {
    const r = compute({ originalValue: 0, newValue: 50 });
    expect(Number.isNaN(r.percentChange)).toBe(true);
    expect(Number.isNaN(r.relativeChange)).toBe(true);
    expect(r.absoluteChange).toBe(50);
    expect(r.direction).toBe("from-zero");
    expect(r.fromZero).toBe(1);
    expect(r.explanation).toMatch(/zero/i);
  });

  it("rejects NaN and Infinity inputs at the schema", () => {
    expect(() =>
      calculator.inputSchema.parse({ originalValue: Number.NaN, newValue: 5 }),
    ).toThrow();
    expect(() =>
      calculator.inputSchema.parse({ originalValue: 5, newValue: Number.POSITIVE_INFINITY }),
    ).toThrow();
  });

  it("rejects missing fields", () => {
    expect(() => calculator.inputSchema.parse({ originalValue: 1 })).toThrow();
    expect(() => calculator.inputSchema.parse({ newValue: 1 })).toThrow();
  });

  it("compute is pure", () => {
    const inputs = calculator.inputSchema.parse({ originalValue: 80, newValue: 120 });
    assertComputeIsPure(calculator, inputs);
  });
});
