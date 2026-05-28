import { describe, it, expect } from "vitest";
import type { PageSize } from "../logic";

const VALID: PageSize[] = ["fit", "a4", "letter"];

describe("image-to-pdf", () => {
  it("declares the supported page sizes", () => {
    expect(VALID).toContain("a4");
    expect(VALID).toContain("letter");
    expect(VALID).toContain("fit");
  });
});
