export interface MacResult {
  readonly valid: boolean;
  readonly canonical: string;
  readonly noSeparator: string;
  readonly cisco: string;
  readonly oui: string;
  readonly type: string;
  readonly error: string | null;
}

/** Parse a MAC address in any common separator style and emit normalised representations. */
export function validateMac(input: string): MacResult {
  const empty: MacResult = { valid: false, canonical: "", noSeparator: "", cisco: "", oui: "", type: "", error: null };
  const trimmed = input.trim();
  if (!trimmed) return empty;

  const hex = trimmed.replace(/[\s.:-]/g, "").toUpperCase();
  if (!/^[0-9A-F]{12}$/.test(hex)) return { ...empty, error: "MAC must be 12 hexadecimal digits with optional :, - or . separators." };

  const pairs = hex.match(/.{2}/g)!;
  const canonical = pairs.join(":");
  const cisco = `${hex.slice(0, 4)}.${hex.slice(4, 8)}.${hex.slice(8)}`.toLowerCase();
  const oui = pairs.slice(0, 3).join(":");

  const firstByte = parseInt(pairs[0]!, 16);
  const multicast = (firstByte & 0x01) === 1;
  const local = (firstByte & 0x02) === 2;
  const type = `${multicast ? "Multicast" : "Unicast"} · ${local ? "Locally administered" : "Universally administered"}`;

  return { valid: true, canonical, noSeparator: hex, cisco, oui, type, error: null };
}
