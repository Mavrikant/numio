import { describe, it, expect } from "vitest";
import { toCss, bezierX, bezierY, PRESETS } from "../logic";

describe("cubic-bezier-editor", () => {
  it("formats CSS values", () => {
    expect(toCss({ x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 })).toBe("cubic-bezier(0.25, 0.1, 0.25, 1)");
  });
  it("clamps to 4 decimals", () => {
    expect(toCss({ x1: 0.123456789, y1: 0, x2: 1, y2: 1 })).toBe("cubic-bezier(0.1235, 0, 1, 1)");
  });
  it("samples the curve endpoints at t=0 and t=1", () => {
    const p = { x1: 0.5, y1: 0.5, x2: 0.5, y2: 0.5 };
    expect(bezierX(p, 0)).toBeCloseTo(0);
    expect(bezierY(p, 0)).toBeCloseTo(0);
    expect(bezierX(p, 1)).toBeCloseTo(1);
    expect(bezierY(p, 1)).toBeCloseTo(1);
  });
  it("ships the standard presets", () => {
    expect(PRESETS.map((p) => p.name)).toEqual(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]);
  });
});
