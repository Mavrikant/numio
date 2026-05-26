import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { SITE_URL, BASE_PATH, LOCALES, DEFAULT_LOCALE } from "./src/config/site";

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
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: Object.fromEntries(LOCALES.map((l) => [l, l])),
      },
    }),
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
