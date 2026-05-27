/**
 * format.ts — backwards-compatible re-export layer.
 *
 * Internals have been migrated to src/lib/intl.ts which uses Intl APIs
 * throughout. This file keeps the old public surface so existing callers
 * (ResultPanel, Footer, etc.) don't need changes beyond what's in the plan.
 */

import type { Locale } from "@/config/site"; // used by formatDuration signature
export {
  bcp47,
  formatNumber,
  formatCurrency,
  formatPercent,
  formatDate,
  formatCompact,
} from "@/lib/intl";

// ---------------------------------------------------------------------------
// formatDuration — not a standard Intl concern; keep local implementation
// ---------------------------------------------------------------------------

export function formatDuration(
  totalSeconds: number,
  _locale?: Locale,
): string {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0 || parts.length === 0) parts.push(`${seconds}s`);

  return parts.join(" ");
}
