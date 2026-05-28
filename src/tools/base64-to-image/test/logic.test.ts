import { describe, it, expect } from "vitest";
import { parseImageInput } from "../logic";

describe("base64-to-image", () => {
  it("parses a full data URL", () => {
    const r = parseImageInput("data:image/jpeg;base64,/9j/4AAQ");
    expect(r).toMatchObject({ mime: "image/jpeg", extension: "jpg", valid: true });
    expect(r.dataUrl).toBe("data:image/jpeg;base64,/9j/4AAQ");
  });
  it("wraps a bare Base64 string as PNG", () => {
    const r = parseImageInput("iVBORw0KGgo=");
    expect(r).toMatchObject({ mime: "image/png", extension: "png", valid: true });
    expect(r.dataUrl).toBe("data:image/png;base64,iVBORw0KGgo=");
  });
  it("recognises svg data URLs", () => {
    expect(parseImageInput("data:image/svg+xml;base64,PHN2Zz4=").extension).toBe("svg");
  });
  it("strips surrounding whitespace and newlines", () => {
    expect(parseImageInput("  iVBO\nRw0K  ").dataUrl).toBe("data:image/png;base64,iVBORw0K");
  });
  it("flags non-base64 junk", () => {
    expect(parseImageInput("not valid !!!").valid).toBe(false);
    expect(parseImageInput("").valid).toBe(false);
  });
});
