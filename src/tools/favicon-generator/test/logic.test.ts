import { describe, it, expect } from "vitest";
import { FAVICON_SIZES, buildHtmlSnippet, buildManifest } from "../logic";

describe("favicon-generator", () => {
  it("declares all the standard sizes", () => {
    expect(FAVICON_SIZES).toContain(16);
    expect(FAVICON_SIZES).toContain(32);
    expect(FAVICON_SIZES).toContain(180);
    expect(FAVICON_SIZES).toContain(192);
    expect(FAVICON_SIZES).toContain(512);
  });
  it("emits HTML link tags for 16/32/48 PNG + apple-touch + manifest", () => {
    const snippet = buildHtmlSnippet();
    expect(snippet).toContain('rel="icon"');
    expect(snippet).toContain("favicon-32x32.png");
    expect(snippet).toContain('rel="apple-touch-icon"');
    expect(snippet).toContain('rel="manifest"');
  });
  it("emits a manifest with the site name and 192/512 icons", () => {
    const manifest = JSON.parse(buildManifest("Numio"));
    expect(manifest.name).toBe("Numio");
    expect(manifest.icons.map((i: { sizes: string }) => i.sizes)).toEqual(["192x192", "512x512"]);
  });
});
