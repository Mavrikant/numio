import { describe, it, expect } from "vitest";
import { slugify } from "../logic";

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("Hello World! Example")).toBe("hello-world-example");
  });
  it("transliterates Turkish characters", () => {
    expect(slugify("Çığ Şükrü İğne")).toBe("cig-sukru-igne");
  });
  it("strips diacritics", () => {
    expect(slugify("Café Münübé")).toBe("cafe-munube");
  });
  it("supports underscore separator and case preservation", () => {
    expect(slugify("Hello World", "_", false)).toBe("Hello_World");
  });
  it("collapses and trims separators", () => {
    expect(slugify("  --a   b--  ")).toBe("a-b");
  });
});
