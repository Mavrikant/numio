import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "upside-down-text",
  category: "text",
  priority: "P2",
  icon: "flip-vertical",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["text-reverse", "case-converter", "nato-phonetic"],
  tags: ["upside down text", "flip text", "rotate text", "ʇxǝʇ", "text flipper"],
});
