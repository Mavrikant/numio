import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "tailwind-shade-generator",
  category: "developer",
  priority: "P1",
  icon: "palette",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Tailwind CSS Colors", url: "https://tailwindcss.com/docs/colors", authority: "Tailwind CSS" }],
    disclaimer: "Generates a Tailwind-style 50–950 colour scale from a base hex in your browser via HSL lightness targets. The exact values are approximations of Tailwind's own scales.",
  },
  related: ["color-palette-generator", "color-shades-generator", "color-mixer"],
  tags: ["tailwind shade generator", "tailwind color palette", "50 950 generator", "tailwind color scale", "tw colors"],
});
