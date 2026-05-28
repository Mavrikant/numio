export type ColorBlindness = "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia";

/**
 * Linear RGB transform matrices for common forms of colour blindness,
 * derived from Brettel/Viénot/Mollon's published research. Each row is a
 * 3×3 matrix flattened in row-major order, applied to sRGB triples.
 */
export const MATRICES: Record<ColorBlindness, readonly number[]> = {
  protanopia: [0.567, 0.433, 0.0, 0.558, 0.442, 0.0, 0.0, 0.242, 0.758],
  deuteranopia: [0.625, 0.375, 0.0, 0.7, 0.3, 0.0, 0.0, 0.3, 0.7],
  tritanopia: [0.95, 0.05, 0.0, 0.0, 0.433, 0.567, 0.0, 0.475, 0.525],
  achromatopsia: [0.299, 0.587, 0.114, 0.299, 0.587, 0.114, 0.299, 0.587, 0.114],
};

/** Apply a colour-blindness matrix to an RGBA byte buffer in place. */
export function simulateRgba(data: Uint8ClampedArray, kind: ColorBlindness): void {
  const m = MATRICES[kind];
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    data[i] = Math.min(255, Math.max(0, Math.round(m[0]! * r + m[1]! * g + m[2]! * b)));
    data[i + 1] = Math.min(255, Math.max(0, Math.round(m[3]! * r + m[4]! * g + m[5]! * b)));
    data[i + 2] = Math.min(255, Math.max(0, Math.round(m[6]! * r + m[7]! * g + m[8]! * b)));
  }
}
