export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface ColorResult {
  readonly hex: string;
  readonly rgb: string;
  readonly hsl: string;
  readonly value: RGB;
}

const clamp = (n: number, max: number) => Math.max(0, Math.min(max, n));

/** Parse a hex, rgb() or hsl() color string into RGB. Returns null if invalid. */
export function parseColor(input: string): RGB | null {
  const s = input.trim().toLowerCase();

  const hex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/.exec(s);
  if (hex) {
    let h = hex[1]!;
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
  }

  const rgb = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/.exec(s);
  if (rgb) {
    return { r: clamp(+rgb[1]!, 255), g: clamp(+rgb[2]!, 255), b: clamp(+rgb[3]!, 255) };
  }

  const hsl = /^hsla?\(\s*(\d+(?:\.\d+)?)[\s,]+(\d+(?:\.\d+)?)%?[\s,]+(\d+(?:\.\d+)?)%?/.exec(s);
  if (hsl) {
    return hslToRgb(((+hsl[1]! % 360) + 360) % 360, clamp(+hsl[2]!, 100), clamp(+hsl[3]!, 100));
  }

  return null;
}

export function hslToRgb(h: number, s: number, l: number): RGB {
  const sn = s / 100;
  const ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = ln - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
}

export function rgbToHsl({ r, g, b }: RGB): [number, number, number] {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const l = (max + min) / 2;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

const toHex = (n: number) => n.toString(16).padStart(2, "0");

export function convertColor(input: string): ColorResult | null {
  const rgb = parseColor(input);
  if (!rgb) return null;
  const [h, s, l] = rgbToHsl(rgb);
  return {
    value: rgb,
    hex: `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`,
    rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    hsl: `hsl(${h}, ${s}%, ${l}%)`,
  };
}
