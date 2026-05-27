import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "number-to-words",
  category: "text",
  priority: "P2",
  icon: "spell-check",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Words are spelled out in English. Runs entirely in your browser." },
  related: ["text-to-binary", "text-to-hex", "case-converter"],
  tags: ["number to words", "spell number", "number speller", "write number in words", "numbers to text"],
});
