import { describe, it, expect } from "vitest";
import { convertCase } from "../logic";

describe("case-converter regressions", () => {
  it("preserves camelCase boundaries when converting to camel", () => {
    expect(convertCase("helloWorld", "camel")).toBe("helloWorld");
    expect(convertCase("fooBarBaz", "camel")).toBe("fooBarBaz");
  });
  it("preserves camelCase boundaries when converting to pascal", () => {
    expect(convertCase("helloWorld", "pascal")).toBe("HelloWorld");
    expect(convertCase("fooBarBaz", "pascal")).toBe("FooBarBaz");
  });
});
