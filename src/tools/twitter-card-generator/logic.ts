export type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

export interface TwitterCardInput {
  readonly card: TwitterCardType;
  readonly site: string;
  readonly creator: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
}

const esc = (s: string): string => s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c]!);
const ensureAt = (handle: string): string => (handle && !handle.startsWith("@") ? `@${handle}` : handle);

/** Render Twitter / X Card meta tags. */
export function buildTwitterCard(input: TwitterCardInput): string {
  const lines: string[] = [];
  if (input.card) lines.push(`<meta name="twitter:card" content="${esc(input.card)}">`);
  if (input.site) lines.push(`<meta name="twitter:site" content="${esc(ensureAt(input.site))}">`);
  if (input.creator) lines.push(`<meta name="twitter:creator" content="${esc(ensureAt(input.creator))}">`);
  if (input.title) lines.push(`<meta name="twitter:title" content="${esc(input.title)}">`);
  if (input.description) lines.push(`<meta name="twitter:description" content="${esc(input.description)}">`);
  if (input.image) lines.push(`<meta name="twitter:image" content="${esc(input.image)}">`);
  if (input.imageAlt) lines.push(`<meta name="twitter:image:alt" content="${esc(input.imageAlt)}">`);
  return lines.join("\n");
}
