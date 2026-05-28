import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "bionic-reading",
  category: "text",
  priority: "P2",
  icon: "book-open",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Bolds the leading portion of every word to aid skim-reading. This is a visualisation aid, not a clinical reading therapy." },
  related: ["reading-time-estimator", "word-counter", "lorem-ipsum"],
  tags: ["bionic reading", "bionic reading converter", "bold reading", "skim reading", "reading aid"],
});
