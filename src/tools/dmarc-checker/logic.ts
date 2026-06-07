/**
 * Pure DMARC (RFC 7489) record parser. No network access here — the Tool fetches
 * the `_dmarc.<domain>` TXT records via the shared DoH helper and passes the
 * `v=DMARC1` record string into `parseDmarc`.
 */

export interface DmarcResult {
  readonly v: string;
  readonly p?: string;
  readonly sp?: string;
  readonly pct?: string;
  readonly rua: string[];
  readonly ruf: string[];
  readonly adkim?: string;
  readonly aspf?: string;
  readonly valid: boolean;
  readonly warnings: string[];
}

/** Split a comma-separated list of addresses (rua/ruf) and trim the parts. */
function splitList(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Parse a DMARC TXT record string into its structured tags. */
export function parseDmarc(record: string): DmarcResult {
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
  const v = tags.v ?? "";
  if (v.toLowerCase() !== "dmarc1") {
    valid = false;
    warnings.push("Record does not start with v=DMARC1.");
  }

  const p = tags.p;
  if (!p) {
    valid = false;
    warnings.push("Missing required 'p' (policy) tag.");
  } else if (p.toLowerCase() === "none") {
    warnings.push("Policy is p=none — the domain monitors but does not enforce DMARC.");
  }

  return {
    v,
    ...(p !== undefined ? { p } : {}),
    ...(tags.sp !== undefined ? { sp: tags.sp } : {}),
    ...(tags.pct !== undefined ? { pct: tags.pct } : {}),
    rua: tags.rua ? splitList(tags.rua) : [],
    ruf: tags.ruf ? splitList(tags.ruf) : [],
    ...(tags.adkim !== undefined ? { adkim: tags.adkim } : {}),
    ...(tags.aspf !== undefined ? { aspf: tags.aspf } : {}),
    valid,
    warnings,
  };
}

/** Pick the DMARC record (the one starting with v=DMARC1) from a list of TXT records. */
export function findDmarcRecord(records: readonly string[]): string | undefined {
  return records.find((r) => r.trim().toLowerCase().startsWith("v=dmarc1"));
}
