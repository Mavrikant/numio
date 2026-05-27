import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { FANCY_STYLES, toFancy } from "./logic";

export default function FancyTextGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={3} />
      <div className="space-y-2">
        {FANCY_STYLES.map((style) => {
          const out = toFancy(text, style);
          return (
            <div key={style} className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <div className="min-w-0">
                <div className="text-xs text-slate-500 dark:text-slate-400">{ui[style]}</div>
                <div className="truncate text-lg text-slate-900 dark:text-slate-100">{out || "—"}</div>
              </div>
              <CopyButton text={out} label={ui.copy} copiedLabel={ui.copied} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
