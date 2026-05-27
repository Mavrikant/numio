import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { reverseText, type ReverseMode } from "./logic";

const MODES: readonly ReverseMode[] = ["characters", "words", "lines"];

export default function TextReverseTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [mode, setMode] = useState<ReverseMode>("characters");
  const output = reverseText(text, mode);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={5} />
      <div className="flex flex-wrap gap-2">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={
              "rounded-md px-3 py-1.5 text-sm font-medium " +
              (m === mode ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700")
            }
          >
            {ui[m]}
          </button>
        ))}
      </div>
      <TextArea value={output} readOnly rows={5} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
