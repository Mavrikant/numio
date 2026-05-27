import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
// @astrojs/sitemap is intentionally NOT used.
// We ship a custom multi-sitemap suite under src/pages/sitemap-*.xml.ts with:
//   - per-section split (calculators / tools / embed / api / pages)
//   - <xhtml:link> hreflang annotations on every <url> entry
//   - per-route <priority> and <changefreq> tuned for SEO
//   - works in dev mode (the default integration only generates on build)
import { SITE_URL, BASE_PATH } from "./src/config/site";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: "always",
  output: "static",
  build: {
    format: "directory",
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@calculators": "/src/calculators",
        "@lib": "/src/lib",
        "@components": "/src/components",
      },
    },
  },
});
