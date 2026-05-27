import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "random-picker",
  category: "developer",
  priority: "P2",
  icon: "shuffle",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Picks use the cryptographically-secure Web Crypto API." },
  related: ["random-number-generator", "dice-roller", "coin-flip"],
  tags: ["random picker", "random name picker", "raffle picker", "pick from list", "random choice"],
});
