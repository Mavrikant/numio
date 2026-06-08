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

  it("Réaumur from Celsius: 100°C = 80°Ré (boiling point)", () => {
    const result = compute({ celsius: 100 });
    expect(result.reaumur).toBeCloseTo(80, 5);
  });

  it("Réaumur to other scales: 80°Ré = 100°C = 212°F", () => {
    const result = compute({ reaumur: 80 });
    expect(result.celsius).toBeCloseTo(100, 5);
    expect(result.fahrenheit).toBeCloseTo(212, 5);
    expect(result.kelvin).toBeCloseTo(373.15, 5);
  });

  it("Rankine from Celsius: 0°C = 491.67°R (freezing point)", () => {
    const result = compute({ celsius: 0 });
    expect(result.rankine).toBeCloseTo(491.67, 2);
  });

  it("Rankine to other scales: 671.67°R = 100°C = 212°F", () => {
    const result = compute({ rankine: 671.67 });
    expect(result.celsius).toBeCloseTo(100, 2);
    expect(result.fahrenheit).toBeCloseTo(212, 2);
    expect(result.kelvin).toBeCloseTo(373.15, 2);
  });

  it("absolute zero in Rankine: 0°R = 0K = -273.15°C", () => {
    const result = compute({ rankine: 0 });
    expect(result.kelvin).toBeCloseTo(0, 2);
    expect(result.celsius).toBeCloseTo(-273.15, 2);
  });
});
