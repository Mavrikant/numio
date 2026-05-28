import { describe, it, expect } from "vitest";
import { calculateSubnet } from "../logic";

describe("subnet-calculator", () => {
  it("calculates a /24 network", () => {
    const r = calculateSubnet("192.168.1.10/24");
    expect(r).toMatchObject({
      network: "192.168.1.0",
      broadcast: "192.168.1.255",
      firstHost: "192.168.1.1",
      lastHost: "192.168.1.254",
      netmask: "255.255.255.0",
      wildcard: "0.0.0.255",
      totalHosts: 256,
      usableHosts: 254,
    });
  });
  it("handles /30 point-to-point", () => {
    const r = calculateSubnet("10.0.0.0/30");
    expect(r.totalHosts).toBe(4);
    expect(r.usableHosts).toBe(2);
    expect(r.firstHost).toBe("10.0.0.1");
    expect(r.lastHost).toBe("10.0.0.2");
  });
  it("treats /31 as RFC 3021 point-to-point", () => {
    const r = calculateSubnet("10.0.0.0/31");
    expect(r.totalHosts).toBe(2);
    expect(r.usableHosts).toBe(2);
  });
  it("treats /32 as a single host", () => {
    const r = calculateSubnet("10.0.0.5/32");
    expect(r.totalHosts).toBe(1);
    expect(r.usableHosts).toBe(1);
  });
  it("rejects malformed input", () => {
    expect(calculateSubnet("nope").error).toMatch(/format/);
    expect(calculateSubnet("999.0.0.0/24").error).toMatch(/0–255/);
    expect(calculateSubnet("10.0.0.0/40").error).toMatch(/0 and 32/);
  });
  it("returns an empty result for empty input", () => {
    expect(calculateSubnet("")).toMatchObject({ error: null, network: "" });
  });
});
