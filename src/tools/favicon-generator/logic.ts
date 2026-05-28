export const FAVICON_SIZES = [16, 32, 48, 96, 128, 180, 192, 256, 512] as const;
export type FaviconSize = (typeof FAVICON_SIZES)[number];

/** Render the recommended HTML snippet for the multi-size favicon bundle. */
export function buildHtmlSnippet(): string {
  return [
    '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
    '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
    '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">',
    '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
    '<link rel="manifest" href="/site.webmanifest">',
  ].join("\n");
}

/** Render a minimal web app manifest pointing at the generated PNGs. */
export function buildManifest(name: string): string {
  return JSON.stringify(
    {
      name,
      short_name: name,
      icons: [
        { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
    },
    null,
    2,
  );
}
