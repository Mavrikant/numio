import { describe, it, expect } from "vitest";
import {
  buildToolHreflang,
  buildToolJsonLd,
  buildToolFaqJsonLd,
  buildToolOgImageUrl,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "./seo";
import type { ToolDefinition } from "../types/tool";
import { LOCALES } from "../config/site";

const stubBundle = {
  title: "Test Tool",
  short: "A short summary.",
  description: "A longer description for the tool.",
  keywords: ["test"],
  ui: {},
};

const stubBundleWithFaq = {
  ...stubBundle,
  faq: [{ q: "What is this?", a: "A test." }],
};

const tool: ToolDefinition = {
  slug: "demo",
  category: "developer",
  priority: "P2",
  icon: "wrench",
  componentImport: "./Tool",
  i18n: Object.fromEntries(LOCALES.map((l) => [l, stubBundle])) as never,
  meta: {},
  tags: ["demo"],
};

const toolWithFaq: ToolDefinition = {
  ...tool,
  i18n: Object.fromEntries(LOCALES.map((l) => [l, stubBundleWithFaq])) as never,
};

describe("buildToolHreflang", () => {
  it("emits an entry per locale plus x-default", () => {
    const entries = buildToolHreflang("demo");
    expect(entries.length).toBe(LOCALES.length + 1);
    expect(entries.at(-1)?.hreflang).toBe("x-default");
  });
  it("uses BCP-47 codes (zh-Hans, not zh)", () => {
    const entries = buildToolHreflang("demo");
    const zh = entries.find((e) => e.href.includes("/zh/"));
    expect(zh?.hreflang).toBe("zh-Hans");
  });
  it("points each entry at the tools/{slug}/ path", () => {
    const entries = buildToolHreflang("demo");
    for (const e of entries) {
      expect(e.href).toMatch(/\/tools\/demo\/$/);
    }
  });
});

describe("buildToolOgImageUrl", () => {
  it("points at the dynamic OG SVG route", () => {
    expect(buildToolOgImageUrl("demo")).toBe(
      "https://karaman.dev/numio/og/tools/demo.svg",
    );
  });
});

describe("buildToolJsonLd", () => {
  it("returns a graph with SoftwareApplication + BreadcrumbList", () => {
    const ld = buildToolJsonLd(tool, "en") as {
      "@graph": Array<{ "@type": string }>;
    };
    expect(ld["@graph"].map((n) => n["@type"])).toEqual([
      "SoftwareApplication",
      "BreadcrumbList",
    ]);
  });
  it("uses BCP-47 inLanguage for zh", () => {
    const ld = buildToolJsonLd(tool, "zh") as {
      "@graph": Array<Record<string, unknown>>;
    };
    expect(ld["@graph"][0]?.inLanguage).toBe("zh-Hans");
  });
});

describe("buildToolFaqJsonLd", () => {
  it("returns null when no faq", () => {
    expect(buildToolFaqJsonLd(tool, "en")).toBeNull();
  });
  it("maps q/a pairs to schema.org Question/Answer", () => {
    const ld = buildToolFaqJsonLd(toolWithFaq, "en") as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(ld["@type"] as unknown).toBe("FAQPage");
    expect(ld.mainEntity[0]?.name).toBe("What is this?");
    expect(ld.mainEntity[0]?.acceptedAnswer.text).toBe("A test.");
  });
});

describe("buildOrganizationJsonLd", () => {
  it("returns an Organization with name and url", () => {
    const ld = buildOrganizationJsonLd() as { "@type": string; name: string };
    expect(ld["@type"]).toBe("Organization");
    expect(ld.name).toBe("Numio");
  });
});

describe("buildWebSiteJsonLd", () => {
  it("includes a SearchAction with the search_term_string placeholder", () => {
    const ld = buildWebSiteJsonLd("en") as {
      potentialAction: { "query-input": string; target: { urlTemplate: string } };
    };
    expect(ld.potentialAction["query-input"]).toContain("search_term_string");
    expect(ld.potentialAction.target.urlTemplate).toContain(
      "{search_term_string}",
    );
  });
});
