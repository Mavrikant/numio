import { describe, it, expect } from "vitest";
import { toFancy } from "../logic";

describe("toFancy", () => {
  it("produces bold math letters and digits", () => {
    expect(toFancy("AB7", "bold")).toBe("𝐀𝐁𝟕");
  });
  it("produces monospace", () => {
    expect(toFancy("ab", "monospace")).toBe("𝚊𝚋");
  });
  it("special-cases italic h", () => {
    expect(toFancy("h", "italic")).toBe("ℎ");
  });
  it("uses full-width forms", () => {
    expect(toFancy("A1", "fullwidth")).toBe("Ａ１");
  });
  it("leaves unsupported characters alone", () => {
    expect(toFancy("a-b", "bold")).toBe("𝐚-𝐛");
  });
});
