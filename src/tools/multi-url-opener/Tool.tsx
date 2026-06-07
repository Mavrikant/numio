import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { parseUrls } from "./logic";

export default function MultiUrlOpenerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const urls = parseUrls(text);

  const openAll = () => {
    if (urls.length === 0) return;
    // Open the first tab synchronously in the click handler so at least one
    // is allowed by the popup blocker; the rest follow in the same loop.
    for (const url of urls) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={8} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-sm text-slate-500 dark:text-slate-400">{ui.count.replace("{n}", String(urls.length))}</span>
        <button
          type="button"
          onClick={openAll}
          disabled={urls.length === 0}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.openAll}
        </button>
      </div>
      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
        {ui.popupNote}
      </div>
    </div>
  );
}
