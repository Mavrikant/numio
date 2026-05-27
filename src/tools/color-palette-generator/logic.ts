import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from "../_shared/color";

export type Harmony = "complementary" | "analogous" | "triadic" | "tetradic" | "monochromatic";

const wrap = (h: number) => ((h % 360) + 360) % 360;

/** Generate a harmony palette (hex strings) from a base hex color. */
export function generatePalette(baseHex: string, harmony: Harmony): string[] {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return [];
  const [h, s, l] = rgbToHsl(rgb);
  const at = (hue: number, sat = s, lig = l) => rgbToHex(hslToRgb(wrap(hue), sat, lig));

  switch (harmony) {
    case "complementary":
      return [at(h), at(h + 180)];
    case "analogous":
      return [at(h - 30), at(h), at(h + 30)];
    case "triadic":
      return [at(h), at(h + 120), at(h + 240)];
    case "tetradic":
      return [at(h), at(h + 90), at(h + 180), at(h + 270)];
    case "monochromatic":
      return [20, 35, 50, 65, 80].map((lig) => at(h, s, lig));
  }
}
