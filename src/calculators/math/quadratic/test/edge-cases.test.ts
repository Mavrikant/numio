import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Quadratic — edge cases", () => {
  it("rejects a=0", () => {
    expect(inputSchema.safeParse({ a: 0, b: 5, c: 3 }).success).toBe(false);
  });

  it("accepts a≠0", () => {
    expect(inputSchema.safeParse({ a: 1, b: 5, c: 3 }).success).toBe(true);
  });
});
