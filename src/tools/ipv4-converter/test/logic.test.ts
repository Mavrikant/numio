import { describe, it, expect } from "vitest";
import { convertIpv4 } from "../logic";

describe("ipv4-converter", () => {
  it("converts dotted decimal", () => {
    const r = convertIpv4("192.168.1.1");
    expect(r).toMatchObject({
      dotted: "192.168.1.1",
      decimal: "3232235777",
      hex: "0xC0A80101",
      binary: "11000000.10101000.00000001.00000001",
    });
  });
  it("accepts a decimal integer", () => {
    expect(convertIpv4("3232235777").dotted).toBe("192.168.1.1");
  });
  it("accepts hex with 0x prefix", () => {
    expect(convertIpv4("0xC0A80101").dotted).toBe("192.168.1.1");
  });
  it("accepts dotted binary", () => {
    expect(convertIpv4("11000000.10101000.00000001.00000001").decimal).toBe("3232235777");
  });
  it("rejects out-of-range octets", () => {
    expect(convertIpv4("999.0.0.0").error).toMatch(/0–255/);
  });
  it("rejects unknown formats", () => {
    expect(convertIpv4("hello").error).not.toBeNull();
  });
});
