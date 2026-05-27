import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Data Storage Converter — snapshot", () => {
  it("matches calculator definition shape", () => {
    expect(definition).toBeDefined();
    expect(definition.slug).toBe("data-storage");
    expect(definition.category).toBe("conversion");
    expect(definition.priority).toBe("P1");
    expect(definition.inputs).toBeDefined();
    expect(definition.inputs.length).toBeGreaterThan(0);
    expect(definition.outputs).toBeDefined();
    expect(definition.outputs.length).toBeGreaterThan(0);
    expect(definition.compute).toBeDefined();
    expect(definition.i18n).toBeDefined();
    expect(definition.meta.references.length).toBeGreaterThan(0);
  });
});
