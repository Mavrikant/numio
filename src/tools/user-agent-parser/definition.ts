import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "user-agent-parser",
  category: "developer",
  priority: "P2",
  icon: "smartphone",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Heuristically parses a browser user-agent string in your browser. User-agent strings are not authoritative — modern browsers also expose User-Agent Client Hints." },
  related: ["url-parser", "http-status-codes", "mime-type-lookup"],
  tags: ["user agent parser", "ua parser", "browser detect", "useragent string", "parse user agent"],
});
