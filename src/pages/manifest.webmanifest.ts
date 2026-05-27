import type { APIRoute } from "astro";
import { BASE_PATH } from "@/config/site";

export const GET: APIRoute = () => {
  const manifest = {
    name: "Numio",
    short_name: "Numio",
    description:
      "Free calculators for health, finance, engineering, math, and conversion — in 12 languages.",
    start_url: `${BASE_PATH}/en/`,
    scope: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: `${BASE_PATH}/icons/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
      {
        src: `${BASE_PATH}/icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: `${BASE_PATH}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["productivity", "education", "utilities"],
    shortcuts: [
      {
        name: "BMI",
        url: `${BASE_PATH}/en/health/bmi/`,
      },
      {
        name: "Mortgage",
        url: `${BASE_PATH}/en/finance/mortgage/`,
      },
      {
        name: "Tools",
        url: `${BASE_PATH}/en/tools/`,
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/manifest+json",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
