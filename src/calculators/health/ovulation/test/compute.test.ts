import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Ovulation compute — numeric correctness", () => {
  const parse = (inputs: { lmpDate: string; cycleLength: number }) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("standard 28-day cycle: ovulation is LMP + 14 days", () => {
    const result = parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    expect(result.ovulationDate).toBe("2025-01-15");
  });

  it("standard 28-day cycle: nextPeriod is LMP + 28 days", () => {
    const result = parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    expect(result.nextPeriod).toBe("2025-01-29");
  });

  it("standard 28-day cycle: fertileStart is ovulation - 5 days", () => {
    const result = parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    expect(result.fertileStart).toBe("2025-01-10");
  });

  it("standard 28-day cycle: fertileEnd is ovulation + 1 day", () => {
    const result = parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    expect(result.fertileEnd).toBe("2025-01-16");
  });

  it("standard 28-day cycle: lhSurgeDate is ovulation - 1 day", () => {
    const result = parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    expect(result.lhSurgeDate).toBe("2025-01-14");
  });

  it("30-day cycle: ovulation is LMP + 16 days", () => {
    const result = parse({ lmpDate: "2025-03-01", cycleLength: 30 });
    expect(result.ovulationDate).toBe("2025-03-17");
  });

  it("21-day cycle (minimum): ovulation is LMP + 7 days", () => {
    const result = parse({ lmpDate: "2025-05-01", cycleLength: 21 });
    expect(result.ovulationDate).toBe("2025-05-08");
  });

  it("45-day cycle (maximum): ovulation is LMP + 31 days", () => {
    const result = parse({ lmpDate: "2025-02-01", cycleLength: 45 });
    expect(result.ovulationDate).toBe("2025-03-04");
  });

  it("handles month boundary correctly", () => {
    const result = parse({ lmpDate: "2025-01-28", cycleLength: 28 });
    expect(result.nextPeriod).toBe("2025-02-25");
  });

  it("handles leap year correctly", () => {
    const result = parse({ lmpDate: "2024-02-14", cycleLength: 28 });
    expect(result.ovulationDate).toBe("2024-02-28");
    expect(result.nextPeriod).toBe("2024-03-13");
  });
});
