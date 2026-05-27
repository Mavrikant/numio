import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Quadratic Calculator", () => {
  it("solves x²-5x+6=0 (roots: 2, 3)", () => {
    const result = compute({ a: 1, b: -5, c: 6 });
    expect(result.discriminant).toBeCloseTo(1, 2);
    expect([result.root1, result.root2]).toContain(2);
    expect([result.root1, result.root2]).toContain(3);
    expect(result.root1_type).toBe("real");
  });

  it("finds vertex correctly", () => {
    const result = compute({ a: 1, b: -4, c: 3 });
    expect(result.vertex_x).toBeCloseTo(2, 2);
    expect(result.axis_of_symmetry).toBeCloseTo(2, 2);
  });

  it("detects complex roots (discriminant < 0)", () => {
    const result = compute({ a: 1, b: 0, c: 1 });
    expect(result.discriminant).toBeLessThan(0);
    expect(result.root1_type).toBe("complex");
  });
});
