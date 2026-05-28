import { useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import definition from "./definition";
import { PRESET_CITIES, clockTime, clockDate } from "./logic";

export default function WorldClockTool({ locale: _locale }: { readonly locale: Locale }) {
  void _locale;
  void definition;
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PRESET_CITIES.map((c) => (
          <div key={c.timezone} className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{c.label}</div>
            <div className="font-mono text-2xl text-slate-900 dark:text-slate-100">{clockTime(now, c.timezone)}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{clockDate(now, c.timezone)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
