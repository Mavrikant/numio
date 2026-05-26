import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Sleep compute — from_bedtime numeric correctness", () => {
  it("bedtime 23:00, 6 cycles → wake at 05:34 (23:00 + 14min + 6×90min = 23:14 + 540min = 08:14 next day... wait)", () => {
    // 23:00 = 1380 min
    // + 14 min latency = 1394 min
    // + 6×90 = 540 min → 1934 min → 1934 - 1440 = 494 min → 08:14
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown as Array<{cycles: number; time: string; duration: string}>;
    const sixCycle = options.find(o => o.cycles === 6);
    expect(sixCycle?.time).toBe("08:14");
  });

  it("bedtime 22:00, 5 cycles → 22:00 + 14 + 450 = 22:00 + 464min = 22:00 + 7h44m → 05:44", () => {
    // 22:00 = 1320 min + 14 + 450 = 1784 min → 1784 - 1440 = 344 min → 05:44
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "22:00", cycleCount: 5 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown as Array<{cycles: number; time: string; duration: string}>;
    const fiveCycle = options.find(o => o.cycles === 5);
    expect(fiveCycle?.time).toBe("05:44");
  });

  it("from_bedtime mode returns 4 cycle options (4, 5, 6, 7)", () => {
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown as Array<{cycles: number}>;
    expect(options).toHaveLength(4);
    expect(options.map(o => o.cycles)).toEqual([4, 5, 6, 7]);
  });

  it("from_waketime 07:00, 5 cycles → bedtime: 07:00 - 14 - 450 = 07:00 - 464min = 07:00 - 7h44m → 23:16", () => {
    // 07:00 = 420 min; 420 - 14 - 450 = -44 min → -44 + 1440 = 1396 min → 23:16
    const inputs = calculator.inputSchema.parse({ mode: "from_waketime", inputTime: "07:00", cycleCount: 5 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown as Array<{cycles: number; time: string}>;
    const fiveCycle = options.find(o => o.cycles === 5);
    expect(fiveCycle?.time).toBe("23:16");
  });

  it("sleep duration for 6 cycles is 9 hours", () => {
    // 6 × 90min = 540min = 9h
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 });
    const result = calculator.compute(inputs);
    expect(result.sleepDurationHours).toBe(9);
  });

  it("sleep duration for 4 cycles is 6 hours", () => {
    // 4 × 90min = 360min = 6h
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 4 });
    const result = calculator.compute(inputs);
    expect(result.sleepDurationHours).toBe(6);
  });

  it("midnight crossover: bedtime 00:30, 5 cycles → 00:30 + 14 + 450 = 7h44m → 08:14", () => {
    // 00:30 = 30 min + 14 + 450 = 494 min → 08:14
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "00:30", cycleCount: 5 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown as Array<{cycles: number; time: string}>;
    const fiveCycle = options.find(o => o.cycles === 5);
    expect(fiveCycle?.time).toBe("08:14");
  });
});
