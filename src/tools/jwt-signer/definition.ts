import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "jwt-signer",
  category: "developer",
  priority: "P1",
  icon: "key",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [{ title: "JSON Web Token (JWT)", url: "https://datatracker.ietf.org/doc/html/rfc7519", authority: "RFC 7519" }],
    disclaimer: "Signs JWTs with HMAC (HS256/HS384/HS512) using Web Crypto in your browser. Never paste a production secret into a tool you do not control — this one runs locally but is not a substitute for using your backend's secret store.",
  },
  related: ["jwt-decoder", "rsa-keypair-generator", "hash-generator"],
  tags: ["jwt signer", "sign jwt", "create jwt", "jwt hs256", "jwt generator"],
});
