import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "meta-tag-generator",
  category: "developer",
  priority: "P1",
  icon: "tag",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates HTML meta tags in your browser. Validate the result against your CMS or generator before deploying." },
  related: ["open-graph-generator", "twitter-card-generator", "schema-json-ld-generator"],
  tags: ["meta tag generator", "html meta tags", "seo meta tags", "title description generator", "viewport tag"],
});
