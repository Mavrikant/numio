import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass, Field } from "@/components/tools/textToolKit";
import definition from "./definition";
import { cidrToRange, rangeToCidr } from "./logic";

type Mode = "toRange" | "toCidr";

export default function Ipv6CidrRangeTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("toRange");
  const [cidr, setCidr] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  let rangeRows: ReadonlyArray<[string, string]> = [];
  let cidrBlocks: string[] = [];
  let error = "";
  try {
    if (mode === "toRange") {
      if (cidr.trim() !== "") {
        const r = cidrToRange(cidr);
        rangeRows = [
          [ui.first, r.first],
          [ui.last, r.last],
          [ui.count, r.count],
        ];
      }
    } else if (start.trim() !== "" && end.trim() !== "") {
      cidrBlocks = rangeToCidr(start, end);
    }
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["toRange", "toCidr"] as const).map((m) => (
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
            {m === "toRange" ? ui.modeToRange : ui.modeToCidr}
          </button>
        ))}
      </div>

      {mode === "toRange" ? (
        <Field label={ui.cidrLabel}>
          <input className={inputClass} value={cidr} onChange={(e) => setCidr(e.target.value)} placeholder={ui.cidrPlaceholder} />
        </Field>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label={ui.startLabel}>
            <input className={inputClass} value={start} onChange={(e) => setStart(e.target.value)} placeholder={ui.startPlaceholder} />
          </Field>
          <Field label={ui.endLabel}>
            <input className={inputClass} value={end} onChange={(e) => setEnd(e.target.value)} placeholder={ui.endPlaceholder} />
          </Field>
        </div>
      )}

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      ) : mode === "toRange" ? (
        <dl className="space-y-2">
          {rangeRows.map(([label, val]) => (
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
      ) : (
        cidrBlocks.length > 0 && (
          <div className="space-y-2">
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{ui.cidrBlocks}</div>
            {cidrBlocks.map((block) => (
              <div
                key={block}
                className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
              >
                <span dir="ltr" className="font-mono break-all text-sm text-slate-900 dark:text-slate-100">
                  {block}
                </span>
                <CopyButton text={block} label={ui.copy} copiedLabel={ui.copied} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
