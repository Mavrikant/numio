/**
 * Pure report assembler for the DNS health checker. All network I/O happens in
 * Tool.tsx via the shared DoH helpers; this module only turns already-fetched
 * record arrays into a list of human-readable check rows.
 */

export type CheckStatus = "ok" | "warn" | "fail";

export interface CheckRow {
  readonly check: string;
  readonly status: CheckStatus;
  readonly detail: string;
}

export interface HealthInputs {
  readonly ns: string[];
  readonly a: string[];
  readonly aaaa: string[];
  readonly mx: string[];
  readonly spfTxt: string[];
  readonly dmarcTxt: string[];
}

/** Build the DNS health report rows from already-fetched record data. Pure. */
export function assembleReport(inputs: HealthInputs): CheckRow[] {
  const { ns, a, aaaa, mx, spfTxt, dmarcTxt } = inputs;
  const rows: CheckRow[] = [];

  // NS: 2+ nameservers is healthy, 1 is risky, 0 is broken.
  if (ns.length >= 2) {
    rows.push({ check: "NS", status: "ok", detail: `${ns.length} nameservers` });
  } else if (ns.length === 1) {
    rows.push({ check: "NS", status: "warn", detail: "Only 1 nameserver (2+ recommended)" });
  } else {
    rows.push({ check: "NS", status: "fail", detail: "No nameservers found" });
  }

  // A record present.
  if (a.length > 0) {
    rows.push({ check: "A", status: "ok", detail: `${a.length} address(es)` });
  } else {
    rows.push({ check: "A", status: "fail", detail: "No A record" });
  }

  // AAAA present (IPv6) — absence is only a warning.
  if (aaaa.length > 0) {
    rows.push({ check: "AAAA", status: "ok", detail: `${aaaa.length} address(es)` });
  } else {
    rows.push({ check: "AAAA", status: "warn", detail: "No IPv6 (AAAA) record" });
  }

  // MX present.
  if (mx.length > 0) {
    rows.push({ check: "MX", status: "ok", detail: `${mx.length} mail server(s)` });
  } else {
    rows.push({ check: "MX", status: "warn", detail: "No MX record (no mail)" });
  }

  // SPF: look for a v=spf1 TXT record.
  const spf = spfTxt.find((t) => t.toLowerCase().startsWith("v=spf1"));
  if (spf) {
    rows.push({ check: "SPF", status: "ok", detail: spf });
  } else {
    rows.push({ check: "SPF", status: "fail", detail: "No v=spf1 record" });
  }

  // DMARC: look for a v=DMARC1 TXT record at _dmarc.<domain>.
  const dmarc = dmarcTxt.find((t) => t.toLowerCase().startsWith("v=dmarc1"));
  if (dmarc) {
    rows.push({ check: "DMARC", status: "ok", detail: dmarc });
  } else {
    rows.push({ check: "DMARC", status: "fail", detail: "No v=DMARC1 record" });
  }

  return rows;
}

/** Extract just the data strings from DoH answers. */
export function answerData(answers: ReadonlyArray<{ data: string }>): string[] {
  return answers.map((x) => x.data);
}
