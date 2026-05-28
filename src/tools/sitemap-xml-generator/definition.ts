import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "sitemap-xml-generator",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Sitemaps XML format", url: "https://www.sitemaps.org/protocol.html", authority: "sitemaps.org" }],
    disclaimer: "Builds an XML sitemap from a URL list in your browser. Validate the result with Google Search Console before deploying.",
  },
  related: ["robots-txt-generator", "meta-tag-generator", "schema-json-ld-generator"],
  tags: ["sitemap.xml generator", "xml sitemap", "create sitemap", "seo sitemap", "sitemap maker"],
});
