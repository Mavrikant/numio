import type { Locale } from "@/config/site";

/**
 * Common UI strings shared across the text/developer tools, in all 12 locales.
 * Each tool spreads `COMMON_UI[locale]` into its own `ui` bundle and adds only
 * the strings unique to that tool, so the universal chrome (Input, Copy, …) is
 * translated once.
 */
export const COMMON_UI: Record<Locale, Record<string, string>> = {
  en: { input: "Input", output: "Output", copy: "Copy", copied: "Copied!", clear: "Clear", swap: "Swap", result: "Result" },
  tr: { input: "Girdi", output: "Çıktı", copy: "Kopyala", copied: "Kopyalandı!", clear: "Temizle", swap: "Değiştir", result: "Sonuç" },
  de: { input: "Eingabe", output: "Ausgabe", copy: "Kopieren", copied: "Kopiert!", clear: "Löschen", swap: "Tauschen", result: "Ergebnis" },
  fr: { input: "Entrée", output: "Sortie", copy: "Copier", copied: "Copié !", clear: "Effacer", swap: "Inverser", result: "Résultat" },
  es: { input: "Entrada", output: "Salida", copy: "Copiar", copied: "¡Copiado!", clear: "Limpiar", swap: "Intercambiar", result: "Resultado" },
  it: { input: "Input", output: "Output", copy: "Copia", copied: "Copiato!", clear: "Cancella", swap: "Inverti", result: "Risultato" },
  pt: { input: "Entrada", output: "Saída", copy: "Copiar", copied: "Copiado!", clear: "Limpar", swap: "Trocar", result: "Resultado" },
  id: { input: "Input", output: "Output", copy: "Salin", copied: "Disalin!", clear: "Hapus", swap: "Tukar", result: "Hasil" },
  ar: { input: "المدخل", output: "المخرج", copy: "نسخ", copied: "تم النسخ!", clear: "مسح", swap: "تبديل", result: "النتيجة" },
  ru: { input: "Ввод", output: "Вывод", copy: "Копировать", copied: "Скопировано!", clear: "Очистить", swap: "Поменять", result: "Результат" },
  zh: { input: "输入", output: "输出", copy: "复制", copied: "已复制！", clear: "清除", swap: "交换", result: "结果" },
  ja: { input: "入力", output: "出力", copy: "コピー", copied: "コピーしました！", clear: "クリア", swap: "入れ替え", result: "結果" },
  ko: { input: "입력", output: "출력", copy: "복사", copied: "복사됨!", clear: "지우기", swap: "교체", result: "결과" },
  hi: { input: "इनपुट", output: "आउटपुट", copy: "कॉपी", copied: "कॉपी हो गया!", clear: "साफ़ करें", swap: "अदला-बदली", result: "परिणाम" },
};
