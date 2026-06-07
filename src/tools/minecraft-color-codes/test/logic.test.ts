import { describe, it, expect } from "vitest";
import { COLOR_CODES, FORMAT_CODES, parseToSegments } from "../logic";

describe("Minecraft color codes data", () => {
  it("has 16 color entries", () => {
    expect(COLOR_CODES).toHaveLength(16);
    expect(COLOR_CODES.every((c) => /^#[0-9A-F]{6}$/.test(c.hex))).toBe(true);
  });

  it("has the 6 formatting codes", () => {
    expect(FORMAT_CODES.map((f) => f.code)).toEqual(["k", "l", "m", "n", "o", "r"]);
  });
});

describe("parseToSegments", () => {
  it("yields a red segment then a bold segment", () => {
    const segs = parseToSegments("§cRed§r§lBold");
    expect(segs).toHaveLength(2);
    expect(segs[0].text).toBe("Red");
    expect(segs[0].color).toBe("#FF5555");
    const last = segs[segs.length - 1];
    expect(last.text).toBe("Bold");
    expect(last.bold).toBe(true);
    expect(last.color).toBeUndefined();
  });

  it("supports the & prefix as well", () => {
    const segs = parseToSegments("&aGreen");
    expect(segs[0].color).toBe("#55FF55");
    expect(segs[0].text).toBe("Green");
  });

  it("treats a colour code as a formatting reset", () => {
    const segs = parseToSegments("§l§cText");
    // bold then red: colour resets the bold flag
    expect(segs[0].text).toBe("Text");
    expect(segs[0].color).toBe("#FF5555");
    expect(segs[0].bold).toBeUndefined();
  });

  it("returns a single plain segment for uncoded text", () => {
    const segs = parseToSegments("plain");
    expect(segs).toEqual([{ text: "plain" }]);
  });
});
