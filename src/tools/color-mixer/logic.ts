import { hexToRgb, rgbToHex } from "../_shared/color";

/**
 * Mix two hex colors in RGB space. `ratio` is the weight of color2 (0 = all
 * color1, 1 = all color2). Returns null if either color is invalid.
 */
export function mixColors(hex1: string, hex2: string, ratio: number): string | null {
  const a = hexToRgb(hex1);
  const b = hexToRgb(hex2);
  if (!a || !b) return null;
  const t = Math.max(0, Math.min(1, ratio));
  return rgbToHex({
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  });
}
