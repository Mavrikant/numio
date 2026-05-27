import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Capacitor — edge cases", () => {
  const parse = (inputs: any) => {
    const result = calculator.inputSchema.safeParse(inputs);
    if (!result.success) throw result.error;
    return calculator.compute(result.data);
  };

  it("very small capacitance (pF)", () => {
    const result = parse({ capacitance: 1e-12, voltage: 100, frequency: 0 });
    expect(result.charge).toBeLessThan(1e-9);
  });

  it("very large capacitance (Farads)", () => {
    const result = parse({ capacitance: 1, voltage: 10, frequency: 0 });
    expect(result.energy).toBeGreaterThan(50);
  });

  it("DC frequency (0 Hz) produces null reactance", () => {
    const result = parse({ capacitance: 1e-6, voltage: 5, frequency: 0 });
    expect(result.reactance).toBeNull();
  });

  it("high frequency reduces reactance", () => {
    const result60hz = parse({ capacitance: 1e-6, voltage: 5, frequency: 60 });
    const result1mhz = parse({ capacitance: 1e-6, voltage: 5, frequency: 1e6 });
    if (result60hz.reactance && result1mhz.reactance) {
      expect(result1mhz.reactance).toBeLessThan(result60hz.reactance);
    }
  });

  it("rejects negative capacitance", () => {
    expect(() => parse({ capacitance: -1e-6, voltage: 5, frequency: 0 })).toThrow();
  });

  it("rejects zero voltage", () => {
    expect(() => parse({ capacitance: 1e-6, voltage: 0, frequency: 0 })).toThrow();
  });
});
