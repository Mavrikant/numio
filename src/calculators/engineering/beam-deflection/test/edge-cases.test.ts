import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("Beam Deflection — schema validation", () => {
  it("rejects simply-supported with point-end load", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-end",
        load: 10,
        span: 5,
        E: 200,
        I: 1000,
      }),
    ).toThrow();
  });

  it("accepts cantilever with point-end load", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "cantilever",
        loadType: "point-end",
        load: 10,
        span: 5,
        E: 200,
        I: 1000,
      }),
    ).not.toThrow();
  });

  it("rejects zero span", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-center",
        load: 10,
        span: 0,
        E: 200,
        I: 1000,
      }),
    ).toThrow();
  });

  it("rejects negative load", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-center",
        load: -5,
        span: 5,
        E: 200,
        I: 1000,
      }),
    ).toThrow();
  });

  it("rejects zero Young's modulus", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-center",
        load: 10,
        span: 5,
        E: 0,
        I: 1000,
      }),
    ).toThrow();
  });

  it("rejects zero moment of area", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-center",
        load: 10,
        span: 5,
        E: 200,
        I: 0,
      }),
    ).toThrow();
  });

  it("accepts both UDL beam types", () => {
    expect(() =>
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "udl",
        load: 5,
        span: 4,
        E: 30,
        I: 500,
      }),
    ).not.toThrow();

    expect(() =>
      calculator.inputSchema.parse({
        beamType: "cantilever",
        loadType: "udl",
        load: 5,
        span: 4,
        E: 30,
        I: 500,
      }),
    ).not.toThrow();
  });
});

describe("Beam Deflection — compute purity", () => {
  it("produces identical results for same inputs (simply-supported)", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "simply-supported",
      loadType: "point-center",
      load: 10,
      span: 5,
      E: 200,
      I: 1000,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for same inputs (cantilever)", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "cantilever",
      loadType: "point-end",
      load: 10,
      span: 3,
      E: 200,
      I: 2000,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Beam Deflection — output validity", () => {
  it("cantilever reactionB is always 0", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "cantilever",
      loadType: "point-end",
      load: 10,
      span: 3,
      E: 200,
      I: 2000,
    });
    const result = calculator.compute(inputs);
    expect(result.reactionB).toBe(0);
  });

  it("simply-supported reactions sum equals total load", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "simply-supported",
      loadType: "udl",
      load: 5,
      span: 4,
      E: 200,
      I: 1000,
    });
    const result = calculator.compute(inputs);
    const totalLoad = 5 * 1000 * 4; // kN/m → N/m × m
    const reactionSum = (result.reactionA as number) + (result.reactionB as number);
    expect(reactionSum).toBeCloseTo(totalLoad, 0);
  });

  it("simply-supported point load: equal reactions at both supports", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "simply-supported",
      loadType: "point-center",
      load: 20,
      span: 6,
      E: 200,
      I: 5000,
    });
    const result = calculator.compute(inputs);
    expect(result.reactionA).toBeCloseTo(result.reactionB as number, 1);
  });

  it("deflection is always positive", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "cantilever",
      loadType: "udl",
      load: 3,
      span: 4,
      E: 200,
      I: 1000,
    });
    const result = calculator.compute(inputs);
    expect(result.maxDeflection).toBeGreaterThan(0);
  });
});
