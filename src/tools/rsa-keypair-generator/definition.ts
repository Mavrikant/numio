import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "rsa-keypair-generator",
  category: "developer",
  priority: "P1",
  icon: "key",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "SubtleCrypto.generateKey", url: "https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey", authority: "MDN" }],
    disclaimer: "Generates RSA keys with Web Crypto in your browser. Private keys never leave your machine. Use 2048 bits or higher for new keys; never share the private key.",
  },
  related: ["jwt-signer", "hash-generator", "text-encrypt"],
  tags: ["rsa key generator", "rsa keypair", "generate rsa pem", "ssh key generator", "public private key"],
});
