import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "multi-url-opener",
  category: "developer",
  priority: "P2",
  icon: "external-link",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Links open in new browser tabs; your browser may block multiple popups. Nothing is sent anywhere." },
  related: ["url-parser", "url-encode", "utm-builder"],
  tags: ["multi url opener", "open multiple urls", "bulk url opener", "open links in new tabs", "batch link opener"],
});
