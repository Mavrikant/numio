export interface Hop {
  readonly from?: string;
  readonly by?: string;
  readonly protocol?: string;
  readonly date?: string;
  readonly delaySec?: number;
}

export interface AuthResults {
  readonly spf?: string;
  readonly dkim?: string;
  readonly dmarc?: string;
}

export interface ParsedHeaders {
  readonly fields: Record<string, string>;
  readonly hops: ReadonlyArray<Hop>;
  readonly auth: AuthResults;
  readonly messageId?: string;
  readonly subject?: string;
  readonly from?: string;
  readonly to?: string;
}

/** Join continuation lines (lines starting with whitespace) onto the previous header line. */
function unfold(raw: string): string[] {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  for (const line of lines) {
    if (/^[ \t]/.test(line) && out.length > 0) {
      out[out.length - 1] += " " + line.trim();
    } else {
      out.push(line);
    }
  }
  return out;
}

/** Split unfolded lines into header name/value pairs (stops at the first blank line — the body). */
function splitHeaders(lines: string[]): Array<{ name: string; value: string }> {
  const headers: Array<{ name: string; value: string }> = [];
  for (const line of lines) {
    if (line.trim() === "") break;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const name = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (name) headers.push({ name, value });
  }
  return headers;
}

/** Parse a single `Received:` header value into a hop. */
function parseReceived(value: string): Hop {
  const hop: { from?: string; by?: string; protocol?: string; date?: string } = {};
  const fromMatch = /\bfrom\s+([^\s;]+)/i.exec(value);
  if (fromMatch) hop.from = fromMatch[1];
  const byMatch = /\bby\s+([^\s;]+)/i.exec(value);
  if (byMatch) hop.by = byMatch[1];
  const withMatch = /\bwith\s+([^\s;]+)/i.exec(value);
  if (withMatch) hop.protocol = withMatch[1];
  const semi = value.lastIndexOf(";");
  if (semi !== -1) {
    const dateStr = value.slice(semi + 1).trim();
    if (dateStr) hop.date = dateStr;
  }
  return hop;
}

function parseAuth(value: string): AuthResults {
  const auth: { spf?: string; dkim?: string; dmarc?: string } = {};
  const spf = /\bspf=(\w+)/i.exec(value);
  if (spf) auth.spf = spf[1].toLowerCase();
  const dkim = /\bdkim=(\w+)/i.exec(value);
  if (dkim) auth.dkim = dkim[1].toLowerCase();
  const dmarc = /\bdmarc=(\w+)/i.exec(value);
  if (dmarc) auth.dmarc = dmarc[1].toLowerCase();
  return auth;
}

/** Parse raw email headers into structured fields, hops, and auth results. Throws if empty. */
export function parseHeaders(raw: string): ParsedHeaders {
  if (typeof raw !== "string" || raw.trim() === "") {
    throw new Error("No headers provided");
  }
  const headers = splitHeaders(unfold(raw));
  if (headers.length === 0) throw new Error("No valid headers found");

  const fields: Record<string, string> = {};
  const receivedValues: string[] = [];
  let auth: AuthResults = {};

  for (const { name, value } of headers) {
    const lower = name.toLowerCase();
    if (lower === "received") {
      receivedValues.push(value);
    }
    if (lower === "authentication-results") {
      const parsed = parseAuth(value);
      // Merge — keep first non-empty result for each mechanism.
      auth = {
        spf: auth.spf ?? parsed.spf,
        dkim: auth.dkim ?? parsed.dkim,
        dmarc: auth.dmarc ?? parsed.dmarc,
      };
    }
    // Last value wins for ordinary fields (rare duplicates aside).
    if (!(name in fields)) fields[name] = value;
    else fields[name] = value;
  }

  // Received headers are listed newest-first; oldest hop is the last one.
  // We present hops top-to-bottom as they appear in the raw headers.
  const hops: Hop[] = receivedValues.map(parseReceived);

  // Compute delay between consecutive hops, from oldest to newest.
  // The oldest hop (last in array) has no delay. Walk from oldest -> newer.
  for (let i = hops.length - 2; i >= 0; i--) {
    const newer = hops[i];
    const older = hops[i + 1];
    if (newer.date && older.date) {
      const t1 = Date.parse(newer.date);
      const t0 = Date.parse(older.date);
      if (!Number.isNaN(t1) && !Number.isNaN(t0)) {
        const delay = Math.round((t1 - t0) / 1000);
        hops[i] = { ...newer, delaySec: delay >= 0 ? delay : 0 };
      }
    }
  }

  const getField = (key: string): string | undefined => {
    const found = Object.keys(fields).find((k) => k.toLowerCase() === key);
    return found ? fields[found] : undefined;
  };

  return {
    fields,
    hops,
    auth,
    messageId: getField("message-id"),
    subject: getField("subject"),
    from: getField("from"),
    to: getField("to"),
  };
}
