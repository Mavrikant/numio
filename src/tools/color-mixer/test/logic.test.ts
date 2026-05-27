import { describe, it, expect } from "vitest";
import { mixColors } from "../logic";

describe("color-mixer", () => {
  it("returns color1 at ratio 0", () => {
    expect(mixColors("#ff0000", "#0000ff", 0)).toBe("#ff0000");
  });
  it("returns color2 at ratio 1", () => {
    expect(mixColors("#ff0000", "#0000ff", 1)).toBe("#0000ff");
  });
  it("mixes evenly at ratio 0.5", () => {
    expect(mixColors("#000000", "#ffffff", 0.5)).toBe("#808080");
  });
  it("returns null for invalid input", () => {
    expect(mixColors("xyz", "#fff", 0.5)).toBeNull();
  });
});
