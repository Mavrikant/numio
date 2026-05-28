import { describe, it, expect } from "vitest";
import { buildTwitterCard } from "../logic";

const blank = { card: "summary" as const, site: "", creator: "", title: "", description: "", image: "", imageAlt: "" };

describe("twitter-card-generator", () => {
  it("emits the card type", () => {
    expect(buildTwitterCard({ ...blank, card: "summary_large_image" })).toContain('<meta name="twitter:card" content="summary_large_image">');
  });
  it("prefixes handles with @ when missing", () => {
    expect(buildTwitterCard({ ...blank, site: "numio" })).toContain('content="@numio"');
    expect(buildTwitterCard({ ...blank, creator: "@x" })).toContain('content="@x"');
  });
  it("escapes quotes in fields", () => {
    expect(buildTwitterCard({ ...blank, title: 'He said "hi"' })).toContain("&quot;hi&quot;");
  });
  it("omits empty optional fields", () => {
    expect(buildTwitterCard(blank)).toBe('<meta name="twitter:card" content="summary">');
  });
});
