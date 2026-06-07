import { describe, it, expect } from "vitest";
import { buildUla, generateUla } from "../logic";

describe("buildUla", () => {
  it("builds a deterministic prefix starting with fd from fixed bytes", () => {
    const bytes = new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a]);
    const r = buildUla(bytes);
    expect(r.globalId).toBe("12:3456:789a");
    expect(r.prefix48).toBe("fd12:3456:789a::/48");
    expect(r.sampleSubnet).toBe("fd12:3456:789a:0000::/64");
    expect(r.prefix48.startsWith("fd")).toBe(true);
  });
  it("zero-pads single-hex-digit bytes", () => {
    const r = buildUla(new Uint8Array([0x00, 0x01, 0x02, 0x03, 0x04]));
    expect(r.prefix48).toBe("fd00:0102:0304::/48");
  });
  it("includes the subnet id in the sample subnet", () => {
    const r = buildUla(new Uint8Array([0x12, 0x34, 0x56, 0x78, 0x9a]), 0x0042);
    expect(r.sampleSubnet).toBe("fd12:3456:789a:0042::/64");
  });
  it("throws when the global id is not 5 bytes", () => {
    expect(() => buildUla(new Uint8Array([1, 2, 3, 4]))).toThrow();
    expect(() => buildUla(new Uint8Array([1, 2, 3, 4, 5, 6]))).toThrow();
  });
  it("throws on an out-of-range subnet id", () => {
    expect(() => buildUla(new Uint8Array([1, 2, 3, 4, 5]), -1)).toThrow();
    expect(() => buildUla(new Uint8Array([1, 2, 3, 4, 5]), 0x10000)).toThrow();
  });
});

describe("generateUla", () => {
  it("always produces an fd-prefixed /48", () => {
    for (let i = 0; i < 20; i++) {
      const r = generateUla();
      expect(r.prefix48.startsWith("fd")).toBe(true);
      expect(r.prefix48.endsWith("::/48")).toBe(true);
    }
  });
});
