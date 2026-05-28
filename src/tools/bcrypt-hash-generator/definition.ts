import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "bcrypt-hash-generator",
  category: "developer",
  priority: "P2",
  icon: "key",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "bcrypt", url: "https://en.wikipedia.org/wiki/Bcrypt", authority: "Wikipedia" }],
    disclaimer: "Hashes and verifies passwords with bcrypt in your browser using bcryptjs. Higher round counts are slower but more resistant to brute force; do not paste real production passwords into any web tool you do not own.",
  },
  related: ["hash-generator", "rsa-keypair-generator", "jwt-signer"],
  tags: ["bcrypt hash", "bcrypt generator", "bcrypt verify", "password hash", "bcrypt online"],
});
