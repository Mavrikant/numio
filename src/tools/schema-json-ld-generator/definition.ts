import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "schema-json-ld-generator",
  category: "developer",
  priority: "P1",
  icon: "code",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Schema.org", url: "https://schema.org/", authority: "schema.org" }],
    disclaimer: "Generates schema.org JSON-LD markup in your browser. Validate the result with Google's Rich Results Test before deploying.",
  },
  related: ["meta-tag-generator", "open-graph-generator", "twitter-card-generator"],
  tags: ["schema markup generator", "json-ld generator", "structured data generator", "schema.org json-ld", "rich snippets"],
});
