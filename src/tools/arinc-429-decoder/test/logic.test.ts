import { describe, it, expect } from "vitest";
import {
  parseWord,
  reverseBits8,
  computeOddParity,
  bnrToSigned,
  bcdFromField,
  decodeArinc429,
  encodeArinc429,
} from "../logic";

describe("parseWord", () => {
  it("accepts 0x-prefixed and bare hex", () => {
    expect(parseWord("0x2D0000A8")).toBe(0x2d0000a8);
    expect(parseWord("2D0000A8")).toBe(0x2d0000a8);
  });
  it("accepts a 32-bit binary string", () => {
    const bits = (0x2d0000a8 >>> 0).toString(2).padStart(32, "0");
    expect(parseWord(bits)).toBe(0x2d0000a8);
  });
  it("ignores spaces and underscores", () => {
    expect(parseWord("0010 1101 0000_0000 0000 0000 1010 1000")).toBe(0x2d0000a8);
  });
  it("throws on garbage", () => {
    expect(() => parseWord("")).toThrow();
    expect(() => parseWord("xyz")).toThrow();
    expect(() => parseWord("123456789")).toThrow(); // 9 chars, not all binary, not <=8 hex
  });
});

describe("bit helpers", () => {
  it("reverseBits8 is its own inverse", () => {
    for (const n of [0, 1, 0x83, 0xff, 0xa5]) {
      expect(reverseBits8(reverseBits8(n))).toBe(n);
    }
  });
  it("computeOddParity makes the 32-bit word have an odd popcount", () => {
    const base = 0x00000003; // two 1s in bits 1..31
    const p = computeOddParity(base);
    expect(p).toBe(1);
  });
});

describe("BNR / BCD field helpers", () => {
  it("bnrToSigned treats bit 29 as sign", () => {
    expect(bnrToSigned(0)).toBe(0);
    expect(bnrToSigned(1)).toBe(1);
    expect(bnrToSigned((1 << 19) - 1)).toBe(-1); // all 19 bits set
  });
  it("bcdFromField splits into five digits", () => {
    // digits 1,2,3,4,5 -> (1<<16)|(2<<12)|(3<<8)|(4<<4)|5
    const field = (1 << 16) | (2 << 12) | (3 << 8) | (4 << 4) | 5;
    expect(bcdFromField(field)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("encode -> decode round trip", () => {
  it("round-trips a BNR word", () => {
    const enc = encodeArinc429({ labelOctal: "203", sdi: 1, ssm: 3, dataType: "bnr", value: -1234 });
    const dec = decodeArinc429(enc.word, { dataType: "bnr" });
    expect(dec.labelOctal).toBe("203");
    expect(dec.sdi).toBe(1);
    expect(dec.ssm).toBe(3);
    expect(dec.bnrValue).toBe(-1234);
    expect(dec.parityValid).toBe(true);
  });

  it("round-trips a BCD word", () => {
    const enc = encodeArinc429({ labelOctal: "012", sdi: 2, ssm: 0, dataType: "bcd", value: 12345 });
    const dec = decodeArinc429(enc.word, { dataType: "bcd" });
    expect(dec.labelOctal).toBe("012");
    expect(dec.sdi).toBe(2);
    expect(dec.bcdDigits).toEqual([1, 2, 3, 4, 5]);
    expect(dec.parityValid).toBe(true);
  });

  it("applies a BNR scale to produce engineering units", () => {
    const enc = encodeArinc429({ labelOctal: "310", sdi: 0, ssm: 3, dataType: "bnr", value: 1000 });
    const dec = decodeArinc429(enc.word, { dataType: "bnr", bnrScale: 0.125 });
    expect(dec.bnrValue).toBe(1000);
    expect(dec.bnrScaled).toBe(125);
  });

  it("computes a valid odd-parity bit", () => {
    const enc = encodeArinc429({ labelOctal: "377", sdi: 3, ssm: 2, dataType: "bnr", value: 5 });
    const ones = (enc.word >>> 0).toString(2).split("").filter((c) => c === "1").length;
    expect(ones % 2).toBe(1);
    expect(enc.parityBit).toBe(decodeArinc429(enc.word, { dataType: "bnr" }).parityBit);
  });
});

describe("decode reports the right SSM meaning per data type", () => {
  it("uses the BNR table for BNR and the BCD table for BCD", () => {
    const enc = encodeArinc429({ labelOctal: "100", sdi: 0, ssm: 3, dataType: "bnr", value: 0 });
    expect(decodeArinc429(enc.word, { dataType: "bnr" }).ssmMeaning).toBe("Normal Operation");
    expect(decodeArinc429(enc.word, { dataType: "bcd" }).ssmMeaning).toMatch(/Minus/);
  });
});

describe("encode validation", () => {
  it("rejects out-of-range fields", () => {
    expect(() => encodeArinc429({ labelOctal: "400", sdi: 0, ssm: 0, dataType: "bnr", value: 0 })).toThrow();
    expect(() => encodeArinc429({ labelOctal: "001", sdi: 4, ssm: 0, dataType: "bnr", value: 0 })).toThrow();
    expect(() => encodeArinc429({ labelOctal: "001", sdi: 0, ssm: 9, dataType: "bnr", value: 0 })).toThrow();
    expect(() => encodeArinc429({ labelOctal: "001", sdi: 0, ssm: 0, dataType: "bnr", value: 999999 })).toThrow();
    expect(() => encodeArinc429({ labelOctal: "001", sdi: 0, ssm: 0, dataType: "bcd", value: 99999 })).toThrow();
  });
});
