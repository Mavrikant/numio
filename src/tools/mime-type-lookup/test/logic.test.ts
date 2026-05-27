import { describe, it, expect } from "vitest";
import { lookupMime, MIME_TYPES } from "../logic";

describe("mime-type-lookup", () => {
  it("returns all without a query", () => {
    expect(lookupMime("")).toBe(MIME_TYPES);
  });
  it("looks up by extension (with or without dot)", () => {
    expect(lookupMime("png").some((m) => m.type === "image/png")).toBe(true);
    expect(lookupMime(".pdf").some((m) => m.type === "application/pdf")).toBe(true);
  });
  it("looks up by MIME type", () => {
    expect(lookupMime("application/json").some((m) => m.ext === "json")).toBe(true);
  });
  it("returns nothing for unknown", () => {
    expect(lookupMime("zzzznope")).toHaveLength(0);
  });
});
