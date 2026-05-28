import { describe, it, expect } from "vitest";
import { buildWifiString, buildVCardString } from "../logic";

describe("qr-code-generator", () => {
  it("builds a WPA WiFi string", () => {
    expect(buildWifiString("MyNet", "secret", "WPA", false)).toBe("WIFI:T:WPA;S:MyNet;P:secret;;");
  });
  it("omits the password for open networks", () => {
    expect(buildWifiString("Open", "", "nopass", false)).toBe("WIFI:T:nopass;S:Open;;");
  });
  it("escapes special characters in WiFi fields", () => {
    expect(buildWifiString('Net";:\\', "p;ass", "WPA", true)).toBe('WIFI:T:WPA;S:Net\\"\\;\\:\\\\;P:p\\;ass;H:true;;');
  });
  it("returns empty for a missing SSID", () => {
    expect(buildWifiString("", "p", "WPA", false)).toBe("");
  });
  it("builds a minimal vCard", () => {
    expect(buildVCardString({ name: "A", phone: "1", email: "", org: "", url: "" })).toBe("BEGIN:VCARD\nVERSION:3.0\nFN:A\nTEL:1\nEND:VCARD");
  });
  it("returns empty when no contact fields are provided", () => {
    expect(buildVCardString({ name: "", phone: "", email: "", org: "X", url: "" })).toBe("");
  });
});
