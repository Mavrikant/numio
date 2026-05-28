import { describe, it, expect } from "vitest";
import { buildArticle, buildProduct, buildFaq, buildLocalBusiness, buildBreadcrumb } from "../logic";

function extractJson(snippet: string): unknown {
  const m = /<script[^>]*>\n?([\s\S]*?)\n?<\/script>/.exec(snippet);
  return JSON.parse(m![1]!);
}

describe("schema-json-ld-generator", () => {
  it("builds an Article schema", () => {
    const obj = extractJson(buildArticle({ headline: "Hi", author: "Alice", datePublished: "2026-01-01", image: "https://a.com/i.png", description: "x" })) as Record<string, unknown>;
    expect(obj["@type"]).toBe("Article");
    expect(obj.headline).toBe("Hi");
    expect(obj.author).toEqual({ "@type": "Person", name: "Alice" });
  });
  it("builds a Product schema with offers", () => {
    const obj = extractJson(buildProduct({ name: "W", description: "", image: "", brand: "B", price: "9.99", currency: "USD" })) as Record<string, unknown>;
    expect(obj["@type"]).toBe("Product");
    expect(obj.offers).toEqual({ "@type": "Offer", price: "9.99", priceCurrency: "USD" });
  });
  it("builds a FAQPage with questions", () => {
    const obj = extractJson(buildFaq([{ question: "Q1", answer: "A1" }, { question: "", answer: "skip" }])) as Record<string, unknown>;
    expect(obj["@type"]).toBe("FAQPage");
    expect((obj.mainEntity as unknown[]).length).toBe(1);
  });
  it("builds a LocalBusiness with address", () => {
    const obj = extractJson(buildLocalBusiness({ name: "X", streetAddress: "1 Main", addressLocality: "S", addressRegion: "CA", postalCode: "94", addressCountry: "US", telephone: "", url: "" })) as Record<string, unknown>;
    expect(obj["@type"]).toBe("LocalBusiness");
    expect((obj.address as Record<string, unknown>).streetAddress).toBe("1 Main");
  });
  it("builds a BreadcrumbList with positions", () => {
    const obj = extractJson(buildBreadcrumb([{ name: "Home", url: "/" }, { name: "Sub", url: "/s" }])) as Record<string, unknown>;
    const items = obj.itemListElement as { position: number; name: string }[];
    expect(items[0]!.position).toBe(1);
    expect(items[1]!.position).toBe(2);
  });
  it("wraps output in a script tag", () => {
    expect(buildArticle({ headline: "x", author: "", datePublished: "", image: "", description: "" })).toMatch(/^<script type="application\/ld\+json">/);
  });
});
