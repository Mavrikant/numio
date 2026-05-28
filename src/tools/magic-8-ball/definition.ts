import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "magic-8-ball",
  category: "developer",
  priority: "P2",
  icon: "circle",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Magic 8 Ball", url: "https://en.wikipedia.org/wiki/Magic_8_Ball", authority: "Wikipedia" }],
    disclaimer: "Returns one of the 20 classic Magic 8-Ball answers using crypto-grade randomness. For entertainment only.",
  },
  related: ["coin-flip", "dice-roller", "random-picker"],
  tags: ["magic 8 ball", "yes or no answer", "ask a question", "decision maker", "fortune teller"],
});
