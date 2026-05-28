import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildOpenGraphTags } from "./logic";

export default function OpenGraphGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [title, setTitle] = useState("Numio — free online calculators & tools");
  const [description, setDescription] = useState("Free, fast, privacy-first online calculators and developer tools.");
  const [url, setUrl] = useState("https://numio.app/");
  const [image, setImage] = useState("https://numio.app/og.png");
  const [siteName, setSiteName] = useState("Numio");
  const [type, setType] = useState("website");
  const [localeField, setLocale] = useState("en_US");

  const output = buildOpenGraphTags({ title, description, url, image, siteName, type, locale: localeField });

  const field = (label: string, val: string, set: (v: string) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="text" value={val} onChange={(e) => set(e.target.value)} className={inputClass} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        {field(ui.titleField, title, setTitle)}
        {field(ui.siteName, siteName, setSiteName)}
      </div>
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.descriptionField}</span>
        <TextArea value={description} onChange={setDescription} rows={2} />
      </label>
      {field(ui.url, url, setUrl)}
      {field(ui.image, image, setImage)}
      <div className="grid gap-3 sm:grid-cols-2">
        {field(ui.type, type, setType)}
        {field(ui.localeField, localeField, setLocale)}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          {image && <img src={image} alt="" className="aspect-[1.91/1] w-full bg-slate-100 object-cover dark:bg-slate-800" onError={(e) => (e.currentTarget.style.display = "none")} />}
          <div className="space-y-1 bg-white px-4 py-3 dark:bg-slate-800">
            <div className="text-xs uppercase tracking-wide text-slate-400">{url.replace(/^https?:\/\//, "").split("/")[0]}</div>
            <div className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{description}</div>
          </div>
        </div>
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
