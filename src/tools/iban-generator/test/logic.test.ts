import { describe, it, expect } from "vitest";
import { COUNTRIES, formatIban, generateIban } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

function mod97(s: string): number {
  let r = 0;
  for (const ch of s) r = (r * 10 + Number(ch)) % 97;
  return r;
}

function validate(iban: string): boolean {
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  return mod97(numeric) === 1;
}

describe("iban-generator", () => {
  it("emits the right length per country", () => {
    expect(generateIban("DE", seeded(1))).toHaveLength(22);
    expect(generateIban("TR", seeded(1))).toHaveLength(26);
    expect(generateIban("GB", seeded(1))).toHaveLength(22);
  });
  it("emits IBANs that pass the mod-97 check", () => {
    for (const c of ["DE", "TR", "GB", "FR", "NL"]) {
      expect(validate(generateIban(c, seeded(7)))).toBe(true);
    }
  });
  it("rejects unknown country codes", () => {
    expect(() => generateIban("ZZ", seeded(1))).toThrow();
  });
  it("ships at least 30 supported countries", () => {
    expect(COUNTRIES.length).toBeGreaterThanOrEqual(30);
  });
  it("formats with a space every four characters", () => {
    expect(formatIban("DE89370400440532013000")).toBe("DE89 3704 0044 0532 0130 00");
  });
});
