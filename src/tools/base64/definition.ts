import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "base64",
  category: "developer",
  priority: "P0",
  icon: "binary",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Encoding and decoding run entirely in your browser." },
  related: ["url-encode", "json-formatter", "uuid-generator"],
  tags: ["base64", "base64 encode", "base64 decode", "encoder", "decoder", "developer tools"],
});
