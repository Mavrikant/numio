import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "emoji-remover",
  category: "text",
  priority: "P2",
  icon: "smile",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["remove-accents", "whitespace-remover", "word-counter"],
  tags: ["emoji remover", "remove emoji", "strip emoji", "delete emojis", "clean text"],
});
