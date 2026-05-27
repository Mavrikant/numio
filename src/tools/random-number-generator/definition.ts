import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "random-number-generator",
  category: "developer",
  priority: "P1",
  icon: "dices",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Numbers are generated locally with the Web Crypto API." },
  related: ["dice-roller", "coin-flip", "random-picker"],
  tags: ["random number generator", "rng", "random integer", "number picker", "lottery numbers"],
});
