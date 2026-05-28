import { describe, it, expect } from "vitest";
import { computeDownloadSeconds, formatSeconds } from "../logic";

describe("bandwidth-calculator", () => {
  it("computes 1 GB at 100 Mbps", () => {
    // 1 GB = 8,589,934,592 bits / 100,000,000 bps ≈ 85.9 s
    const s = computeDownloadSeconds(1, "GB", 100, "Mbps");
    expect(s).toBeGreaterThan(85);
    expect(s).toBeLessThan(87);
  });
  it("computes 100 MB at 10 Mbps", () => {
    const s = computeDownloadSeconds(100, "MB", 10, "Mbps");
    expect(s).toBeGreaterThan(83);
    expect(s).toBeLessThan(85);
  });
  it("returns 0 for zero size or speed", () => {
    expect(computeDownloadSeconds(0, "MB", 10, "Mbps")).toBe(0);
    expect(computeDownloadSeconds(100, "MB", 0, "Mbps")).toBe(0);
  });
  it("formats seconds nicely", () => {
    expect(formatSeconds(0)).toBe("—");
    expect(formatSeconds(0.5)).toBe("500 ms");
    expect(formatSeconds(75)).toBe("1m 15s");
    expect(formatSeconds(3661)).toBe("1h 1m 1s");
  });
});
