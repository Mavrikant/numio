export type SizeUnit = "B" | "KB" | "MB" | "GB" | "TB";
export type SpeedUnit = "bps" | "Kbps" | "Mbps" | "Gbps";

const SIZE_BYTES: Record<SizeUnit, number> = {
  B: 1,
  KB: 1024,
  MB: 1024 ** 2,
  GB: 1024 ** 3,
  TB: 1024 ** 4,
};

const SPEED_BPS: Record<SpeedUnit, number> = {
  bps: 1,
  Kbps: 1e3,
  Mbps: 1e6,
  Gbps: 1e9,
};

export const SIZE_UNITS: SizeUnit[] = ["B", "KB", "MB", "GB", "TB"];
export const SPEED_UNITS: SpeedUnit[] = ["bps", "Kbps", "Mbps", "Gbps"];

/** Compute the download time for a file of `size` at `speed` (in bps after unit conversion). */
export function computeDownloadSeconds(size: number, sizeUnit: SizeUnit, speed: number, speedUnit: SpeedUnit): number {
  if (size <= 0 || speed <= 0) return 0;
  const bits = size * SIZE_BYTES[sizeUnit] * 8;
  const bps = speed * SPEED_BPS[speedUnit];
  return bits / bps;
}

/** Render a duration in seconds as "Xh Ym Zs", "Ym Zs", "Zs" or sub-second precision. */
export function formatSeconds(s: number): string {
  if (!Number.isFinite(s) || s <= 0) return "—";
  if (s < 1) return `${(s * 1000).toFixed(0)} ms`;
  const total = Math.round(s);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  const parts: string[] = [];
  if (hours) parts.push(`${hours}h`);
  if (minutes) parts.push(`${minutes}m`);
  if (seconds || parts.length === 0) parts.push(`${seconds}s`);
  return parts.join(" ");
}
