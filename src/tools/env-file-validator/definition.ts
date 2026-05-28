import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "env-file-validator",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Parses .env files in your browser. Do not paste real production secrets into any web tool you do not control." },
  related: ["json-formatter", "yaml-json-converter", "gitignore-generator"],
  tags: ["env validator", "dotenv validator", ".env parser", "env file checker", "dotenv linter"],
});
