import { describe, it, expect } from "vitest";
import { processLines } from "../logic";

const base = { dedupe: false, trim: false, removeEmpty: false, caseInsensitive: false, sort: "none" as const };

describe("processLines", () => {
  it("removes duplicate lines keeping first", () => {
    expect(processLines("a\nb\na\nc\nb", { ...base, dedupe: true })).toBe("a\nb\nc");
  });
  it("dedupes case-insensitively", () => {
    expect(processLines("Apple\napple\nBANANA", { ...base, dedupe: true, caseInsensitive: true })).toBe("Apple\nBANANA");
  });
  it("sorts ascending and descending", () => {
    expect(processLines("c\na\nb", { ...base, sort: "asc" })).toBe("a\nb\nc");
    expect(processLines("a\nc\nb", { ...base, sort: "desc" })).toBe("c\nb\na");
  });
  it("trims and removes empty lines", () => {
    expect(processLines("  a  \n\n b ", { ...base, trim: true, removeEmpty: true })).toBe("a\nb");
  });
});
