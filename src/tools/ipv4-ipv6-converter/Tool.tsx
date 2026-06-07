import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass, Field } from "@/components/tools/textToolKit";
import definition from "./definition";
import { ipv4ToIpv6, ipv6ExtractIpv4 } from "./logic";

type Mode = "to6" | "to4";

export default function Ipv4Ipv6ConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("to6");
  const [value, setValue] = useState("");

  let rows: ReadonlyArray<[string, string]> = [];
  let error = "";
  try {
    if (value.trim() !== "") {
      if (mode === "to6") {
        const r = ipv4ToIpv6(value);
        rows = [
          [ui.mappedHex, r.mappedHex],
          [ui.mappedDotted, r.mappedDotted],
          [ui.sixToFour, r.sixToFour],
        ];
      } else {
        rows = [[ui.embedded, ipv6ExtractIpv4(value)]];
      }
    }
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["to6", "to4"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={
              "rounded px-3 py-1.5 text-sm font-medium " +
              (mode === m
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800")
            }
          >
            {m === "to6" ? ui.modeTo6 : ui.modeTo4}
          </button>
        ))}
      </div>

      <Field label={ui.input}>
        <input
          className={inputClass}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={mode === "to6" ? ui.ipv4Placeholder : ui.ipv6Placeholder}
        />
      </Field>

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      ) : (
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
      )}
    </div>
  );
}
