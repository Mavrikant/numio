import { describe, it, expect } from "vitest";
import { PRESET_CITIES, clockTime, clockDate } from "../logic";

describe("world-clock", () => {
  it("ships a useful set of preset cities", () => {
    expect(PRESET_CITIES.length).toBeGreaterThanOrEqual(10);
    expect(PRESET_CITIES.find((c) => c.label === "London")).toBeDefined();
    expect(PRESET_CITIES.find((c) => c.label === "Tokyo")).toBeDefined();
  });
  it("formats time in 24-hour HH:mm:ss", () => {
    const d = new Date("2026-05-28T10:30:45Z");
    expect(clockTime(d, "UTC")).toBe("10:30:45");
  });
  it("formats date with weekday and month", () => {
    const d = new Date("2026-05-28T10:30:45Z");
    expect(clockDate(d, "UTC")).toMatch(/Thu, 28 May|Thu 28 May/);
  });
});
