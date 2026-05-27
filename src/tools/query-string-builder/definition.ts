import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "query-string-builder",
  category: "developer",
  priority: "P2",
  icon: "link",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["url-parser", "url-encode", "json-formatter"],
  tags: ["query string builder", "url parameters", "build query string", "url params", "querystring"],
});
