import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "reading-time-estimator",
  category: "text",
  priority: "P2",
  icon: "clock",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Estimates reading time from word count and a configurable words-per-minute. Real reading speed varies by text difficulty and reader." },
  related: ["word-counter", "bionic-reading", "word-frequency-counter"],
  tags: ["reading time estimator", "reading time calculator", "words per minute", "wpm calculator", "minutes to read"],
});
