import { describe, it, expect } from "vitest";
import { classifyIp } from "../logic";

describe("ip-class-info", () => {
  it("classifies an IPv4 private RFC 1918 address", () => {
    const r = classifyIp("192.168.1.42");
    expect(r.version).toBe("IPv4");
    expect(r.classfulClass).toBe("C");
    expect(r.isPrivate).toBe(true);
  });
  it("detects loopback", () => {
    expect(classifyIp("127.0.0.1").isLoopback).toBe(true);
    expect(classifyIp("::1").isLoopback).toBe(true);
  });
  it("detects link-local", () => {
    expect(classifyIp("169.254.1.2").isLinkLocal).toBe(true);
    expect(classifyIp("fe80::1").isLinkLocal).toBe(true);
  });
  it("detects multicast", () => {
    expect(classifyIp("224.0.0.1").isMulticast).toBe(true);
    expect(classifyIp("ff02::1").isMulticast).toBe(true);
  });
  it("flags TEST-NET documentation ranges", () => {
    expect(classifyIp("192.0.2.5").isDocumentation).toBe(true);
    expect(classifyIp("2001:db8::1").isDocumentation).toBe(true);
  });
  it("assigns class A/B/C correctly", () => {
    expect(classifyIp("10.0.0.1").classfulClass).toBe("A");
    expect(classifyIp("172.16.0.1").classfulClass).toBe("B");
    expect(classifyIp("192.168.0.1").classfulClass).toBe("C");
  });
  it("rejects invalid IPv4", () => {
    expect(classifyIp("999.0.0.0").error).not.toBeNull();
  });
  it("identifies unique-local IPv6 as private", () => {
    expect(classifyIp("fc00::1").isPrivate).toBe(true);
  });
});
