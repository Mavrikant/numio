import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Quadratic — snapshot", () => {
  it("has correct shape", () => {
    expect(definition.slug).toBe("quadratic");
    expect(definition.meta.references.length).toBeGreaterThan(0);
  });
});
