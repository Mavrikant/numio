export interface UtmInput {
  readonly url: string;
  readonly source: string;
  readonly medium: string;
  readonly campaign: string;
  readonly term: string;
  readonly content: string;
  readonly id: string;
}

export interface UtmResult {
  readonly url: string;
  readonly error: string | null;
}

/** Append utm_* parameters to a URL while preserving its existing query string and fragment. */
export function buildUtmUrl(input: UtmInput): UtmResult {
  if (!input.url.trim()) return { url: "", error: null };
  let base: URL;
  try {
    base = new URL(input.url);
  } catch {
    return { url: "", error: "Invalid URL. Include the scheme, for example https://example.com/page." };
  }
  const params = base.searchParams;
  const set = (key: string, value: string) => {
    if (value.trim()) params.set(key, value.trim());
  };
  set("utm_source", input.source);
  set("utm_medium", input.medium);
  set("utm_campaign", input.campaign);
  set("utm_term", input.term);
  set("utm_content", input.content);
  set("utm_id", input.id);
  return { url: base.toString(), error: null };
}
