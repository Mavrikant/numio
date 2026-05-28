import { describe, it, expect } from "vitest";
import { buildHtaccess } from "../logic";

describe("htaccess-redirect-generator", () => {
  it("emits a single rule wrapped in mod_alias", () => {
    expect(buildHtaccess([{ from: "/old", to: "/new", status: "301" }])).toBe(
      "<IfModule mod_alias.c>\n  Redirect 301 /old /new\n</IfModule>",
    );
  });
  it("supports 301 and 302", () => {
    const out = buildHtaccess([
      { from: "/a", to: "/b", status: "301" },
      { from: "/c", to: "/d", status: "302" },
    ]);
    expect(out).toContain("Redirect 301 /a /b");
    expect(out).toContain("Redirect 302 /c /d");
  });
  it("skips rules with empty from or to", () => {
    expect(buildHtaccess([{ from: "", to: "/x", status: "301" }, { from: "/y", to: "", status: "301" }])).toBe("");
  });
  it("returns empty for no rules", () => {
    expect(buildHtaccess([])).toBe("");
  });
});
