import { describe, it, expect } from "vitest";
import { numberLines } from "../logic";

describe("numberLines", () => {
  it("numbers from a start with default separator", () => {
    expect(numberLines("a\nb\nc", 1, 1, ". ")).toBe("1. a\n2. b\n3. c");
  });
  it("respects start and step", () => {
    expect(numberLines("a\nb\nc", 10, 5, ") ")).toBe("10) a\n15) b\n20) c");
  });
  it("handles a single line", () => {
    expect(numberLines("solo", 1, 1, ": ")).toBe("1: solo");
  });
});
