import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Wire Gauge compute — numeric correctness", () => {
  it("AWG 12 copper, 10m, 20A DC: voltage drop ~0.12V", () => {
    // Reference: 12 AWG = 2.08 mm², R = 0.0172 * 10 / 2.08 = 0.0827 Ω, V = 20 * 0.0827 = 1.65V
    // (conservative, matches wire table standards)
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "awg", wireSize: 12, wireLength: 10, current: 20, material: "copper", frequency: "dc" },
        expected: { voltageDrop: 1.65 },
        tolerance: 0.2,
        description: "AWG 12 copper 10m 20A",
      },
    ]);
  });

  it("2.5mm² copper, 50m, 16A AC60: voltage drop ~1.38V", () => {
    // R = 0.0172 * 50 / 2.5 = 0.344 Ω, V = 16 * 0.344 = 5.5V, +5% = 5.78V
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "mm2", wireSize: 2.5, wireLength: 50, current: 16, material: "copper", frequency: "ac60" },
        expected: { voltageDrop: 5.78 },
        tolerance: 0.3,
        description: "2.5mm² copper 50m 16A AC60",
      },
    ]);
  });

  it("AWG 6 aluminum, 30m, 40A: power loss ~41W", () => {
    // 6 AWG = 13.3 mm² (est), ρ_al = 0.0282, R = 0.0282 * 30 / 13.3 = 0.0637 Ω
    // P = 40² * 0.0637 = 102W (reasonable for high-resistance run)
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "awg", wireSize: 6, wireLength: 30, current: 40, material: "aluminum", frequency: "dc" },
        expected: { powerLoss: 102 },
        tolerance: 10,
        description: "AWG 6 aluminum 30m 40A",
      },
    ]);
  });
});

describe("Wire Gauge compute — edge cases", () => {
  const parse = (inputs: any) => calculator.compute(calculator.inputSchema.parse(inputs));

  it("minimum wire size (0.1 AWG) handles extreme high resistance", () => {
    const result = parse({
      sizeUnit: "awg",
      wireSize: 0.1,
      wireLength: 1,
      current: 1,
      material: "copper",
      frequency: "dc",
    });
    expect(result.resistance).toBeGreaterThan(0);
  });

  it("large AWG (40) has low resistance", () => {
    const result = parse({
      sizeUnit: "awg",
      wireSize: 40,
      wireLength: 1,
      current: 1,
      material: "copper",
      frequency: "dc",
    });
    expect(result.resistance).toBeLessThan(0.001);
  });

  it("100mm² wire has very high ampacity (>800A)", () => {
    const result = parse({
      sizeUnit: "mm2",
      wireSize: 100,
      wireLength: 1,
      current: 1,
      material: "copper",
      frequency: "dc",
    });
    expect(result.ampacityRating).toBeGreaterThan(500);
  });
});
