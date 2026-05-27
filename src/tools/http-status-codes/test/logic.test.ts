import { describe, it, expect } from "vitest";
import { searchStatuses, statusClass, HTTP_STATUSES } from "../logic";

describe("http-status-codes", () => {
  it("returns all without a query", () => {
    expect(searchStatuses("")).toBe(HTTP_STATUSES);
  });
  it("searches by code", () => {
    expect(searchStatuses("404").map((s) => s.code)).toContain(404);
  });
  it("searches by name (case-insensitive)", () => {
    const codes = searchStatuses("gateway").map((s) => s.code);
    expect(codes).toEqual(expect.arrayContaining([502, 504]));
  });
  it("derives the class", () => {
    expect(statusClass(404)).toBe(4);
    expect(statusClass(200)).toBe(2);
  });
});
