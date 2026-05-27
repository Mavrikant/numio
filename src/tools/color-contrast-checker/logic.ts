import { parseColor, type RGB } from "../color-converter/logic";

function relativeLuminance({ r, g, b }: RGB): number {
  const f = (c: number) => {
    const cs = c / 255;
    return cs <= 0.03928 ? cs / 12.92 : ((cs + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export interface ContrastResult {
  readonly ratio: number;
  readonly aaNormal: boolean;
  readonly aaLarge: boolean;
  readonly aaaNormal: boolean;
  readonly aaaLarge: boolean;
}

/** WCAG contrast ratio (1–21) between two colors, or null if either is invalid. */
export function checkContrast(foreground: string, background: string): ContrastResult | null {
  const fg = parseColor(foreground);
  const bg = parseColor(background);
  if (!fg || !bg) return null;
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  return {
    ratio,
    aaNormal: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaaNormal: ratio >= 7,
    aaaLarge: ratio >= 4.5,
  };
}
