import { describe, it, expect } from "vitest";
import { binaryCalculate } from "../logic";

describe("binary-calculator", () => {
  it("adds binary numbers", () => {
    expect(binaryCalculate("1010", "+", "0011")).toMatchObject({ binary: "1101", decimal: "13", hex: "D", octal: "15" });
  });
  it("performs AND, OR, XOR", () => {
    expect(binaryCalculate("1100", "&", "1010").binary).toBe("1000");
    expect(binaryCalculate("1100", "|", "1010").binary).toBe("1110");
    expect(binaryCalculate("1100", "^", "1010").binary).toBe("110");
  });
  it("supports shift operators", () => {
    expect(binaryCalculate("1", "<<", "100").binary).toBe("10000");
    expect(binaryCalculate("10000", ">>", "10").binary).toBe("100");
  });
  it("handles arbitrary precision", () => {
    expect(binaryCalculate("1".repeat(100), "+", "1").decimal).toBe((2n ** 100n).toString());
  });
  it("rejects invalid binary input", () => {
    expect(binaryCalculate("102", "+", "1").error).not.toBeNull();
  });
  it("rejects division by zero", () => {
    expect(binaryCalculate("10", "/", "0").error).toMatch(/Division by zero/);
  });
});
