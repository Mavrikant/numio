import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("scientific-notation snapshot", () => {
  it("definition has required fields", () => {
    expect(definition.slug).toBeDefined();
    expect(definition.category).toBe("math");
    expect(definition.priority).toBeDefined();
    expect(definition.inputs.length).toBeGreaterThan(0);
    expect(definition.outputs.length).toBeGreaterThan(0);
  });
});
