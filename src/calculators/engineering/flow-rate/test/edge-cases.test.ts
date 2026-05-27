import { describe, it, expect } from "vitest";
import { inputSchema } from "../compute";

describe("flow-rate — edge cases", () => {
  it("should reject zero flow rate", () => {
    const result = inputSchema.safeParse({
      flowRateM3h: 0,
      diameterMm: 50,
      pipeLength: 100,
      pipeType: "commercial_steel",
    });
    expect(result.success).toBe(false);
  });

  it("should reject zero diameter", () => {
    const result = inputSchema.safeParse({
      flowRateM3h: 10,
      diameterMm: 0,
      pipeLength: 100,
      pipeType: "commercial_steel",
    });
    expect(result.success).toBe(false);
  });

  it("should accept zero pipe length", () => {
    const result = inputSchema.safeParse({
      flowRateM3h: 10,
      diameterMm: 50,
      pipeLength: 0,
      pipeType: "commercial_steel",
    });
    expect(result.success).toBe(true);
  });

  it("should accept large flow rates", () => {
    const result = inputSchema.safeParse({
      flowRateM3h: 50000,
      diameterMm: 500,
      pipeLength: 1000,
      pipeType: "commercial_steel",
    });
    expect(result.success).toBe(true);
  });
});
