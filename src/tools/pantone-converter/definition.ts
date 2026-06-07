import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "pantone-converter",
  category: "developer",
  priority: "P2",
  icon: "swatch-book",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Pantone matches are approximate sRGB equivalents for screen use only and are not official Pantone data." },
  related: ["color-converter", "color-palette-generator", "named-colors-lookup"],
  tags: ["pantone converter", "hex to pantone", "rgb to pantone", "cmyk to pantone", "pantone color finder"],
});
