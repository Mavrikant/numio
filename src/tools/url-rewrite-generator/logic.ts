export interface RewriteInput {
  /** Pretty URL pattern, e.g. `/product/:id/:slug` */
  readonly pretty: string;
  /** Internal target, e.g. `product.php?id=$1&slug=$2` */
  readonly target: string;
}

export interface RewriteOutput {
  readonly apache: string;
  readonly nginx: string;
}

/**
 * Turn a pretty URL pattern into Apache (mod_rewrite) and nginx rewrite rules.
 *
 * Each `:param` segment becomes a regex capture group `([^/]+)`; literal
 * segments are kept verbatim. The leading slash is stripped for the Apache
 * pattern (mod_rewrite matches the path without it) and kept for nginx.
 */
export function buildRewrite({ pretty, target }: RewriteInput): RewriteOutput {
  const cleanTarget = target.trim();
  if (cleanTarget === "") throw new Error("Target is required");

  const trimmed = pretty.trim();
  if (trimmed === "") throw new Error("Pretty pattern is required");

  // Path used for the regex, without a leading slash.
  const path = trimmed.replace(/^\//, "");
  const toRegex = (p: string) =>
    p
      .split("/")
      .map((seg) => (seg.startsWith(":") ? "([^/]+)" : seg))
      .join("/");

  const apacheRegex = toRegex(path);
  const nginxRegex = toRegex(trimmed.startsWith("/") ? trimmed : `/${trimmed}`);

  const apache = `RewriteEngine On\nRewriteRule ^${apacheRegex}/?$ ${cleanTarget} [L,QSA]`;
  const nginx = `location ~ ^${nginxRegex}/?$ {\n    rewrite ^${nginxRegex}/?$ /${cleanTarget.replace(/^\//, "")} last;\n}`;

  return { apache, nginx };
}
