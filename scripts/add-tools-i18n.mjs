#!/usr/bin/env node
/**
 * One-off script: add `nav.tools` and `tools.*` keys to all 12 UI i18n files.
 * Safe to re-run — only inserts missing keys.
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const UI_DIR = "src/i18n/ui";

const TRANSLATIONS = {
  en: { nav: "Tools", desc: "Upload CSV data and create interactive visualizations — histograms, scatter plots, time series, and descriptive statistics.", catalog: "Browse all tools", upload: "Upload your data" },
  tr: { nav: "Araçlar", desc: "CSV veri yükleyin ve interaktif görselleştirmeler oluşturun — histogramlar, dağılım grafikleri, zaman serileri ve tanımlayıcı istatistikler.", catalog: "Tüm araçları gör", upload: "Verinizi yükleyin" },
  de: { nav: "Werkzeuge", desc: "CSV-Daten hochladen und interaktive Visualisierungen erstellen — Histogramme, Streudiagramme, Zeitreihen und deskriptive Statistik.", catalog: "Alle Werkzeuge anzeigen", upload: "Daten hochladen" },
  fr: { nav: "Outils", desc: "Téléchargez des données CSV et créez des visualisations interactives — histogrammes, nuages de points, séries chronologiques et statistiques descriptives.", catalog: "Voir tous les outils", upload: "Téléverser vos données" },
  es: { nav: "Herramientas", desc: "Suba datos CSV y cree visualizaciones interactivas — histogramas, gráficos de dispersión, series temporales y estadísticas descriptivas.", catalog: "Ver todas las herramientas", upload: "Suba sus datos" },
  it: { nav: "Strumenti", desc: "Carica dati CSV e crea visualizzazioni interattive — istogrammi, grafici a dispersione, serie temporali e statistica descrittiva.", catalog: "Vedi tutti gli strumenti", upload: "Carica i tuoi dati" },
  ar: { nav: "أدوات", desc: "ارفع بيانات CSV وأنشئ تصورات تفاعلية — مخططات تكرارية، مخططات تشتت، سلاسل زمنية وإحصاء وصفي.", catalog: "تصفح جميع الأدوات", upload: "ارفع بياناتك" },
  ru: { nav: "Инструменты", desc: "Загружайте CSV-данные и создавайте интерактивные визуализации — гистограммы, диаграммы рассеяния, временные ряды и описательную статистику.", catalog: "Все инструменты", upload: "Загрузите данные" },
  zh: { nav: "工具", desc: "上传 CSV 数据并创建交互式可视化 — 直方图、散点图、时间序列和描述性统计。", catalog: "查看所有工具", upload: "上传您的数据" },
  ja: { nav: "ツール", desc: "CSV データをアップロードしてインタラクティブな可視化を作成 — ヒストグラム、散布図、時系列、記述統計。", catalog: "すべてのツールを見る", upload: "データをアップロード" },
  ko: { nav: "도구", desc: "CSV 데이터를 업로드하고 인터랙티브 시각화 만들기 — 히스토그램, 산점도, 시계열 및 기술 통계.", catalog: "모든 도구 보기", upload: "데이터 업로드" },
  hi: { nav: "उपकरण", desc: "CSV डेटा अपलोड करें और इंटरैक्टिव विज़ुअलाइज़ेशन बनाएं — हिस्टोग्राम, स्कैटर प्लॉट, समय श्रृंखला और वर्णनात्मक आंकड़े।", catalog: "सभी उपकरण देखें", upload: "अपना डेटा अपलोड करें" },
};

const files = readdirSync(UI_DIR).filter((f) => f.endsWith(".json"));

for (const file of files) {
  const lang = file.replace(".json", "");
  const t = TRANSLATIONS[lang];
  if (!t) {
    console.warn(`No translations for ${lang}, skipping`);
    continue;
  }
  const path = join(UI_DIR, file);
  const obj = JSON.parse(readFileSync(path, "utf8"));

  let modified = false;

  if (!obj.nav.tools) {
    obj.nav.tools = t.nav;
    modified = true;
  }
  if (!obj.tools) {
    obj.tools = {
      description: t.desc,
      browseCatalog: t.catalog,
      uploadData: t.upload,
    };
    modified = true;
  }

  if (modified) {
    writeFileSync(path, JSON.stringify(obj, null, 2) + "\n");
    console.log(`✓ Updated ${lang}`);
  } else {
    console.log(`  ${lang} already has tools keys`);
  }
}
