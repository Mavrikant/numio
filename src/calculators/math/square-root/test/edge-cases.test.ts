import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("square-root edge cases", () => {
  it("handles basic edge cases", () => {
    const result = definition.compute({ value: 0 });
    expect(result.result).toBe(0);
  });
});
