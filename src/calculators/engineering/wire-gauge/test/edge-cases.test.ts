import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Wire Gauge — edge cases", () => {
  const parse = (inputs: any) => {
    const result = calculator.inputSchema.safeParse(inputs);
    if (!result.success) throw result.error;
    return calculator.compute(result.data);
  };

  it("rejects negative wire size", () => {
    expect(() => parse({ sizeUnit: "awg", wireSize: -5, wireLength: 10, current: 20, material: "copper", frequency: "dc" })).toThrow();
  });

  it("rejects zero length", () => {
    expect(() => parse({ sizeUnit: "awg", wireSize: 12, wireLength: 0, current: 20, material: "copper", frequency: "dc" })).toThrow();
  });

  it("rejects zero current", () => {
    expect(() => parse({ sizeUnit: "awg", wireSize: 12, wireLength: 10, current: 0, material: "copper", frequency: "dc" })).toThrow();
  });

  it("very long wire (1000m) produces significant voltage drop", () => {
    const result = parse({ sizeUnit: "awg", wireSize: 12, wireLength: 1000, current: 20, material: "copper", frequency: "dc" });
    expect(result.voltageDrop).toBeGreaterThan(50);
  });

  it("very small current (0.01A) produces minimal voltage drop", () => {
    const result = parse({ sizeUnit: "awg", wireSize: 20, wireLength: 100, current: 0.01, material: "copper", frequency: "dc" });
    expect(result.voltageDrop).toBeLessThan(0.1);
  });
});
