import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "open-graph-generator",
  category: "developer",
  priority: "P1",
  icon: "share",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Open Graph protocol", url: "https://ogp.me/", authority: "ogp.me" }],
    disclaimer: "Generates Open Graph (Facebook, LinkedIn) meta tags in your browser with a live social-card preview.",
  },
  related: ["meta-tag-generator", "twitter-card-generator", "schema-json-ld-generator"],
  tags: ["open graph generator", "og meta tags", "facebook meta tags", "linkedin preview", "social meta tags"],
});
