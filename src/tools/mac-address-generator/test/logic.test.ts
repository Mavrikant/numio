import { describe, it, expect } from "vitest";
import { parsePrefix, generateMacHex, formatMac, generateMacs } from "../logic";

/** Deterministic [0,1) source so the random output is reproducible in tests. */
function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("mac-address-generator: parsePrefix", () => {
  it("strips the common separators and uppercases", () => {
    expect(parsePrefix("00:1a:2b")).toBe("001A2B");
    expect(parsePrefix("00-1a-2b")).toBe("001A2B");
    expect(parsePrefix("001a.2b")).toBe("001A2B");
    expect(parsePrefix(" 00 1a 2b ")).toBe("001A2B");
  });
  it("accepts an empty prefix", () => {
    expect(parsePrefix("")).toBe("");
    expect(parsePrefix("   ")).toBe("");
  });
  it("accepts a full 12-digit prefix", () => {
    expect(parsePrefix("00:1A:2B:3C:4D:5E")).toBe("001A2B3C4D5E");
  });
  it("rejects non-hex characters", () => {
    expect(parsePrefix("00:zz")).toBeNull();
    expect(parsePrefix("hello")).toBeNull();
  });
  it("rejects prefixes longer than 12 hex digits", () => {
    expect(parsePrefix("001A2B3C4D5E6F")).toBeNull();
  });
});

describe("mac-address-generator: generateMacHex", () => {
  it("always produces 12 uppercase hex digits", () => {
    const rand = seeded(1);
    for (let i = 0; i < 20; i++) {
      const hex = generateMacHex("", rand);
      expect(hex).toMatch(/^[0-9A-F]{12}$/);
    }
  });
  it("preserves the supplied prefix", () => {
    const hex = generateMacHex("001A2B", seeded(42));
    expect(hex.startsWith("001A2B")).toBe(true);
    expect(hex).toHaveLength(12);
  });
  it("returns the prefix unchanged when it is already full length", () => {
    expect(generateMacHex("001A2B3C4D5E", seeded(7))).toBe("001A2B3C4D5E");
  });
});

describe("mac-address-generator: formatMac", () => {
  const hex = "001A2B3C4D5E";
  it("renders the colon style", () => {
    expect(formatMac(hex, "colon", true)).toBe("00:1A:2B:3C:4D:5E");
  });
  it("renders the hyphen style", () => {
    expect(formatMac(hex, "hyphen", true)).toBe("00-1A-2B-3C-4D-5E");
  });
  it("renders the Cisco dotted style", () => {
    expect(formatMac(hex, "dot", false)).toBe("001a.2b3c.4d5e");
  });
  it("renders the no-separator style", () => {
    expect(formatMac(hex, "none", true)).toBe("001A2B3C4D5E");
  });
  it("honours the case flag", () => {
    expect(formatMac(hex, "colon", false)).toBe("00:1a:2b:3c:4d:5e");
  });
});

describe("mac-address-generator: generateMacs", () => {
  it("returns exactly `count` addresses", () => {
    const out = generateMacs({ prefixHex: "", format: "colon", uppercase: true, count: 7 }, seeded(3));
    expect(out).toHaveLength(7);
  });
  it("clamps the count to the 1–100 range", () => {
    expect(generateMacs({ prefixHex: "", format: "colon", uppercase: true, count: 0 }, seeded(1))).toHaveLength(1);
    expect(generateMacs({ prefixHex: "", format: "colon", uppercase: true, count: 999 }, seeded(1))).toHaveLength(100);
  });
  it("applies the prefix, format and case to every address", () => {
    const out = generateMacs({ prefixHex: "AABBCC", format: "hyphen", uppercase: false, count: 5 }, seeded(99));
    for (const mac of out) {
      expect(mac).toMatch(/^aa-bb-cc-[0-9a-f]{2}-[0-9a-f]{2}-[0-9a-f]{2}$/);
    }
  });
  it("is deterministic for a given seed", () => {
    const a = generateMacs({ prefixHex: "", format: "colon", uppercase: true, count: 4 }, seeded(123));
    const b = generateMacs({ prefixHex: "", format: "colon", uppercase: true, count: 4 }, seeded(123));
    expect(a).toEqual(b);
  });
});
