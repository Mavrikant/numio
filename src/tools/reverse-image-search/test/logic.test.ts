import { describe, it, expect } from "vitest";
import { buildSearchUrls, looksLikeImage } from "../logic";

describe("buildSearchUrls", () => {
  const img = "https://example.com/a b.jpg";
  const enc = encodeURIComponent(img); // "https%3A%2F%2Fexample.com%2Fa%20b.jpg"

  it("returns four engine URLs", () => {
    const urls = buildSearchUrls(img);
    expect(Object.keys(urls).sort()).toEqual(["bing", "google", "tineye", "yandex"]);
  });
  it("URL-encodes the image URL for Google", () => {
    expect(buildSearchUrls(img).google).toBe(`https://lens.google.com/uploadbyurl?url=${enc}`);
  });
  it("URL-encodes the image URL for Yandex", () => {
    expect(buildSearchUrls(img).yandex).toBe(`https://yandex.com/images/search?rpt=imageview&url=${enc}`);
  });
  it("URL-encodes the image URL for TinEye", () => {
    expect(buildSearchUrls(img).tineye).toBe(`https://tineye.com/search?url=${enc}`);
  });
  it("URL-encodes the image URL for Bing", () => {
    expect(buildSearchUrls(img).bing).toContain(`imgurl:${enc}`);
  });
  it("encodes spaces and slashes", () => {
    expect(buildSearchUrls(img).tineye).toContain("%20");
    expect(buildSearchUrls(img).tineye).toContain("%2F");
  });
});

describe("looksLikeImage", () => {
  it("recognizes common image extensions", () => {
    expect(looksLikeImage("https://example.com/a.jpg")).toBe(true);
    expect(looksLikeImage("https://example.com/a.PNG")).toBe(true);
    expect(looksLikeImage("https://example.com/a.webp?v=2")).toBe(true);
  });
  it("returns false for non-image URLs", () => {
    expect(looksLikeImage("https://example.com/page")).toBe(false);
    expect(looksLikeImage("https://example.com/file.pdf")).toBe(false);
  });
});
