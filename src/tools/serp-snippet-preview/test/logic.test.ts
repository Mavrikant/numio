import { describe, it, expect } from "vitest";
import { truncate, buildSnippet, type Measure } from "../logic";

// Fake measure: every character is 10px wide.
const measure: Measure = (s) => s.length * 10;

describe("truncate", () => {
  it("leaves text that fits unchanged", () => {
    const r = truncate("hello", 100, measure);
    expect(r.text).toBe("hello");
    expect(r.truncated).toBe(false);
  });
  it("truncates and appends an ellipsis when too wide", () => {
    const r = truncate("abcdefghij", 50, measure); // 5 chars + … = 60 too wide, fit 40px
    expect(r.truncated).toBe(true);
    expect(r.text.endsWith("…")).toBe(true);
    expect(measure(r.text)).toBeLessThanOrEqual(50);
  });
  it("keeps the result within the pixel budget", () => {
    const r = truncate("the quick brown fox jumps", 120, measure);
    expect(measure(r.text)).toBeLessThanOrEqual(120);
    expect(r.text.endsWith("…")).toBe(true);
  });
});

describe("buildSnippet", () => {
  it("does not truncate short content", () => {
    const s = buildSnippet({ title: "Short title", url: "https://example.com", description: "Short desc" }, measure);
    expect(s.titleTruncated).toBe(false);
    expect(s.descTruncated).toBe(false);
    expect(s.title).toBe("Short title");
  });
  it("truncates a long title (600px budget => 60 chars) with an ellipsis", () => {
    const longTitle = "x".repeat(100);
    const s = buildSnippet({ title: longTitle, url: "https://example.com", description: "" }, measure);
    expect(s.titleTruncated).toBe(true);
    expect(s.title.endsWith("…")).toBe(true);
    expect(measure(s.title)).toBeLessThanOrEqual(600);
  });
  it("truncates a long description (920px budget => 92 chars)", () => {
    const longDesc = "y".repeat(200);
    const s = buildSnippet({ title: "t", url: "https://example.com", description: longDesc }, measure);
    expect(s.descTruncated).toBe(true);
    expect(s.description.endsWith("…")).toBe(true);
    expect(measure(s.description)).toBeLessThanOrEqual(920);
  });
  it("builds a breadcrumb display URL", () => {
    const s = buildSnippet({ title: "t", url: "https://example.com/blog/post", description: "" }, measure);
    expect(s.displayUrl).toBe("example.com › blog › post");
  });
});
