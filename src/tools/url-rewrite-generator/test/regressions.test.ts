import { describe, it, expect } from "vitest";
import { buildRewrite } from "../logic";

describe("url-rewrite-generator regressions", () => {
  it("does not produce a double slash in the nginx rewrite target", () => {
    const { nginx } = buildRewrite({ pretty: "/product/:id", target: "/product.php?id=$1" });
    expect(nginx).toContain(" /product.php?id=$1 last;");
    expect(nginx).not.toContain("//product.php");
  });
});
