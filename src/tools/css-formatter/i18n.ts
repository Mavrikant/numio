import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const data = {
  en: { title: "CSS Formatter", short: "Beautify and indent CSS with one click.", description: "Free CSS beautifier. Paste minified or messy CSS to get a clean, indented version with one rule per line — runs entirely in your browser.", keywords: ["css formatter", "css beautifier", "format css", "pretty print css", "css indent"], input: "CSS", output: "Formatted CSS" },
  pt: { title: "Formatador de CSS", short: "Beautify e indent CSS com one click.", description: "Gratuito - CSS beautifier. Paste minified ou messy CSS para get a clean, indented version com one rule per line â runs entirely no seu navegador.", keywords: ["css formatter", "css beautifier", "format css", "pretty print css", "css indent"], input: "CSS", output: "Formatted CSS" },
  id: { title: "Formatter CSS", short: "Beautify dan indent CSS with one click.", description: "Gratis - CSS beautifier. Paste minified atau messy CSS to get a clean, indented version with one rule per line â runs entirely di browser Anda.", keywords: ["css formatter", "css beautifier", "format css", "pretty print css", "css indent"], input: "CSS", output: "Formatted CSS" },

  tr: { title: "CSS Biçimlendirici", short: "CSS'i tek tıkla güzelleştirin ve girintileyin.", description: "Ücretsiz CSS güzelleştirici. Küçültülmüş veya dağınık CSS yapıştırın ve her satırda bir kural olacak şekilde temiz, girintili bir sürüm alın — tamamen tarayıcınızda çalışır.", keywords: ["css biçimlendirici", "css güzelleştirici", "css biçimlendir", "css yazdır", "css girinti"], input: "CSS", output: "Biçimlendirilmiş CSS" },
  de: { title: "CSS-Formatierer", short: "CSS mit einem Klick verschönern und einrücken.", description: "Kostenloser CSS-Verschönerer. Fügen Sie minifiziertes oder unübersichtliches CSS ein, um eine saubere, eingerückte Version mit einer Regel pro Zeile zu erhalten — läuft vollständig im Browser.", keywords: ["css formatierer", "css verschönerer", "css formatieren", "css einrücken", "css schön"], input: "CSS", output: "Formatiertes CSS" },
  fr: { title: "Formateur CSS", short: "Embellissez et indentez le CSS en un clic.", description: "Embellisseur CSS gratuit. Collez du CSS minifié ou désordonné pour obtenir une version propre et indentée avec une règle par ligne — fonctionne entièrement dans votre navigateur.", keywords: ["formateur css", "embellisseur css", "formater css", "indenter css", "css propre"], input: "CSS", output: "CSS formaté" },
  es: { title: "Formateador CSS", short: "Embellece e indenta CSS con un clic.", description: "Embellecedor CSS gratuito. Pega CSS minificado o desordenado para obtener una versión limpia e indentada con una regla por línea — funciona completamente en tu navegador.", keywords: ["formateador css", "embellecedor css", "formatear css", "indentar css", "css limpio"], input: "CSS", output: "CSS formateado" },
  it: { title: "Formattatore CSS", short: "Abbellisci e indenta CSS con un clic.", description: "Abbellitore CSS gratuito. Incolla CSS minificato o disordinato per ottenere una versione pulita e indentata con una regola per riga — funziona interamente nel browser.", keywords: ["formattatore css", "abbellitore css", "formattare css", "indentare css", "css pulito"], input: "CSS", output: "CSS formattato" },
  ar: { title: "منسّق CSS", short: "زيّن وأزِح CSS بنقرة واحدة.", description: "مجمّل CSS مجاني. الصق CSS مصغّر أو فوضوي للحصول على نسخة نظيفة ومُزاحة بقاعدة واحدة في كل سطر — يعمل بالكامل في متصفحك.", keywords: ["منسق css", "مجمل css", "تنسيق css", "إزاحة css", "css نظيف"], input: "CSS", output: "CSS المنسّق" },
  ru: { title: "Форматер CSS", short: "Украсьте и сделайте отступы в CSS одним кликом.", description: "Бесплатный украшатель CSS. Вставьте минифицированный или беспорядочный CSS, чтобы получить чистую версию с отступами и одним правилом на строку — работает полностью в браузере.", keywords: ["форматер css", "украшатель css", "форматировать css", "отступы css", "красивый css"], input: "CSS", output: "Форматированный CSS" },
  zh: { title: "CSS 格式化工具", short: "一键美化和缩进 CSS。", description: "免费的 CSS 美化工具。粘贴压缩或杂乱的 CSS，即可获得每行一条规则的整洁、缩进版本——完全在浏览器中运行。", keywords: ["css 格式化", "css 美化", "格式化 css", "css 缩进", "css 美化"], input: "CSS", output: "格式化的 CSS" },
  ja: { title: "CSS フォーマッタ", short: "ワンクリックで CSS を整形・インデント。", description: "無料の CSS 整形ツール。圧縮された CSS や乱雑な CSS を貼り付けると、1 行に 1 ルールのクリーンでインデントされたバージョンが得られます——すべてブラウザ内で動作します。", keywords: ["css フォーマッタ", "css 整形", "css 整形する", "css インデント", "css 整形 オンライン"], input: "CSS", output: "整形された CSS" },
  ko: { title: "CSS 포맷터", short: "한 번의 클릭으로 CSS를 미화하고 들여씁니다.", description: "무료 CSS 미화 도구. 압축되거나 지저분한 CSS를 붙여넣으면 한 줄에 한 규칙씩 깔끔하고 들여쓰기된 버전을 얻습니다 — 모두 브라우저에서 실행됩니다.", keywords: ["css 포맷터", "css 미화", "css 포맷", "css 들여쓰기", "css 정리"], input: "CSS", output: "포맷된 CSS" },
  hi: { title: "CSS फॉर्मेटर", short: "एक क्लिक से CSS को सुंदर बनाएं और इंडेंट करें।", description: "मुफ्त CSS सौंदर्यकर्ता। संक्षिप्त या गन्दा CSS पेस्ट करें और प्रति पंक्ति एक नियम के साथ स्वच्छ, इंडेंट संस्करण पाएं — पूरी तरह आपके ब्राउज़र में चलता है।", keywords: ["css फॉर्मेटर", "css सौंदर्यकर्ता", "css फॉर्मेट", "css इंडेंट", "css सुंदर"], input: "CSS", output: "फॉर्मेट किया CSS" },
};

const i18n = Object.fromEntries(
  (Object.keys(data) as Array<keyof typeof data>).map((loc) => {
    const { title, short, description, keywords, ...rest } = data[loc];
    return [loc, { title, short, description, keywords, ui: { ...COMMON_UI[loc], ...rest } }];
  }),
) as unknown as ToolI18n;

export default i18n;
