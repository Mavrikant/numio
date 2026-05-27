import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "password-generator",
  category: "security",
  priority: "P0",
  icon: "key-round",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "NIST SP 800-63B — Digital Identity Guidelines, Authentication",
        url: "https://pages.nist.gov/800-63-3/sp800-63b.html",
        authority: "NIST",
      },
      {
        title: "Password strength (entropy) — Wikipedia",
        url: "https://en.wikipedia.org/wiki/Password_strength",
        authority: "Wikipedia",
      },
    ],
    accuracyNote:
      "Entropy is computed as length × log2(pool size), assuming each character is chosen uniformly at random. Crack-time estimates use half the keyspace as the expected number of guesses and are illustrative — real-world figures depend on the hashing scheme and attacker hardware.",
    disclaimer:
      "Passwords are generated locally in your browser using the Web Crypto API and never leave your device.",
  },
  related: [],
  tags: ["password", "generator", "security", "entropy", "strength", "random"],
});
