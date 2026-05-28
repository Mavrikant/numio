import { rgbToHex } from "../_shared/color";

interface ColorCount {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly count: number;
}

/**
 * Extract the `n` most common colours from an RGBA buffer using a coarse
 * 5-bit quantization. Returns hex strings ordered by frequency.
 */
export function extractDominantColors(data: Uint8ClampedArray, n = 6): string[] {
  const counts = new Map<number, ColorCount>();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3]! < 128) continue;
    const r = data[i]! & 0xf8;
    const g = data[i + 1]! & 0xf8;
    const b = data[i + 2]! & 0xf8;
    const key = (r << 16) | (g << 8) | b;
    const existing = counts.get(key);
    if (existing) {
      counts.set(key, { ...existing, count: existing.count + 1 });
    } else {
      counts.set(key, { r, g, b, count: 1 });
    }
  }
  return Array.from(counts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, n)
    .map((c) => rgbToHex({ r: c.r, g: c.g, b: c.b }));
}
