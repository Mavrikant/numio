import { describe, it, expect } from "vitest";
import { atbash } from "../logic";

describe("atbash-cipher", () => {
  it("maps A→Z, B→Y, …", () => {
    expect(atbash("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("ZYXWVUTSRQPONMLKJIHGFEDCBA");
  });
  it("preserves case", () => {
    expect(atbash("hello")).toBe("svool");
    expect(atbash("Hello")).toBe("Svool");
  });
  it("is its own inverse", () => {
    const s = "The quick brown fox";
    expect(atbash(atbash(s))).toBe(s);
  });
  it("leaves non-letters untouched", () => {
    expect(atbash("Hi 1 2 3!")).toBe("Sr 1 2 3!");
  });
});
