export interface CharInfo {
  readonly char: string;
  readonly codePoint: number;
  readonly hex: string;
  readonly utf8: string;
}

/** Inspect each Unicode code point: U+ notation, decimal value and UTF-8 bytes. */
export function inspect(text: string): CharInfo[] {
  return Array.from(text).map((ch) => {
    const cp = ch.codePointAt(0)!;
    const utf8 = Array.from(new TextEncoder().encode(ch))
      .map((b) => b.toString(16).padStart(2, "0").toUpperCase())
      .join(" ");
    return {
      char: ch,
      codePoint: cp,
      hex: "U+" + cp.toString(16).toUpperCase().padStart(4, "0"),
      utf8,
    };
  });
}
