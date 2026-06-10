import { PANTONE_PMS, type PantoneColor } from "./data";

export type { PantoneColor };
export { PANTONE_PMS };

export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface NearestPantone {
  readonly code: string;
  readonly hex: string;
  readonly distance: number;
}

/** Parse a #RRGGBB or #RGB hex string into RGB. Throws if invalid. */
export function hexToRgb(hex: string): RGB {
  let h = hex.trim().replace(/^#/, "");
  if (/^[0-9a-f]{3}$/i.test(h)) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (!/^[0-9a-f]{6}$/i.test(h)) throw new Error(`Invalid hex colour: "${hex}"`);
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function clampByte(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

/** Convert RGB to an uppercase #RRGGBB hex string. */
export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => clampByte(n).toString(16).padStart(2, "0").toUpperCase();
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Convert CMYK (each 0–100) to RGB. */
export function cmykToRgb(c: number, m: number, y: number, k: number): RGB {
  const cc = c / 100;
  const mm = m / 100;
  const yy = y / 100;
  const kk = k / 100;
  return {
    r: clampByte(255 * (1 - cc) * (1 - kk)),
    g: clampByte(255 * (1 - mm) * (1 - kk)),
    b: clampByte(255 * (1 - yy) * (1 - kk)),
  };
}

/** Convert HSV (h 0–360, s/v 0–100) to RGB. */
export function hsvToRgb(h: number, s: number, v: number): RGB {
  const hh = ((h % 360) + 360) % 360;
  const ss = s / 100;
  const vv = v / 100;
  const c = vv * ss;
  const x = c * (1 - Math.abs(((hh / 60) % 2) - 1));
  const mm = vv - c;
  let rp = 0;
  let gp = 0;
  let bp = 0;
  if (hh < 60) [rp, gp, bp] = [c, x, 0];
  else if (hh < 120) [rp, gp, bp] = [x, c, 0];
  else if (hh < 180) [rp, gp, bp] = [0, c, x];
  else if (hh < 240) [rp, gp, bp] = [0, x, c];
  else if (hh < 300) [rp, gp, bp] = [x, 0, c];
  else [rp, gp, bp] = [c, 0, x];
  return {
    r: clampByte((rp + mm) * 255),
    g: clampByte((gp + mm) * 255),
    b: clampByte((bp + mm) * 255),
  };
}

/**
 * Find the nearest Pantone PMS colour to a hex value using a perceptually
 * weighted Euclidean distance in RGB space (results are approximate).
 */
export function nearestPantone(hex: string): NearestPantone {
  const target = hexToRgb(hex);
  let best: PantoneColor = PANTONE_PMS[0];
  let bestDist = Infinity;
  for (const pms of PANTONE_PMS) {
    const c = hexToRgb(pms.hex);
    const dr = target.r - c.r;
    const dg = target.g - c.g;
    const db = target.b - c.b;
    const dist = Math.sqrt(0.3 * dr * dr + 0.59 * dg * dg + 0.11 * db * db);
    if (dist < bestDist) {
      bestDist = dist;
      best = pms;
    }
  }
  return { code: best.code, hex: best.hex, distance: Math.round(bestDist * 100) / 100 };
}
