import { describe, it, expect } from "vitest";
import { addWatermark } from "../logic";

describe("pdf-watermark", () => {
  it("rejects empty watermark text", async () => {
    await expect(
      addWatermark(new Uint8Array([]), { text: "  ", fontSize: 72, opacity: 0.5, rotation: 30, color: { r: 0, g: 0, b: 0 } }),
    ).rejects.toThrow();
  });
});
