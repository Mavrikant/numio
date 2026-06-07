import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "online-notepad",
  category: "text",
  priority: "P2",
  icon: "notebook",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Notes are saved only in this browser's local storage and never uploaded." },
  related: ["word-counter", "find-and-replace", "case-converter"],
  tags: ["online notepad", "free notepad", "browser notepad", "autosave notes", "text editor online"],
});
