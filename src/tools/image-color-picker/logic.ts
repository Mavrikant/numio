import { rgbToHex } from "../_shared/color";

interface ColorBucket {
  rSum: number;
  gSum: number;
  bSum: number;
  count: number;
}

/**
 * Extract the `n` most common colours from an RGBA buffer using a coarse
 * 5-bit quantization. Each bucket reports the average of its real pixel
 * values (not the bucket floor, which would skew everything darker — e.g.
 * pure white would come out as #f8f8f8). Returns hex strings ordered by
 * frequency.
 */
export function extractDominantColors(data: Uint8ClampedArray, n = 6): string[] {
  const counts = new Map<number, ColorBucket>();
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3]! < 128) continue;
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    const key = ((r & 0xf8) << 16) | ((g & 0xf8) << 8) | (b & 0xf8);
    const bucket = counts.get(key);
    if (bucket) {
      bucket.rSum += r;
      bucket.gSum += g;
      bucket.bSum += b;
      bucket.count += 1;
    } else {
      counts.set(key, { rSum: r, gSum: g, bSum: b, count: 1 });
    }
  }
  return Array.from(counts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, n)
    .map((c) =>
      rgbToHex({
        r: Math.round(c.rSum / c.count),
        g: Math.round(c.gSum / c.count),
        b: Math.round(c.bSum / c.count),
      }),
    );
}
