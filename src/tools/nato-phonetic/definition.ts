import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "nato-phonetic",
  category: "text",
  priority: "P2",
  icon: "radio",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["case-converter", "text-reverse", "word-counter"],
  tags: ["nato phonetic alphabet", "phonetic spelling", "alfa bravo charlie", "spelling alphabet", "military alphabet"],
});
