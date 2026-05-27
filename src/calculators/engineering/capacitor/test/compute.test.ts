import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Capacitor compute — numeric correctness", () => {
  it("1μF at 5V: Q = 5μC, E = 12.5μJ", () => {
    // Reference: Q = CV = 1e-6 * 5 = 5e-6 C; E = 0.5 * 1e-6 * 25 = 12.5e-6 J
    runNumericTests(calculator, [
      {
        inputs: { capacitance: 1e-6, voltage: 5, frequency: 0 },
        expected: { charge: 5e-6, energy: 12.5e-6 },
        tolerance: 1e-9,
        description: "1μF at 5V",
      },
    ]);
  });

  it("100μF at 12V: Q = 1.2mC, E = 7.2mJ", () => {
    runNumericTests(calculator, [
      {
        inputs: { capacitance: 100e-6, voltage: 12, frequency: 0 },
        expected: { charge: 1.2e-3, energy: 7.2e-3 },
        tolerance: 1e-6,
        description: "100μF at 12V",
      },
    ]);
  });

  it("10μF at 100V AC 60Hz: Xc ≈ 265Ω", () => {
    // Xc = 1/(2π*60*10e-6) ≈ 265 Ω
    runNumericTests(calculator, [
      {
        inputs: { capacitance: 10e-6, voltage: 100, frequency: 60 },
        expected: { reactance: 265 },
        tolerance: 5,
        description: "10μF at 60Hz AC",
      },
    ]);
  });
});

describe("Capacitor compute — RC time constant", () => {
  const parse = (inputs: any) => calculator.compute(calculator.inputSchema.parse(inputs));

  it("1μF RC time constant = 1ms (with 1kΩ)", () => {
    const result = parse({ capacitance: 1e-6, voltage: 5, frequency: 0 });
    // τ = R * C = 1000 * 1e-6 = 0.001 s
    expect(result.timeConstantFor1k).toBeCloseTo(0.001, 6);
  });

  it("100μF RC time constant = 100ms", () => {
    const result = parse({ capacitance: 100e-6, voltage: 5, frequency: 0 });
    expect(result.timeConstantFor1k).toBeCloseTo(0.1, 6);
  });
});
