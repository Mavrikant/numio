import { useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import definition from "./definition";
import { aspectRatio } from "./logic";

function snapshot() {
  return {
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    devicePixelRatio: window.devicePixelRatio || 1,
    orientation: window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait",
  };
}

export default function ViewportInfoTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [info, setInfo] = useState(() => snapshot());

  useEffect(() => {
    const update = () => setInfo(snapshot());
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const cell = (label: string, value: string) => (
    <div className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-1 font-mono text-xl text-slate-900 dark:text-slate-100">{value}</div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cell(ui.viewport, `${info.viewportWidth} × ${info.viewportHeight}`)}
        {cell(ui.screen, `${info.screenWidth} × ${info.screenHeight}`)}
        {cell(ui.dpr, info.devicePixelRatio.toString())}
        {cell(ui.orientation, info.orientation)}
        {cell(ui.aspect, aspectRatio(info.viewportWidth, info.viewportHeight))}
      </div>
    </div>
  );
}
