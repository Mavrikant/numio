import { describe, it, expect } from "vitest";
import { TEMPLATES, buildGitignore } from "../logic";

describe("gitignore-generator", () => {
  it("includes the requested templates", () => {
    const out = buildGitignore(["Node", "Python"]);
    expect(out).toContain("node_modules/");
    expect(out).toContain("__pycache__/");
  });
  it("separates templates with a blank line", () => {
    const out = buildGitignore(["Node", "Python"]);
    expect(out).toMatch(/\n\n# Python/);
  });
  it("returns empty for no selections", () => {
    expect(buildGitignore([])).toBe("");
  });
  it("silently ignores unknown templates", () => {
    expect(buildGitignore(["Node", "Unknown"])).toContain("node_modules/");
  });
  it("ships every template with a non-empty body", () => {
    for (const name of Object.keys(TEMPLATES)) expect(TEMPLATES[name]!.length).toBeGreaterThan(0);
  });
});
