import { describe, it, expect } from "vitest";
import { convertBase } from "../logic";

describe("number-base-converter regressions", () => {
  it("treats 0b… as hex digits when the base is 16", () => {
    expect(convertBase("0b1a", 16).decimal).toBe("2842");
    expect(convertBase("0b", 16).decimal).toBe("11");
  });
  it("rejects a 0x prefix when the base is 10", () => {
    expect(() => convertBase("0x99", 10)).toThrow();
  });
  it("still strips matching prefixes", () => {
    expect(convertBase("0xff", 16).decimal).toBe("255");
    expect(convertBase("0b101", 2).decimal).toBe("5");
  });
});
