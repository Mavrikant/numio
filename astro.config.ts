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
      // Force a SINGLE copy of React across the dep graph. Without this,
      // Vite occasionally bundles a second React instance into chunks
      // pulled in by import.meta.glob (e.g. visualizations.tsx files),
      // which then evaluates with React.useMemo === null and crashes
      // hydration. See https://react.dev/warnings/invalid-hook-call-warning
      dedupe: ["react", "react-dom"],
    },
    optimizeDeps: {
      // Pre-bundle React in dev so the dynamically-imported viz modules
      // (loaded via CalcVizSlot's import.meta.glob) share the same React
      // instance as the rest of the app.
      include: ["react", "react-dom", "react-dom/client"],
    },
  },
});
