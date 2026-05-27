import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Triangle Calculator — compute", () => {
  it("solves a 3-4-5 right triangle (SSS)", () => {
    // Reference: Pythagorean triple — 3² + 4² = 5²
    const result = compute({
      method: "sss",
      sideA: 3,
      sideB: 4,
      sideC: 5,
    });

    expect(result.sideA).toBeCloseTo(3, 4);
    expect(result.sideB).toBeCloseTo(4, 4);
    expect(result.sideC).toBeCloseTo(5, 4);
    expect(result.angleC).toBeCloseTo(90, 1); // right angle
    expect(result.triangleType).toBe("right");
    expect(result.area).toBeCloseTo(6, 2); // (3 * 4) / 2 = 6
    expect(result.perimeter).toBeCloseTo(12, 2);
  });

  it("solves an equilateral triangle with side 2 (SSS)", () => {
    // Reference: Equilateral triangle — all sides and angles equal
    const result = compute({
      method: "sss",
      sideA: 2,
      sideB: 2,
      sideC: 2,
    });

    expect(result.sideA).toBeCloseTo(2, 4);
    expect(result.sideB).toBeCloseTo(2, 4);
    expect(result.sideC).toBeCloseTo(2, 4);
    expect(result.angleA).toBeCloseTo(60, 1);
    expect(result.angleB).toBeCloseTo(60, 1);
    expect(result.angleC).toBeCloseTo(60, 1);
    expect(result.triangleType).toBe("equilateral");
    expect(result.area).toBeCloseTo(1.732, 2);
  });

  it("solves a triangle given SAS (two sides and included angle)", () => {
    // Reference: Triangle with sides 5, 7 and angle 60° between them
    const result = compute({
      method: "sas",
      sideA: 5,
      sideB: 7,
      angleC: 60,
    });

    expect(result.sideA).toBeCloseTo(5, 4);
    expect(result.sideB).toBeCloseTo(7, 4);
    expect(result.sideC).toBeCloseTo(6.245, 2); // law of cosines: sqrt(5² + 7² − 2·5·7·cos(60°)) = sqrt(39)
    expect(result.angleC).toBeCloseTo(60, 1);
    expect(result.area).toBeCloseTo(15.155, 2); // (5 * 7 * sin(60)) / 2
  });

  it("solves a triangle given ASA (two angles and included side)", () => {
    // Reference: Triangle with angles 50°, 60° and side 10 between them
    const result = compute({
      method: "asa",
      angleA: 50,
      sideB: 10,
      angleB: 60,
    });

    expect(result.angleA).toBeCloseTo(50, 1);
    expect(result.angleB).toBeCloseTo(60, 1);
    expect(result.angleC).toBeCloseTo(70, 1);
    expect(result.sideB).toBeCloseTo(10, 4);
  });

  it("solves a triangle given AAS (two angles and opposite side)", () => {
    // Reference: Triangle with angles 45°, 60° and side 10 opposite to 45°
    const result = compute({
      method: "aas",
      angleA: 45,
      angleB: 60,
      sideC: 10,
    });

    expect(result.angleA).toBeCloseTo(45, 1);
    expect(result.angleB).toBeCloseTo(60, 1);
    expect(result.angleC).toBeCloseTo(75, 1);
    expect(result.sideC).toBeCloseTo(10, 4);
  });

  it("solves a triangle given SSA (two sides and opposite angle)", () => {
    // Reference: Triangle with sides 5, 8 and angle opposite to 5 is 30°
    const result = compute({
      method: "ssa",
      sideA: 5,
      sideB: 8,
      angleA: 30,
    });

    expect(result.sideA).toBeCloseTo(5, 4);
    expect(result.sideB).toBeCloseTo(8, 4);
    expect(result.angleA).toBeCloseTo(30, 1);
  });

  it("classifies isosceles triangle (SAS)", () => {
    // Reference: Isosceles triangle with two equal sides
    const result = compute({
      method: "sas",
      sideA: 5,
      sideB: 5,
      angleC: 90,
    });

    expect(result.triangleType).toBe("isosceles");
    expect(result.sideA).toBeCloseTo(5, 4);
    expect(result.sideB).toBeCloseTo(5, 4);
  });

  it("classifies scalene triangle (SSS)", () => {
    // Reference: Scalene triangle with all different sides
    const result = compute({
      method: "sss",
      sideA: 3,
      sideB: 5,
      sideC: 6,
    });

    expect(result.triangleType).toBe("scalene");
  });
});
