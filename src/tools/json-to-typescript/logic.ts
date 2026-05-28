export interface JsonToTsResult {
  readonly output: string;
  readonly error: string | null;
}

const RESERVED = new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield", "as", "implements", "interface", "let", "package", "private", "protected", "public", "static"]);

function isSafeIdent(name: string): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) && !RESERVED.has(name);
}

function quoteKey(name: string): string {
  return isSafeIdent(name) ? name : JSON.stringify(name);
}

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function capitalize(s: string): string {
  const safe = s.replace(/[^A-Za-z0-9_]/g, "");
  if (!safe) return "Field";
  return safe[0]!.toUpperCase() + safe.slice(1);
}

function uniqueArrayType(types: string[]): string {
  const set = Array.from(new Set(types));
  if (set.length === 0) return "unknown";
  return set.length === 1 ? set[0]! : set.join(" | ");
}

interface NamedInterface {
  readonly name: string;
  readonly body: string;
}

class Generator {
  private readonly interfaces: NamedInterface[] = [];
  private readonly used = new Set<string>();

  reserve(name: string): void {
    this.used.add(name);
  }

  private uniqueName(base: string): string {
    let name = base;
    let i = 2;
    while (this.used.has(name)) name = `${base}${i++}`;
    this.used.add(name);
    return name;
  }

  typeOf(value: unknown, hint: string): string {
    if (value === null) return "null";
    if (Array.isArray(value)) {
      const inner = value.length === 0 ? "unknown" : uniqueArrayType(value.map((v) => this.typeOf(v, hint)));
      return inner.includes(" | ") ? `(${inner})[]` : `${inner}[]`;
    }
    if (isObj(value)) {
      const name = this.uniqueName(hint);
      const lines = Object.entries(value).map(([k, v]) => `  ${quoteKey(k)}: ${this.typeOf(v, capitalize(k))};`);
      const body = lines.length === 0 ? "{}" : `{\n${lines.join("\n")}\n}`;
      this.interfaces.push({ name, body });
      return name;
    }
    if (typeof value === "string") return "string";
    if (typeof value === "number") return "number";
    if (typeof value === "boolean") return "boolean";
    return "unknown";
  }

  render(): string {
    return this.interfaces.map((i) => `export interface ${i.name} ${i.body}`).join("\n\n");
  }
}

/** Convert a JSON string into a TypeScript interface chain rooted at `rootName`. */
export function jsonToTypescript(input: string, rootName = "Root"): JsonToTsResult {
  if (!input.trim()) return { output: "", error: null };
  let parsed: unknown;
  try {
    parsed = JSON.parse(input);
  } catch (e) {
    return { output: "", error: e instanceof Error ? e.message : "Invalid JSON." };
  }

  if (isObj(parsed)) {
    const gen = new Generator();
    gen.typeOf(parsed, rootName);
    return { output: gen.render(), error: null };
  }
  if (Array.isArray(parsed)) {
    const gen = new Generator();
    gen.reserve(rootName);
    const innerType = parsed.length === 0 ? "unknown" : uniqueArrayType(parsed.map((v) => gen.typeOf(v, rootName)));
    const aliasRhs = innerType.includes(" | ") ? `(${innerType})[]` : `${innerType}[]`;
    const interfaces = gen.render();
    const alias = `export type ${rootName}List = ${aliasRhs};`;
    return { output: interfaces ? `${interfaces}\n\n${alias}` : alias, error: null };
  }

  const primitive = parsed === null ? "null" : typeof parsed;
  return { output: `export type ${rootName} = ${primitive};`, error: null };
}
