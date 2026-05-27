import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "scatter-plot",
  category: "data-analysis",
  priority: "P0",
  icon: "scatter-chart",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "Pearson, K. (1895). Notes on regression and inheritance in the case of two parents.",
        authority: "Proceedings of the Royal Society of London",
      },
      {
        title: "Galton, F. (1886). Regression towards mediocrity in hereditary stature.",
        authority: "Journal of the Anthropological Institute",
      },
      {
        title: "Anscombe, F. J. (1973). Graphs in statistical analysis.",
        authority: "The American Statistician",
      },
    ],
    accuracyNote:
      "Pearson r and OLS regression are computed in full double-precision floating point. Results are exact for up to ~15 significant digits. For very large datasets (>100k rows) consider sampling first.",
  },
  related: ["histogram", "stats-dashboard"],
  tags: [
    "scatter plot",
    "correlation",
    "pearson correlation",
    "linear regression",
    "r squared",
    "data visualization",
    "statistics",
    "data analysis",
    "csv",
  ],
});
