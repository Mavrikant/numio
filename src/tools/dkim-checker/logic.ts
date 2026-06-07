/**
 * Pure DKIM (RFC 6376) public-key record parser. No network access here — the
 * Tool fetches the `<selector>._domainkey.<domain>` TXT records via the shared
 * DoH helper and passes the record string into `parseDkim`.
 */

export interface DkimResult {
  readonly v?: string;
  readonly k?: string;
  /** True when a non-empty public key (p=) is present. */
  readonly hasPublicKey: boolean;
  readonly t?: string;
  readonly valid: boolean;
  readonly warnings: string[];
}

/** Parse a DKIM TXT record string into its structured tags. */
export function parseDkim(record: string): DkimResult {
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

  // The "p" tag must be present in a DKIM key record; an empty value means the
  // key has been revoked.
  const hasPTag = Object.prototype.hasOwnProperty.call(tags, "p");
  const hasPublicKey = hasPTag && tags.p.trim() !== "";

  let valid = true;
  if (!hasPTag) {
    valid = false;
    warnings.push("Record has no 'p' (public key) tag — not a valid DKIM key record.");
  } else if (!hasPublicKey) {
    valid = false;
    warnings.push("Public key (p=) is empty — this DKIM key has been revoked.");
  }

  return {
    ...(tags.v !== undefined ? { v: tags.v } : {}),
    ...(tags.k !== undefined ? { k: tags.k } : {}),
    hasPublicKey,
    ...(tags.t !== undefined ? { t: tags.t } : {}),
    valid,
    warnings,
  };
}

/** Pick the DKIM record (the one containing a p= tag, or starting with v=DKIM1) from TXT records. */
export function findDkimRecord(records: readonly string[]): string | undefined {
  return (
    records.find((r) => r.trim().toLowerCase().startsWith("v=dkim1")) ??
    records.find((r) => /(^|;)\s*p=/i.test(r))
  );
}
