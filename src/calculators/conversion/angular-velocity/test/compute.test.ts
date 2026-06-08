import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Angular velocity convert — numeric correctness", () => {
  it("rpm to rad/s: 1 rpm ≈ 0.10472 rad/s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "rpm", toUnit: "rad_s" },
        expected: { result: 0.10471976 },
        tolerance: 1e-6,
        description: "1 rpm ≈ 0.10472 rad/s",
      },
    ]);
  });

  it("hertz to rad/s: 1 Hz ≈ 6.2832 rad/s", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "hz", toUnit: "rad_s" },
        expected: { result: 6.2831853 },
        tolerance: 1e-5,
        description: "1 Hz ≈ 6.2832 rad/s",
      },
    ]);
  });

  it("rad/s to rpm: 1 rad/s ≈ 9.5493 rpm", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "rad_s", toUnit: "rpm" },
        expected: { result: 9.5492966 },
        tolerance: 1e-4,
        description: "1 rad/s ≈ 9.5493 rpm",
      },
    ]);
  });
});
