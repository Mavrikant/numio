import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildRobotsTxt, type RobotsGroup } from "./logic";

const DEFAULT_GROUP: RobotsGroup = { userAgent: "*", allow: [], disallow: ["/admin/"], crawlDelay: "" };

function asLines(text: string): string[] {
  return text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
}

export default function RobotsTxtGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [groups, setGroups] = useState<RobotsGroup[]>([DEFAULT_GROUP]);
  const [sitemapsText, setSitemapsText] = useState("https://numio.app/sitemap.xml");

  const sitemaps = asLines(sitemapsText);
  const output = buildRobotsTxt({ groups, sitemaps });

  const updateGroup = (idx: number, patch: Partial<RobotsGroup>) => {
    setGroups(groups.map((g, i) => i === idx ? { ...g, ...patch } : g));
  };

  return (
    <div className="space-y-4">
      {groups.map((g, i) => (
        <div key={i} className="space-y-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
          <div className="flex items-end justify-between gap-3">
            <label className="block flex-1 space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.userAgent}</span>
              <input type="text" value={g.userAgent} onChange={(e) => updateGroup(i, { userAgent: e.target.value })} className={inputClass + " font-mono"} />
            </label>
            {groups.length > 1 && (
              <button type="button" onClick={() => setGroups(groups.filter((_, j) => j !== i))} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
                {ui.removeGroup}
              </button>
            )}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.allow}</span>
              <TextArea value={g.allow.join("\n")} onChange={(v) => updateGroup(i, { allow: asLines(v) })} rows={3} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.disallow}</span>
              <TextArea value={g.disallow.join("\n")} onChange={(v) => updateGroup(i, { disallow: asLines(v) })} rows={3} />
            </label>
          </div>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.crawlDelay}</span>
            <input type="number" min={0} value={g.crawlDelay} onChange={(e) => updateGroup(i, { crawlDelay: e.target.value })} className={inputClass + " w-32"} />
          </label>
        </div>
      ))}

      <button type="button" onClick={() => setGroups([...groups, { userAgent: "*", allow: [], disallow: [], crawlDelay: "" }])} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
        {ui.addGroup}
      </button>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.sitemaps}</span>
        <TextArea value={sitemapsText} onChange={setSitemapsText} rows={2} />
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
