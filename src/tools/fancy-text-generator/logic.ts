export type FancyStyle = "bold" | "italic" | "monospace" | "sansBold" | "fullwidth";

export const FANCY_STYLES: readonly FancyStyle[] = ["bold", "italic", "monospace", "sansBold", "fullwidth"];

// Base code points for 'A', 'a' and '0' in each (contiguous) Unicode block.
const BASES: Record<FancyStyle, { upper: number; lower: number; digit?: number }> = {
  bold: { upper: 0x1d400, lower: 0x1d41a, digit: 0x1d7ce },
  italic: { upper: 0x1d434, lower: 0x1d44e },
  monospace: { upper: 0x1d670, lower: 0x1d68a, digit: 0x1d7f6 },
  sansBold: { upper: 0x1d5d4, lower: 0x1d5ee, digit: 0x1d7ec },
  fullwidth: { upper: 0xff21, lower: 0xff41, digit: 0xff10 },
};

export function toFancy(text: string, style: FancyStyle): string {
  const b = BASES[style];
  return Array.from(text)
    .map((ch) => {
      // Italic lowercase 'h' is reserved; use the Planck-constant glyph.
      if (style === "italic" && ch === "h") return "ℎ";
      const code = ch.codePointAt(0)!;
      if (code >= 65 && code <= 90) return String.fromCodePoint(b.upper + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(b.lower + (code - 97));
      if (b.digit !== undefined && code >= 48 && code <= 57) return String.fromCodePoint(b.digit + (code - 48));
      return ch;
    })
    .join("");
}
