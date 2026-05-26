import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Ohm's Law compute — numeric correctness", () => {
  it("V=12V, I=2A → R=6Ω, P=24W", () => {
    runNumericTests(calculator, [
      {
        inputs: { knownQty1: "voltage", value1: 12, knownQty2: "current", value2: 2 },
        expected: { resistance: 6, power: 24 },
        tolerance: 0.001,
        description: "V=12, I=2 → R=6, P=24",
      },
    ]);
  });

  it("V=120V, R=60Ω → I=2A, P=240W", () => {
    runNumericTests(calculator, [
      {
        inputs: { knownQty1: "voltage", value1: 120, knownQty2: "resistance", value2: 60 },
        expected: { current: 2, power: 240 },
        tolerance: 0.001,
      },
    ]);
  });

  it("I=5A, R=10Ω → V=50V, P=250W", () => {
    runNumericTests(calculator, [
      {
        inputs: { knownQty1: "current", value1: 5, knownQty2: "resistance", value2: 10 },
        expected: { voltage: 50, power: 250 },
        tolerance: 0.001,
      },
    ]);
  });

  it("V=24V, P=48W → I=2A, R=12Ω", () => {
    runNumericTests(calculator, [
      {
        inputs: { knownQty1: "voltage", value1: 24, knownQty2: "power", value2: 48 },
        expected: { current: 2, resistance: 12 },
        tolerance: 0.001,
      },
    ]);
  });

  it("I=3A, P=27W → V=9V, R=3Ω", () => {
    runNumericTests(calculator, [
      {
        inputs: { knownQty1: "current", value1: 3, knownQty2: "power", value2: 27 },
        expected: { voltage: 9, resistance: 3 },
        tolerance: 0.001,
      },
    ]);
  });

  it("R=4Ω, P=100W → I=5A, V=20V", () => {
    runNumericTests(calculator, [
      {
        inputs: { knownQty1: "resistance", value1: 4, knownQty2: "power", value2: 100 },
        expected: { current: 5, voltage: 20 },
        tolerance: 0.001,
      },
    ]);
  });
});
