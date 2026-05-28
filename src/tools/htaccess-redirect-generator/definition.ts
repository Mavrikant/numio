import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "htaccess-redirect-generator",
  category: "developer",
  priority: "P2",
  icon: "arrow-right-circle",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates a `.htaccess` snippet of Apache mod_alias Redirect rules in your browser. Test with a staging server before deploying." },
  related: ["robots-txt-generator", "sitemap-xml-generator", "meta-tag-generator"],
  tags: ["htaccess redirect generator", "301 redirect generator", "302 redirect generator", "apache redirect", ".htaccess rules"],
});
