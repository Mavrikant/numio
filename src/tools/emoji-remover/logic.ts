/** Remove emoji and pictographic symbols, collapsing the spaces they leave. */
export function removeEmoji(text: string): string {
  const stripped = text.replace(
    /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}\u{2B00}-\u{2BFF}\u{1F000}-\u{1F02F}\u{1F1E6}-\u{1F1FF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{2122}\u{2139}]/gu,
    "",
  );
  return stripped.replace(/[ \t]{2,}/g, " ").replace(/ +\n/g, "\n").trim();
}
