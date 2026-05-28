import { describe, it, expect } from "vitest";
import { asciiBanner } from "../logic";

describe("ascii-banner-generator", () => {
  it("returns five rows joined by newlines", () => {
    expect(asciiBanner("A").split("\n")).toHaveLength(5);
  });
  it("uses block character by default", () => {
    expect(asciiBanner("A")).toContain("█");
    expect(asciiBanner("A")).not.toContain("#");
  });
  it("supports hash and dot styles", () => {
    expect(asciiBanner("A", "hash")).toContain("#");
    expect(asciiBanner("A", "dot")).toContain("·");
  });
  it("upcases lowercase input", () => {
    expect(asciiBanner("a")).toBe(asciiBanner("A"));
  });
  it("renders digits", () => {
    expect(asciiBanner("123").split("\n")).toHaveLength(5);
  });
});
