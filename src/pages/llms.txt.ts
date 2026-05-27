/**
 * /calculators/llms.txt — LLM/AI discovery manifest
 * Spec: https://llmstxt.org/
 *
 * Lists every calculator and tool with a 1-line English description
 * and a canonical English URL. Grouped by category, sorted alphabetically.
 */

import type { APIRoute } from "astro";
import { getAllCalculators, getAvailableCategories } from "@/lib/registry";
import { getAllTools } from "@/lib/tools-registry";
import { SITE_URL, BASE_PATH, type Locale } from "@/config/site";

const EN: Locale = "en";

function calcUrl(category: string, slug: string): string {
  return `${SITE_URL}${BASE_PATH}/en/${category}/${slug}/`;
}

function toolUrl(slug: string): string {
  return `${SITE_URL}${BASE_PATH}/en/tools/${slug}/`;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const GET: APIRoute = () => {
  const allCalcs = getAllCalculators();
  const categories = getAvailableCategories();
  const tools = getAllTools();

  const lines: string[] = [];

  lines.push("# Karaman Calculators");
  lines.push("");
  lines.push(
    "> Free calculators across health, finance, engineering, math, and conversion — in 12 languages." +
      " Each calculator returns deterministic results in the browser; no signup required.",
  );
  lines.push("");

  // Group calculators by category, sorted alphabetically within each
  for (const category of categories) {
    const calcs = allCalcs
      .filter((c) => c.category === category)
      .sort((a, b) => {
        const bundleA = a.i18n[EN];
        const bundleB = b.i18n[EN];
        return bundleA.title.localeCompare(bundleB.title, "en");
      });

    if (calcs.length === 0) continue;

    lines.push(`## ${capitalize(category)}`);
    for (const calc of calcs) {
      const bundle = calc.i18n[EN];
      const url = calcUrl(calc.category, calc.slug);
      const short = bundle.short.replace(/\n/g, " ").trim();
      lines.push(`- [${bundle.title}](${url}): ${short}`);
    }
    lines.push("");
  }

  // Tools section
  if (tools.length > 0) {
    const sortedTools = [...tools].sort((a, b) => {
      const bundleA = a.i18n[EN];
      const bundleB = b.i18n[EN];
      return bundleA.title.localeCompare(bundleB.title, "en");
    });

    lines.push("## Tools");
    for (const tool of sortedTools) {
      const bundle = tool.i18n[EN];
      const url = toolUrl(tool.slug);
      const short = bundle.short.replace(/\n/g, " ").trim();
      lines.push(`- [${bundle.title}](${url}): ${short}`);
    }
    lines.push("");
  }

  // API section — public JSON endpoints per calculator (B2 feature)
  lines.push("## API");
  lines.push(
    `- [API documentation](${SITE_URL}${BASE_PATH}/api/) — public JSON endpoints, no key required.`,
  );
  for (const category of categories) {
    const calcs = allCalcs
      .filter((c) => c.category === category)
      .sort((a, b) => {
        const bundleA = a.i18n[EN];
        const bundleB = b.i18n[EN];
        return bundleA.title.localeCompare(bundleB.title, "en");
      });
    for (const calc of calcs) {
      const bundle = calc.i18n[EN];
      const url = `${SITE_URL}${BASE_PATH}/api/${calc.slug}.json`;
      const short = bundle.short.replace(/\n/g, " ").trim();
      lines.push(`- [${bundle.title} API](${url}): ${short}`);
    }
  }
  lines.push("");

  const body = lines.join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
