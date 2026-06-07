import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "qr-code-scanner",
  category: "developer",
  priority: "P1",
  icon: "scan-line",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Decoding happens entirely in your browser via the camera or an uploaded image; nothing is sent to a server." },
  related: ["qr-code-generator", "base64", "url-parser"],
  tags: ["qr code scanner", "qr reader online", "scan qr code", "read qr code", "qr code reader webcam"],
});
