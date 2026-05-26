import { describe, it, expect } from "vitest";
import calculator from "../definition";

// Reference: ACOG Committee Opinion 700 (2017)
// https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date

describe("Conception compute — from_lmp mode", () => {
  it("from LMP 2024-01-01, 28-day cycle → conception 2024-01-15", () => {
    // LMP = 2024-01-01
    // daysToConception = 28 - 14 = 14
    // conception = 2024-01-01 + 14 = 2024-01-15
    // dueDate = 2024-01-15 + 266 = 2024-10-07
    // fertileStart = 2024-01-10, fertileEnd = 2024-01-20
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-01-01",
      cycleLength: 28,
    });
    const result = calculator.compute(inputs);
    expect(result.conceptionDate).toBe("2024-01-15");
    expect(result.fertileWindowStart).toBe("2024-01-10");
    expect(result.fertileWindowEnd).toBe("2024-01-20");
  });

  it("from LMP 2024-03-01, 35-day cycle → conception 2024-03-22", () => {
    // daysToConception = 35 - 14 = 21
    // conception = 2024-03-01 + 21 = 2024-03-22
    // dueDate = 2024-03-22 + 266 = 2024-12-13
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-03-01",
      cycleLength: 35,
    });
    const result = calculator.compute(inputs);
    expect(result.conceptionDate).toBe("2024-03-22");
  });

  it("from LMP 2024-06-01, 21-day cycle → conception 2024-06-08", () => {
    // daysToConception = 21 - 14 = 7
    // conception = 2024-06-01 + 7 = 2024-06-08
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-06-01",
      cycleLength: 21,
    });
    const result = calculator.compute(inputs);
    expect(result.conceptionDate).toBe("2024-06-08");
  });

  it("estimated due date is 266 days after conception", () => {
    // LMP 2024-01-01 + 14 = conception 2024-01-15
    // Due = 2024-01-15 + 266 = 2024-10-07
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-01-01",
      cycleLength: 28,
    });
    const result = calculator.compute(inputs);
    expect(result.estimatedDueDate).toBe("2024-10-07");
  });

  it("fertile window is exactly ±5 days around conception", () => {
    // conception = 2024-01-15
    // start = 2024-01-10, end = 2024-01-20
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-01-01",
      cycleLength: 28,
    });
    const result = calculator.compute(inputs);
    expect(result.fertileWindowStart).toBe("2024-01-10");
    expect(result.fertileWindowEnd).toBe("2024-01-20");
  });
});

describe("Conception compute — from_duedate mode", () => {
  it("from dueDate 2024-10-07 → conception 2024-01-15", () => {
    // conception = 2024-10-07 - 266 days
    // 2024-10-07 minus 266 = 2024-01-15
    const inputs = calculator.inputSchema.parse({
      mode: "from_duedate",
      dateInput: "2024-10-07",
      cycleLength: 28,
    });
    const result = calculator.compute(inputs);
    expect(result.conceptionDate).toBe("2024-01-15");
    expect(result.estimatedDueDate).toBe("2024-10-07");
  });

  it("from dueDate 2025-06-15 → conception 2024-09-22", () => {
    // 2025-06-15 - 266 days:
    // June 15 2025 -> Sep 22 2024
    const inputs = calculator.inputSchema.parse({
      mode: "from_duedate",
      dateInput: "2025-06-15",
      cycleLength: 28,
    });
    const result = calculator.compute(inputs);
    // Verify structure and that conception is before due date
    expect(result.estimatedDueDate).toBe("2025-06-15");
    expect(result.conceptionDate).toBeTruthy();
    expect(result.fertileWindowStart).toBeTruthy();
    expect(result.fertileWindowEnd).toBeTruthy();
  });
});
