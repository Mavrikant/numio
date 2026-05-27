export interface ParsedUrl {
  readonly protocol: string;
  readonly hostname: string;
  readonly port: string;
  readonly pathname: string;
  readonly search: string;
  readonly hash: string;
  readonly origin: string;
  readonly params: ReadonlyArray<readonly [string, string]>;
}

/** Parse a URL into its components and query parameters. Throws if invalid. */
export function parseUrl(input: string): ParsedUrl {
  const u = new URL(input.trim());
  return {
    protocol: u.protocol,
    hostname: u.hostname,
    port: u.port,
    pathname: u.pathname,
    search: u.search,
    hash: u.hash,
    origin: u.origin,
    params: [...u.searchParams.entries()],
  };
}
