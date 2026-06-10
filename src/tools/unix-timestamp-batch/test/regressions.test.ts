import { describe, it, expect } from "vitest";
import { parseTimestamps } from "../logic";

describe("unix-timestamp-batch regressions", () => {
  const now = new Date("2026-06-10T00:00:00Z");
  it("labels multi-year differences as years, not months", () => {
    const [row] = parseTimestamps("1609459200", now); // 2021-01-01
    expect(row!.relative).toMatch(/years? ago$/);
  });
  it("keeps sub-second precision for ISO inputs", () => {
    const [row] = parseTimestamps("2024-01-01T00:00:00.500Z", now);
    expect(row!.iso).toBe("2024-01-01T00:00:00.500Z");
  });
  it("treats 11-12 digit integers as milliseconds", () => {
    const [row] = parseTimestamps("946684800000", now); // 2000-01-01 in ms
    expect(row!.iso).toBe("2000-01-01T00:00:00.000Z");
  });
  it("still treats 10-digit integers as seconds", () => {
    const [row] = parseTimestamps("946684800", now);
    expect(row!.iso).toBe("2000-01-01T00:00:00.000Z");
  });
});
