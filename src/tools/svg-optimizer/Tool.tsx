import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { optimizeSvg } from "./logic";
import { humanFileSize } from "../_shared/image";

export default function SvgOptimizerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const r = optimizeSvg(text);
  const reduction = r.originalSize > 0 ? Math.max(0, Math.round((1 - r.optimizedSize / r.originalSize) * 100)) : 0;

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={8} />
      </div>

      {text.trim() && (
        <>
          <div className="flex flex-wrap items-center gap-6 rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
            <div className="text-sm"><span className="text-slate-500">{ui.originalSize}: </span><code className="font-mono">{humanFileSize(r.originalSize)}</code></div>
            <div className="text-sm"><span className="text-slate-500">{ui.optimizedSize}: </span><code className="font-mono">{humanFileSize(r.optimizedSize)}</code></div>
            <div className="text-sm"><span className="text-slate-500">{ui.reduction}: </span><code className="font-mono text-green-700 dark:text-green-300">{reduction}%</code></div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
              <CopyButton text={r.output} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <TextArea value={r.output} rows={6} readOnly />
          </div>
        </>
      )}
    </div>
  );
}
