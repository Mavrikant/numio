import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "mime-type-lookup",
  category: "developer",
  priority: "P2",
  icon: "file-search",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "A quick reference of common file extension MIME types." },
  related: ["http-status-codes", "base64", "url-parser"],
  tags: ["mime type lookup", "content type", "file extension mime", "mime types list", "media type"],
});
