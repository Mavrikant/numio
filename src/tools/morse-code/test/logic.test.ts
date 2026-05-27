import { describe, it, expect } from "vitest";
import { textToMorse, morseToText } from "../logic";

describe("morse-code", () => {
  it("encodes text to morse", () => {
    expect(textToMorse("SOS")).toBe("... --- ...");
    expect(textToMorse("HI BYE")).toBe(".... .. / -... -.-- .");
  });
  it("decodes morse to text", () => {
    expect(morseToText("... --- ...")).toBe("sos");
    expect(morseToText(".... .. / -... -.-- .")).toBe("hi bye");
  });
  it("round-trips (lowercased)", () => {
    expect(morseToText(textToMorse("Hello World 123"))).toBe("hello world 123");
  });
});
