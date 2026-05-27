import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "named-colors-lookup",
  category: "developer",
  priority: "P2",
  icon: "swatch-book",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "<named-color> - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/named-color", authority: "MDN" }],
    disclaimer: "Reference list of the 148 CSS named colors and their hex values.",
  },
  related: ["color-converter", "color-palette-generator", "color-shades-generator"],
  tags: ["css named colors", "color names list", "html color names", "css color keywords", "color name to hex"],
});
