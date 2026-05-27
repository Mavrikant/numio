import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Temperature — edge cases", () => {
  it("absolute zero: 0K = -273.15°C = -459.67°F", () => {
    const result = compute({ celsius: -273.15, fahrenheit: -459.67, kelvin: 0 });
    expect(result.kelvin).toBe(0);
    expect(result.celsius).toBeCloseTo(-273.15, 1);
    expect(result.fahrenheit).toBeCloseTo(-459.67, 0);
  });

  it("negative celsius: -40°C = -40°F (same point)", () => {
    const result = compute({ celsius: -40, fahrenheit: -40, kelvin: 233.15 });
    expect(result.celsius).toBe(-40);
    expect(result.fahrenheit).toBe(-40);
  });

  it("high temperature: 1000K = 726.85°C", () => {
    const result = compute({ celsius: 726.85, fahrenheit: 1340.33, kelvin: 1000 });
    expect(result.kelvin).toBe(1000);
  });

  it("room temperature: 20°C = 68°F", () => {
    const result = compute({ celsius: 20, fahrenheit: 68, kelvin: 293.15 });
    expect(result.celsius).toBe(20);
    expect(result.fahrenheit).toBeCloseTo(68, 0);
  });
});
