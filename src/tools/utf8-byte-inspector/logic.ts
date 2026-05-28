export interface CodePointInfo {
  readonly char: string;
  readonly codePoint: number;
  readonly utf8: number[];
  readonly utf16: number[];
}

export interface InspectionResult {
  readonly characters: number;
  readonly codePoints: number;
  readonly utf8Bytes: number;
  readonly utf16CodeUnits: number;
  readonly entries: CodePointInfo[];
}

/** Inspect a string at the Unicode code-point level and emit UTF-8 / UTF-16 byte counts. */
export function inspectUtf8(input: string): InspectionResult {
  const entries: CodePointInfo[] = [];
  const encoder = new TextEncoder();
  let utf8Bytes = 0;
  let codePoints = 0;

  for (const ch of input) {
    const cp = ch.codePointAt(0) ?? 0;
    const utf8 = Array.from(encoder.encode(ch));
    const utf16: number[] = [];
    for (let i = 0; i < ch.length; i++) utf16.push(ch.charCodeAt(i));
    entries.push({ char: ch, codePoint: cp, utf8, utf16 });
    utf8Bytes += utf8.length;
    codePoints += 1;
  }

  return {
    characters: input.length,
    codePoints,
    utf8Bytes,
    utf16CodeUnits: input.length,
    entries,
  };
}

export function hexByte(n: number): string {
  return n.toString(16).toUpperCase().padStart(2, "0");
}

export function hexCodePoint(cp: number): string {
  return "U+" + cp.toString(16).toUpperCase().padStart(4, "0");
}
