import { describe, it, expect } from "vitest";
import { toNato } from "../logic";

describe("toNato", () => {
  it("converts letters", () => {
    expect(toNato("abc")).toBe("Alfa Bravo Charlie");
  });
  it("converts digits", () => {
    expect(toNato("A1")).toBe("Alfa One");
  });
  it("marks spaces with a slash", () => {
    expect(toNato("hi bye")).toBe("Hotel India / Bravo Yankee Echo");
  });
  it("passes through unknown characters", () => {
    expect(toNato("a@")).toBe("Alfa @");
  });
});
