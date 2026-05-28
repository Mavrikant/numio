import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from "../_shared/color";

export const TAILWIND_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export type TailwindStep = (typeof TAILWIND_STEPS)[number];

// Approximate target lightness for each Tailwind step (matches Tailwind v3 defaults closely).
const TARGET_LIGHTNESS: Record<TailwindStep, number> = {
  50: 98, 100: 95, 200: 88, 300: 78, 400: 65,
  500: 50, 600: 42, 700: 33, 800: 25, 900: 18, 950: 10,
};

/** Generate a Tailwind-style 50–950 shade scale from a base colour. */
export function generateTailwindShades(baseHex: string): Record<TailwindStep, string> {
  const rgb = hexToRgb(baseHex);
  if (!rgb) {
    return Object.fromEntries(TAILWIND_STEPS.map((s) => [s, "#000000"])) as Record<TailwindStep, string>;
  }
  const [hue, sat] = rgbToHsl(rgb);
  const out = {} as Record<TailwindStep, string>;
  for (const step of TAILWIND_STEPS) {
    const lightness = TARGET_LIGHTNESS[step];
    // Pull saturation toward grey at the extremes for a more pleasing scale.
    const adjustedSat = Math.round(sat * (lightness > 90 || lightness < 15 ? 0.6 : 1));
    out[step] = rgbToHex(hslToRgb(hue, adjustedSat, lightness));
  }
  return out;
}
