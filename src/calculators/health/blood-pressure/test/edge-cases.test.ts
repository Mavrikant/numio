import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Blood Pressure edge cases — schema validation", () => {
  it("rejects systolic below 60", () => {
    expect(() =>
      calculator.inputSchema.parse({ systolic: 59, diastolic: 80 }),
    ).toThrow();
  });

  it("rejects systolic above 250", () => {
    expect(() =>
      calculator.inputSchema.parse({ systolic: 251, diastolic: 80 }),
    ).toThrow();
  });

  it("rejects diastolic below 40", () => {
    expect(() =>
      calculator.inputSchema.parse({ systolic: 120, diastolic: 39 }),
    ).toThrow();
  });

  it("rejects diastolic above 150", () => {
    expect(() =>
      calculator.inputSchema.parse({ systolic: 120, diastolic: 151 }),
    ).toThrow();
  });

  it("accepts boundary values: 60/40", () => {
    expect(() =>
      calculator.inputSchema.parse({ systolic: 60, diastolic: 40 }),
    ).not.toThrow();
  });

  it("accepts boundary values: 250/150", () => {
    expect(() =>
      calculator.inputSchema.parse({ systolic: 250, diastolic: 150 }),
    ).not.toThrow();
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { systolic: 120, diastolic: 80 },
      { systolic: 300, diastolic: 80 },
    );
  });
});

describe("Blood Pressure edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({ systolic: 130, diastolic: 85 });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Blood Pressure edge cases — AHA boundaries", () => {
  const parse = (s: number, d: number) =>
    calculator.compute(calculator.inputSchema.parse({ systolic: s, diastolic: d }));

  it("exactly at normal threshold: 120/80 is elevated (systolic 120–129 AND diastolic <80 needs diastolic check)", () => {
    // systolic=120 is 'elevated', diastolic=80 is 'stage1', overall = stage1
    const result = parse(120, 80);
    expect(result.category).toBe("stage1");
  });

  it("elevated is only when systolic 120-129 AND diastolic < 80", () => {
    const result = parse(129, 79);
    expect(result.category).toBe("elevated");
  });

  it("stage1 at exact lower boundary: 130/80", () => {
    const result = parse(130, 80);
    expect(result.category).toBe("stage1");
  });

  it("stage2 at exact lower boundary: 140/90", () => {
    const result = parse(140, 90);
    expect(result.category).toBe("stage2");
  });

  it("crisis at exact lower boundary: 181/120", () => {
    const result = parse(181, 120);
    expect(result.category).toBe("crisis");
  });

  it("crisis via diastolic: 120/121", () => {
    const result = parse(120, 121);
    expect(result.category).toBe("crisis");
  });
});
