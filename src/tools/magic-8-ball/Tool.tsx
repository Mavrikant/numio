import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { shake, type Answer } from "./logic";

const COLOR: Record<Answer["kind"], string> = {
  yes: "text-green-600 dark:text-green-300",
  noncommittal: "text-amber-600 dark:text-amber-300",
  no: "text-red-600 dark:text-red-300",
};

export default function MagicEightBallTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<Answer | null>(null);

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.question}</span>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className={inputClass} />
      </label>

      <div className="flex flex-col items-center gap-4 rounded-lg border border-slate-200 p-6 dark:border-slate-700">
        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-900 text-center text-white">
          <div className={"flex h-32 w-32 items-center justify-center rounded-full bg-slate-800 px-3 font-semibold leading-tight " + (answer ? COLOR[answer.kind] : "text-slate-500")}>
            {answer ? answer.text : "8"}
          </div>
        </div>
        <button type="button" onClick={() => setAnswer(shake(cryptoRandom))} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.shake}
        </button>
      </div>
    </div>
  );
}
