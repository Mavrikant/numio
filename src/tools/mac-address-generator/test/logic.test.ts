import { describe, it, expect } from "vitest";
import { buildMac, generateMac } from "../logic";

const BYTES = new Uint8Array([0x00, 0x1a, 0x2b, 0x3c, 0x4d, 0x5e]);

describe("buildMac", () => {
  it("formats with a colon separator", () => {
    expect(buildMac(BYTES, { separator: ":", uppercase: false, localAdmin: false })).toBe("00:1a:2b:3c:4d:5e");
  });
  it("formats with a hyphen separator", () => {
    expect(buildMac(BYTES, { separator: "-", uppercase: false, localAdmin: false })).toBe("00-1a-2b-3c-4d-5e");
  });
  it("formats with a dot separator (Cisco style)", () => {
    expect(buildMac(BYTES, { separator: ".", uppercase: false, localAdmin: false })).toBe("001a.2b3c.4d5e");
  });
  it("respects uppercase", () => {
    expect(buildMac(BYTES, { separator: ":", uppercase: true, localAdmin: false })).toBe("00:1A:2B:3C:4D:5E");
  });
  it("sets the locally-administered bit and clears the multicast bit", () => {
    // 0x00 -> set bit 1 -> 0x02
    expect(buildMac(BYTES, { separator: ":", uppercase: false, localAdmin: true })).toBe("02:1a:2b:3c:4d:5e");
    // 0x01 (multicast) -> set bit1, clear bit0 -> 0x02
    const multicast = new Uint8Array([0x01, 0x00, 0x00, 0x00, 0x00, 0x00]);
    expect(buildMac(multicast, { separator: ":", uppercase: false, localAdmin: true })).toBe("02:00:00:00:00:00");
  });
  it("throws when bytes are not exactly 6", () => {
    expect(() => buildMac(new Uint8Array([1, 2, 3, 4, 5]), { separator: ":", uppercase: false, localAdmin: false })).toThrow();
    expect(() => buildMac(new Uint8Array([1, 2, 3, 4, 5, 6, 7]), { separator: ":", uppercase: false, localAdmin: false })).toThrow();
  });
});

describe("generateMac", () => {
  it("produces a valid colon-separated MAC", () => {
    const mac = generateMac({ separator: ":", uppercase: false, localAdmin: false });
    expect(/^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/.test(mac)).toBe(true);
  });
  it("always sets the local bit when requested", () => {
    for (let i = 0; i < 20; i++) {
      const mac = generateMac({ separator: ":", uppercase: false, localAdmin: true });
      const first = parseInt(mac.slice(0, 2), 16);
      expect(first & 0b00000010).toBe(0b00000010); // local bit set
      expect(first & 0b00000001).toBe(0); // unicast (multicast bit clear)
    }
  });
});
