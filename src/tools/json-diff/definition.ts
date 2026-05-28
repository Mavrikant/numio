import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "json-diff",
  category: "developer",
  priority: "P1",
  icon: "git-compare",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Compares two JSON documents structurally in your browser. Nothing is uploaded." },
  related: ["json-formatter", "text-diff", "json-to-xml"],
  tags: ["json diff", "compare json", "json compare online", "json structural diff", "json comparator"],
});
