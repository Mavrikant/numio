import { describe, it, expect } from "vitest";
import { buildBorderRadius } from "../logic";

describe("border-radius-generator", () => {
  it("builds a border-radius value", () => {
    expect(buildBorderRadius(12, 12, 12, 12)).toBe("12px 12px 12px 12px");
  });
  it("supports asymmetric corners", () => {
    expect(buildBorderRadius(0, 20, 40, 8)).toBe("0px 20px 40px 8px");
  });
});
