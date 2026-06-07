import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildSnippet, type Measure } from "./logic";

function makeMeasure(font: string): Measure {
  if (typeof document === "undefined") return (s) => s.length * 8;
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return (s) => s.length * 8;
  ctx.font = font;
  return (s) => ctx.measureText(s).width;
}

export default function SerpSnippetPreviewTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [title, setTitle] = useState("Example Page Title — Your Brand");
  const [url, setUrl] = useState("https://example.com/blog/great-article");
  const [description, setDescription] = useState(
    "A concise, compelling meta description that summarizes the page so searchers know exactly what they'll find when they click through.",
  );

  const measureTitle = useMemo(() => makeMeasure("18px Arial"), []);
  const measureDesc = useMemo(() => makeMeasure("13px Arial"), []);

  const snippet = useMemo(() => {
    // buildSnippet measures both title and description; the title budget uses the
    // title font and the description budget uses the description font.
    const t = buildSnippet({ title, url, description: "" }, measureTitle);
    const d = buildSnippet({ title: "", url, description }, measureDesc);
    return {
      title: t.title,
      displayUrl: t.displayUrl,
      description: d.description,
      titleTruncated: t.titleTruncated,
      descTruncated: d.descTruncated,
    };
  }, [title, url, description, measureTitle, measureDesc]);

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.titleLabel}</span>
        <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} placeholder={ui.titlePlaceholder} />
      </label>
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.urlLabel}</span>
        <input className={inputClass} value={url} onChange={(e) => setUrl(e.target.value)} placeholder={ui.urlPlaceholder} dir="ltr" />
      </label>
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.descLabel}</span>
        <textarea
          className={inputClass}
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={ui.descPlaceholder}
        />
      </label>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <div dir="ltr" className="text-sm text-slate-700 dark:text-slate-300">{snippet.displayUrl}</div>
          <div dir="ltr" className="mt-1 text-xl leading-tight text-[#1a0dab] dark:text-[#8ab4f8]">{snippet.title}</div>
          <div dir="ltr" className="mt-1 text-sm leading-snug text-slate-600 dark:text-slate-400">{snippet.description}</div>
        </div>
      </div>

      {(snippet.titleTruncated || snippet.descTruncated) && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {snippet.titleTruncated ? ui.titleTruncated + " " : ""}
          {snippet.descTruncated ? ui.descTruncated : ""}
        </div>
      )}
    </div>
  );
}
