import { describe, it, expect } from "vitest";
import { estimateReadingTime } from "../logic";

describe("reading-time-estimator", () => {
  it("returns zero for empty text", () => {
    expect(estimateReadingTime("")).toMatchObject({ words: 0, characters: 0, pretty: "0s" });
  });
  it("counts words", () => {
    expect(estimateReadingTime("one two three four five").words).toBe(5);
  });
  it("formats minutes and seconds", () => {
    // 400 words at 200 WPM = 2m
    const text = Array(400).fill("w").join(" ");
    expect(estimateReadingTime(text, 200).pretty).toBe("2m");
  });
  it("falls back to seconds-only formatting for short texts", () => {
    // 50 words at 200 WPM = 15s
    const text = Array(50).fill("w").join(" ");
    expect(estimateReadingTime(text, 200).pretty).toBe("15s");
  });
  it("includes both minutes and seconds when needed", () => {
    // 250 words at 200 WPM = 75s = 1m 15s
    const text = Array(250).fill("w").join(" ");
    expect(estimateReadingTime(text, 200).pretty).toBe("1m 15s");
  });
  it("clamps WPM to a sane minimum", () => {
    expect(estimateReadingTime("one two", 0).pretty).not.toBe("Infinity");
  });
});
