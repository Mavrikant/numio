import { describe, it, expect } from "vitest";
import { classifyIp } from "../logic";

describe("ip-class-info regressions", () => {
  it("rejects structurally invalid IPv6 strings", () => {
    expect(classifyIp(":::").error).not.toBeNull();
    expect(classifyIp("1:2:3:4:5:6:7:8:9:a").error).not.toBeNull();
    expect(classifyIp("fffff::").error).not.toBeNull();
  });
  it("recognises the expanded loopback form", () => {
    const info = classifyIp("0:0:0:0:0:0:0:1");
    expect(info.error).toBeNull();
    expect(info.isLoopback).toBe(true);
  });
  it("still classifies common IPv6 prefixes", () => {
    expect(classifyIp("fe80::1").isLinkLocal).toBe(true);
    expect(classifyIp("ff02::1").isMulticast).toBe(true);
    expect(classifyIp("fd12::1").isPrivate).toBe(true);
    expect(classifyIp("2001:db8::1").isDocumentation).toBe(true);
  });
});
