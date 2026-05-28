import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { TEMPLATES, buildGitignore } from "./logic";

const NAMES = Object.keys(TEMPLATES);

export default function GitignoreGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [selected, setSelected] = useState<string[]>(["Node", "macOS", "VSCode", "Env"]);

  const toggle = (name: string) =>
    setSelected((s) => (s.includes(name) ? s.filter((x) => x !== name) : [...s, name]));

  const output = buildGitignore(selected);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pick}</span>
        <div className="flex flex-wrap gap-2">
          {NAMES.map((name) => {
            const active = selected.includes(name);
            return (
              <button
                key={name}
                type="button"
                onClick={() => toggle(name)}
                className={
                  "rounded-full border px-3 py-1 text-sm " +
                  (active
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700")
                }
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
          <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={output} rows={14} readOnly />
      </div>
    </div>
  );
}
