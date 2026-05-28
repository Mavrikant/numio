import { describe, it, expect } from "vitest";
import { generateTailwindShades, TAILWIND_STEPS } from "../logic";

const hex = /^#[0-9a-f]{6}$/;

describe("tailwind-shade-generator", () => {
  it("returns a value for every step", () => {
    const shades = generateTailwindShades("#3b82f6");
    for (const step of TAILWIND_STEPS) expect(shades[step]).toMatch(hex);
  });
  it("produces a light shade for step 50 and a dark one for 950", () => {
    const shades = generateTailwindShades("#3b82f6");
    expect(parseInt(shades[50].slice(1), 16)).toBeGreaterThan(parseInt(shades[950].slice(1), 16));
  });
  it("returns all black for invalid hex", () => {
    const shades = generateTailwindShades("nope");
    for (const step of TAILWIND_STEPS) expect(shades[step]).toBe("#000000");
  });
});
