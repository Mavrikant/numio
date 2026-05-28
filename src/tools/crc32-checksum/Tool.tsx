import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { crc32, crc32Hex } from "./logic";

export default function Crc32ChecksumTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const hex = text === "" ? "" : crc32Hex(text);
  const dec = text === "" ? "" : String(crc32(text));

  const row = (label: string, value: string) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <CopyButton text={value} label={ui.copy} copiedLabel={ui.copied} />
      </div>
      <code className="block overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{value || "—"}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={6} />
      </div>
      {row(ui.hex, hex)}
      {row(ui.decimal, dec)}
    </div>
  );
}
