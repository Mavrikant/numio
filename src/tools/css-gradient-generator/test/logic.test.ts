import { describe, it, expect } from "vitest";
import { buildGradient } from "../logic";

describe("css-gradient-generator", () => {
  it("builds a linear gradient with angle", () => {
    expect(buildGradient("linear", 90, "#fff", "#000")).toBe("linear-gradient(90deg, #fff, #000)");
  });
  it("builds a radial gradient ignoring angle", () => {
    expect(buildGradient("radial", 45, "#fff", "#000")).toBe("radial-gradient(circle, #fff, #000)");
  });
});
