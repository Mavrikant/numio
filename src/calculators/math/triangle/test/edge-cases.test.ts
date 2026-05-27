import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Triangle Calculator — edge cases", () => {
  it("rejects triangle inequality violation (SSS)", () => {
    const result = inputSchema.safeParse({
      method: "sss",
      sideA: 1,
      sideB: 2,
      sideC: 10, // violates triangle inequality
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalid angles (SAS)", () => {
    const result = inputSchema.safeParse({
      method: "sas",
      sideA: 5,
      sideB: 7,
      angleC: 200, // > 180
    });

    expect(result.success).toBe(false);
  });

  it("accepts valid SSS", () => {
    const result = inputSchema.safeParse({
      method: "sss",
      sideA: 3,
      sideB: 4,
      sideC: 5,
    });

    expect(result.success).toBe(true);
  });

  it("rejects zero or negative sides", () => {
    const result = inputSchema.safeParse({
      method: "sss",
      sideA: 0,
      sideB: 4,
      sideC: 5,
    });

    expect(result.success).toBe(false);
  });

  it("rejects negative angles", () => {
    const result = inputSchema.safeParse({
      method: "sas",
      sideA: 5,
      sideB: 7,
      angleC: -30,
    });

    expect(result.success).toBe(false);
  });

  it("rejects ASA with angles summing to >= 180", () => {
    const result = inputSchema.safeParse({
      method: "asa",
      angleA: 100,
      sideB: 10,
      angleB: 85, // 100 + 85 = 185 > 180
    });

    expect(result.success).toBe(false);
  });

  it("accepts very small sides", () => {
    const result = inputSchema.safeParse({
      method: "sss",
      sideA: 0.01,
      sideB: 0.02,
      sideC: 0.025,
    });

    expect(result.success).toBe(true);
  });

  it("accepts very large sides", () => {
    const result = inputSchema.safeParse({
      method: "sss",
      sideA: 9000,
      sideB: 9000,
      sideC: 9000,
    });

    expect(result.success).toBe(true);
  });
});
