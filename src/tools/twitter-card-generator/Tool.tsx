import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildTwitterCard, type TwitterCardType } from "./logic";

const CARDS: TwitterCardType[] = ["summary", "summary_large_image", "app", "player"];

export default function TwitterCardGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [card, setCard] = useState<TwitterCardType>("summary_large_image");
  const [site, setSite] = useState("@numio");
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("Numio — free online calculators & tools");
  const [description, setDescription] = useState("Free, fast, privacy-first online calculators and developer tools.");
  const [image, setImage] = useState("https://numio.app/og.png");
  const [imageAlt, setImageAlt] = useState("");

  const output = buildTwitterCard({ card, site, creator, title, description, image, imageAlt });

  const field = (label: string, val: string, set: (v: string) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="text" value={val} onChange={(e) => set(e.target.value)} className={inputClass} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.card}</span>
          <select value={card} onChange={(e) => setCard(e.target.value as TwitterCardType)} className={inputClass}>
            {CARDS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        {field(ui.site, site, setSite)}
        {field(ui.creator, creator, setCreator)}
        {field(ui.image, image, setImage)}
      </div>
      {field(ui.titleField, title, setTitle)}
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.descriptionField}</span>
        <TextArea value={description} onChange={setDescription} rows={2} />
      </label>
      {field(ui.imageAlt, imageAlt, setImageAlt)}

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          {image && card === "summary_large_image" && (
            <img src={image} alt={imageAlt} className="aspect-[2/1] w-full bg-slate-100 object-cover dark:bg-slate-800" onError={(e) => (e.currentTarget.style.display = "none")} />
          )}
          <div className="space-y-1 bg-white px-4 py-3 dark:bg-slate-800">
            <div className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">{description}</div>
            <div className="text-xs uppercase tracking-wide text-slate-400">{site}</div>
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
