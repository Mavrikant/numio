import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "email-header-analyzer",
  category: "developer",
  priority: "P2",
  icon: "mail",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Parsing runs entirely in your browser; no headers are uploaded or stored." },
  related: ["dns-lookup", "user-agent-parser", "url-parser"],
  tags: ["email header analyzer", "email header trace", "spf dkim dmarc check", "received headers parser", "email delivery path"],
});
