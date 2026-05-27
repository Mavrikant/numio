import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Pythagorean — snapshot", () => {
  it("has correct shape", () => {
    expect(definition.slug).toBe("pythagorean");
    expect(definition.inputs).toBeDefined();
    expect(definition.outputs).toBeDefined();
    expect(definition.meta.references.length).toBeGreaterThan(0);
  });
});
