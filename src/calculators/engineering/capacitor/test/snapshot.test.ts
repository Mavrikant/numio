import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Capacitor — definition shape", () => {
  it("matches calculator contract", () => {
    expect(calculator.slug).toBe("capacitor");
    expect(calculator.category).toBe("engineering");
    expect(calculator.inputs.length).toBe(3);
    expect(calculator.outputs.length).toBe(4);
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });
});
