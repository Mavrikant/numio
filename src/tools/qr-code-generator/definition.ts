import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "qr-code-generator",
  category: "developer",
  priority: "P1",
  icon: "qr-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates QR codes entirely in your browser. The content is never sent to a server." },
  related: ["base64", "url-parser", "iban-validator"],
  tags: ["qr code generator", "create qr code", "qr code maker", "wifi qr code", "vcard qr code"],
});
