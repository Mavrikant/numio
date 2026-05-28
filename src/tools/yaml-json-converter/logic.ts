import yaml from "js-yaml";

export interface ConvertResult {
  readonly output: string;
  readonly error: string | null;
}

/** Convert YAML to indented JSON. */
export function yamlToJson(input: string, indent = 2): ConvertResult {
  if (!input.trim()) return { output: "", error: null };
  try {
    const parsed = yaml.load(input);
    return { output: JSON.stringify(parsed, null, indent), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Invalid YAML." };
  }
}

/** Convert JSON to YAML. */
export function jsonToYaml(input: string): ConvertResult {
  if (!input.trim()) return { output: "", error: null };
  try {
    const parsed = JSON.parse(input);
    return { output: yaml.dump(parsed, { indent: 2, lineWidth: 120 }), error: null };
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Invalid JSON." };
  }
}
