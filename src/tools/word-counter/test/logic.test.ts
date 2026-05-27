import { describe, it, expect } from "vitest";
import { analyzeText } from "../logic";

describe("analyzeText", () => {
  it("counts an empty string as all zeros", () => {
    const s = analyzeText("");
    expect(s).toMatchObject({ characters: 0, words: 0, sentences: 0, paragraphs: 0, lines: 0 });
  });

  it("counts words and characters", () => {
    const s = analyzeText("Hello world");
    expect(s.words).toBe(2);
    expect(s.characters).toBe(11);
    expect(s.charactersNoSpaces).toBe(10);
  });

  it("counts sentences, paragraphs and lines", () => {
    const s = analyzeText("One. Two! Three?\n\nNew paragraph.");
    expect(s.sentences).toBe(4);
    expect(s.paragraphs).toBe(2);
    expect(s.lines).toBe(3);
  });

  it("estimates reading time at 200 wpm", () => {
    const text = Array.from({ length: 400 }, () => "word").join(" ");
    expect(analyzeText(text).readingMinutes).toBeCloseTo(2, 6);
  });
});
