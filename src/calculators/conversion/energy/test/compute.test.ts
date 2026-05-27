import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Energy convert — numeric correctness", () => {
  it("Kilowatt-hour to megajoule: 1 kWh = 3.6 MJ (exact)", () => {
    // SI: 1 kWh = 3,600,000 J = 3.6 MJ exactly (NIST SP 811)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kWh", toUnit: "MJ" },
        expected: { result: 3.6 },
        tolerance: 0.000001,
        description: "1 kWh = 3.6 MJ exactly",
      },
    ]);
  });

  it("Kilocalorie to joule: 1 kcal = 4184 J (thermochemical, NIST)", () => {
    // NIST thermochemical calorie: 1 cal = 4.184 J exact
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kcal", toUnit: "J" },
        expected: { result: 4184 },
        tolerance: 0.0001,
        description: "1 kcal = 4184 J exactly (thermochemical)",
      },
    ]);
  });

  it("BTU (IT) to joule: 1 BTU ≈ 1055.056 J", () => {
    // International Table BTU: 1055.05585262 J (NIST SP 811)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "BTU", toUnit: "J" },
        expected: { result: 1055.055853 },
        tolerance: 0.0001,
        description: "1 BTU_IT = 1055.05585262 J",
      },
    ]);
  });

  it("Foot-pound to joule: 1 ft·lb ≈ 1.3558 J", () => {
    // 1 ft·lbf = 1.35581794833 J (NIST SP 811 international foot/pound)
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "ft_lb", toUnit: "J" },
        expected: { result: 1.355818 },
        tolerance: 0.00001,
        description: "1 ft·lb ≈ 1.35582 J",
      },
    ]);
  });

  it("kWh to BTU: 1 kWh ≈ 3412.14 BTU", () => {
    // 3,600,000 / 1055.05585262 ≈ 3412.1416
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "kWh", toUnit: "BTU" },
        expected: { result: 3412.141633 },
        tolerance: 0.001,
        description: "1 kWh ≈ 3412.14 BTU",
      },
    ]);
  });
});
