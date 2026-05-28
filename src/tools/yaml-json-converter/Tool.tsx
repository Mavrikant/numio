import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { yamlToJson, jsonToYaml } from "./logic";

type Mode = "yaml-to-json" | "json-to-yaml";

export default function YamlJsonConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("yaml-to-json");
  const [text, setText] = useState("name: numio\nversion: 1\ntags:\n  - tools\n  - calc\n");

  const { output, error } = mode === "yaml-to-json" ? yamlToJson(text) : jsonToYaml(text);

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {([
          { id: "yaml-to-json" as const, label: ui.yamlToJson },
          { id: "json-to-yaml" as const, label: ui.jsonToYaml },
        ]).map((m) => (
          <button key={m.id} type="button" onClick={() => setMode(m.id)} className={"rounded px-4 py-1.5 text-sm font-medium " + (m.id === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {m.label}
          </button>
        ))}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={8} />
      </div>

      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}

      {!error && (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
            <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <TextArea value={output} rows={8} readOnly />
        </div>
      )}
    </div>
  );
}
