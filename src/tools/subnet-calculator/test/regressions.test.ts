import { describe, it, expect } from "vitest";
import { calculateSubnet } from "../logic";

describe("subnet-calculator regressions", () => {
  it("reports the full address space for /0", () => {
    const r = calculateSubnet("0.0.0.0/0");
    expect(r.totalHosts).toBe(4294967296);
    expect(r.usableHosts).toBe(4294967294);
  });
  it("keeps /31 and /32 special cases", () => {
    expect(calculateSubnet("10.0.0.0/31").usableHosts).toBe(2);
    expect(calculateSubnet("10.0.0.1/32").usableHosts).toBe(1);
  });
});
