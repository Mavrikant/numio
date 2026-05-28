import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "twitter-card-generator",
  category: "developer",
  priority: "P2",
  icon: "share",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Twitter / X Cards", url: "https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards", authority: "X" }],
    disclaimer: "Generates Twitter / X Card meta tags in your browser with a preview.",
  },
  related: ["open-graph-generator", "meta-tag-generator", "schema-json-ld-generator"],
  tags: ["twitter card generator", "twitter meta tags", "x cards", "summary large image", "twitter preview"],
});
