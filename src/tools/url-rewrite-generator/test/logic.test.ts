import { describe, it, expect } from "vitest";
import { buildRewrite } from "../logic";

describe("buildRewrite", () => {
  it("converts a single :param to a capture group in the Apache rule", () => {
    const { apache } = buildRewrite({ pretty: "/product/:id", target: "product.php?id=$1" });
    expect(apache).toContain("RewriteRule ^product/([^/]+)/?$ product.php?id=$1 [L,QSA]");
  });
  it("produces an nginx rewrite directive", () => {
    const { nginx } = buildRewrite({ pretty: "/product/:id", target: "product.php?id=$1" });
    expect(nginx).toContain("rewrite");
    expect(nginx).toContain("([^/]+)");
  });
  it("handles multiple params", () => {
    const { apache } = buildRewrite({ pretty: "/product/:id/:slug", target: "product.php?id=$1&slug=$2" });
    expect(apache).toContain("^product/([^/]+)/([^/]+)/?$ product.php?id=$1&slug=$2 [L,QSA]");
  });
  it("keeps literal segments verbatim", () => {
    const { apache } = buildRewrite({ pretty: "/blog/:year/post", target: "blog.php?y=$1" });
    expect(apache).toContain("^blog/([^/]+)/post/?$");
  });
  it("throws when the target is empty", () => {
    expect(() => buildRewrite({ pretty: "/a/:b", target: "" })).toThrow();
    expect(() => buildRewrite({ pretty: "/a/:b", target: "   " })).toThrow();
  });
  it("throws when the pretty pattern is empty", () => {
    expect(() => buildRewrite({ pretty: "", target: "x.php" })).toThrow();
  });
});
