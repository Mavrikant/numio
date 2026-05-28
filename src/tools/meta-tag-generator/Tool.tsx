import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildMetaTags } from "./logic";

export default function MetaTagGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [t, setT] = useState("Numio — free online calculators & tools");
  const [d, setD] = useState("Free, fast, privacy-first online calculators and developer tools, in your browser.");
  const [k, setK] = useState("calculator, converter, developer tools");
  const [a, setA] = useState("");
  const [c, setC] = useState("https://numio.app/");
  const [r, setR] = useState("index, follow");
  const [v, setV] = useState("width=device-width, initial-scale=1");
  const [ch, setCh] = useState("UTF-8");

  const output = buildMetaTags({ title: t, description: d, keywords: k, author: a, canonical: c, robots: r, viewport: v, charset: ch });

  const field = (label: string, val: string, set: (v: string) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="text" value={val} onChange={(e) => set(e.target.value)} className={inputClass} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {field(ui.titleField, t, setT)}
        {field(ui.author, a, setA)}
      </div>
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.descriptionField}</span>
        <TextArea value={d} onChange={setD} rows={2} />
      </label>
      {field(ui.keywordsField, k, setK)}
      {field(ui.canonical, c, setC)}
      <div className="grid gap-3 sm:grid-cols-3">
        {field(ui.robots, r, setR)}
        {field(ui.viewport, v, setV)}
        {field(ui.charset, ch, setCh)}
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
          <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={output} rows={8} readOnly />
      </div>
    </div>
  );
}
