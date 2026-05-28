import { describe, it, expect } from "vitest";
import { buildMetaTags } from "../logic";

const blank = { title: "", description: "", keywords: "", author: "", canonical: "", robots: "", viewport: "", charset: "" };

describe("meta-tag-generator", () => {
  it("emits a title and description", () => {
    const out = buildMetaTags({ ...blank, title: "Hi", description: "Hello world" });
    expect(out).toContain("<title>Hi</title>");
    expect(out).toContain('<meta name="description" content="Hello world">');
  });
  it("emits a canonical link", () => {
    expect(buildMetaTags({ ...blank, canonical: "https://x.com/" })).toContain('<link rel="canonical" href="https://x.com/">');
  });
  it("escapes special HTML characters", () => {
    expect(buildMetaTags({ ...blank, title: "<x>&" })).toContain("<title>&lt;x&gt;&amp;</title>");
  });
  it("omits empty fields", () => {
    expect(buildMetaTags(blank)).toBe("");
  });
  it("emits charset first when present", () => {
    const out = buildMetaTags({ ...blank, charset: "UTF-8", title: "x" });
    expect(out.split("\n")[0]).toBe('<meta charset="UTF-8">');
  });
});
