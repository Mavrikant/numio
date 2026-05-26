import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Beam Deflection definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("beam-deflection");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("engineering");
  });

  it("has exactly 6 inputs", () => {
    expect(calculator.inputs).toHaveLength(6);
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("maxDeflection output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "maxDeflection");
    expect(out?.highlight).toBe(true);
  });

  it("compute returns all expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      beamType: "simply-supported",
      loadType: "point-center",
      load: 10,
      span: 5,
      E: 200,
      I: 1000,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("maxDeflection");
    expect(result).toHaveProperty("maxBendingMoment");
    expect(result).toHaveProperty("maxShear");
    expect(result).toHaveProperty("reactionA");
    expect(result).toHaveProperty("reactionB");
  });

  it("snapshot: simply-supported point-center result", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        beamType: "simply-supported",
        loadType: "point-center",
        load: 10,
        span: 5,
        E: 200,
        I: 1000,
      }),
    );
    expect(result).toMatchSnapshot();
  });

  it("snapshot: cantilever point-end result", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        beamType: "cantilever",
        loadType: "point-end",
        load: 10,
        span: 3,
        E: 200,
        I: 2000,
      }),
    );
    expect(result).toMatchSnapshot();
  });

  it("snapshot: definition shape", () => {
    expect(calculator).toMatchSnapshot({
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
