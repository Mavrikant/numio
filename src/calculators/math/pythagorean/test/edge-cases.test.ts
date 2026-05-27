import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Pythagorean — edge cases", () => {
  it("rejects missing required inputs", () => {
    expect(inputSchema.safeParse({ mode: "find-c", a: 3 }).success).toBe(false);
  });

  it("accepts valid inputs", () => {
    expect(inputSchema.safeParse({ mode: "find-c", a: 3, b: 4 }).success).toBe(true);
  });

  it("rejects zero values", () => {
    expect(inputSchema.safeParse({ mode: "find-c", a: 0, b: 4 }).success).toBe(false);
  });
});
