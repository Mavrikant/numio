import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from "../_shared/color";

/**
 * Generate `steps` tints and shades of a base color by varying HSL lightness
 * evenly from near-white to near-black while keeping hue and saturation.
 */
export function generateShades(baseHex: string, steps = 10): string[] {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return [];
  const [h, s] = rgbToHsl(rgb);
  const n = Math.max(2, Math.min(20, Math.round(steps)));
  return Array.from({ length: n }, (_, i) => {
    const l = 95 - (90 * i) / (n - 1);
    return rgbToHex(hslToRgb(h, s, l));
  });
}
