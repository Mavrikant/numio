import { describe, it, expect } from "vitest";
import i18n from "../i18n";

describe("flow-rate — i18n", () => {
  it("should have all 12 languages", () => {
    expect(Object.keys(i18n).length).toBe(12);
  });

  it("should not have placeholder text", () => {
    Object.values(i18n).forEach((content) => {
      const json = JSON.stringify(content);
      expect(json).not.toContain("TODO");
      expect(json).not.toContain("FIXME");
      expect(json).not.toContain("PLACEHOLDER");
    });
  });

  it("should have pipe type options", () => {
    Object.values(i18n).forEach((content) => {
      expect(content.options.pipeType).toBeDefined();
      expect(content.options.pipeType.commercial_steel).toBeDefined();
    });
  });

  it("should have all required outputs", () => {
    Object.values(i18n).forEach((content) => {
      expect(content.outputs.velocityMs).toBeDefined();
      expect(content.outputs.reynoldsNumber).toBeDefined();
      expect(content.outputs.flowRegime).toBeDefined();
      expect(content.outputs.headLossM).toBeDefined();
    });
  });
});
