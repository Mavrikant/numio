/**
 * Parse a block of text into a list of normalized, valid URLs.
 *
 * Splits on newlines, trims each line, drops blanks, prepends `https://`
 * when no scheme is present, then validates with the URL constructor and
 * drops anything that does not parse. Order is preserved.
 */
export function parseUrls(text: string): string[] {
  const out: string[] = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line === "") continue;
    const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(line) ? line : `https://${line}`;
    try {
      const url = new URL(withScheme);
      out.push(url.href);
    } catch {
      // drop invalid URLs
    }
  }
  return out;
}
