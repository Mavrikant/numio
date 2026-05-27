/**
 * Tools registry — autoloads all tool definitions from src/tools/{slug}/definition.ts
 * Mirrors the calculator registry pattern.
 */
import type { ToolDefinition, ToolCategory } from "../types/tool";

const toolModules = import.meta.glob<{
  default: ToolDefinition;
}>("../tools/*/definition.ts", { eager: true });

function loadTools(): ToolDefinition[] {
  const tools: ToolDefinition[] = [];
  const slugs = new Set<string>();

  for (const [path, mod] of Object.entries(toolModules)) {
    const def = mod.default;
    if (!def) {
      throw new Error(`Tool module ${path} has no default export`);
    }
    if (slugs.has(def.slug)) {
      throw new Error(`Duplicate tool slug "${def.slug}" found at ${path}`);
    }
    slugs.add(def.slug);
    tools.push(def);
  }

  return tools.sort((a, b) => {
    const priorityOrder = { P0: 0, P1: 1, P2: 2 };
    const pdiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (pdiff !== 0) return pdiff;
    return a.slug.localeCompare(b.slug);
  });
}

let _all: ToolDefinition[] | null = null;
let _bySlug: Map<string, ToolDefinition> | null = null;
let _byCategory: Map<ToolCategory, ToolDefinition[]> | null = null;

export function getAllTools(): ToolDefinition[] {
  if (!_all) {
    _all = loadTools();
  }
  return _all;
}

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  if (!_bySlug) {
    _bySlug = new Map(getAllTools().map((t) => [t.slug, t]));
  }
  return _bySlug.get(slug);
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  if (!_byCategory) {
    _byCategory = new Map();
    for (const t of getAllTools()) {
      const arr = _byCategory.get(t.category) ?? [];
      arr.push(t);
      _byCategory.set(t.category, arr);
    }
  }
  return _byCategory.get(category) ?? [];
}
