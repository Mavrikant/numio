import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "password-strength-checker",
  category: "developer",
  priority: "P1",
  icon: "shield",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "Password strength", url: "https://en.wikipedia.org/wiki/Password_strength", authority: "Wikipedia" }],
    disclaimer: "Estimates strength from character-pool entropy with adjustments for common words and patterns. The cracking-time figure assumes 10 billion offline guesses per second. Runs entirely in your browser — do not paste real production passwords into any web tool you do not own.",
  },
  related: ["random-string-generator", "bcrypt-hash-generator", "hash-generator"],
  tags: ["password strength checker", "password entropy", "how strong is my password", "crack time estimator", "password tester"],
});
