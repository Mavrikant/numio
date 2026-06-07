import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { textStats } from "./logic";

const STORAGE_KEY = "numio-notepad";

export default function OnlineNotepadTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [savedAt, setSavedAt] = useState(false);
  const loaded = useRef(false);

  // Load on mount.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) setText(stored);
    } catch {
      // localStorage unavailable (e.g. Safari private mode) — start empty.
    }
    loaded.current = true;
  }, []);

  // Save on change (skip the very first render before load completes).
  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, text);
      setSavedAt(true);
    } catch {
      // Ignore quota / private-mode write failures.
    }
  }, [text]);

  const stats = textStats(text);

  const download = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notepad.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const clear = () => {
    setText("");
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore.
    }
  };

  return (
    <div className="space-y-4">
      <TextArea
        value={text}
        onChange={(v) => {
          setText(v);
          setSavedAt(false);
        }}
        placeholder={ui.placeholder}
        rows={14}
      />

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
        <span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.words}</span> {ui.words}
        </span>
        <span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.characters}</span> {ui.characters}
        </span>
        <span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.charactersNoSpaces}</span> {ui.noSpaces}
        </span>
        <span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">{stats.lines}</span> {ui.lines}
        </span>
        <span className="ml-auto text-xs text-emerald-600 dark:text-emerald-400">{savedAt ? ui.saved : ""}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={download}
          disabled={text === ""}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {ui.download}
        </button>
        <button
          type="button"
          onClick={clear}
          disabled={text === ""}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.clear}
        </button>
      </div>
    </div>
  );
}
