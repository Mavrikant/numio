import { describe, it, expect } from "vitest";
import { computeTimecard } from "../logic";

describe("computeTimecard", () => {
  it("totals two 7-hour days with no overtime", () => {
    const r = computeTimecard(
      [
        { in: "09:00", out: "17:00", breakMin: 60 },
        { in: "09:00", out: "17:00", breakMin: 60 },
      ],
      { otThresholdH: 40, rate: 20 },
    );
    expect(r.perRow).toEqual([7, 7]);
    expect(r.totalH).toBe(14);
    expect(r.regularH).toBe(14);
    expect(r.overtimeH).toBe(0);
    expect(r.pay).toBe(280);
  });

  it("handles an overnight shift", () => {
    const r = computeTimecard([{ in: "22:00", out: "06:00" }], { otThresholdH: 40, rate: 0 });
    expect(r.perRow[0]).toBe(8);
    expect(r.totalH).toBe(8);
  });

  it("splits regular and overtime hours and applies 1.5x pay", () => {
    const r = computeTimecard(
      [
        { in: "08:00", out: "20:00" }, // 12h
        { in: "08:00", out: "20:00" }, // 12h
        { in: "08:00", out: "20:00" }, // 12h
        { in: "08:00", out: "20:00" }, // 12h => 48h total
      ],
      { otThresholdH: 40, rate: 10 },
    );
    expect(r.totalH).toBe(48);
    expect(r.regularH).toBe(40);
    expect(r.overtimeH).toBe(8);
    // 40*10 + 8*10*1.5 = 400 + 120
    expect(r.pay).toBe(520);
  });

  it("deducts break minutes and clamps negative to zero", () => {
    const r = computeTimecard([{ in: "10:00", out: "10:30", breakMin: 60 }], { otThresholdH: 40, rate: 0 });
    expect(r.perRow[0]).toBe(0);
  });

  it("throws on malformed time", () => {
    expect(() => computeTimecard([{ in: "9am", out: "5pm" }], { otThresholdH: 40, rate: 0 })).toThrow();
  });
});
