/**
 * Pure SPF (Sender Policy Framework, RFC 7208) record parser. No network access
 * here — the Tool fetches the TXT records via the shared DoH helper and passes
 * the `v=spf1` record string into `parseSpf`.
 */

export interface SpfMechanism {
  /** "+", "-", "~" or "?" (defaults to "+" when omitted) */
  readonly qualifier: string;
  /** Mechanism/modifier name, e.g. "include", "a", "mx", "all", "redirect". */
  readonly type: string;
  /** The value after ":" or "=" if present (e.g. the domain for include:). */
  readonly value?: string;
}

export interface SpfResult {
  readonly version: string;
  readonly mechanisms: SpfMechanism[];
  readonly all?: string;
  readonly dnsLookupCount: number;
  readonly valid: boolean;
  readonly warnings: string[];
}

/** Mechanisms/modifiers that each cost a DNS lookup against the RFC 7208 limit of 10. */
const DNS_LOOKUP_TERMS = new Set(["include", "a", "mx", "ptr", "exists", "redirect"]);
const QUALIFIERS = new Set(["+", "-", "~", "?"]);

/** Parse an SPF TXT record string into its structured parts. */
export function parseSpf(record: string): SpfResult {
  const warnings: string[] = [];
  const trimmed = record.trim();
  const tokens = trimmed.split(/\s+/).filter(Boolean);

  let valid = true;
  let version = "";
  if (tokens[0]?.toLowerCase() === "v=spf1") {
    version = "spf1";
  } else {
    valid = false;
    warnings.push("Record does not start with v=spf1.");
  }

  const mechanisms: SpfMechanism[] = [];
  let all: string | undefined;
  let dnsLookupCount = 0;

  for (const token of tokens.slice(1)) {
    let qualifier = "+";
    let body = token;
    const first = body[0];
    if (QUALIFIERS.has(first)) {
      qualifier = first;
      body = body.slice(1);
    }

    // Modifiers use "=" (redirect=, exp=); mechanisms use ":" (include:, a:).
    const eqIdx = body.indexOf("=");
    const colonIdx = body.indexOf(":");
    let type: string;
    let value: string | undefined;
    if (eqIdx !== -1 && (colonIdx === -1 || eqIdx < colonIdx)) {
      type = body.slice(0, eqIdx).toLowerCase();
      value = body.slice(eqIdx + 1);
    } else if (colonIdx !== -1) {
      type = body.slice(0, colonIdx).toLowerCase();
      value = body.slice(colonIdx + 1);
    } else {
      type = body.toLowerCase();
    }

    // Dual-CIDR mechanisms without a value, e.g. "a/24" or "mx//64", still
    // cost a DNS lookup for the underlying mechanism.
    const slashIdx = type.indexOf("/");
    const lookupType = slashIdx === -1 ? type : type.slice(0, slashIdx);

    if (type === "all") {
      all = qualifier + "all";
    }

    if (DNS_LOOKUP_TERMS.has(lookupType)) {
      dnsLookupCount += 1;
    }

    mechanisms.push({ qualifier, type, ...(value !== undefined ? { value } : {}) });
  }

  if (dnsLookupCount > 10) {
    warnings.push(`SPF record requires ${dnsLookupCount} DNS lookups, exceeding the RFC 7208 limit of 10.`);
  }
  if (version && !all && !mechanisms.some((m) => m.type === "redirect")) {
    warnings.push("Record has no 'all' mechanism or 'redirect' modifier.");
  }

  return { version, mechanisms, all, dnsLookupCount, valid, warnings };
}

/** Pick the SPF record (the one starting with v=spf1) from a list of TXT records. */
export function findSpfRecord(records: readonly string[]): string | undefined {
  return records.find((r) => r.trim().toLowerCase().startsWith("v=spf1"));
}
