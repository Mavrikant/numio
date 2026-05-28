import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "syllable-counter",
  category: "text",
  priority: "P2",
  icon: "type",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Estimates syllables for English text using a vowel-group heuristic with common corrections. Approximate — designed for haiku, poetry and ESL practice, not linguistic research." },
  related: ["word-counter", "reading-time-estimator", "word-frequency-counter"],
  tags: ["syllable counter", "count syllables", "syllables in word", "haiku counter", "esl tool"],
});
