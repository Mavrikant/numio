import { describe, it, expect } from "vitest";
import { flipText } from "../logic";

describe("flipText", () => {
  it("flips and reverses", () => {
    expect(flipText("hi")).toBe("ᴉɥ");
  });
  it("double flip returns a string of the same length", () => {
    const s = "Hello World";
    expect(Array.from(flipText(s))).toHaveLength(Array.from(s).length);
  });
  it("passes through unmapped characters", () => {
    expect(flipText("a→")).toBe("→ɐ");
  });
});
