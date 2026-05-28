export interface MetaInput {
  readonly title: string;
  readonly description: string;
  readonly keywords: string;
  readonly author: string;
  readonly canonical: string;
  readonly robots: string;
  readonly viewport: string;
  readonly charset: string;
}

const esc = (s: string): string => s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c]!);

/** Render an HTML `<head>` snippet with the supplied SEO meta tags. */
export function buildMetaTags(input: MetaInput): string {
  const lines: string[] = [];
  if (input.charset) lines.push(`<meta charset="${esc(input.charset)}">`);
  if (input.viewport) lines.push(`<meta name="viewport" content="${esc(input.viewport)}">`);
  if (input.title) lines.push(`<title>${esc(input.title)}</title>`);
  if (input.description) lines.push(`<meta name="description" content="${esc(input.description)}">`);
  if (input.keywords) lines.push(`<meta name="keywords" content="${esc(input.keywords)}">`);
  if (input.author) lines.push(`<meta name="author" content="${esc(input.author)}">`);
  if (input.robots) lines.push(`<meta name="robots" content="${esc(input.robots)}">`);
  if (input.canonical) lines.push(`<link rel="canonical" href="${esc(input.canonical)}">`);
  return lines.join("\n");
}
