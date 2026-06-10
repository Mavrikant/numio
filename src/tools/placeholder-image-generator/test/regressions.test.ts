import { describe, it, expect } from "vitest";
import { buildPlaceholderSvg, svgToDataUrl } from "../logic";

describe("placeholder-image-generator regressions", () => {
  it("encodes non-Latin-1 labels without throwing", () => {
    const svg = buildPlaceholderSvg(100, 100, "héllo → 你好 🎉", "#eee", "#333");
    const url = svgToDataUrl(svg);
    expect(url.startsWith("data:image/svg+xml;base64,")).toBe(true);
    // Round-trip: decoded base64 bytes must be the UTF-8 encoding of the SVG.
    const bytes = Uint8Array.from(atob(url.split(",")[1]!), (c) => c.charCodeAt(0));
    expect(new TextDecoder().decode(bytes)).toBe(svg);
  });
});
