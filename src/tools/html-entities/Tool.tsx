import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { encodeEntities, decodeEntities } from "./logic";

export default function HtmlEntitiesTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const output = text === "" ? "" : mode === "encode" ? encodeEntities(text) : decodeEntities(text);

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["encode", "decode"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={"rounded px-4 py-1.5 text-sm font-medium " + (m === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {ui[m]}
          </button>
        ))}
      </div>
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={5} />
      <TextArea value={output} readOnly rows={5} />
      <div className="flex justify-end gap-2">
        <button type="button" onClick={() => setText("")} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
          {ui.clear}
        </button>
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
