import { describe, it, expect } from "vitest";
import { classifyQr, parseWifi } from "../logic";

describe("classifyQr", () => {
  it("classifies URLs with an href", () => {
    expect(classifyQr("https://example.com/x")).toEqual({ kind: "url", href: "https://example.com/x" });
  });
  it("classifies bare and mailto emails", () => {
    expect(classifyQr("a@b.com")).toEqual({ kind: "email", href: "mailto:a@b.com" });
    expect(classifyQr("mailto:a@b.com").kind).toBe("email");
  });
  it("classifies tel, wifi and geo", () => {
    expect(classifyQr("tel:+15551234").kind).toBe("phone");
    expect(classifyQr("WIFI:T:WPA;S:net;P:pw;;").kind).toBe("wifi");
    expect(classifyQr("geo:37.5,-122.3").kind).toBe("geo");
  });
  it("falls back to text", () => {
    expect(classifyQr("just some text").kind).toBe("text");
  });
});

describe("parseWifi", () => {
  it("parses a WIFI payload", () => {
    expect(parseWifi("WIFI:T:WPA;S:MyNet;P:secret;H:true;;")).toEqual({
      ssid: "MyNet",
      password: "secret",
      encryption: "WPA",
      hidden: true,
    });
  });
  it("returns null for non-wifi", () => {
    expect(parseWifi("https://example.com")).toBeNull();
  });
});
