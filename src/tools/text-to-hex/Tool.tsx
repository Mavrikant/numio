import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { textToHex, hexToText } from "./logic";

export default function TextToHexTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"toHex" | "toText">("toHex");

  let output = "";
  let error = "";
  try {
    output = text === "" ? "" : mode === "toHex" ? textToHex(text) : hexToText(text);
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["toHex", "toText"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={"rounded px-3 py-1.5 text-sm font-medium " + (m === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {ui[m]}
          </button>
        ))}
      </div>
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={5} />
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <TextArea value={output} readOnly rows={5} />
      )}
      <div className="flex justify-end">
        <CopyButton text={error ? "" : output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
