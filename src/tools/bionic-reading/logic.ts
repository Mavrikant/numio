function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function toBionic(
  text: string,
  fraction: number,
  open: string,
  close: string,
  escape: (s: string) => string,
): string {
  const f = Math.max(0, Math.min(1, fraction));
  let out = "";
  let last = 0;
  for (const m of text.matchAll(/\p{L}+/gu)) {
    const word = m[0];
    const bold = Math.max(1, Math.ceil(word.length * f));
    out += escape(text.slice(last, m.index));
    out += `${open}${word.slice(0, bold)}${close}${word.slice(bold)}`;
    last = m.index + word.length;
  }
  return out + escape(text.slice(last));
}

/**
 * Convert text to "bionic" form by wrapping the leading portion of every
 * word in <strong> tags. The fraction defaults to roughly the first half of
 * each word, which mimics the most common bionic reading visualisations.
 * Non-word text is HTML-escaped so the result is safe to inject as HTML.
 */
export function toBionicHtml(text: string, fraction = 0.5): string {
  return toBionic(text, fraction, "<strong>", "</strong>", escapeHtml);
}

/** Plain-text equivalent: bold-portion + remainder, separated by `*`. Useful for tests/exports. */
export function toBionicPlain(text: string, fraction = 0.5): string {
  return toBionic(text, fraction, "*", "*", (s) => s);
}
