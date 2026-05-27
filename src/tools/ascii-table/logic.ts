export interface AsciiRow {
  readonly dec: number;
  readonly hex: string;
  readonly oct: string;
  readonly bin: string;
  readonly char: string;
  readonly desc: string;
}

const CONTROL_NAMES: Record<number, string> = {
  0: "NUL", 1: "SOH", 2: "STX", 3: "ETX", 4: "EOT", 5: "ENQ", 6: "ACK", 7: "BEL",
  8: "BS", 9: "HT", 10: "LF", 11: "VT", 12: "FF", 13: "CR", 14: "SO", 15: "SI",
  16: "DLE", 17: "DC1", 18: "DC2", 19: "DC3", 20: "DC4", 21: "NAK", 22: "SYN", 23: "ETB",
  24: "CAN", 25: "EM", 26: "SUB", 27: "ESC", 28: "FS", 29: "GS", 30: "RS", 31: "US",
  127: "DEL",
};

function describe(code: number): { char: string; desc: string } {
  if (code in CONTROL_NAMES) return { char: CONTROL_NAMES[code]!, desc: "control" };
  if (code === 32) return { char: "SP", desc: "space" };
  return { char: String.fromCharCode(code), desc: "printable" };
}

/** The 128 standard ASCII codes (0–127) with multiple base representations. */
export const ASCII_TABLE: AsciiRow[] = Array.from({ length: 128 }, (_, code) => {
  const { char, desc } = describe(code);
  return {
    dec: code,
    hex: code.toString(16).toUpperCase().padStart(2, "0"),
    oct: code.toString(8).padStart(3, "0"),
    bin: code.toString(2).padStart(8, "0"),
    char,
    desc,
  };
});

/** Filter ASCII rows by decimal, hex, char, or description (case-insensitive). */
export function searchAscii(query: string): AsciiRow[] {
  const q = query.trim().toLowerCase();
  if (!q) return ASCII_TABLE;
  return ASCII_TABLE.filter(
    (r) =>
      String(r.dec) === q ||
      r.hex.toLowerCase() === q ||
      r.char.toLowerCase() === q ||
      r.char.toLowerCase().includes(q) ||
      r.desc.includes(q),
  );
}
