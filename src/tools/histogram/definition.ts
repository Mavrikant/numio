import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "histogram",
  category: "data-analysis",
  priority: "P0",
  icon: "bar-chart",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      {
        title: "Freedman, D., Diaconis, P. (1981). On the histogram as a density estimator.",
        authority: "Z. Wahrsch. Verw. Gebiete",
      },
      {
        title: "Tukey, J. W. (1977). Exploratory Data Analysis.",
        authority: "Addison-Wesley",
      },
    ],
    accuracyNote:
      "Bin width is computed automatically using the Freedman-Diaconis rule for robust estimation. You can override the bin count manually.",
  },
  related: ["scatter-plot", "stats-dashboard"],
  tags: ["histogram", "box plot", "distribution", "frequency", "data analysis", "statistics"],
});
