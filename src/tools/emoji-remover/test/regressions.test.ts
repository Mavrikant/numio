import { describe, it, expect } from "vitest";
import { removeEmoji } from "../logic";

describe("emoji-remover regressions", () => {
  it("removes U+2300-block pictographs like watches and hourglasses", () => {
    expect(removeEmoji("a ⌚ b")).toBe("a b");
    expect(removeEmoji("wait ⏳ done")).toBe("wait done");
  });
  it("removes keycap sequences entirely", () => {
    expect(removeEmoji("1️⃣ done")).toBe("done");
  });
  it("keeps ZWJ in non-emoji text (Indic/Persian shaping)", () => {
    const zwjText = "क्‍ष";
    expect(removeEmoji(zwjText)).toBe(zwjText);
  });
  it("removes ZWJ emoji sequences as a unit", () => {
    expect(removeEmoji("hi 👨‍👩‍👧‍👦 there")).toBe("hi there");
  });
});
