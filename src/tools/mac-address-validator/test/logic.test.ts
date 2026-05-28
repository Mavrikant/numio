import { describe, it, expect } from "vitest";
import { validateMac } from "../logic";

describe("mac-address-validator", () => {
  it("accepts colon-separated MACs", () => {
    expect(validateMac("00:1A:2B:3C:4D:5E").valid).toBe(true);
  });
  it("accepts dash-separated and dotted MACs", () => {
    expect(validateMac("00-1a-2b-3c-4d-5e").valid).toBe(true);
    expect(validateMac("001a.2b3c.4d5e").valid).toBe(true);
  });
  it("emits canonical, no-separator, Cisco and OUI forms", () => {
    const r = validateMac("00:1A:2B:3C:4D:5E");
    expect(r.canonical).toBe("00:1A:2B:3C:4D:5E");
    expect(r.noSeparator).toBe("001A2B3C4D5E");
    expect(r.cisco).toBe("001a.2b3c.4d5e");
    expect(r.oui).toBe("00:1A:2B");
  });
  it("detects multicast and locally administered MACs", () => {
    expect(validateMac("01:00:00:00:00:00").type).toContain("Multicast");
    expect(validateMac("02:00:00:00:00:00").type).toContain("Locally");
  });
  it("rejects MACs with wrong length", () => {
    expect(validateMac("00:1A:2B:3C:4D").error).not.toBeNull();
  });
});
