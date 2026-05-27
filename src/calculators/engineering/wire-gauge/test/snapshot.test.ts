import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Wire Gauge — definition shape", () => {
  it("matches calculator contract", () => {
    expect(calculator.slug).toBe("wire-gauge");
    expect(calculator.category).toBe("engineering");
    expect(calculator.inputs.length).toBe(6);
    expect(calculator.outputs.length).toBe(6);
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });
});
