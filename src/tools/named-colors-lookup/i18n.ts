import type { ToolI18n } from "@/types/tool";
import { COMMON_UI } from "../_shared/ui";

const data = {
  en: { title: "CSS Named Colors", short: "Browse and search the 148 CSS named colors.", description: "Free CSS named colors reference. Search all 148 CSS/HTML color keywords by name or hex and copy the hex value with one click.", keywords: ["css named colors", "html color names", "color names list", "css color keywords", "color name to hex"], search: "Search colors" },
  pt: { title: "CSS Named Colors", short: "Browse and search the 148 CSS named colors.", description: "Free CSS named colors reference. Search all 148 CSS/HTML color keywords by name or hex and copy the hex value with one click.", keywords: ["css named colors", "html color names", "color names list", "css color keywords", "color name to hex"], search: "Search colors" },
  id: { title: "CSS Named Colors", short: "Browse and search the 148 CSS named colors.", description: "Free CSS named colors reference. Search all 148 CSS/HTML color keywords by name or hex and copy the hex value with one click.", keywords: ["css named colors", "html color names", "color names list", "css color keywords", "color name to hex"], search: "Search colors" },

  tr: { title: "CSS Adlandırılmış Renkler", short: "148 CSS adlandırılmış rengini tarayın ve arayın.", description: "Ücretsiz CSS adlandırılmış renkler referansı. Tüm 148 CSS/HTML renk anahtar kelimesini ada veya hex'e göre arayın ve hex değerini tek tıkla kopyalayın.", keywords: ["css adlandırılmış renkler", "html renk isimleri", "renk isimleri listesi", "css renk anahtar kelimeleri", "renk adından hex"], search: "Renk ara" },
  de: { title: "CSS-Benannte Farben", short: "Durchsuchen Sie die 148 benannten CSS-Farben.", description: "Kostenlose Referenz für benannte CSS-Farben. Durchsuchen Sie alle 148 CSS/HTML-Farbschlüsselwörter nach Name oder Hex und kopieren Sie den Hex-Wert mit einem Klick.", keywords: ["css benannte farben", "html farbnamen", "farbnamen liste", "css farb schlüsselwörter", "farbname zu hex"], search: "Farben suchen" },
  fr: { title: "Couleurs Nommées CSS", short: "Parcourez et recherchez les 148 couleurs nommées CSS.", description: "Référence gratuite des couleurs nommées CSS. Recherchez les 148 mots-clés de couleur CSS/HTML par nom ou hex et copiez la valeur hex en un clic.", keywords: ["couleurs nommées css", "noms couleurs html", "liste noms couleurs", "mots-clés couleur css", "nom couleur vers hex"], search: "Rechercher couleurs" },
  es: { title: "Colores con Nombre CSS", short: "Explora y busca los 148 colores con nombre de CSS.", description: "Referencia gratuita de colores con nombre CSS. Busca las 148 palabras clave de color CSS/HTML por nombre o hex y copia el valor hex con un clic.", keywords: ["colores con nombre css", "nombres colores html", "lista nombres colores", "palabras clave color css", "nombre color a hex"], search: "Buscar colores" },
  it: { title: "Colori con Nome CSS", short: "Esplora e cerca i 148 colori con nome CSS.", description: "Riferimento gratuito dei colori con nome CSS. Cerca tutte le 148 parole chiave di colore CSS/HTML per nome o hex e copia il valore hex con un clic.", keywords: ["colori con nome css", "nomi colori html", "lista nomi colori", "parole chiave colore css", "nome colore in hex"], search: "Cerca colori" },
  ar: { title: "ألوان CSS المسمّاة", short: "تصفح وابحث في 148 لونًا مسمّى في CSS.", description: "مرجع مجاني لألوان CSS المسمّاة. ابحث في جميع كلمات ألوان CSS/HTML الـ148 بالاسم أو hex وانسخ قيمة hex بنقرة واحدة.", keywords: ["ألوان css المسماة", "أسماء ألوان html", "قائمة أسماء الألوان", "كلمات ألوان css", "اسم اللون إلى hex"], search: "ابحث عن الألوان" },
  ru: { title: "Именованные цвета CSS", short: "Просматривайте и ищите 148 именованных цветов CSS.", description: "Бесплатный справочник именованных цветов CSS. Ищите все 148 ключевых слов цветов CSS/HTML по имени или hex и копируйте hex-значение одним кликом.", keywords: ["именованные цвета css", "названия цветов html", "список названий цветов", "ключевые слова цветов css", "имя цвета в hex"], search: "Искать цвета" },
  zh: { title: "CSS 命名颜色", short: "浏览并搜索 148 种 CSS 命名颜色。", description: "免费的 CSS 命名颜色参考。按名称或十六进制搜索全部 148 个 CSS/HTML 颜色关键字，一键复制十六进制值。", keywords: ["css 命名颜色", "html 颜色名称", "颜色名称列表", "css 颜色关键字", "颜色名称转 hex"], search: "搜索颜色" },
  ja: { title: "CSS 名前付きカラー", short: "148 の CSS 名前付きカラーを閲覧・検索。", description: "無料の CSS 名前付きカラーリファレンス。148 すべての CSS/HTML カラーキーワードを名前または16進で検索し、ワンクリックで16進値をコピーできます。", keywords: ["css 名前付きカラー", "html カラー名", "カラー名一覧", "css カラーキーワード", "カラー名から hex"], search: "カラーを検索" },
  ko: { title: "CSS 이름 있는 색상", short: "148개의 CSS 이름 있는 색상을 찾아보고 검색합니다.", description: "무료 CSS 이름 있는 색상 참조. 148개의 모든 CSS/HTML 색상 키워드를 이름 또는 hex로 검색하고 hex 값을 한 번의 클릭으로 복사하세요.", keywords: ["css 이름 있는 색상", "html 색상 이름", "색상 이름 목록", "css 색상 키워드", "색상 이름을 hex로"], search: "색상 검색" },
  hi: { title: "CSS नामित रंग", short: "148 CSS नामित रंगों को ब्राउज़ और खोजें।", description: "मुफ्त CSS नामित रंग संदर्भ। सभी 148 CSS/HTML रंग कीवर्ड को नाम या hex से खोजें और एक क्लिक में hex मान कॉपी करें।", keywords: ["css नामित रंग", "html रंग नाम", "रंग नाम सूची", "css रंग कीवर्ड", "रंग नाम से hex"], search: "रंग खोजें" },
};

const i18n = Object.fromEntries(
  (Object.keys(data) as Array<keyof typeof data>).map((loc) => {
    const { title, short, description, keywords, ...rest } = data[loc];
    return [loc, { title, short, description, keywords, ui: { ...COMMON_UI[loc], ...rest } }];
  }),
) as unknown as ToolI18n;

export default i18n;
