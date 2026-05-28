import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "robots-txt-generator",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "robots.txt", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro", authority: "Google Search Central" }],
    disclaimer: "Builds a robots.txt body in your browser. robots.txt is an advisory protocol — it does not block access for clients that ignore it.",
  },
  related: ["schema-json-ld-generator", "meta-tag-generator", "open-graph-generator"],
  tags: ["robots.txt generator", "robots txt", "crawler rules", "sitemap declaration", "seo robots"],
});
