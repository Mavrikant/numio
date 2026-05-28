import { describe, it, expect } from "vitest";
import { generateNanoId, DEFAULT_ALPHABET } from "../logic";

describe("nanoid-generator", () => {
  it("returns an id of the requested length", () => {
    const bytes = new Uint8Array(21);
    for (let i = 0; i < 21; i++) bytes[i] = i;
    expect(generateNanoId(21, DEFAULT_ALPHABET, bytes)).toHaveLength(21);
  });
  it("only uses characters from the alphabet", () => {
    const id = generateNanoId(50, "abc", crypto.getRandomValues(new Uint8Array(50)));
    expect(/^[abc]+$/.test(id)).toBe(true);
  });
  it("maps random bytes deterministically through modulo", () => {
    expect(generateNanoId(3, "abc", new Uint8Array([0, 1, 2]))).toBe("abc");
    expect(generateNanoId(3, "abc", new Uint8Array([3, 4, 5]))).toBe("abc");
  });
  it("throws when not enough random bytes are supplied", () => {
    expect(() => generateNanoId(10, "abc", new Uint8Array(3))).toThrow();
  });
  it("returns empty for zero size", () => {
    expect(generateNanoId(0, "abc", new Uint8Array(0))).toBe("");
  });
});
