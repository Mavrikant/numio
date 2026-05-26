import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Beam Deflection — simply supported, point load at centre", () => {
  it("10 kN at centre of 5 m span, E=200 GPa, I=1000 cm⁴", () => {
    // F=10000 N, L=5m, E=200e9 Pa, I=1000e-8 m⁴, EI=2e6 N·m²
    // δ = FL³/(48EI) = 10000×125/(48×2e6) = 1250000/96000000 = 0.013021 m = 13.021 mm
    // M_max = FL/4 = 10000×5/4 = 12500 N·m
    runNumericTests(calculator, [
      {
        inputs: {
          beamType: "simply-supported",
          loadType: "point-center",
          load: 10,
          span: 5,
          E: 200,
          I: 1000,
        },
        expected: {
          maxDeflection: 13.02,
          maxBendingMoment: 12500,
          maxShear: 5000,
          reactionA: 5000,
          reactionB: 5000,
        },
        tolerance: 0.5,
      },
    ]);
  });

  it("20 kN at centre of 6 m span, E=200 GPa, I=5000 cm⁴", () => {
    // δ = 20000×216/(48×200e9×5000e-8) = 4320000/(480000000) = 0.009 m = 9 mm
    // M_max = 20000×6/4 = 30000 N·m
    const parsed = calculator.inputSchema.parse({
      beamType: "simply-supported",
      loadType: "point-center",
      load: 20,
      span: 6,
      E: 200,
      I: 5000,
    });
    const result = calculator.compute(parsed);
    expect(result.maxDeflection).toBeCloseTo(9, 0);
    expect(result.maxBendingMoment).toBeCloseTo(30000, -1);
    expect(result.reactionA).toBeCloseTo(10000, 0);
    expect(result.reactionB).toBeCloseTo(10000, 0);
  });
});

describe("Beam Deflection — simply supported, UDL", () => {
  it("5 kN/m UDL on 4 m span, E=200 GPa, I=500 cm⁴", () => {
    // w=5000 N/m, L=4m, EI=200e9×500e-8=1e6 N·m²
    // δ = 5×5000×256/(384×1e6) = 6400000/384000000 = 0.016667 m = 16.667 mm
    // M_max = wL²/8 = 5000×16/8 = 10000 N·m
    runNumericTests(calculator, [
      {
        inputs: {
          beamType: "simply-supported",
          loadType: "udl",
          load: 5,
          span: 4,
          E: 200,
          I: 500,
        },
        expected: {
          maxDeflection: 16.67,
          maxBendingMoment: 10000,
        },
        tolerance: 1.0,
      },
    ]);
  });
});

describe("Beam Deflection — cantilever, point load at free end", () => {
  it("10 kN at free end of 3 m cantilever, E=200 GPa, I=2000 cm⁴", () => {
    // δ = FL³/(3EI) = 10000×27/(3×200e9×2000e-8)
    //   = 270000/(12000000) = 0.0225 m = 22.5 mm
    // M_max = F×L = 10000×3 = 30000 N·m
    runNumericTests(calculator, [
      {
        inputs: {
          beamType: "cantilever",
          loadType: "point-end",
          load: 10,
          span: 3,
          E: 200,
          I: 2000,
        },
        expected: {
          maxDeflection: 22.5,
          maxBendingMoment: 30000,
          maxShear: 10000,
          reactionA: 10000,
          reactionB: 0,
        },
        tolerance: 0.5,
      },
    ]);
  });
});

describe("Beam Deflection — cantilever, UDL", () => {
  it("2 kN/m UDL on 2 m cantilever, E=200 GPa, I=200 cm⁴", () => {
    // w=2000 N/m, L=2m, EI=200e9×200e-8=4e5 N·m²
    // δ = wL⁴/(8EI) = 2000×16/(8×4e5) = 32000/3200000 = 0.01 m = 10 mm
    // M_max = wL²/2 = 2000×4/2 = 4000 N·m
    runNumericTests(calculator, [
      {
        inputs: {
          beamType: "cantilever",
          loadType: "udl",
          load: 2,
          span: 2,
          E: 200,
          I: 200,
        },
        expected: {
          maxDeflection: 10,
          maxBendingMoment: 4000,
          maxShear: 4000,
          reactionA: 4000,
          reactionB: 0,
        },
        tolerance: 0.5,
      },
    ]);
  });
});

describe("Beam Deflection — cantilever deflection is 16x simply-supported", () => {
  it("same span, same load: cantilever (free-end) / simply-supported (centre) ≈ 16", () => {
    const ss = calculator.compute(
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-center",
        load: 10,
        span: 5,
        E: 200,
        I: 1000,
      }),
    );
    const can = calculator.compute(
      calculator.inputSchema.parse({
        beamType: "cantilever",
        loadType: "point-end",
        load: 10,
        span: 5,
        E: 200,
        I: 1000,
      }),
    );
    const ratio = (can.maxDeflection as number) / (ss.maxDeflection as number);
    expect(ratio).toBeCloseTo(16, 0);
  });
});
