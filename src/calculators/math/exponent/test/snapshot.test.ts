import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Exponent — snapshot", () => {
  it("has correct shape", () => {
    expect(definition.slug).toBe("exponent");
    expect(definition.inputs.length).toBeGreaterThan(0);
  });
});
