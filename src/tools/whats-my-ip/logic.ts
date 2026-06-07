/**
 * Pure helpers for the "What's my IP" tool. All network I/O happens in Tool.tsx
 * via the shared `fetchJson` helper; this module only formats already-fetched
 * data for display.
 */

import type { IpWhoIs } from "../_shared/net-fetch";

/** Build a "City, Region, Country" string, skipping any parts that are missing. */
export function formatLocation(d: IpWhoIs): string {
  return [d.city, d.region, d.country]
    .map((part) => (part ?? "").trim())
    .filter((part) => part.length > 0)
    .join(", ");
}

/** Build an OpenStreetMap link centred on the given coordinates. */
export function osmLink(lat: number, lon: number): string {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=12/${lat}/${lon}`;
}
