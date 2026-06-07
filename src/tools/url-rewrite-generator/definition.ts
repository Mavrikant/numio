import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "url-rewrite-generator",
  category: "developer",
  priority: "P2",
  icon: "file-code",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generated rules are a starting point; test them on your server before deploying. Everything runs in your browser." },
  related: ["htaccess-redirect-generator", "robots-txt-generator", "url-parser"],
  tags: ["url rewrite generator", "nginx rewrite", "apache rewriterule", "mod_rewrite generator", "pretty url rewrite"],
});
