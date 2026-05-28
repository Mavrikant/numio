import { describe, it, expect } from "vitest";
import { parseUserAgent } from "../logic";

describe("user-agent-parser", () => {
  it("recognises Chrome on Windows desktop", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    expect(parseUserAgent(ua)).toMatchObject({
      browser: "Chrome",
      browserVersion: "120.0.0.0",
      engine: "Blink",
      os: "Windows 10/11",
      device: "Desktop",
    });
  });
  it("recognises Edge over Chrome", () => {
    const ua = "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0";
    expect(parseUserAgent(ua).browser).toBe("Edge");
  });
  it("recognises Safari on iPhone", () => {
    const ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";
    expect(parseUserAgent(ua)).toMatchObject({ browser: "Safari", os: "iOS", device: "Mobile (iPhone)" });
  });
  it("recognises Firefox on Linux", () => {
    const ua = "Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0";
    expect(parseUserAgent(ua)).toMatchObject({ browser: "Firefox", engine: "Gecko", os: "Linux" });
  });
  it("returns empty fields for empty input", () => {
    expect(parseUserAgent("")).toEqual({ browser: "", browserVersion: "", engine: "", os: "", device: "" });
  });
});
