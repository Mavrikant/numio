import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("steel-weight — edge cases", () => {
  it("should reject rebar without diameter", () => {
    const result = inputSchema.safeParse({
      type: "rebar",
      material: "steel",
      lengthM: 6,
    });
    expect(result.success).toBe(false);
  });

  it("should reject negative length", () => {
    const result = inputSchema.safeParse({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: -1,
    });
    expect(result.success).toBe(false);
  });

  it("should accept quantity 1", () => {
    const result = inputSchema.safeParse({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 6,
      quantity: 1,
    });
    expect(result.success).toBe(true);
  });

  it("should accept large quantity", () => {
    const result = inputSchema.safeParse({
      type: "rebar",
      material: "steel",
      rebarDiameter: 16,
      lengthM: 6,
      quantity: 10000,
    });
    expect(result.success).toBe(true);
  });
});
