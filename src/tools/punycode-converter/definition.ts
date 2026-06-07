import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "punycode-converter",
  category: "developer",
  priority: "P2",
  icon: "globe",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Punycode conversion runs entirely in your browser using the RFC 3492 algorithm." },
  related: ["url-parser", "url-encode", "dns-lookup"],
  tags: ["punycode converter", "idn to ascii", "xn-- decoder", "internationalized domain name", "unicode domain converter"],
});
