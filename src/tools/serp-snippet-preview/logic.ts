/** Pixel-width measuring function: returns the rendered width of a string. */
export type Measure = (s: string) => number;

const ELLIPSIS = "…";

/**
 * Truncate `text` so that it fits within `maxPx` pixels according to `measure`,
 * appending an ellipsis when shortened. Uses a binary search on the substring
 * length so it stays fast for long strings.
 */
export function truncate(text: string, maxPx: number, measure: Measure): { text: string; truncated: boolean } {
  if (measure(text) <= maxPx) return { text, truncated: false };

  // Find the longest prefix whose width plus the ellipsis fits.
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const candidate = text.slice(0, mid).trimEnd() + ELLIPSIS;
    if (measure(candidate) <= maxPx) lo = mid;
    else hi = mid - 1;
  }
  return { text: text.slice(0, lo).trimEnd() + ELLIPSIS, truncated: true };
}

export interface SnippetInput {
  readonly title: string;
  readonly url: string;
  readonly description: string;
}

export interface Snippet {
  readonly title: string;
  readonly displayUrl: string;
  readonly description: string;
  readonly titleTruncated: boolean;
  readonly descTruncated: boolean;
}

const TITLE_MAX_PX = 600;
const DESC_MAX_PX = 920;

/** Turn a clean URL into a Google-style breadcrumb display URL. */
function toDisplayUrl(url: string): string {
  const raw = url.trim();
  if (raw === "") return "";
  try {
    const u = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`);
    const segments = u.pathname.split("/").filter(Boolean);
    return [u.hostname, ...segments].join(" › ");
  } catch {
    return raw;
  }
}

/** Build a search-result snippet, truncating title and description to fit. */
export function buildSnippet(input: SnippetInput, measure: Measure): Snippet {
  const title = truncate(input.title.trim(), TITLE_MAX_PX, measure);
  const description = truncate(input.description.trim(), DESC_MAX_PX, measure);
  return {
    title: title.text,
    displayUrl: toDisplayUrl(input.url),
    description: description.text,
    titleTruncated: title.truncated,
    descTruncated: description.truncated,
  };
}
