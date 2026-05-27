import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "url-parser",
  category: "developer",
  priority: "P2",
  icon: "link",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Parsing happens entirely in your browser." },
  related: ["url-encode", "json-formatter", "base64"],
  tags: ["url parser", "parse url", "query string parser", "url components", "query parameters"],
});
