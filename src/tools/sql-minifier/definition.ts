import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "sql-minifier",
  category: "developer",
  priority: "P2",
  icon: "database",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Minifies SQL in your browser by removing comments and extra whitespace. String literals are preserved." },
  related: ["css-minifier", "json-formatter", "xml-formatter"],
  tags: ["sql minifier", "minify sql", "sql compressor", "remove sql comments", "sql one line"],
});
