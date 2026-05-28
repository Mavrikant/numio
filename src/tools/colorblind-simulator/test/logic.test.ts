import { describe, it, expect } from "vitest";
import { simulateRgba, MATRICES } from "../logic";

describe("colorblind-simulator", () => {
  it("achromatopsia produces a fully grey value (R=G=B)", () => {
    const data = new Uint8ClampedArray([200, 50, 100, 255]);
    simulateRgba(data, "achromatopsia");
    expect(data[0]).toBe(data[1]);
    expect(data[1]).toBe(data[2]);
    expect(data[3]).toBe(255);
  });
  it("leaves alpha unchanged", () => {
    const data = new Uint8ClampedArray([255, 0, 0, 128]);
    simulateRgba(data, "protanopia");
    expect(data[3]).toBe(128);
  });
  it("provides matrices for the four classic types", () => {
    expect(MATRICES.protanopia).toHaveLength(9);
    expect(MATRICES.deuteranopia).toHaveLength(9);
    expect(MATRICES.tritanopia).toHaveLength(9);
    expect(MATRICES.achromatopsia).toHaveLength(9);
  });
});
