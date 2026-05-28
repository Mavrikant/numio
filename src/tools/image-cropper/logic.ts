export const ASPECT_PRESETS: { id: string; label: string; ratio: number | null }[] = [
  { id: "free", label: "Free", ratio: null },
  { id: "1:1", label: "1:1 (Square)", ratio: 1 },
  { id: "4:5", label: "4:5 (Portrait)", ratio: 4 / 5 },
  { id: "9:16", label: "9:16 (Story)", ratio: 9 / 16 },
  { id: "16:9", label: "16:9 (Wide)", ratio: 16 / 9 },
  { id: "3:2", label: "3:2 (Photo)", ratio: 3 / 2 },
  { id: "4:3", label: "4:3", ratio: 4 / 3 },
];

export interface CropRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

/** Clamp a crop rectangle so it stays fully inside the image bounds. */
export function clampCrop(rect: CropRect, imgW: number, imgH: number): CropRect {
  const w = Math.max(1, Math.min(rect.width, imgW));
  const h = Math.max(1, Math.min(rect.height, imgH));
  const x = Math.max(0, Math.min(rect.x, imgW - w));
  const y = Math.max(0, Math.min(rect.y, imgH - h));
  return { x, y, width: w, height: h };
}
