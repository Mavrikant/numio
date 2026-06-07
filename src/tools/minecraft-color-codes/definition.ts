import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "minecraft-color-codes",
  category: "text",
  priority: "P2",
  icon: "palette",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Codes are generated locally in your browser; nothing is sent to a server." },
  related: ["color-converter", "fancy-text-generator", "case-converter"],
  tags: ["minecraft color codes", "minecraft formatting codes", "minecraft chat colors", "motd generator", "minecraft text generator"],
});
