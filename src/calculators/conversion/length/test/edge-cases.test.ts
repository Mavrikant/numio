import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Length — edge cases", () => {
  it("micrometer to millimeter: 1000μm = 1mm", () => {
    const result = compute({ value: 1000, fromUnit: "μm", toUnit: "mm" });
    expect(result.result).toBeCloseTo(1, 6);
  });

  it("mile to kilometer: 1 mi ≈ 1.609km", () => {
    const result = compute({ value: 1, fromUnit: "mi", toUnit: "km" });
    expect(result.result).toBeCloseTo(1.609344, 4);
  });

  it("nautical mile to meter: 1 nm ≈ 1852m", () => {
    const result = compute({ value: 1, fromUnit: "nm", toUnit: "m" });
    expect(result.result).toBeCloseTo(1852, 1);
  });

  it("same unit: 100m = 100m", () => {
    const result = compute({ value: 100, fromUnit: "m", toUnit: "m" });
    expect(result.result).toBe(100);
  });
});
