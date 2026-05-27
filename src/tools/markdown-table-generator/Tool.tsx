import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildMarkdownTable, parseGrid, type Align } from "./logic";

export default function MarkdownTableGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("Name, Role, Team\nAlice, Engineer, Platform\nBob, Designer, Brand");
  const [align, setAlign] = useState<Align>("left");

  const grid = parseGrid(text);
  const cols = grid.length ? Math.max(...grid.map((r) => r.length)) : 0;
  const output = buildMarkdownTable(grid, Array.from({ length: cols }, () => align));

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={6} />
      </div>

      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>{ui.align}</span>
        <select value={align} onChange={(e) => setAlign(e.target.value as Align)} className={inputClass + " w-auto"}>
          <option value="left">{ui.left}</option>
          <option value="center">{ui.center}</option>
          <option value="right">{ui.right}</option>
        </select>
      </label>

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
