import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateUla, type UlaResult } from "./logic";

export default function UlaGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [result, setResult] = useState<UlaResult | null>(null);

  const generate = useCallback(() => {
    setResult(generateUla());
  }, []);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rows: ReadonlyArray<[string, string]> = result
    ? [
        [ui.globalId, result.globalId],
        [ui.prefix48, result.prefix48],
        [ui.sampleSubnet, result.sampleSubnet],
      ]
    : [];

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={generate}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        {ui.generate}
      </button>

      <dl className="space-y-2">
        {rows.map(([label, val]) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
          >
            <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
            <dd className="flex items-center gap-2">
              <span dir="ltr" className="font-mono break-all text-sm text-slate-900 dark:text-slate-100">
                {val}
              </span>
              <CopyButton text={val} label={ui.copy} copiedLabel={ui.copied} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
