import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Temperature — edge cases", () => {
  it("absolute zero from Celsius: -273.15°C = 0K = -459.67°F = 0°R", () => {
    const result = compute({ value: -273.15, fromUnit: "celsius" });
    expect(result.kelvin).toBeCloseTo(0, 2);
    expect(result.fahrenheit).toBeCloseTo(-459.67, 1);
    expect(result.rankine).toBeCloseTo(0, 1);
  });

  it("negative: -40°C = -40°F (same point)", () => {
    const result = compute({ value: -40, fromUnit: "celsius" });
    expect(result.celsius).toBe(-40);
    expect(result.fahrenheit).toBeCloseTo(-40, 5);
  });

  it("high temperature: 1000K = 726.85°C", () => {
    const result = compute({ value: 1000, fromUnit: "kelvin" });
    expect(result.celsius).toBeCloseTo(726.85, 2);
  });

  it("room temperature: 20°C = 68°F", () => {
    const result = compute({ value: 20, fromUnit: "celsius" });
    expect(result.fahrenheit).toBeCloseTo(68, 5);
  });

  it("Réaumur source: 80°Ré = 100°C = 212°F", () => {
    const result = compute({ value: 80, fromUnit: "reaumur" });
    expect(result.celsius).toBeCloseTo(100, 5);
    expect(result.fahrenheit).toBeCloseTo(212, 5);
    expect(result.kelvin).toBeCloseTo(373.15, 5);
  });

  it("Rankine source: 671.67°R = 100°C = 212°F", () => {
    const result = compute({ value: 671.67, fromUnit: "rankine" });
    expect(result.celsius).toBeCloseTo(100, 2);
    expect(result.fahrenheit).toBeCloseTo(212, 2);
    expect(result.kelvin).toBeCloseTo(373.15, 2);
  });

  it("absolute zero from Rankine: 0°R = 0K = -273.15°C", () => {
    const result = compute({ value: 0, fromUnit: "rankine" });
    expect(result.kelvin).toBeCloseTo(0, 2);
    expect(result.celsius).toBeCloseTo(-273.15, 2);
  });
});
