import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "cyclomatic-complexity-calculator",
  category: "developer",
  priority: "P2",
  icon: "git-branch",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      { title: "T. J. McCabe — A Complexity Measure (IEEE Transactions on Software Engineering, 1976)", url: "https://ieeexplore.ieee.org/document/1702388", authority: "IEEE" },
      { title: "NIST SP 500-235 — Structured Testing: A Testing Methodology Using the Cyclomatic Complexity Metric", url: "https://www.nist.gov/publications/structured-testing-testing-methodology-using-cyclomatic-complexity-metric", authority: "NIST" },
    ],
    disclaimer:
      "Source mode counts decision tokens (branch keywords, &&/||, ternaries) after stripping comments and strings — the extended-complexity convention used by tools like Lizard and ESLint. It is a heuristic, not a full parser: regex literals, C++ rvalue references and code inside template-literal interpolations can be miscounted. For certified results use a parser-based analyzer.",
  },
  related: ["mcdc-test-case-generator", "regex-tester"],
  tags: [
    "cyclomatic complexity",
    "mccabe complexity",
    "cyclomatic complexity calculator",
    "code complexity",
    "code metrics",
    "static analysis",
    "control flow graph",
    "basis path testing",
  ],
});
