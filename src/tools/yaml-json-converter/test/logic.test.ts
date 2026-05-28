import { describe, it, expect } from "vitest";
import { yamlToJson, jsonToYaml } from "../logic";

describe("yaml-json-converter", () => {
  it("converts YAML to JSON", () => {
    const r = yamlToJson("name: numio\nversion: 1\n");
    expect(r.error).toBeNull();
    expect(JSON.parse(r.output)).toEqual({ name: "numio", version: 1 });
  });
  it("converts JSON to YAML", () => {
    const r = jsonToYaml('{"name":"numio","tags":["a","b"]}');
    expect(r.error).toBeNull();
    expect(r.output).toContain("name: numio");
    expect(r.output).toContain("- a");
  });
  it("round-trips YAML → JSON → YAML", () => {
    const yaml = "a: 1\nb:\n  - x\n  - y\n";
    const json = yamlToJson(yaml).output;
    const back = jsonToYaml(json).output;
    expect(yamlToJson(back).output).toBe(json);
  });
  it("returns empty for empty input", () => {
    expect(yamlToJson("")).toEqual({ output: "", error: null });
    expect(jsonToYaml("")).toEqual({ output: "", error: null });
  });
  it("reports YAML parse errors", () => {
    expect(yamlToJson("a: [unterminated").error).not.toBeNull();
  });
  it("reports JSON parse errors", () => {
    expect(jsonToYaml("{not json}").error).not.toBeNull();
  });
});
