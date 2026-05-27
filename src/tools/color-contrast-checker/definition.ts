import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "color-contrast-checker",
  category: "developer",
  priority: "P1",
  icon: "contrast",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      { title: "WCAG 2.1 — Contrast (Minimum) 1.4.3 / (Enhanced) 1.4.6", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html", authority: "W3C" },
    ],
    disclaimer: "Contrast is computed locally in your browser using the WCAG relative-luminance formula.",
  },
  related: ["color-converter", "css-minifier", "base64"],
  tags: ["color contrast checker", "wcag contrast", "accessibility", "a11y", "contrast ratio", "aa aaa"],
});
