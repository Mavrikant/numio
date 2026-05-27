import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "remove-accents",
  category: "text",
  priority: "P2",
  icon: "a-large-small",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["slugify", "case-converter", "whitespace-remover"],
  tags: ["remove accents", "remove diacritics", "strip accents", "unaccent", "ascii fold", "transliterate"],
});
