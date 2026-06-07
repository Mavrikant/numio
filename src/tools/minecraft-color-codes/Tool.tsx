import { useState, type CSSProperties } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { COLOR_CODES, FORMAT_CODES, parseToSegments, type Segment } from "./logic";

function segmentStyle(seg: Segment): CSSProperties {
  const decorations: string[] = [];
  if (seg.underline) decorations.push("underline");
  if (seg.strike) decorations.push("line-through");
  return {
    color: seg.color ?? undefined,
    fontWeight: seg.bold ? 700 : undefined,
    fontStyle: seg.italic ? "italic" : undefined,
    textDecoration: decorations.length ? decorations.join(" ") : undefined,
  };
}

export default function MinecraftColorCodesTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("§cHello §lworld§r!");

  const insert = (code: string) => setText((t) => t + "§" + code);

  const segments = parseToSegments(text);
  const ampVariant = text.replace(/§/g, "&");

  return (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.colors}</h3>
        <div className="flex flex-wrap gap-2">
          {COLOR_CODES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => insert(c.code)}
              title={c.name + " (§" + c.code + ")"}
              className="h-8 w-8 rounded border border-slate-300 dark:border-slate-600"
              style={{ backgroundColor: c.hex }}
              aria-label={c.name}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.formats}</h3>
        <div className="flex flex-wrap gap-2">
          {FORMAT_CODES.map((f) => (
            <button
              key={f.code}
              type="button"
              onClick={() => insert(f.code)}
              title={"§" + f.code}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <input className={inputClass} value={text} onChange={(e) => setText(e.target.value)} placeholder={ui.placeholder} dir="ltr" />

      <div>
        <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.preview}</h3>
        <div className="min-h-[3rem] whitespace-pre-wrap break-all rounded-md bg-slate-900 p-4 font-mono text-base" dir="ltr">
          {segments.map((seg, i) => (
            <span key={i} style={segmentStyle(seg)}>
              {seg.text}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{ui.sectionVariant}</span>
          <span className="flex items-center gap-2">
            <span className="break-all font-mono text-sm text-slate-900 dark:text-slate-100" dir="ltr">
              {text}
            </span>
            <CopyButton text={text} label={ui.copy} copiedLabel={ui.copied} />
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{ui.ampVariant}</span>
          <span className="flex items-center gap-2">
            <span className="break-all font-mono text-sm text-slate-900 dark:text-slate-100" dir="ltr">
              {ampVariant}
            </span>
            <CopyButton text={ampVariant} label={ui.copy} copiedLabel={ui.copied} />
          </span>
        </div>
      </div>
    </div>
  );
}
