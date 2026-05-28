import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "vigenere-cipher",
  category: "developer",
  priority: "P2",
  icon: "key",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Vigenère cipher", url: "https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher", authority: "Wikipedia" }],
    disclaimer: "Vigenère is a classic polyalphabetic substitution cipher. It is broken — use it for puzzles and education only, not real security.",
  },
  related: ["caesar-cipher", "atbash-cipher", "morse-code"],
  tags: ["vigenere cipher", "vigenere decoder", "vigenere encoder", "polyalphabetic cipher", "keyword cipher"],
});
