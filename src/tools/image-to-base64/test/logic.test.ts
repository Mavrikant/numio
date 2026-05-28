import { describe, it, expect } from "vitest";
import { toDataUrl, snippets, humanFileSize } from "../logic";

describe("image-to-base64", () => {
  it("builds a data URL", () => {
    expect(toDataUrl("image/png", "AAAA")).toBe("data:image/png;base64,AAAA");
  });
  it("builds CSS and HTML snippets", () => {
    const s = snippets("data:image/png;base64,AAAA");
    expect(s.css).toBe('background-image: url("data:image/png;base64,AAAA");');
    expect(s.html).toBe('<img src="data:image/png;base64,AAAA" alt="" />');
  });
  it("formats human-readable sizes", () => {
    expect(humanFileSize(512)).toBe("512 B");
    expect(humanFileSize(2048)).toBe("2.00 KB");
    expect(humanFileSize(15 * 1024)).toBe("15.0 KB");
    expect(humanFileSize(5 * 1024 * 1024)).toBe("5.00 MB");
  });
});
