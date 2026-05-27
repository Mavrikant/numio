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
      {
        title: "Pearson, K. (1895). Notes on regression and inheritance in the case of two parents.",
        authority: "Proceedings of the Royal Society of London",
      },
      {
        title: "Fisher, R. A. (1930). The moments of the distribution for normal samples of measures of departure from normality.",
        authority: "Proceedings of the Royal Society of London",
      },
    ],
    accuracyNote:
      "All computations run in-browser using exact floating-point arithmetic. Pearson correlation assumes linearity; non-linear relationships may show low r despite a strong association.",
  },
  related: ["histogram", "scatter-plot"],
  tags: ["statistics", "descriptive", "summary", "dashboard", "csv", "data analysis", "correlation", "heatmap"],
});
