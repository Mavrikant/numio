import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Bending Stress — edge cases and validation", () => {
  it("rejects zero moment", () => {
    const result = inputSchema.safeParse({
      moment: 0,
      sectionModulus: 100,
      materialType: "steel",
    });

    expect(result.success).toBe(false);
  });

  it("rejects negative moment", () => {
    const result = inputSchema.safeParse({
      moment: -50,
      sectionModulus: 100,
      materialType: "steel",
    });

    expect(result.success).toBe(false);
  });

  it("rejects zero section modulus", () => {
    const result = inputSchema.safeParse({
      moment: 50,
      sectionModulus: 0,
      materialType: "steel",
    });

    expect(result.success).toBe(false);
  });

  it("rejects negative section modulus", () => {
    const result = inputSchema.safeParse({
      moment: 50,
      sectionModulus: -100,
      materialType: "steel",
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalid material type", () => {
    const result = inputSchema.safeParse({
      moment: 50,
      sectionModulus: 100,
      materialType: "invalid_material",
    });

    expect(result.success).toBe(false);
  });

  it("accepts very small positive values", () => {
    const result = inputSchema.safeParse({
      moment: 0.001,
      sectionModulus: 0.001,
      materialType: "steel",
    });

    expect(result.success).toBe(true);
  });

  it("accepts very large values", () => {
    const result = inputSchema.safeParse({
      moment: 10000,
      sectionModulus: 50000,
      materialType: "aluminum",
    });

    expect(result.success).toBe(true);
  });

  it("accepts all four material types", () => {
    const materials = ["steel", "aluminum", "concrete", "timber"];
    materials.forEach((mat) => {
      const result = inputSchema.safeParse({
        moment: 50,
        sectionModulus: 200,
        materialType: mat,
      });
      expect(result.success).toBe(true);
    });
  });
});
