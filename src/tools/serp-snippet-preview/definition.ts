import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "serp-snippet-preview",
  category: "text",
  priority: "P2",
  icon: "search",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Preview is an approximation; actual search engine rendering may differ. Everything runs in your browser." },
  related: ["meta-tag-generator", "open-graph-generator", "word-counter"],
  tags: ["serp snippet preview", "google snippet preview", "seo title length", "meta description preview", "search result preview"],
});
