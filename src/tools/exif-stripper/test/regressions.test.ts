import { describe, it, expect } from "vitest";
import { stripJpegMetadata } from "../logic";

function segment(marker: number, payload: number[]): number[] {
  const len = payload.length + 2;
  return [0xff, marker, len >> 8, len & 0xff, ...payload];
}

describe("exif-stripper regressions", () => {
  it("keeps APP0 (JFIF) and APP14 (Adobe) but strips APP1 (EXIF)", () => {
    const jpeg = new Uint8Array([
      0xff, 0xd8,
      ...segment(0xe0, [0x4a, 0x46, 0x49, 0x46, 0x00]), // APP0 JFIF
      ...segment(0xe1, [0x45, 0x78, 0x69, 0x66, 0x00]), // APP1 EXIF
      ...segment(0xee, [0x41, 0x64, 0x6f, 0x62, 0x65]), // APP14 Adobe
      0xff, 0xda, 0x00, 0x04, 0x01, 0x02, // SOS
      0xff, 0xd9,
    ]);
    const out = Array.from(stripJpegMetadata(jpeg));
    const hasMarker = (m: number) => out.some((b, i) => b === 0xff && out[i + 1] === m);
    expect(hasMarker(0xe0)).toBe(true);
    expect(hasMarker(0xe1)).toBe(false);
    expect(hasMarker(0xee)).toBe(true);
    expect(hasMarker(0xda)).toBe(true);
  });
});
