import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "stats-dashboard",
  category: "data-analysis",
  priority: "P0",
  icon: "table",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "Tukey, J. W. (1977). Exploratory Data Analysis.",
        authority: "Addison-Wesley",
      },
    ],
  },
  related: ["histogram", "scatter-plot"],
  tags: ["statistics", "descriptive", "summary", "dashboard", "csv", "data analysis"],
});
