/**
 * Pure BIMI (Brand Indicators for Message Identification) record parser and
 * builder. No network access here — the Tool fetches the `default._bimi.<domain>`
 * TXT records via the shared DoH helper and passes the record string into
 * `parseBimi`; `buildBimi` produces a record string from logo/VMC URLs.
 */

export interface BimiResult {
  readonly v?: string;
  /** l= the URL of the brand logo SVG. */
  readonly l?: string;
  /** a= the URL of the Verified Mark Certificate (VMC). */
  readonly a?: string;
  readonly valid: boolean;
  readonly warnings: string[];
}

/** Parse a BIMI TXT record string into its structured tags. */
export function parseBimi(record: string): BimiResult {
  const warnings: string[] = [];
  const tags: Record<string, string> = {};
  for (const part of record.split(";")) {
    const seg = part.trim();
    if (!seg) continue;
    const eq = seg.indexOf("=");
    if (eq === -1) continue;
    const key = seg.slice(0, eq).trim().toLowerCase();
    const val = seg.slice(eq + 1).trim();
    tags[key] = val;
  }

  let valid = true;
  const v = tags.v;
  if (!v || v.toLowerCase() !== "bimi1") {
    valid = false;
    warnings.push("Record does not start with v=BIMI1.");
  }
  if (!tags.l) {
    valid = false;
    warnings.push("Missing required 'l' (logo URL) tag.");
  }
  if (!tags.a) {
    warnings.push("No 'a' (VMC) tag — many mailbox providers require a Verified Mark Certificate to display the logo.");
  }

  return {
    ...(tags.v !== undefined ? { v: tags.v } : {}),
    ...(tags.l !== undefined ? { l: tags.l } : {}),
    ...(tags.a !== undefined ? { a: tags.a } : {}),
    valid,
    warnings,
  };
}

/** Build a BIMI record string from a logo URL and optional VMC URL. */
export function buildBimi({ l, a }: { l: string; a?: string }): string {
  let out = `v=BIMI1; l=${l.trim()};`;
  if (a && a.trim()) out += ` a=${a.trim()};`;
  return out;
}
