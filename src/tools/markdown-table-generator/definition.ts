import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "markdown-table-generator",
  category: "developer",
  priority: "P1",
  icon: "table",
  componentImport: "./Tool",
  i18n,
  meta: { disclaimer: "Generates GitHub-flavoured Markdown tables in your browser." },
  related: ["csv-to-json", "json-to-csv", "html-to-text"],
  tags: ["markdown table generator", "csv to markdown", "markdown table", "md table", "create markdown table"],
});
