/**
 * Tool — standalone data-analysis page (histogram, scatter, etc.).
 *
 * Unlike calculators (which take small inputs and return computed outputs),
 * tools take user-uploaded data (CSV or pasted text) and render an
 * interactive visualization. They have their own route family at
 * `/{lang}/tools/{slug}/`.
 */

import type { LocalizedString } from "./i18n";

export type ToolCategory = "data-analysis" | "visualization" | "statistics" | "security";

export interface ToolI18nBundle {
  readonly title: string;
  readonly short: string;
  readonly description: string;
  readonly keywords: readonly string[];
  /** UI strings specific to this tool (input labels, button text, etc.) */
  readonly ui: Readonly<Record<string, string>>;
  readonly faq?: ReadonlyArray<{ q: string; a: string }>;
}

export type ToolI18n = {
  readonly [K in import("../config/site").Locale]: ToolI18nBundle;
};

export interface ToolReference {
  readonly title: string;
  readonly url?: string;
  readonly authority?: string;
}

export interface ToolDefinition {
  readonly slug: string;
  readonly category: ToolCategory;
  readonly priority: "P0" | "P1" | "P2";
  readonly icon: string;
  /** React component (default-exported from {slug}/Tool.tsx) — rendered as a client island */
  readonly componentImport: string;
  readonly i18n: ToolI18n;
  readonly meta: {
    readonly references?: ReadonlyArray<ToolReference>;
    readonly accuracyNote?: string;
    readonly disclaimer?: string;
  };
  readonly related?: ReadonlyArray<string>;
  readonly tags: ReadonlyArray<string>;
}

export function defineTool(def: ToolDefinition): ToolDefinition {
  return def;
}

// Re-export for convenience
export type { LocalizedString };
