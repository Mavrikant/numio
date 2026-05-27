import { describe, it, expect } from "vitest";
import { buildQueryString } from "../logic";

describe("buildQueryString", () => {
  it("builds and encodes a query string", () => {
    expect(buildQueryString("page=2\nsort=name desc")).toBe("?page=2&sort=name%20desc");
  });
  it("encodes special characters in keys and values", () => {
    expect(buildQueryString("a&b=c=d")).toBe("?a%26b=c%3Dd");
  });
  it("handles valueless keys and blank lines", () => {
    expect(buildQueryString("flag\n\nx=1")).toBe("?flag=&x=1");
  });
  it("returns empty for empty input", () => {
    expect(buildQueryString("   ")).toBe("");
  });
});
