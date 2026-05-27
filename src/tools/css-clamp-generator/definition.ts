import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-clamp-generator",
  category: "developer",
  priority: "P2",
  icon: "move-horizontal",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "clamp() - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp", authority: "MDN" }],
    disclaimer: "Generates a responsive CSS clamp() value assuming a 16px root font size.",
  },
  related: ["css-gradient-generator", "box-shadow-generator", "border-radius-generator"],
  tags: ["css clamp generator", "fluid typography", "responsive font size", "clamp css", "fluid type scale"],
});
