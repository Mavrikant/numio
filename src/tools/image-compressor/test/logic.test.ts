import { describe, it, expect } from "vitest";
import { humanFileSize, fitWithin } from "../logic";

describe("image-compressor utilities", () => {
  it("formats bytes", () => {
    expect(humanFileSize(512)).toBe("512 B");
    expect(humanFileSize(2048)).toBe("2.00 KB");
    expect(humanFileSize(5 * 1024 * 1024)).toBe("5.00 MB");
  });
  it("fits within while preserving aspect", () => {
    expect(fitWithin(1000, 500, 200, 200)).toEqual({ width: 200, height: 100 });
  });
  it("does not upscale by default", () => {
    expect(fitWithin(50, 50, 200, 200)).toEqual({ width: 50, height: 50 });
  });
  it("upscales when requested", () => {
    expect(fitWithin(50, 50, 200, 200, true)).toEqual({ width: 200, height: 200 });
  });
});
