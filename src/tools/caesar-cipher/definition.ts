import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "caesar-cipher",
  category: "text",
  priority: "P2",
  icon: "lock",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "The Caesar cipher offers no real security; use it only for puzzles and learning." },
  related: ["text-reverse", "morse-code", "base64"],
  tags: ["caesar cipher", "rot13", "letter shift cipher", "encrypt text", "decode cipher"],
});
