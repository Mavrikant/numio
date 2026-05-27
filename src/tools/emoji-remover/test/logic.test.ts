import { describe, it, expect } from "vitest";
import { removeEmoji } from "../logic";

describe("removeEmoji", () => {
  it("removes emoji and trims leftover spaces", () => {
    expect(removeEmoji("Hello 👋 world 🌍")).toBe("Hello world");
  });
  it("removes flags and ZWJ sequences", () => {
    expect(removeEmoji("hi 🇹🇷 👨‍👩‍👧 bye")).toBe("hi bye");
  });
  it("keeps plain text untouched", () => {
    expect(removeEmoji("just text, 123!")).toBe("just text, 123!");
  });
});
