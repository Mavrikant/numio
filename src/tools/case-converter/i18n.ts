import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

// Case-style names are technical identifiers, shown the same in every locale.
const MODES = {
  upper: "UPPERCASE",
  lower: "lowercase",
  title: "Title Case",
  sentence: "Sentence case",
  camel: "camelCase",
  pascal: "PascalCase",
  snake: "snake_case",
  kebab: "kebab-case",
};

const ph: Record<string, string> = {
  en: "Type or paste text to convert…",
  tr: "Dönüştürmek için metin yazın veya yapıştırın…",
  de: "Text zum Umwandeln eingeben oder einfügen…",
  fr: "Tapez ou collez le texte à convertir…",
  es: "Escribe o pega el texto a convertir…",
  it: "Digita o incolla il testo da convertire…",
  ar: "اكتب أو الصق النص للتحويل…",
  ru: "Введите или вставьте текст для преобразования…",
  zh: "输入或粘贴要转换的文本…",
  ja: "変換するテキストを入力または貼り付け…",
  ko: "변환할 텍스트를 입력하거나 붙여넣으세요…",
  hi: "बदलने के लिए टेक्स्ट टाइप या पेस्ट करें…",
};

const meta = {
  en: { title: "Case Converter", short: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more.", description: "Free online case converter. Paste text and switch instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case and kebab-case. Runs entirely in your browser.", keywords: ["case converter", "uppercase", "lowercase", "title case", "camelcase", "snake case", "kebab case"] },
  pt: { title: "Case Converter", short: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more.", description: "Free online case converter. Paste text and switch instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case and kebab-case. Runs entirely in your browser.", keywords: ["case converter", "uppercase", "lowercase", "title case", "camelcase", "snake case", "kebab case"] },
  id: { title: "Case Converter", short: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more.", description: "Free online case converter. Paste text and switch instantly between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case and kebab-case. Runs entirely in your browser.", keywords: ["case converter", "uppercase", "lowercase", "title case", "camelcase", "snake case", "kebab case"] },

  tr: { title: "Harf Durumu Dönüştürücü", short: "Metni BÜYÜK HARF, küçük harf, Başlık Düzeni, camelCase, snake_case ve daha fazlasına çevirin.", description: "Ücretsiz çevrimiçi harf durumu dönüştürücü. Metni yapıştırın ve BÜYÜK HARF, küçük harf, Başlık Düzeni, Cümle düzeni, camelCase, PascalCase, snake_case ve kebab-case arasında anında geçiş yapın. Tamamen tarayıcınızda çalışır.", keywords: ["harf durumu dönüştürücü", "büyük harf", "küçük harf", "başlık düzeni", "camelcase", "snake case", "kebab case"] },
  de: { title: "Groß-/Kleinschreibung-Konverter", short: "Text in GROSSBUCHSTABEN, kleinbuchstaben, Title Case, camelCase, snake_case und mehr umwandeln.", description: "Kostenloser Online-Konverter für Groß-/Kleinschreibung. Text einfügen und sofort zwischen GROSSBUCHSTABEN, kleinbuchstaben, Title Case, Satzform, camelCase, PascalCase, snake_case und kebab-case wechseln.", keywords: ["Groß-Kleinschreibung", "Großbuchstaben", "Kleinbuchstaben", "Title Case", "camelCase", "snake_case"] },
  fr: { title: "Convertisseur de Casse", short: "Convertissez le texte en MAJUSCULES, minuscules, Title Case, camelCase, snake_case, etc.", description: "Convertisseur de casse en ligne gratuit. Collez du texte et basculez instantanément entre MAJUSCULES, minuscules, Title Case, casse de phrase, camelCase, PascalCase, snake_case et kebab-case.", keywords: ["convertisseur de casse", "majuscules", "minuscules", "title case", "camelcase", "snake case"] },
  es: { title: "Conversor de Mayúsculas y Minúsculas", short: "Convierte texto a MAYÚSCULAS, minúsculas, Title Case, camelCase, snake_case y más.", description: "Conversor de mayúsculas y minúsculas en línea gratuito. Pega texto y cambia al instante entre MAYÚSCULAS, minúsculas, Title Case, tipo oración, camelCase, PascalCase, snake_case y kebab-case.", keywords: ["conversor de mayúsculas", "mayúsculas", "minúsculas", "title case", "camelcase", "snake case"] },
  it: { title: "Convertitore di Maiuscole/Minuscole", short: "Converti il testo in MAIUSCOLO, minuscolo, Title Case, camelCase, snake_case e altro.", description: "Convertitore di maiuscole/minuscole online gratuito. Incolla il testo e passa istantaneamente tra MAIUSCOLO, minuscolo, Title Case, stile frase, camelCase, PascalCase, snake_case e kebab-case.", keywords: ["convertitore maiuscole minuscole", "maiuscolo", "minuscolo", "title case", "camelcase", "snake case"] },
  ar: { title: "محوّل حالة الأحرف", short: "حوّل النص إلى أحرف كبيرة وصغيرة وTitle Case وcamelCase وsnake_case والمزيد.", description: "محوّل حالة أحرف مجاني عبر الإنترنت. الصق النص وبدّل فورًا بين الأحرف الكبيرة والصغيرة وTitle Case وحالة الجملة وcamelCase وPascalCase وsnake_case وkebab-case.", keywords: ["محول حالة الأحرف", "أحرف كبيرة", "أحرف صغيرة", "title case", "camelcase", "snake case"] },
  ru: { title: "Конвертер Регистра", short: "Преобразуйте текст в ВЕРХНИЙ, нижний регистр, Title Case, camelCase, snake_case и др.", description: "Бесплатный онлайн-конвертер регистра. Вставьте текст и мгновенно переключайтесь между ВЕРХНИМ, нижним регистром, Title Case, регистром предложения, camelCase, PascalCase, snake_case и kebab-case.", keywords: ["конвертер регистра", "верхний регистр", "нижний регистр", "title case", "camelcase", "snake case"] },
  zh: { title: "大小写转换器", short: "将文本转换为大写、小写、Title Case、camelCase、snake_case 等。", description: "免费的在线大小写转换器。粘贴文本，即可在大写、小写、Title Case、句首大写、camelCase、PascalCase、snake_case 和 kebab-case 之间即时切换。完全在浏览器中运行。", keywords: ["大小写转换", "大写", "小写", "title case", "camelcase", "snake case"] },
  ja: { title: "大文字・小文字変換ツール", short: "テキストを大文字、小文字、Title Case、camelCase、snake_case などに変換します。", description: "無料のオンライン大文字・小文字変換ツール。テキストを貼り付けて、大文字、小文字、Title Case、文頭大文字、camelCase、PascalCase、snake_case、kebab-case を即座に切り替えます。", keywords: ["大文字小文字変換", "大文字", "小文字", "title case", "camelcase", "snake case"] },
  ko: { title: "대소문자 변환기", short: "텍스트를 대문자, 소문자, Title Case, camelCase, snake_case 등으로 변환합니다.", description: "무료 온라인 대소문자 변환기. 텍스트를 붙여넣고 대문자, 소문자, Title Case, 문장 형식, camelCase, PascalCase, snake_case, kebab-case 사이를 즉시 전환하세요.", keywords: ["대소문자 변환기", "대문자", "소문자", "title case", "camelcase", "snake case"] },
  hi: { title: "केस कन्वर्टर", short: "टेक्स्ट को UPPERCASE, lowercase, Title Case, camelCase, snake_case आदि में बदलें।", description: "मुफ्त ऑनलाइन केस कन्वर्टर। टेक्स्ट पेस्ट करें और UPPERCASE, lowercase, Title Case, वाक्य केस, camelCase, PascalCase, snake_case और kebab-case के बीच तुरंत स्विच करें।", keywords: ["केस कन्वर्टर", "uppercase", "lowercase", "title case", "camelcase", "snake case"] },
};

const i18n = Object.fromEntries(
  (Object.keys(meta) as Array<keyof typeof meta>).map((loc) => [
    loc,
    { ...meta[loc], ui: { ...COMMON_UI[loc], ...MODES, placeholder: ph[loc] } },
  ]),
) as unknown as ToolI18n;

export default i18n;
