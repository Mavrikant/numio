export interface RedirectRule {
  readonly from: string;
  readonly to: string;
  readonly status: "301" | "302";
}

/** Build a `.htaccess` block of mod_alias Redirect rules. */
export function buildHtaccess(rules: RedirectRule[]): string {
  const lines: string[] = [];
  for (const r of rules) {
    if (!r.from.trim() || !r.to.trim()) continue;
    lines.push(`Redirect ${r.status} ${r.from.trim()} ${r.to.trim()}`);
  }
  if (lines.length === 0) return "";
  return ["<IfModule mod_alias.c>", ...lines.map((l) => "  " + l), "</IfModule>"].join("\n");
}
