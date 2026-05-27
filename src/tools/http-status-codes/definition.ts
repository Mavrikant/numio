import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "http-status-codes",
  category: "developer",
  priority: "P2",
  icon: "list",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      { title: "RFC 9110 — HTTP Semantics (Status Codes)", url: "https://www.rfc-editor.org/rfc/rfc9110", authority: "IETF" },
    ],
    disclaimer: "A quick reference of standard HTTP status codes.",
  },
  related: ["url-parser", "json-formatter", "jwt-decoder"],
  tags: ["http status codes", "http codes", "status code lookup", "404 500 meaning", "rest api status"],
});
