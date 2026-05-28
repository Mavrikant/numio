import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-triangle-generator",
  category: "developer",
  priority: "P2",
  icon: "triangle",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates the classic CSS border-trick triangle (single element, no SVG required). Runs entirely in your browser." },
  related: ["css-gradient-generator", "border-radius-generator", "box-shadow-generator"],
  tags: ["css triangle generator", "border trick triangle", "css arrow", "css triangle code", "single element triangle"],
});
