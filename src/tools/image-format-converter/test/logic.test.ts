import { describe, it, expect } from "vitest";
import { extensionFor, SUPPORTED_FORMATS } from "../logic";

describe("image-format-converter", () => {
  it("maps mime types to extensions", () => {
    expect(extensionFor("image/png")).toBe("png");
    expect(extensionFor("image/jpeg")).toBe("jpg");
    expect(extensionFor("image/webp")).toBe("webp");
  });
  it("lists the three supported formats", () => {
    expect(SUPPORTED_FORMATS).toEqual(["image/png", "image/jpeg", "image/webp"]);
  });
});
