import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Logarithm — snapshot", () => {
  it("has correct shape", () => {
    expect(definition.slug).toBe("logarithm");
    expect(definition.inputs.length).toBe(2);
    expect(definition.outputs.length).toBe(4);
  });
});
