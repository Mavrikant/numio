import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("Exponent — edge cases", () => {
  it("accepts valid inputs", () => {
    expect(inputSchema.safeParse({ base: 2, exponent: 10 }).success).toBe(true);
  });

  it("accepts negative values", () => {
    expect(inputSchema.safeParse({ base: -2, exponent: 3 }).success).toBe(true);
  });
});
