import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Electrical Power definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(definition.slug).toBe("electrical-power");
    expect(definition.category).toBe("engineering");
  });

  it("has priority P0", () => {
    expect(definition.priority).toBe("P0");
  });

  it("has correct number of inputs", () => {
    expect(definition.inputs).toHaveLength(4);
  });

  it("has correct number of outputs", () => {
    expect(definition.outputs).toHaveLength(7);
  });

  it("has all required metadata", () => {
    expect(definition.meta.references).toBeDefined();
    expect(definition.meta.references.length).toBeGreaterThan(0);
    expect(definition.meta.disclaimer).toBeDefined();
  });
});
