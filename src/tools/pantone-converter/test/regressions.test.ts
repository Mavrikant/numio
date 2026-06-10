import { describe, it, expect } from "vitest";
import { nearestPantone } from "../logic";

describe("pantone-converter regressions", () => {
  it("weights channel deltas inside the squares (0.3/0.59/0.11)", () => {
    // With weights applied before squaring, blue was effectively ~1% weighted
    // and #000060 matched PMS Blue 072 C instead of Reflex Blue.
    expect(nearestPantone("#000060").code).toBe("PMS Reflex Blue C");
  });
});
