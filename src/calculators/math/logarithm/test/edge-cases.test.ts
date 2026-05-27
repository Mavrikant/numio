import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Logarithm — edge cases", () => {
  it("rejects zero value", () => {
    const result = inputSchema.safeParse({ value: 0, base: 10 });
    expect(result.success).toBe(false);
  });

  it("rejects negative value", () => {
    const result = inputSchema.safeParse({ value: -5, base: 10 });
    expect(result.success).toBe(false);
  });

  it("rejects base of 1", () => {
    const result = inputSchema.safeParse({ value: 10, base: 1 });
    expect(result.success).toBe(false);
  });

  it("rejects zero base", () => {
    const result = inputSchema.safeParse({ value: 10, base: 0 });
    expect(result.success).toBe(false);
  });

  it("rejects negative base", () => {
    const result = inputSchema.safeParse({ value: 10, base: -2 });
    expect(result.success).toBe(false);
  });

  it("handles very small positive values", () => {
    const result = inputSchema.safeParse({ value: 0.01, base: 10 });
    expect(result.success).toBe(true);
  });
});
