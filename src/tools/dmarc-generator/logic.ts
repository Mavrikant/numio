/**
 * Pure DMARC (RFC 7489) record builder. No network access — given a policy and
 * optional tags it produces the TXT record string, in canonical tag order, and
 * the DNS host name where the record belongs (`_dmarc.<domain>`).
 */

export interface DmarcOptions {
  /** Required policy: none, quarantine or reject. */
  readonly p: string;
  readonly sp?: string;
  readonly pct?: string;
  readonly rua?: string;
  readonly ruf?: string;
  readonly adkim?: string;
  readonly aspf?: string;
  readonly fo?: string;
}

/** Build a DMARC TXT record string from the given options, only emitting supplied tags. */
export function buildDmarc(opts: DmarcOptions): string {
  const parts: string[] = ["v=DMARC1", `p=${opts.p}`];
  const optional: Array<[keyof DmarcOptions, string | undefined]> = [
    ["sp", opts.sp],
    ["pct", opts.pct],
    ["rua", opts.rua],
    ["ruf", opts.ruf],
    ["adkim", opts.adkim],
    ["aspf", opts.aspf],
    ["fo", opts.fo],
  ];
  for (const [key, value] of optional) {
    if (value !== undefined && value !== "") parts.push(`${key}=${value}`);
  }
  return parts.join("; ");
}

/** The DNS host name where a DMARC record is published for a domain. */
export function dmarcHost(domain: string): string {
  return `_dmarc.${domain.trim()}`;
}
