import { describe, it, expect } from "vitest";
import { ASCII_TABLE, searchAscii } from "../logic";

describe("ascii-table", () => {
  it("has 128 rows", () => {
    expect(ASCII_TABLE).toHaveLength(128);
  });
  it("encodes 'A' (65) across bases", () => {
    const a = ASCII_TABLE[65]!;
    expect(a).toMatchObject({ dec: 65, hex: "41", oct: "101", bin: "01000001", char: "A" });
  });
  it("names control characters", () => {
    expect(ASCII_TABLE[0]!.char).toBe("NUL");
    expect(ASCII_TABLE[10]!.char).toBe("LF");
    expect(ASCII_TABLE[127]!.char).toBe("DEL");
  });
  it("searches by decimal value", () => {
    const r = searchAscii("65");
    expect(r.some((x) => x.char === "A")).toBe(true);
  });
  it("returns everything for empty query", () => {
    expect(searchAscii("")).toHaveLength(128);
  });
});
