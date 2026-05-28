import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "lottery-number-generator",
  category: "developer",
  priority: "P2",
  icon: "dice",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates random lottery numbers in your browser using crypto-grade randomness. For entertainment only; we do not endorse gambling and we do not improve your odds." },
  related: ["random-number-generator", "random-picker", "dice-roller"],
  tags: ["lottery number generator", "lucky numbers", "powerball generator", "euromillions generator", "sayısal loto"],
});
