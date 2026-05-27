/** Percent-encode a string for safe use in URLs (encodeURIComponent). */
export function encodeUrl(text: string): string {
  return encodeURIComponent(text);
}

/** Decode a percent-encoded string. Throws URIError on malformed sequences. */
export function decodeUrl(text: string): string {
  return decodeURIComponent(text.replace(/\+/g, " "));
}
