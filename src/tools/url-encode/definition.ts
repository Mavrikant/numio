import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "url-encode",
  category: "developer",
  priority: "P1",
  icon: "link",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Encoding and decoding run entirely in your browser." },
  related: ["base64", "json-formatter", "case-converter"],
  tags: ["url encode", "url decode", "percent encoding", "uri encode", "urlencode", "developer tools"],
});
