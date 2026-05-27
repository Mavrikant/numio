import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const data = {
  en: { title: "XML Formatter", short: "Format and indent XML with a clean structure.", description: "Free XML formatter and beautifier. Paste messy or minified XML to get clean, indented output you can read and copy — all in your browser.", keywords: ["xml formatter", "xml beautifier", "format xml", "pretty print xml", "xml indent online"], input: "XML", output: "Formatted XML" },
  tr: { title: "XML Biçimlendirici", short: "XML'i temiz bir yapıyla biçimlendirin ve girintileyin.", description: "Ücretsiz XML biçimlendirici ve güzelleştirici. Dağınık veya küçültülmüş XML'i yapıştırın, okunabilir ve kopyalanabilir temiz, girintili çıktı alın — hepsi tarayıcınızda.", keywords: ["xml biçimlendirici", "xml güzelleştirici", "xml biçimlendir", "xml yazdır", "xml girinti"], input: "XML", output: "Biçimlendirilmiş XML" },
  de: { title: "XML-Formatierer", short: "Formatieren und einrücken Sie XML mit klarer Struktur.", description: "Kostenloser XML-Formatierer und -Verschönerer. Fügen Sie unübersichtliches oder minifiziertes XML ein, um saubere, eingerückte Ausgabe zu erhalten — alles im Browser.", keywords: ["xml formatierer", "xml verschönerer", "xml formatieren", "xml einrücken", "xml schön online"], input: "XML", output: "Formatiertes XML" },
  fr: { title: "Formateur XML", short: "Formatez et indentez le XML avec une structure claire.", description: "Formateur et embellisseur XML gratuit. Collez du XML désordonné ou minifié pour obtenir une sortie propre et indentée, lisible et copiable — le tout dans votre navigateur.", keywords: ["formateur xml", "embellisseur xml", "formater xml", "indenter xml", "xml propre en ligne"], input: "XML", output: "XML formaté" },
  es: { title: "Formateador XML", short: "Formatea e indenta XML con una estructura limpia.", description: "Formateador y embellecedor XML gratuito. Pega XML desordenado o minificado para obtener una salida limpia e indentada, legible y copiable — todo en tu navegador.", keywords: ["formateador xml", "embellecedor xml", "formatear xml", "indentar xml", "xml limpio online"], input: "XML", output: "XML formateado" },
  it: { title: "Formattatore XML", short: "Formatta e indenta XML con una struttura pulita.", description: "Formattatore e abbellitore XML gratuito. Incolla XML disordinato o minificato per ottenere un output pulito e indentato, leggibile e copiabile — tutto nel browser.", keywords: ["formattatore xml", "abbellitore xml", "formattare xml", "indentare xml", "xml pulito online"], input: "XML", output: "XML formattato" },
  ar: { title: "منسّق XML", short: "نسّق وأزِح XML ببنية واضحة.", description: "منسّق ومجمّل XML مجاني. الصق XML الفوضوي أو المصغّر للحصول على مخرجات نظيفة ومُزاحة يمكن قراءتها ونسخها — كل ذلك في متصفحك.", keywords: ["منسق xml", "مجمل xml", "تنسيق xml", "إزاحة xml", "xml نظيف عبر الإنترنت"], input: "XML", output: "XML المنسّق" },
  ru: { title: "Форматер XML", short: "Форматируйте и делайте отступы в XML с чёткой структурой.", description: "Бесплатный форматер и украшатель XML. Вставьте беспорядочный или минифицированный XML, чтобы получить чистый вывод с отступами для чтения и копирования — всё в браузере.", keywords: ["форматер xml", "украшатель xml", "форматировать xml", "отступы xml", "красивый xml онлайн"], input: "XML", output: "Форматированный XML" },
  zh: { title: "XML 格式化工具", short: "以清晰的结构格式化并缩进 XML。", description: "免费的 XML 格式化和美化工具。粘贴杂乱或压缩的 XML，即可获得整洁、缩进的输出，便于阅读和复制——全部在浏览器中完成。", keywords: ["xml 格式化", "xml 美化", "格式化 xml", "xml 缩进", "在线 xml 美化"], input: "XML", output: "格式化的 XML" },
  ja: { title: "XML フォーマッタ", short: "XML を整理された構造で整形・インデント。", description: "無料の XML フォーマッタ・整形ツール。乱雑または圧縮された XML を貼り付けると、読みやすくコピー可能なクリーンでインデントされた出力が得られます——すべてブラウザ内で。", keywords: ["xml フォーマッタ", "xml 整形", "xml 整形する", "xml インデント", "xml 整形 オンライン"], input: "XML", output: "整形された XML" },
  ko: { title: "XML 포맷터", short: "깔끔한 구조로 XML을 포맷하고 들여씁니다.", description: "무료 XML 포맷터 및 미화 도구. 지저분하거나 압축된 XML을 붙여넣으면 읽고 복사할 수 있는 깔끔하고 들여쓰기된 출력을 얻습니다 — 모두 브라우저에서.", keywords: ["xml 포맷터", "xml 미화", "xml 포맷", "xml 들여쓰기", "온라인 xml 정리"], input: "XML", output: "포맷된 XML" },
  hi: { title: "XML फॉर्मेटर", short: "एक स्वच्छ संरचना के साथ XML को फॉर्मेट और इंडेंट करें।", description: "मुफ्त XML फॉर्मेटर और सौंदर्यकर्ता। गन्दा या संक्षिप्त XML पेस्ट करें और पढ़ने व कॉपी करने योग्य स्वच्छ, इंडेंट किया हुआ आउटपुट पाएं — सब आपके ब्राउज़र में।", keywords: ["xml फॉर्मेटर", "xml सौंदर्यकर्ता", "xml फॉर्मेट", "xml इंडेंट", "ऑनलाइन xml सुंदर"], input: "XML", output: "फॉर्मेट किया XML" },
};

const i18n = Object.fromEntries(
  (Object.keys(data) as Array<keyof typeof data>).map((loc) => {
    const { title, short, description, keywords, ...rest } = data[loc];
    return [loc, { title, short, description, keywords, ui: { ...COMMON_UI[loc], ...rest } }];
  }),
) as unknown as ToolI18n;

export default i18n;
