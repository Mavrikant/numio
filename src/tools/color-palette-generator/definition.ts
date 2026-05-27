import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "color-palette-generator",
  category: "developer",
  priority: "P1",
  icon: "palette",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates color harmony palettes in your browser using HSL hue rotation." },
  related: ["color-shades-generator", "color-mixer", "color-converter"],
  tags: ["color palette generator", "color scheme", "complementary colors", "analogous colors", "triadic colors"],
});
