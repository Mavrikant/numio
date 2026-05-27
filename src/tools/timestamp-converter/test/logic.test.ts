import { describe, it, expect } from "vitest";
import { unixToIso, dateToUnix } from "../logic";

describe("timestamp-converter", () => {
  it("converts seconds to ISO UTC", () => {
    expect(unixToIso(1700000000, "s")).toBe("2023-11-14T22:13:20.000Z");
  });
  it("converts milliseconds to ISO UTC", () => {
    expect(unixToIso(1700000000000, "ms")).toBe("2023-11-14T22:13:20.000Z");
  });
  it("parses a date back to unix", () => {
    expect(dateToUnix("2023-11-14T22:13:20Z")).toEqual({ seconds: 1700000000, ms: 1700000000000 });
  });
  it("throws on invalid", () => {
    expect(() => dateToUnix("not a date")).toThrow();
    expect(() => unixToIso(Number.NaN, "s")).toThrow();
  });
});
