import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "slugify",
  category: "text",
  priority: "P1",
  icon: "link-2",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Conversion happens entirely in your browser." },
  related: ["case-converter", "word-counter", "url-encode"],
  tags: ["slugify", "url slug", "slug generator", "permalink", "seo slug", "text to slug"],
});
