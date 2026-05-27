import { describe, it, expect } from "vitest";
import { checkContrast } from "../logic";

describe("checkContrast", () => {
  it("black on white is 21:1 and passes everything", () => {
    const r = checkContrast("#000000", "#ffffff")!;
    expect(r.ratio).toBeCloseTo(21, 5);
    expect(r).toMatchObject({ aaNormal: true, aaLarge: true, aaaNormal: true, aaaLarge: true });
  });
  it("identical colors give 1:1 and fail", () => {
    const r = checkContrast("#777777", "#777777")!;
    expect(r.ratio).toBeCloseTo(1, 5);
    expect(r.aaNormal).toBe(false);
  });
  it("is symmetric", () => {
    expect(checkContrast("#123456", "#abcdef")!.ratio).toBeCloseTo(checkContrast("#abcdef", "#123456")!.ratio, 6);
  });
  it("applies WCAG thresholds (#767676 on white ≈ 4.54)", () => {
    const r = checkContrast("#767676", "#ffffff")!;
    expect(r.ratio).toBeGreaterThanOrEqual(4.5);
    expect(r.aaNormal).toBe(true);
    expect(r.aaaNormal).toBe(false);
  });
  it("returns null for invalid colors", () => {
    expect(checkContrast("nope", "#fff")).toBeNull();
  });
});
