import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "coin-flip",
  category: "developer",
  priority: "P2",
  icon: "circle",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Flips use the cryptographically-secure Web Crypto API." },
  related: ["dice-roller", "random-number-generator", "random-picker"],
  tags: ["coin flip", "flip a coin", "heads or tails", "coin toss", "random coin"],
});
