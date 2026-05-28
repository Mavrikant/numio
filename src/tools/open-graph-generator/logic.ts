export interface OpenGraphInput {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly image: string;
  readonly siteName: string;
  readonly type: string;
  readonly locale: string;
}

const esc = (s: string): string => s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c]!);

/** Render the standard set of Open Graph `<meta>` tags. */
export function buildOpenGraphTags(input: OpenGraphInput): string {
  const lines: string[] = [];
  if (input.title) lines.push(`<meta property="og:title" content="${esc(input.title)}">`);
  if (input.description) lines.push(`<meta property="og:description" content="${esc(input.description)}">`);
  if (input.url) lines.push(`<meta property="og:url" content="${esc(input.url)}">`);
  if (input.image) lines.push(`<meta property="og:image" content="${esc(input.image)}">`);
  if (input.siteName) lines.push(`<meta property="og:site_name" content="${esc(input.siteName)}">`);
  if (input.type) lines.push(`<meta property="og:type" content="${esc(input.type)}">`);
  if (input.locale) lines.push(`<meta property="og:locale" content="${esc(input.locale)}">`);
  return lines.join("\n");
}
