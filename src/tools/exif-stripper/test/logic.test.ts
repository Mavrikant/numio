import { describe, it, expect } from "vitest";
import { stripJpegMetadata } from "../logic";

function bytes(arr: number[]): Uint8Array {
  return new Uint8Array(arr);
}

describe("exif-stripper", () => {
  it("returns non-JPEG buffers unchanged", () => {
    const png = bytes([0x89, 0x50, 0x4e, 0x47]);
    expect(stripJpegMetadata(png)).toEqual(png);
  });
  it("removes an APP1 (EXIF) segment", () => {
    // SOI + APP1 (4 bytes payload) + SOF0 + SOS + EOI
    const before = bytes([
      0xff, 0xd8,
      0xff, 0xe1, 0x00, 0x06, 0xaa, 0xbb, 0xcc, 0xdd, // APP1 length 6 incl length bytes, 4 payload bytes
      0xff, 0xc0, 0x00, 0x03, 0x01, // SOF0 length 3 incl length, 1 byte payload
      0xff, 0xda, 0x00, 0x03, 0xff, // SOS start; from here everything copies verbatim
      0xff, 0xd9,
    ]);
    const after = stripJpegMetadata(before);
    expect(Array.from(after.slice(0, 2))).toEqual([0xff, 0xd8]);
    expect(Array.from(after).includes(0xe1)).toBe(false);
    // SOF0 and onwards remain.
    expect(Array.from(after).join(",")).toContain([0xff, 0xc0].join(","));
  });
  it("preserves SOS image data and EOI verbatim", () => {
    const before = bytes([
      0xff, 0xd8,
      0xff, 0xda, 0x00, 0x02,
      0x11, 0x22, 0x33, // entropy-coded data
      0xff, 0xd9,
    ]);
    const after = stripJpegMetadata(before);
    expect(Array.from(after)).toEqual(Array.from(before));
  });
});
