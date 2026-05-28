import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildFlexCss, type FlexConfig } from "./logic";

export default function CssFlexboxGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [config, setConfig] = useState<FlexConfig>({
    direction: "row",
    wrap: "nowrap",
    justify: "flex-start",
    align: "stretch",
    gap: 8,
  });

  const css = buildFlexCss(config);
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: config.direction,
    flexWrap: config.wrap,
    justifyContent: config.justify,
    alignItems: config.align,
    gap: `${config.gap}px`,
    minHeight: 160,
    padding: 12,
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.direction}</span>
          <select value={config.direction} onChange={(e) => setConfig({ ...config, direction: e.target.value as FlexConfig["direction"] })} className={inputClass}>
            <option value="row">row</option><option value="row-reverse">row-reverse</option><option value="column">column</option><option value="column-reverse">column-reverse</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.wrap}</span>
          <select value={config.wrap} onChange={(e) => setConfig({ ...config, wrap: e.target.value as FlexConfig["wrap"] })} className={inputClass}>
            <option value="nowrap">nowrap</option><option value="wrap">wrap</option><option value="wrap-reverse">wrap-reverse</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.justify}</span>
          <select value={config.justify} onChange={(e) => setConfig({ ...config, justify: e.target.value as FlexConfig["justify"] })} className={inputClass}>
            <option value="flex-start">flex-start</option><option value="flex-end">flex-end</option><option value="center">center</option><option value="space-between">space-between</option><option value="space-around">space-around</option><option value="space-evenly">space-evenly</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.align}</span>
          <select value={config.align} onChange={(e) => setConfig({ ...config, align: e.target.value as FlexConfig["align"] })} className={inputClass}>
            <option value="stretch">stretch</option><option value="flex-start">flex-start</option><option value="flex-end">flex-end</option><option value="center">center</option><option value="baseline">baseline</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.gap}</span>
          <input type="number" min={0} value={config.gap} onChange={(e) => setConfig({ ...config, gap: Number(e.target.value) || 0 })} className={inputClass} />
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800" style={style}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex h-12 w-12 items-center justify-center rounded bg-blue-500 text-sm font-semibold text-white">{n}</div>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CSS</span>
          <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={css} rows={7} readOnly />
      </div>
    </div>
  );
}
