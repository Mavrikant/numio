import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "atbash-cipher",
  category: "developer",
  priority: "P2",
  icon: "type",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Atbash cipher", url: "https://en.wikipedia.org/wiki/Atbash", authority: "Wikipedia" }],
    disclaimer: "Atbash is a simple monoalphabetic substitution cipher (A↔Z, B↔Y, …). Encoding and decoding are the same operation. It is not secure — use it for puzzles and education only.",
  },
  related: ["caesar-cipher", "morse-code", "rot13"],
  tags: ["atbash cipher", "atbash decoder", "atbash encoder", "substitution cipher", "classic cipher"],
});
