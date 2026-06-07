import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildSearchUrls, looksLikeImage } from "./logic";

export default function ReverseImageSearchTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [imageUrl, setImageUrl] = useState("");

  const trimmed = imageUrl.trim();
  const urls = trimmed !== "" ? buildSearchUrls(trimmed) : null;
  const showPreview = trimmed !== "" && looksLikeImage(trimmed);

  const engines: ReadonlyArray<[string, string]> = urls
    ? [["Google Lens", urls.google], ["Bing", urls.bing], ["Yandex", urls.yandex], ["TinEye", urls.tineye]]
    : [];

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.imageUrl}</span>
        <input className={inputClass} value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder={ui.placeholder} dir="ltr" />
      </label>

      <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
        {ui.urlNote}
      </div>

      {showPreview && (
        <img src={trimmed} alt={ui.previewAlt} className="max-h-48 rounded-md border border-slate-200 object-contain dark:border-slate-700" />
      )}

      {urls && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {engines.map(([name, href]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 px-3 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
