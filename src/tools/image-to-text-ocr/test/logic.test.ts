import { describe, it, expect } from "vitest";
import { OCR_LANGUAGES, cleanOcrText } from "../logic";

describe("OCR_LANGUAGES", () => {
  it("offers a non-empty list including English", () => {
    expect(OCR_LANGUAGES.length).toBeGreaterThan(5);
    expect(OCR_LANGUAGES.some((l) => l.code === "eng")).toBe(true);
  });
});

describe("cleanOcrText", () => {
  it("trims trailing whitespace per line", () => {
    expect(cleanOcrText("hello   \nworld\t")).toBe("hello\nworld");
  });
  it("collapses 3+ blank lines and trims ends", () => {
    expect(cleanOcrText("\n\na\n\n\n\nb\n\n")).toBe("a\n\nb");
  });
});
