import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "jwt-decoder",
  category: "developer",
  priority: "P1",
  icon: "key-square",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Tokens are decoded locally in your browser and never sent anywhere. The signature is not verified — do not trust decoded claims without server-side verification." },
  related: ["base64", "json-formatter", "hash-generator"],
  tags: ["jwt decoder", "jwt", "json web token", "decode jwt", "jwt parser", "token decoder"],
});
