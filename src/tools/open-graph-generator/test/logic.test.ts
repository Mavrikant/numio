import { describe, it, expect } from "vitest";
import { buildOpenGraphTags } from "../logic";

const blank = { title: "", description: "", url: "", image: "", siteName: "", type: "", locale: "" };

describe("open-graph-generator", () => {
  it("emits the canonical og tags", () => {
    const out = buildOpenGraphTags({ ...blank, title: "Hi", description: "x", url: "https://a.com", image: "https://a.com/i.png", siteName: "A", type: "website", locale: "en_US" });
    expect(out).toContain('<meta property="og:title" content="Hi">');
    expect(out).toContain('<meta property="og:description" content="x">');
    expect(out).toContain('<meta property="og:url" content="https://a.com">');
    expect(out).toContain('<meta property="og:image" content="https://a.com/i.png">');
    expect(out).toContain('<meta property="og:site_name" content="A">');
    expect(out).toContain('<meta property="og:type" content="website">');
    expect(out).toContain('<meta property="og:locale" content="en_US">');
  });
  it("escapes special characters", () => {
    expect(buildOpenGraphTags({ ...blank, title: '"<x>"' })).toContain("&quot;&lt;x&gt;&quot;");
  });
  it("omits empty fields", () => {
    expect(buildOpenGraphTags(blank)).toBe("");
  });
});
