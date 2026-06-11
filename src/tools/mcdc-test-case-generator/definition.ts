import { defineTool } from "@/types/tool";
import i18n from "./i18n";

export default defineTool({
  slug: "mcdc-test-case-generator",
  category: "developer",
  priority: "P2",
  icon: "table",
  componentImport: "./Tool",
  i18n,
  meta: {
    references: [
      { title: "A Practical Tutorial on Modified Condition/Decision Coverage (Hayhurst et al., NASA/TM-2001-210876)", url: "https://ntrs.nasa.gov/citations/20010057789", authority: "NASA" },
      { title: "DO-178C — Software Considerations in Airborne Systems and Equipment Certification", url: "https://en.wikipedia.org/wiki/DO-178C", authority: "RTCA" },
    ],
    disclaimer:
      "This generator applies unique-cause MC/DC: each condition is shown to independently affect the decision by a pair of tests that differ in only that condition. Decisions with strongly coupled conditions may require masking MC/DC, where the recommended minimal set can differ.",
  },
  related: ["regex-tester"],
  tags: [
    "mc/dc",
    "mcdc",
    "modified condition decision coverage",
    "mcdc test case generator",
    "truth table generator",
    "boolean coverage",
    "do-178c",
    "iso 26262",
  ],
});
