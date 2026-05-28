import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-clip-path-generator",
  category: "developer",
  priority: "P2",
  icon: "shapes",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "clip-path", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path", authority: "MDN" }],
    disclaimer: "Generates CSS clip-path values for common shapes (triangle, hexagon, star, arrow, …) with a live preview.",
  },
  related: ["css-gradient-generator", "border-radius-generator", "css-triangle-generator"],
  tags: ["css clip-path generator", "clip path shapes", "polygon clip path", "css star shape", "css hexagon"],
});
