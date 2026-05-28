import { describe, it, expect } from "vitest";
import { jsonToTypescript } from "../logic";

describe("json-to-typescript", () => {
  it("emits an interface for a flat object", () => {
    expect(jsonToTypescript('{"id":1,"name":"x"}', "User").output).toBe(
      "export interface User {\n  id: number;\n  name: string;\n}",
    );
  });
  it("nests interfaces for nested objects", () => {
    const out = jsonToTypescript('{"user":{"id":1}}').output;
    expect(out).toContain("export interface Root {");
    expect(out).toContain("user: User;");
    expect(out).toContain("export interface User {");
  });
  it("uses union types for mixed arrays", () => {
    expect(jsonToTypescript('{"items":[1,"x"]}').output).toMatch(/items: \(number \| string\)\[\]/);
  });
  it("treats empty arrays as unknown[]", () => {
    expect(jsonToTypescript('{"items":[]}').output).toContain("items: unknown[];");
  });
  it("quotes non-identifier keys", () => {
    expect(jsonToTypescript('{"a-b":1}').output).toContain('"a-b": number;');
  });
  it("emits an alias for a root array", () => {
    expect(jsonToTypescript('[1,2,3]', "Counts").output).toBe("export type CountsList = number[];");
  });
  it("reports JSON parse errors", () => {
    expect(jsonToTypescript("not json").error).not.toBeNull();
  });
});
