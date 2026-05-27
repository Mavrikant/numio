import { describe, it, expect } from "vitest";
import { removeAccents } from "../logic";

describe("removeAccents", () => {
  it("strips common accents", () => {
    expect(removeAccents("café résumé naïve")).toBe("cafe resume naive");
    expect(removeAccents("Über Mädchen")).toBe("Uber Madchen");
  });
  it("maps special letters", () => {
    expect(removeAccents("straße")).toBe("strasse");
    expect(removeAccents("Øre æsop")).toBe("Ore aesop");
  });
  it("handles Turkish letters", () => {
    expect(removeAccents("çğıöşü ÇĞİÖŞÜ")).toBe("cgiosu CGIOSU");
  });
  it("leaves plain ASCII unchanged", () => {
    expect(removeAccents("hello 123")).toBe("hello 123");
  });
});
