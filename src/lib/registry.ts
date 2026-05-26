import type {
  AnyCalculatorDefinition,
  CalculatorCategory,
} from "../types/calculator";
import { CATEGORIES } from "../types/calculator";

const calculatorModules = import.meta.glob<{
  default: AnyCalculatorDefinition;
}>("../calculators/*/*/definition.ts", { eager: true });

function loadCalculators(): AnyCalculatorDefinition[] {
  const calcs: AnyCalculatorDefinition[] = [];
  const slugs = new Set<string>();

  for (const [path, mod] of Object.entries(calculatorModules)) {
    const def = mod.default;
    if (!def) {
      throw new Error(`Calculator module ${path} has no default export`);
    }
    if (slugs.has(def.slug)) {
      throw new Error(
        `Duplicate calculator slug "${def.slug}" found at ${path}`,
      );
    }
    slugs.add(def.slug);
    calcs.push(def);
  }

  return calcs.sort((a, b) => {
    const priorityOrder = { P0: 0, P1: 1, P2: 2 };
    const pdiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    if (pdiff !== 0) return pdiff;
    return a.slug.localeCompare(b.slug);
  });
}

let _allCalculators: AnyCalculatorDefinition[] | null = null;
let _bySlug: Map<string, AnyCalculatorDefinition> | null = null;
let _byCategory: Map<CalculatorCategory, AnyCalculatorDefinition[]> | null = null;

export function getAllCalculators(): AnyCalculatorDefinition[] {
  if (!_allCalculators) {
    _allCalculators = loadCalculators();
  }
  return _allCalculators;
}

export function getCalculatorBySlug(
  slug: string,
): AnyCalculatorDefinition | undefined {
  if (!_bySlug) {
    _bySlug = new Map(getAllCalculators().map((c) => [c.slug, c]));
  }
  return _bySlug.get(slug);
}

export function getCalculatorsByCategory(
  category: CalculatorCategory,
): AnyCalculatorDefinition[] {
  if (!_byCategory) {
    _byCategory = new Map();
    for (const cat of CATEGORIES) {
      _byCategory.set(cat, []);
    }
    for (const calc of getAllCalculators()) {
      _byCategory.get(calc.category)!.push(calc);
    }
  }
  return _byCategory.get(category) ?? [];
}

export function getAvailableCategories(): CalculatorCategory[] {
  return CATEGORIES.filter((c) => getCalculatorsByCategory(c).length > 0);
}

export function getRelatedCalculators(
  slug: string,
  limit = 4,
): AnyCalculatorDefinition[] {
  const calc = getCalculatorBySlug(slug);
  if (!calc) return [];

  const related: AnyCalculatorDefinition[] = [];
  for (const relatedSlug of calc.related ?? []) {
    const rel = getCalculatorBySlug(relatedSlug);
    if (rel) related.push(rel);
  }

  if (related.length < limit) {
    const sameCategory = getCalculatorsByCategory(calc.category)
      .filter((c) => c.slug !== slug && !related.some((r) => r.slug === c.slug))
      .slice(0, limit - related.length);
    related.push(...sameCategory);
  }

  return related.slice(0, limit);
}
