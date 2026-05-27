import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "dice-roller",
  category: "developer",
  priority: "P2",
  icon: "dice-5",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Rolls use the cryptographically-secure Web Crypto API." },
  related: ["random-number-generator", "coin-flip", "random-picker"],
  tags: ["dice roller", "roll dice", "d6 d20", "virtual dice", "rng dice"],
});
