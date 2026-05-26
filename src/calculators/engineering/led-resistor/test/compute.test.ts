import { describe, it } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("LED Resistor compute — numeric correctness", () => {
  // Reference: Ohm's Law R = (Vsupply - Vforward) / I
  // E12 series: 10,12,15,18,22,27,33,39,47,56,68,82 × 10^n

  it("5V supply, 2.0V LED, 20mA → R=150Ω exact (E12=150Ω)", () => {
    // R = (5.0 - 2.0) / 0.020 = 3.0 / 0.020 = 150Ω
    // 150 is in E12 series (15 × 10^1)
    // P = 3.0 × 0.020 = 0.060W
    // actual current = 3.0 / 150 = 20mA
    runNumericTests(calculator, [
      {
        inputs: { supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1 },
        expected: { exactResistanceOhm: 150, standardResistanceOhm: 150, powerDissipatedW: 0.06, actualCurrentMa: 20 },
        tolerance: 0.01,
        description: "5V, red LED 2V, 20mA → 150Ω",
      },
    ]);
  });

  it("12V supply, 3.2V white LED, 20mA → R=440Ω exact, E12=470Ω", () => {
    // R = (12.0 - 3.2) / 0.020 = 8.8 / 0.020 = 440Ω
    // E12 search: ..., 390, 470 → nearest >= 440 is 470
    // P = 8.8 × 0.020 = 0.176W
    // actual = 8.8 / 470 = 18.7234...mA
    runNumericTests(calculator, [
      {
        inputs: { supplyVoltage: 12, forwardVoltage: 3.2, forwardCurrentMa: 20, ledCount: 1 },
        expected: { exactResistanceOhm: 440, standardResistanceOhm: 470, powerDissipatedW: 0.176, actualCurrentMa: 18.72 },
        tolerance: { exactResistanceOhm: 0.1, standardResistanceOhm: 0.1, powerDissipatedW: 0.001, actualCurrentMa: 0.05 },
        description: "12V, white LED 3.2V, 20mA → 440Ω exact, 470Ω E12",
      },
    ]);
  });

  it("3.3V supply, 2.0V LED, 10mA → R=130Ω exact, E12=150Ω", () => {
    // R = (3.3 - 2.0) / 0.010 = 1.3 / 0.010 = 130Ω
    // E12 search: ..., 120, 150 → nearest >= 130 is 150
    // P = 1.3 × 0.010 = 0.013W
    // actual = 1.3 / 150 = 8.6667mA
    runNumericTests(calculator, [
      {
        inputs: { supplyVoltage: 3.3, forwardVoltage: 2.0, forwardCurrentMa: 10, ledCount: 1 },
        expected: { exactResistanceOhm: 130, standardResistanceOhm: 150, powerDissipatedW: 0.013, actualCurrentMa: 8.667 },
        tolerance: { exactResistanceOhm: 0.1, standardResistanceOhm: 0.1, powerDissipatedW: 0.001, actualCurrentMa: 0.01 },
        description: "3.3V, 2.0V LED, 10mA → 130Ω exact, 150Ω E12",
      },
    ]);
  });

  it("12V supply, 3 blue LEDs in series (3.2V each), 20mA → R=120Ω exact", () => {
    // totalVf = 3.2 × 3 = 9.6V
    // R = (12.0 - 9.6) / 0.020 = 2.4 / 0.020 = 120Ω
    // 120 is E12 (12 × 10^1)
    // P = 2.4 × 0.020 = 0.048W
    runNumericTests(calculator, [
      {
        inputs: { supplyVoltage: 12, forwardVoltage: 3.2, forwardCurrentMa: 20, ledCount: 3 },
        expected: { exactResistanceOhm: 120, standardResistanceOhm: 120, powerDissipatedW: 0.048, actualCurrentMa: 20 },
        tolerance: 0.01,
        description: "12V, 3x blue LEDs (9.6V total), 20mA → 120Ω",
      },
    ]);
  });

  it("9V supply, 1.8V red LED, 15mA → R=480Ω exact, E12=560Ω", () => {
    // R = (9.0 - 1.8) / 0.015 = 7.2 / 0.015 = 480Ω
    // E12: ..., 470, 560 → nearest >= 480 is 560
    // P = 7.2 × 0.015 = 0.108W
    // actual = 7.2 / 560 = 12.857mA
    runNumericTests(calculator, [
      {
        inputs: { supplyVoltage: 9, forwardVoltage: 1.8, forwardCurrentMa: 15, ledCount: 1 },
        expected: { exactResistanceOhm: 480, standardResistanceOhm: 560, powerDissipatedW: 0.108, actualCurrentMa: 12.857 },
        tolerance: { exactResistanceOhm: 0.1, standardResistanceOhm: 0.1, powerDissipatedW: 0.001, actualCurrentMa: 0.01 },
        description: "9V, 1.8V red LED, 15mA → 480Ω exact, 560Ω E12",
      },
    ]);
  });
});
