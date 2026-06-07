/**
 * Pure helpers for the RDAP lookup tool: detect what kind of object an input
 * refers to, build the RDAP bootstrap URL, and summarise the RDAP JSON response.
 * The fetch itself happens in Tool.tsx via the shared `fetchJson` helper.
 */

export type RdapKind = "ip" | "autnum" | "domain";

const IPV4 = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
const IPV6 = /^[0-9a-fA-F:]+:[0-9a-fA-F:]*$/;
const ASN = /^(as)?\d+$/i;

/** Decide whether the input is an ASN, an IP, or (fallback) a domain. */
export function detectKind(input: string): RdapKind {
  const v = input.trim();
  if (ASN.test(v)) return "autnum";
  if (IPV4.test(v) || IPV6.test(v)) return "ip";
  return "domain";
}

/** Build the RDAP bootstrap URL for the input against the given base (e.g. rdap.org). */
export function rdapUrl(input: string, base: string): string {
  const v = input.trim();
  const kind = detectKind(v);
  const root = base.replace(/\/+$/, "");
  if (kind === "autnum") {
    const num = v.replace(/^as/i, "");
    return `${root}/autnum/${encodeURIComponent(num)}`;
  }
  if (kind === "ip") return `${root}/ip/${encodeURIComponent(v)}`;
  return `${root}/domain/${encodeURIComponent(v.toLowerCase())}`;
}

export interface RdapEvent {
  readonly action: string;
  readonly date: string;
}

export interface RdapSummary {
  readonly handle?: string;
  readonly name?: string;
  readonly registrar?: string;
  readonly country?: string;
  readonly events: RdapEvent[];
  readonly entities: string[];
}

interface RawEntity {
  roles?: string[];
  handle?: string;
  vcardArray?: unknown;
}

interface RawRdap {
  handle?: string;
  name?: string;
  country?: string;
  ldhName?: string;
  events?: Array<{ eventAction?: string; eventDate?: string }>;
  entities?: RawEntity[];
}

/** Pull the "fn" (full name) out of a jCard / vcardArray, if present. */
function vcardName(vcardArray: unknown): string | undefined {
  if (!Array.isArray(vcardArray) || vcardArray.length < 2 || !Array.isArray(vcardArray[1])) return undefined;
  for (const prop of vcardArray[1] as unknown[]) {
    if (Array.isArray(prop) && prop[0] === "fn" && typeof prop[3] === "string") return prop[3];
  }
  return undefined;
}

/** Summarise a raw RDAP JSON object into the handful of fields we display. Pure. */
export function summarizeRdap(json: unknown, _kind: RdapKind): RdapSummary {
  const j = (json ?? {}) as RawRdap;
  const entities = Array.isArray(j.entities) ? j.entities : [];

  let registrar: string | undefined;
  const entityLabels: string[] = [];
  for (const e of entities) {
    const roles = Array.isArray(e.roles) ? e.roles : [];
    const label = vcardName(e.vcardArray) ?? e.handle;
    if (label) entityLabels.push(roles.length ? `${label} (${roles.join(", ")})` : label);
    if (roles.includes("registrar")) registrar = vcardName(e.vcardArray) ?? e.handle ?? registrar;
  }

  const events: RdapEvent[] = (Array.isArray(j.events) ? j.events : [])
    .filter((ev) => ev.eventAction || ev.eventDate)
    .map((ev) => ({ action: ev.eventAction ?? "", date: ev.eventDate ?? "" }));

  return {
    handle: j.handle,
    name: j.name ?? j.ldhName,
    registrar,
    country: j.country,
    events,
    entities: entityLabels,
  };
}
