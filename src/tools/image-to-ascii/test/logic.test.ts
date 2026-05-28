import { describe, it, expect } from "vitest";
import { bufferToAscii, RAMPS } from "../logic";

describe("image-to-ascii", () => {
  it("maps black to the first ramp char and white to the last", () => {
    const black = new Uint8ClampedArray([0, 0, 0, 255]);
    const white = new Uint8ClampedArray([255, 255, 255, 255]);
    expect(bufferToAscii(black, 1, 1, RAMPS.short)).toBe(RAMPS.short[0]);
    expect(bufferToAscii(white, 1, 1, RAMPS.short)).toBe(RAMPS.short[RAMPS.short.length - 1]);
  });
  it("renders one character per pixel with newlines per row", () => {
    const data = new Uint8ClampedArray([0, 0, 0, 255, 255, 255, 255, 255, 0, 0, 0, 255, 255, 255, 255, 255]);
    expect(bufferToAscii(data, 2, 2, RAMPS.short)).toMatch(/^.{2}\n.{2}$/);
  });
  it("inverts when requested", () => {
    const black = new Uint8ClampedArray([0, 0, 0, 255]);
    expect(bufferToAscii(black, 1, 1, RAMPS.short, true)).toBe(RAMPS.short[RAMPS.short.length - 1]);
  });
  it("returns empty for empty dimensions", () => {
    expect(bufferToAscii(new Uint8ClampedArray(), 0, 0, RAMPS.short)).toBe("");
  });
});
