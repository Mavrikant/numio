export const RAMPS = {
  short: " .:-=+*#%@",
  long: " .'`^,:;Il!i><~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
} as const;

export type Ramp = keyof typeof RAMPS;

/**
 * Convert an RGBA buffer (width × height) into an ASCII art string. Each
 * output character maps to a single source pixel; aspect correction (~0.5
 * cell aspect for monospace) is the caller's responsibility when sampling.
 */
export function bufferToAscii(data: Uint8ClampedArray, width: number, height: number, ramp: string, invert = false): string {
  if (width <= 0 || height <= 0) return "";
  const ramp2 = invert ? ramp.split("").reverse().join("") : ramp;
  const maxIdx = ramp2.length - 1;
  const lines: string[] = [];
  for (let y = 0; y < height; y++) {
    let row = "";
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i] ?? 0;
      const g = data[i + 1] ?? 0;
      const b = data[i + 2] ?? 0;
      const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      row += ramp2[Math.round(lum * maxIdx)];
    }
    lines.push(row);
  }
  return lines.join("\n");
}
