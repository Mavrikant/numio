import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-gradient-generator",
  category: "developer",
  priority: "P1",
  icon: "blend",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates a CSS gradient value in your browser." },
  related: ["box-shadow-generator", "color-converter", "border-radius-generator"],
  tags: ["css gradient generator", "linear gradient", "radial gradient", "background gradient", "css gradient"],
});
