import { describe, it, expect } from "vitest";
import { minifySql } from "../logic";

describe("sql-minifier", () => {
  it("collapses whitespace", () => {
    expect(minifySql("SELECT  *  FROM   users")).toBe("SELECT * FROM users");
  });
  it("preserves spaces inside string literals", () => {
    expect(minifySql("SELECT 'John  Doe'")).toBe("SELECT 'John  Doe'");
  });
  it("removes line comments", () => {
    expect(minifySql("SELECT 1 -- a comment\nFROM t")).toBe("SELECT 1 FROM t");
  });
  it("removes block comments", () => {
    expect(minifySql("SELECT /* hi */ 1")).toBe("SELECT 1");
  });
  it("tightens punctuation", () => {
    expect(minifySql("COUNT( * ) , id ;")).toBe("COUNT(*),id;");
  });
  it("does not strip a -- inside a string", () => {
    expect(minifySql("SELECT '-- not a comment'")).toBe("SELECT '-- not a comment'");
  });
});
