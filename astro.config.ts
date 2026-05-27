import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
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
  // Astro 6: integrations stay declarative; Tailwind v4 is now a Vite plugin,
  // not an integration (the old @astrojs/tailwind never shipped an Astro-6
  // compatible release — Tailwind has migrated to a first-class Vite plugin
  // with a CSS-first config: `@import "tailwindcss";` in global.css).
  // remark-math turns `$...$` / `$$...$$` in MDX into math nodes, then
  // rehype-katex renders them via KaTeX (uses the same CSS we already
  // import in AuthorityFooter/QuickAnswer for the inline server-rendered
  // formulas). Without these, MDX tries to parse `$a_1$` as a JSX
  // expression and crashes with `ReferenceError: a_1 is not defined`.
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
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
