import { describe, it, expect } from "vitest";
import { caesarShift, rot13 } from "../logic";

describe("caesar-cipher", () => {
  it("shifts letters preserving case", () => {
    expect(caesarShift("Abc XYZ", 3)).toBe("Def ABC");
  });
  it("leaves non-letters unchanged", () => {
    expect(caesarShift("a1 b2!", 1)).toBe("b1 c2!");
  });
  it("decodes by shifting back", () => {
    expect(caesarShift(caesarShift("Hello", 5), 21)).toBe("Hello"); // 5 + 21 = 26
  });
  it("rot13 is its own inverse", () => {
    expect(rot13(rot13("The quick brown fox"))).toBe("The quick brown fox");
    expect(rot13("Hello")).toBe("Uryyb");
  });
});
