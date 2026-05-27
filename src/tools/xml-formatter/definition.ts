import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "xml-formatter",
  category: "developer",
  priority: "P1",
  icon: "code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Formats XML structurally in your browser. It is not a validating parser." },
  related: ["json-formatter", "json-to-xml", "css-minifier"],
  tags: ["xml formatter", "xml beautifier", "format xml", "pretty print xml", "xml indent"],
});
