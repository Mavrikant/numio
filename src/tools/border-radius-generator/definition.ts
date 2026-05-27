import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "border-radius-generator",
  category: "developer",
  priority: "P2",
  icon: "square-rounded",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates a CSS border-radius value in your browser." },
  related: ["box-shadow-generator", "css-gradient-generator", "text-shadow-generator"],
  tags: ["border radius generator", "css border radius", "rounded corners css", "border-radius", "rounded corner generator"],
});
