import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-flexbox-generator",
  category: "developer",
  priority: "P1",
  icon: "layout",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Flexbox", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout", authority: "MDN" }],
    disclaimer: "Visual CSS flex-container builder with a live preview. Generates display/flex-direction/flex-wrap/justify-content/align-items/gap CSS.",
  },
  related: ["css-gradient-generator", "css-clamp-generator", "border-radius-generator"],
  tags: ["css flexbox generator", "flex container builder", "css flex layout", "justify content generator", "align items generator"],
});
