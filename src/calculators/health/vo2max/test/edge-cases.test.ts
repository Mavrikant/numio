import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("vo2max edge cases — schema validation", () => {
  it("rejects Cooper test without distance", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "cooper-12min",
        age: 30,
        sex: "male",
      }),
    ).toThrow();
  });

  it("rejects 1.5-mile test without time", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "mile-and-half",
        age: 30,
        sex: "male",
      }),
    ).toThrow();
  });

  it("rejects distance below 500 m", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "cooper-12min",
        distance: 400,
        age: 30,
        sex: "male",
      }),
    ).toThrow();
  });

  it("rejects distance above 6000 m", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "cooper-12min",
        distance: 7000,
        age: 30,
        sex: "male",
      }),
    ).toThrow();
  });

  it("rejects 1.5-mile time below 5 min", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "mile-and-half",
        timeMinutes: 4,
        age: 30,
        sex: "male",
      }),
    ).toThrow();
  });

  it("rejects age outside 10–90", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "cooper-12min",
        distance: 2400,
        age: 5,
        sex: "male",
      }),
    ).toThrow();
    expect(() =>
      calculator.inputSchema.parse({
        testType: "cooper-12min",
        distance: 2400,
        age: 95,
        sex: "male",
      }),
    ).toThrow();
  });

  it("rejects unknown sex value", () => {
    expect(() =>
      calculator.inputSchema.parse({
        testType: "cooper-12min",
        distance: 2400,
        age: 30,
        sex: "other",
      }),
    ).toThrow();
  });
});

describe("vo2max edge cases — compute purity", () => {
  it("Cooper test produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      testType: "cooper-12min",
      distance: 2400,
      age: 30,
      sex: "male",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("1.5-mile test produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      testType: "mile-and-half",
      timeMinutes: 12,
      age: 30,
      sex: "female",
    });
    assertComputeIsPure(calculator, inputs);
  });
});
