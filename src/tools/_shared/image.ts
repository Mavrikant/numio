export interface ResizeResult {
  readonly width: number;
  readonly height: number;
}

/**
 * Fit a source size into a target box while preserving aspect ratio. If the
 * source is smaller and `upscale` is false (default), it is returned unchanged.
 */
export function fitWithin(srcW: number, srcH: number, maxW: number, maxH: number, upscale = false): ResizeResult {
  if (srcW <= 0 || srcH <= 0) return { width: 0, height: 0 };
  const ratio = Math.min(maxW / srcW, maxH / srcH);
  const scale = upscale ? ratio : Math.min(1, ratio);
  return { width: Math.round(srcW * scale), height: Math.round(srcH * scale) };
}

/** Format a byte count as a human-readable size string. */
export function humanFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let i = 0;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i++;
  }
  return `${value.toFixed(value < 10 ? 2 : 1)} ${units[i]}`;
}
