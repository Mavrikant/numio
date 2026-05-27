import { describe, it, expect } from "vitest";
import { NAMED_COLORS, searchColors } from "../logic";

describe("named-colors-lookup", () => {
  it("contains the 148 CSS named colors", () => {
    expect(NAMED_COLORS).toHaveLength(148);
  });
  it("returns all colors for an empty query", () => {
    expect(searchColors("")).toHaveLength(148);
  });
  it("filters by name substring", () => {
    const r = searchColors("blue");
    expect(r.some((c) => c.name === "blue")).toBe(true);
    expect(r.every((c) => c.name.includes("blue") || c.hex.includes("blue"))).toBe(true);
  });
  it("filters by hex substring", () => {
    expect(searchColors("#ff0000").some((c) => c.name === "red")).toBe(true);
  });
  it("knows rebeccapurple", () => {
    expect(NAMED_COLORS.find((c) => c.name === "rebeccapurple")?.hex).toBe("#663399");
  });
});
