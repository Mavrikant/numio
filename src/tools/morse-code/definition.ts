import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "morse-code",
  category: "text",
  priority: "P2",
  icon: "radio",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Runs entirely in your browser." },
  related: ["nato-phonetic", "text-to-binary", "caesar-cipher"],
  tags: ["morse code", "morse translator", "text to morse", "morse to text", "morse decoder"],
});
