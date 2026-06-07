import { describe, it, expect } from "vitest";
import { raidCapacity } from "../logic";

describe("raidCapacity", () => {
  it("RAID 0: full capacity, no fault tolerance", () => {
    const r = raidCapacity({ level: "0", disks: 4, sizeTB: 4 });
    expect(r.usableTB).toBe(16);
    expect(r.redundancyTB).toBe(0);
    expect(r.faultTolerance).toBe(0);
    expect(r.efficiencyPct).toBe(100);
  });

  it("RAID 1: single disk capacity, mirror tolerance", () => {
    const r = raidCapacity({ level: "1", disks: 2, sizeTB: 4 });
    expect(r.usableTB).toBe(4);
    expect(r.faultTolerance).toBe(1);
    const r3 = raidCapacity({ level: "1", disks: 3, sizeTB: 4 });
    expect(r3.faultTolerance).toBe(2);
  });

  it("RAID 5: 4x4 -> 12 usable, tolerance 1", () => {
    const r = raidCapacity({ level: "5", disks: 4, sizeTB: 4 });
    expect(r.usableTB).toBe(12);
    expect(r.redundancyTB).toBe(4);
    expect(r.faultTolerance).toBe(1);
    expect(r.efficiencyPct).toBe(75);
  });

  it("RAID 6: 6x4 -> 16 usable, tolerance 2", () => {
    const r = raidCapacity({ level: "6", disks: 6, sizeTB: 4 });
    expect(r.usableTB).toBe(16);
    expect(r.redundancyTB).toBe(8);
    expect(r.faultTolerance).toBe(2);
  });

  it("RAID 10: 4x4 -> 8 usable", () => {
    const r = raidCapacity({ level: "10", disks: 4, sizeTB: 4 });
    expect(r.usableTB).toBe(8);
    expect(r.faultTolerance).toBeGreaterThanOrEqual(1);
    expect(r.efficiencyPct).toBe(50);
  });

  it("throws on invalid disk counts", () => {
    expect(() => raidCapacity({ level: "5", disks: 2, sizeTB: 4 })).toThrow();
    expect(() => raidCapacity({ level: "6", disks: 3, sizeTB: 4 })).toThrow();
    expect(() => raidCapacity({ level: "10", disks: 3, sizeTB: 4 })).toThrow(); // odd
    expect(() => raidCapacity({ level: "10", disks: 2, sizeTB: 4 })).toThrow(); // < 4
    expect(() => raidCapacity({ level: "1", disks: 1, sizeTB: 4 })).toThrow();
    expect(() => raidCapacity({ level: "0", disks: 0, sizeTB: 4 })).toThrow();
    expect(() => raidCapacity({ level: "5", disks: 4, sizeTB: 0 })).toThrow();
  });
});
