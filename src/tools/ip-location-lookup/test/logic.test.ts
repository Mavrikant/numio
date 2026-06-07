import { describe, it, expect } from "vitest";
import { isValidIp, osmLink } from "../logic";

describe("isValidIp", () => {
  it("accepts valid IPv4", () => {
    expect(isValidIp("8.8.8.8")).toBe(true);
    expect(isValidIp("192.168.0.1")).toBe(true);
    expect(isValidIp("255.255.255.255")).toBe(true);
    expect(isValidIp("  1.2.3.4  ")).toBe(true);
  });
  it("accepts valid IPv6", () => {
    expect(isValidIp("2001:4860:4860::8888")).toBe(true);
    expect(isValidIp("::1")).toBe(true);
    expect(isValidIp("fe80::1")).toBe(true);
  });
  it("rejects out-of-range IPv4", () => {
    expect(isValidIp("999.1.1.1")).toBe(false);
    expect(isValidIp("256.0.0.1")).toBe(false);
    expect(isValidIp("1.2.3")).toBe(false);
  });
  it("rejects nonsense", () => {
    expect(isValidIp("nope")).toBe(false);
    expect(isValidIp("")).toBe(false);
    expect(isValidIp("example.com")).toBe(false);
  });
});

describe("osmLink", () => {
  it("builds an OpenStreetMap URL", () => {
    expect(osmLink(37.751, -97.822)).toBe("https://www.openstreetmap.org/?mlat=37.751&mlon=-97.822#map=12/37.751/-97.822");
  });
});
