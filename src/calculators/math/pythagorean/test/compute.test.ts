import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Pythagorean Calculator", () => {
  it("finds hypotenuse (3-4-5 triangle)", () => {
    const result = compute({ mode: "find-c", a: 3, b: 4 });
    expect(result.c).toBeCloseTo(5, 4);
    expect(result.area).toBeCloseTo(6, 2);
    expect(result.perimeter).toBeCloseTo(12, 2);
  });

  it("finds leg A", () => {
    const result = compute({ mode: "find-a", b: 4, c: 5 });
    expect(result.a).toBeCloseTo(3, 4);
  });

  it("finds leg B", () => {
    const result = compute({ mode: "find-b", a: 3, c: 5 });
    expect(result.b).toBeCloseTo(4, 4);
  });
});
