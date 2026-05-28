export interface RobotsGroup {
  readonly userAgent: string;
  readonly allow: string[];
  readonly disallow: string[];
  readonly crawlDelay: string;
}

export interface RobotsInput {
  readonly groups: RobotsGroup[];
  readonly sitemaps: string[];
}

function emitGroup(g: RobotsGroup): string {
  const lines: string[] = [];
  lines.push(`User-agent: ${g.userAgent || "*"}`);
  for (const path of g.allow) if (path.trim()) lines.push(`Allow: ${path.trim()}`);
  for (const path of g.disallow) if (path.trim()) lines.push(`Disallow: ${path.trim()}`);
  if (g.crawlDelay) lines.push(`Crawl-delay: ${g.crawlDelay.trim()}`);
  return lines.join("\n");
}

/** Render a robots.txt body from groups and optional sitemap URLs. */
export function buildRobotsTxt(input: RobotsInput): string {
  const groups = input.groups.map(emitGroup).filter(Boolean).join("\n\n");
  const sitemaps = input.sitemaps.filter((s) => s.trim()).map((s) => `Sitemap: ${s.trim()}`).join("\n");
  if (!groups && !sitemaps) return "";
  return [groups, sitemaps].filter(Boolean).join("\n\n");
}
