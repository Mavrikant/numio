import { describe, it, expect } from "vitest";
import { TIMEZONES, formatInTimezone, offsetLabel } from "../logic";

describe("timezone-converter", () => {
  it("lists a useful set of zones including UTC", () => {
    expect(TIMEZONES[0]).toBe("UTC");
    expect(TIMEZONES).toContain("America/New_York");
    expect(TIMEZONES).toContain("Asia/Tokyo");
  });
  it("formats an instant in UTC", () => {
    const d = new Date("2026-05-28T10:30:00Z");
    expect(formatInTimezone(d, "UTC")).toBe("2026-05-28 10:30");
  });
  it("formats an instant in Tokyo (UTC+9)", () => {
    const d = new Date("2026-05-28T10:30:00Z");
    expect(formatInTimezone(d, "Asia/Tokyo")).toBe("2026-05-28 19:30");
  });
  it("emits an offset label", () => {
    const d = new Date("2026-01-15T12:00:00Z");
    expect(offsetLabel(d, "UTC")).toMatch(/UTC/);
  });
});
