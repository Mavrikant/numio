import { describe, it, expect } from "vitest";
import { unescapeString } from "../logic";

describe("string-escape regressions", () => {
  it("accepts literal tab characters pasted into the input", () => {
    expect(unescapeString("a\tb")).toBe("a\tb");
  });
});
