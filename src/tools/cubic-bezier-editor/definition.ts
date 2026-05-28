import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "cubic-bezier-editor",
  category: "developer",
  priority: "P2",
  icon: "spline",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "<easing-function>", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function", authority: "MDN" }],
    disclaimer: "Visualises and edits a CSS `cubic-bezier()` easing curve in your browser. Output is a copy-ready CSS value.",
  },
  related: ["css-gradient-generator", "box-shadow-generator", "css-clamp-generator"],
  tags: ["cubic bezier editor", "easing curve editor", "css cubic bezier", "easing function builder", "transition timing"],
});
