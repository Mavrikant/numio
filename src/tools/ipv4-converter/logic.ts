export interface Ipv4Formats {
  readonly dotted: string;
  readonly decimal: string;
  readonly hex: string;
  readonly binary: string;
  readonly error: string | null;
}

const EMPTY: Ipv4Formats = { dotted: "", decimal: "", hex: "", binary: "", error: null };

function fromDotted(s: string): number | null {
  const parts = s.split(".");
  if (parts.length !== 4) return null;
  let acc = 0;
  for (const p of parts) {
    if (!/^\d{1,3}$/.test(p)) return null;
    const n = Number(p);
    if (n > 255) return null;
    acc = (acc << 8) | n;
  }
  return acc >>> 0;
}

function toFormats(n: number): Ipv4Formats {
  return {
    dotted: [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff].join("."),
    decimal: String(n),
    hex: "0x" + n.toString(16).toUpperCase().padStart(8, "0"),
    binary: [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]
      .map((o) => o.toString(2).padStart(8, "0"))
      .join("."),
    error: null,
  };
}

/** Detect the input format and emit dotted, decimal, hex and binary representations. */
export function convertIpv4(input: string): Ipv4Formats {
  const s = input.trim();
  if (!s) return EMPTY;

  if (/^[01]{8}\.[01]{8}\.[01]{8}\.[01]{8}$/.test(s)) {
    const parts = s.split(".").map((b) => parseInt(b, 2));
    return toFormats(((parts[0]! << 24) | (parts[1]! << 16) | (parts[2]! << 8) | parts[3]!) >>> 0);
  }

  if (/^0x[0-9a-fA-F]+$/.test(s)) {
    const n = parseInt(s, 16);
    if (n > 0xffffffff) return { ...EMPTY, error: "Hex value exceeds 32 bits." };
    return toFormats(n >>> 0);
  }

  if (/^\d+$/.test(s)) {
    const n = Number(s);
    if (n > 0xffffffff) return { ...EMPTY, error: "Decimal value exceeds 32 bits." };
    return toFormats(n >>> 0);
  }

  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s)) {
    const n = fromDotted(s);
    if (n === null) return { ...EMPTY, error: "Each octet must be 0–255." };
    return toFormats(n);
  }

  return { ...EMPTY, error: "Enter dotted (1.2.3.4), decimal, 0x-hex or dotted binary." };
}
