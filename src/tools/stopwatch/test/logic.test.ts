import { describe, it, expect } from "vitest";
import { formatElapsed } from "../logic";

describe("stopwatch", () => {
  it("formats sub-minute durations as MM:SS.mmm", () => {
    expect(formatElapsed(0)).toBe("00:00.000");
    expect(formatElapsed(1234)).toBe("00:01.234");
  });
  it("formats minutes correctly", () => {
    expect(formatElapsed(65000)).toBe("01:05.000");
  });
  it("includes hours when over 1 hour", () => {
    expect(formatElapsed(3_661_234)).toBe("01:01:01.234");
  });
  it("clamps negatives to zero", () => {
    expect(formatElapsed(-50)).toBe("00:00.000");
  });
});
