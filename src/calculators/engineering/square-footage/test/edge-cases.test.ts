import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("square-footage — edge cases", () => {
  it("should reject rectangle without length", () => {
    const result = inputSchema.safeParse({
      shape: "rectangle",
      width: 5,
    });
    expect(result.success).toBe(false);
  });

  it("should reject circle without radius or diameter", () => {
    const result = inputSchema.safeParse({
      shape: "circle",
    });
    expect(result.success).toBe(false);
  });

  it("should reject triangle without base or height", () => {
    const result = inputSchema.safeParse({
      shape: "triangle",
      base: 5,
    });
    expect(result.success).toBe(false);
  });

  it("should reject zero dimensions", () => {
    const result = inputSchema.safeParse({
      shape: "rectangle",
      length: 0,
      width: 5,
    });
    expect(result.success).toBe(false);
  });

  it("should reject negative dimensions", () => {
    const result = inputSchema.safeParse({
      shape: "rectangle",
      length: -10,
      width: 5,
    });
    expect(result.success).toBe(false);
  });

  it("should accept very small positive dimensions", () => {
    const result = inputSchema.safeParse({
      shape: "rectangle",
      length: 0.001,
      width: 0.001,
    });
    expect(result.success).toBe(true);
  });

  it("should accept very large dimensions", () => {
    const result = inputSchema.safeParse({
      shape: "rectangle",
      length: 10000,
      width: 5000,
    });
    expect(result.success).toBe(true);
  });
});
