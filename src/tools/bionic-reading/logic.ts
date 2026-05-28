/**
 * Convert text to "bionic" form by wrapping the leading portion of every
 * word in <strong> tags. The fraction defaults to roughly the first half of
 * each word, which mimics the most common bionic reading visualisations.
 */
export function toBionicHtml(text: string, fraction = 0.5): string {
  const f = Math.max(0, Math.min(1, fraction));
  return text.replace(/(\p{L}+)/gu, (word) => {
    const bold = Math.max(1, Math.ceil(word.length * f));
    return `<strong>${word.slice(0, bold)}</strong>${word.slice(bold)}`;
  });
}

/** Plain-text equivalent: bold-portion + remainder, separated by `*`. Useful for tests/exports. */
export function toBionicPlain(text: string, fraction = 0.5): string {
  return toBionicHtml(text, fraction).replace(/<strong>/g, "*").replace(/<\/strong>/g, "*");
}
