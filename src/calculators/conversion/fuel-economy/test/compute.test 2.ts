import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Fuel Economy Converter — compute", () => {
  it("converts 10 L/100km to 10 km/L (inverse relationship)", () => {
    const result = compute({
      value: 10,
      fromUnit: "L_100km",
      toUnit: "km_L",
    });
    expect(result.result).toBeCloseTo(10, 1);
  });

  it("converts 25 mpg US to approximately 9.4 L/100km", () => {
    const result = compute({
      value: 25,
      fromUnit: "mpg_us",
      toUnit: "L_100km",
    });
    expect(result.result).toBeCloseTo(9.408, 1);
  });

  it("converts 10 L/100km back to 23.5 mpg US", () => {
    const result = compute({
      value: 10,
      fromUnit: "L_100km",
      toUnit: "mpg_us",
    });
    expect(result.result).toBeCloseTo(23.5214, 1);
  });
});
