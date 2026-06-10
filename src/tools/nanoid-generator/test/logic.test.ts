import { describe, it, expect } from "vitest";
import { generateNanoId, DEFAULT_ALPHABET } from "../logic";

const cryptoBytes = (n: number): Uint8Array => crypto.getRandomValues(new Uint8Array(n));

describe("nanoid-generator", () => {
  it("returns an id of the requested length", () => {
    expect(generateNanoId(21, DEFAULT_ALPHABET, cryptoBytes)).toHaveLength(21);
  });
  it("only uses characters from the alphabet", () => {
    const id = generateNanoId(50, "abc", cryptoBytes);
    expect(/^[abc]+$/.test(id)).toBe(true);
  });
  it("maps bytes deterministically through the mask", () => {
    // alphabet "abc" → mask 3; bytes 0,1,2 land in range, 3 is rejected.
    let i = 0;
    const source = (n: number) => {
      const bytes = new Uint8Array(n);
      for (let j = 0; j < n; j++) bytes[j] = [0, 3, 1, 3, 2][i++ % 5]!;
      return bytes;
    };
    expect(generateNanoId(3, "abc", source)).toBe("abc");
  });
  it("rejects out-of-range bytes instead of folding them back (no modulo bias)", () => {
    // A 10-char alphabet has mask 15; bytes 10–15 must be skipped, not mapped.
    const seen = new Set<string>();
    const alphabet = "0123456789";
    for (let b = 0; b < 256; b++) {
      const source = (n: number) => {
        const bytes = new Uint8Array(n);
        bytes.fill(b);
        return bytes;
      };
      if ((b & 15) < 10) seen.add(generateNanoId(1, alphabet, source));
      else expect(() => generateNanoId(1, alphabet, () => new Uint8Array(0))).toThrow();
    }
    expect(seen).toEqual(new Set(alphabet.split("")));
  });
  it("throws when the byte source is empty", () => {
    expect(() => generateNanoId(10, "abc", () => new Uint8Array(0))).toThrow();
  });
  it("returns empty for zero size", () => {
    expect(generateNanoId(0, "abc", cryptoBytes)).toBe("");
  });
  it("works with a single-character alphabet", () => {
    expect(generateNanoId(5, "x", cryptoBytes)).toBe("xxxxx");
  });
});
