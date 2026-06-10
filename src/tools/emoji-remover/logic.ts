/** Remove emoji and pictographic symbols, collapsing the spaces they leave. */
export function removeEmoji(text: string): string {
  const stripped = text
    // Keycap sequences: digit/#/* + optional variation selector + U+20E3.
    .replace(/[0-9#*][\u{FE0E}\u{FE0F}]?\u{20E3}/gu, "")
    // Pictographic bases (per Unicode Extended_Pictographic) and regional
    // indicators, including skin tones, variation selectors and ZWJ
    // sequences attached to them. ZWJ elsewhere (e.g. Indic shaping) stays.
    .replace(
      /(?:\p{Extended_Pictographic}|[\u{1F1E6}-\u{1F1FF}])[\u{FE0E}\u{FE0F}\u{1F3FB}-\u{1F3FF}]*(?:\u{200D}(?:\p{Extended_Pictographic}|[\u{1F1E6}-\u{1F1FF}])[\u{FE0E}\u{FE0F}\u{1F3FB}-\u{1F3FF}]*)*/gu,
      "",
    );
  return stripped.replace(/[ \t]{2,}/g, " ").replace(/ +\n/g, "\n").trim();
}
