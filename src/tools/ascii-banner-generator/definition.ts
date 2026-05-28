import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "ascii-banner-generator",
  category: "developer",
  priority: "P2",
  icon: "type",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Renders text as 5-row ASCII art using a bundled block font (A–Z, 0–9, and a handful of punctuation). Lowercase letters are upcased." },
  related: ["image-to-ascii", "ascii-table", "fancy-text-generator"],
  tags: ["ascii banner generator", "figlet text", "ascii art text", "block letters", "text banner"],
});
