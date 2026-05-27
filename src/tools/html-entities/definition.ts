import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "html-entities",
  category: "developer",
  priority: "P2",
  icon: "code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Encoding and decoding run entirely in your browser." },
  related: ["base64", "url-encode", "json-formatter"],
  tags: ["html entities", "html encode", "html decode", "escape html", "entity encoder", "html escape"],
});
