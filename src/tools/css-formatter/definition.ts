import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "css-formatter",
  category: "developer",
  priority: "P1",
  icon: "code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Beautifies CSS in your browser by adding newlines and indentation around blocks. String literals and comments are preserved verbatim." },
  related: ["css-minifier", "json-formatter", "xml-formatter"],
  tags: ["css formatter", "css beautifier", "format css", "pretty print css", "css indent"],
});
