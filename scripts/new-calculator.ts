import * as fs from "fs";
import * as path from "path";

function parseArgs() {
  const args = process.argv.slice(2);
  let slug = "";
  let category = "";

  for (const arg of args) {
    if (arg.startsWith("--slug=")) {
      slug = arg.split("=")[1];
    } else if (arg.startsWith("--category=")) {
      category = arg.split("=")[1];
    }
  }

  return { slug, category };
}

const CATEGORIES = ["health", "finance", "engineering", "math", "conversion"];

const LOCALES = [
  "en", "tr", "de", "fr", "es", "it", "ar", "ru", "zh", "ja", "ko", "hi"
];

function main() {
  const { slug, category } = parseArgs();

  if (!slug || !category) {
    console.error("Usage: npm run new-calc -- --slug=<slug> --category=<category>");
    process.exit(1);
  }

  if (!CATEGORIES.includes(category)) {
    console.error(`Invalid category. Must be one of: ${CATEGORIES.join(", ")}`);
    process.exit(1);
  }

  const calcDir = path.resolve(process.cwd(), "src", "calculators", category, slug);

  if (fs.existsSync(calcDir)) {
    console.error(`Error: Calculator directory already exists at ${calcDir}`);
    process.exit(1);
  }

  console.log(`Bootstrapping new calculator: ${category}/${slug}`);

  fs.mkdirSync(calcDir, { recursive: true });
  fs.mkdirSync(path.join(calcDir, "content"), { recursive: true });
  fs.mkdirSync(path.join(calcDir, "test"), { recursive: true });

  // 1. Write compute.ts
  const computeContent = `import { z } from "zod";

export const inputSchema = z.object({
  // TODO: Define schema inputs
  value: z.number(),
});

export type ${capitalize(camelCase(slug))}Inputs = z.infer<typeof inputSchema>;

export interface ${capitalize(camelCase(slug))}Result extends Record<string, unknown> {
  // TODO: Define result outputs
  result: number;
}

export function compute(inputs: ${capitalize(camelCase(slug))}Inputs): ${capitalize(camelCase(slug))}Result {
  // TODO: Implement compute logic
  return {
    result: inputs.value,
  };
}
`;
  fs.writeFileSync(path.join(calcDir, "compute.ts"), computeContent);

  // 2. Write definition.ts
  const definitionContent = `import { defineCalculator } from "@/types/calculator";
import { compute, inputSchema } from "./compute";
import i18n from "./i18n";

export default defineCalculator({
  slug: "${slug}",
  category: "${category}",
  priority: "P1",
  icon: "calculator",
  inputs: [
    {
      id: "value",
      type: { kind: "number" },
      defaultValue: 0,
      required: true,
    },
  ],
  outputs: [
    {
      id: "result",
      format: "number",
      highlight: true,
    },
  ],
  inputSchema,
  compute,
  i18n,
  meta: {
    references: [
      {
        title: "Example Reference",
        url: "https://example.com",
      },
    ],
  },
});
`;
  fs.writeFileSync(path.join(calcDir, "definition.ts"), definitionContent);

  // 3. Write i18n.ts
  const i18nContent = `import type { CalculatorI18n } from "@/types/i18n";

const i18n: CalculatorI18n = {
  en: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "Short description in English",
    description: "Detailed description in English",
    keywords: ["calculator"],
    inputs: {
      value: { label: "Input Value" },
    },
    outputs: {
      result: { label: "Result" },
    },
  },
  tr: {
    title: "${capitalize(slug.replace(/-/g, " "))} Hesaplama",
    short: "Türkçe kısa açıklama",
    description: "Türkçe detaylı açıklama",
    keywords: ["hesaplama"],
    inputs: {
      value: { label: "Giriş Değeri" },
    },
    outputs: {
      result: { label: "Sonuç" },
    },
  },
  de: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "Deutsche Kurzbeschreibung",
    description: "Deutsche Beschreibung",
    keywords: ["rechner"],
    inputs: {
      value: { label: "Eingabewert" },
    },
    outputs: {
      result: { label: "Ergebnis" },
    },
  },
  fr: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "Description courte en français",
    description: "Description en français",
    keywords: ["calculatrice"],
    inputs: {
      value: { label: "Valeur d'entrée" },
    },
    outputs: {
      result: { label: "Résultat" },
    },
  },
  es: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "Descripción corta en español",
    description: "Descripción en español",
    keywords: ["calculadora"],
    inputs: {
      value: { label: "Valor de entrada" },
    },
    outputs: {
      result: { label: "Resultado" },
    },
  },
  it: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "Breve descrizione in italiano",
    description: "Descrizione in italiano",
    keywords: ["calcolatrice"],
    inputs: {
      value: { label: "Valore di ingresso" },
    },
    outputs: {
      result: { label: "Risultato" },
    },
  },
  ar: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "وصف قصير باللغة العربية",
    description: "وصف باللغة العربية",
    keywords: ["حاسبة"],
    inputs: {
      value: { label: "القيمة المدخلة" },
    },
    outputs: {
      result: { label: "النتيجة" },
    },
  },
  ru: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "Краткое описание на русском",
    description: "Описание на русском",
    keywords: ["калькулятор"],
    inputs: {
      value: { label: "Входное значение" },
    },
    outputs: {
      result: { label: "Результат" },
    },
  },
  zh: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "中文简短描述",
    description: "中文描述",
    keywords: ["计算器"],
    inputs: {
      value: { label: "输入值" },
    },
    outputs: {
      result: { label: "结果" },
    },
  },
  ja: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "日本語の短い説明",
    description: "日本語の説明",
    keywords: ["電卓"],
    inputs: {
      value: { label: "入力値" },
    },
    outputs: {
      result: { label: "結果" },
    },
  },
  ko: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "한국어 요약 설명",
    description: "한국어 설명",
    keywords: ["계산기"],
    inputs: {
      value: { label: "입력 값" },
    },
    outputs: {
      result: { label: "결과" },
    },
  },
  hi: {
    title: "${capitalize(slug.replace(/-/g, " "))}",
    short: "हिंदी में संक्षिप्त विवरण",
    description: "हिंदी में विवरण",
    keywords: ["कैलकुलेटर"],
    inputs: {
      value: { label: "इनपुट मान" },
    },
    outputs: {
      result: { label: "परिणाम" },
    },
  },
};

export default i18n;
`;
  fs.writeFileSync(path.join(calcDir, "i18n.ts"), i18nContent);

  // 4. Write tests
  // 4a. test/compute.test.ts
  const computeTestContent = `import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("${slug} compute", () => {
  it("runs numeric tests successfully", () => {
    runNumericTests(definition, [
      {
        inputs: { value: 10 },
        expected: { result: 10 },
      },
    ]);
  });
});
`;
  fs.writeFileSync(path.join(calcDir, "test", "compute.test.ts"), computeTestContent);

  // 4b. test/edge-cases.test.ts
  const edgeCasesTestContent = `import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("${slug} edge cases", () => {
  it("handles basic edge cases", () => {
    const result = definition.compute({ value: 0 });
    expect(result.result).toBe(0);
  });
});
`;
  fs.writeFileSync(path.join(calcDir, "test", "edge-cases.test.ts"), edgeCasesTestContent);

  // 4c. test/i18n.test.ts
  const i18nTestContent = `import { describe, it } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("${slug} i18n", () => {
  it("has all 12 locales with required fields", () => {
    assertI18nComplete(definition as AnyCalculatorDefinition);
  });
});
`;
  fs.writeFileSync(path.join(calcDir, "test", "i18n.test.ts"), i18nTestContent);

  // 4d. test/snapshot.test.ts
  const snapshotTestContent = `import { describe, it, expect } from "vitest";
import definition from "../definition";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";

describe("${slug} snapshot", () => {
  it("matches snapshot for standard inputs", () => {
    const result = definition.compute({ value: 10 });
    expect(result).toMatchSnapshot();
  });

  it("schema validates correct inputs", () => {
    assertSchemaValidates(
      definition as AnyCalculatorDefinition,
      { value: 10 },
      { value: "invalid" }
    );
  });

  it("compute is pure", () => {
    assertComputeIsPure(definition as AnyCalculatorDefinition, { value: 10 });
  });
});
`;
  fs.writeFileSync(path.join(calcDir, "test", "snapshot.test.ts"), snapshotTestContent);

  // 5. Write content/*.mdx files
  for (const locale of LOCALES) {
    const mdxTitle = locale === "tr" ? `${capitalize(slug.replace(/-/g, " "))} Hesaplama` : `${capitalize(slug.replace(/-/g, " "))} Calculator`;
    const mdxContent = `# ${mdxTitle}

Detailed explanation of ${slug.replace(/-/g, " ")} in ${locale}.

## What is ${capitalize(slug.replace(/-/g, " "))}?

Explanation...

## How to Use This Calculator

Steps...

## Examples

Example 1...

## Frequently Asked Questions

Q&A...

## References

References...
`;
    fs.writeFileSync(path.join(calcDir, "content", `${locale}.mdx`), mdxContent);
  }

  console.log(`Successfully bootstrapped ${category}/${slug} at ${calcDir}`);
}

function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

main();
