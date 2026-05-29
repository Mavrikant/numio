import type { CalculatorI18n } from "@/types/i18n";

const io = (v: string, d: string, r: string, ru: string, rd: string, t: string) => ({
  inputs: { value: { label: v }, decimals: { label: d } },
  outputs: { rounded: { label: r }, roundedUp: { label: ru }, roundedDown: { label: rd }, truncated: { label: t } },
});

const i18n: CalculatorI18n = {
  en: {
    title: "Rounding Calculator", short: "Round a number to any number of decimals — nearest, up, down or truncated.",
    description: "Free rounding calculator. Enter a number and the decimal places to see it rounded to the nearest value, rounded up (ceiling), rounded down (floor) and truncated. Handy for math, finance and reports.",
    keywords: ["rounding calculator", "round number", "round to decimal places", "round up", "round down", "truncate number"],
    ...io("Number", "Decimal places", "Rounded (nearest)", "Rounded up", "Rounded down", "Truncated"),
    faq: [
      { q: "What's the difference between rounding and truncating?", a: "Rounding goes to the nearest value (3.146 → 3.15 at 2 dp), while truncating just drops the extra digits (3.146 → 3.14). Round up always increases, round down always decreases." },
      { q: "How does 'round half' work here?", a: "We use standard round-half-up via Math.round, so 2.5 rounds to 3 and −2.5 rounds to −2 (toward +∞ at the half)." },
    ],
  },
  pt: {
    title: "Rounding Calculator", short: "Round a number to any number of decimals — nearest, up, down or truncated.",
    description: "Free rounding calculator. Enter a number and the decimal places to see it rounded to the nearest value, rounded up (ceiling), rounded down (floor) and truncated. Handy for math, finance and reports.",
    keywords: ["rounding calculator", "round number", "round to decimal places", "round up", "round down", "truncate number"],
    ...io("Number", "Decimal places", "Rounded (nearest)", "Rounded up", "Rounded down", "Truncated"),
    faq: [
      { q: "What's the difference between rounding and truncating?", a: "Rounding goes to the nearest value (3.146 → 3.15 at 2 dp), while truncating just drops the extra digits (3.146 → 3.14). Round up always increases, round down always decreases." },
      { q: "How does 'round half' work here?", a: "We use standard round-half-up via Math.round, so 2.5 rounds to 3 and −2.5 rounds to −2 (toward +∞ at the half)." },
    ],
  },
  id: {
    title: "Rounding Calculator", short: "Round a number to any number of decimals — nearest, up, down or truncated.",
    description: "Free rounding calculator. Enter a number and the decimal places to see it rounded to the nearest value, rounded up (ceiling), rounded down (floor) and truncated. Handy for math, finance and reports.",
    keywords: ["rounding calculator", "round number", "round to decimal places", "round up", "round down", "truncate number"],
    ...io("Number", "Decimal places", "Rounded (nearest)", "Rounded up", "Rounded down", "Truncated"),
    faq: [
      { q: "What's the difference between rounding and truncating?", a: "Rounding goes to the nearest value (3.146 → 3.15 at 2 dp), while truncating just drops the extra digits (3.146 → 3.14). Round up always increases, round down always decreases." },
      { q: "How does 'round half' work here?", a: "We use standard round-half-up via Math.round, so 2.5 rounds to 3 and −2.5 rounds to −2 (toward +∞ at the half)." },
    ],
  },

  tr: {
    title: "Yuvarlama Hesaplayıcı", short: "Bir sayıyı istediğiniz ondalığa yuvarlayın — en yakın, yukarı, aşağı veya kesme.",
    description: "Ücretsiz yuvarlama hesaplayıcı. Bir sayı ve ondalık basamak sayısı girerek en yakın değere yuvarlanmış, yukarı (tavan), aşağı (taban) yuvarlanmış ve kesilmiş halini görün. Matematik, finans ve raporlar için kullanışlı.",
    keywords: ["yuvarlama hesaplama", "sayı yuvarlama", "ondalığa yuvarlama", "yukarı yuvarlama", "aşağı yuvarlama", "sayı kesme"],
    ...io("Sayı", "Ondalık basamak", "Yuvarlanmış (en yakın)", "Yukarı yuvarlanmış", "Aşağı yuvarlanmış", "Kesilmiş"),
    faq: [
      { q: "Yuvarlama ile kesme arasındaki fark nedir?", a: "Yuvarlama en yakın değere gider (2 basamakta 3,146 → 3,15), kesme ise fazla basamakları atar (3,146 → 3,14). Yukarı yuvarlama her zaman artırır, aşağı her zaman azaltır." },
      { q: "'Yarımı yuvarlama' burada nasıl çalışır?", a: "Math.round ile standart yarım-yukarı kullanırız; yani 2,5 → 3 ve −2,5 → −2 (yarımda +∞ yönüne)." },
    ],
  },
  de: { title: "Rundungsrechner", short: "Eine Zahl auf beliebige Dezimalstellen runden — nächster Wert, auf, ab oder gekürzt.", description: "Kostenloser Rundungsrechner. Geben Sie eine Zahl und die Dezimalstellen ein, um den gerundeten (nächsten), aufgerundeten, abgerundeten und gekürzten Wert zu sehen.", keywords: ["rundungsrechner", "zahl runden", "auf dezimalstellen runden", "aufrunden", "abrunden", "zahl kürzen"], ...io("Zahl", "Dezimalstellen", "Gerundet (nächster)", "Aufgerundet", "Abgerundet", "Gekürzt") },
  fr: { title: "Calculateur d'Arrondi", short: "Arrondissez un nombre à n'importe quelle décimale — au plus proche, supérieur, inférieur ou tronqué.", description: "Calculateur d'arrondi gratuit. Saisissez un nombre et le nombre de décimales pour voir la valeur arrondie au plus proche, arrondie au supérieur, à l'inférieur et tronquée.", keywords: ["calculateur d'arrondi", "arrondir un nombre", "arrondir aux décimales", "arrondir au supérieur", "arrondir à l'inférieur", "tronquer"], ...io("Nombre", "Décimales", "Arrondi (au plus proche)", "Arrondi supérieur", "Arrondi inférieur", "Tronqué") },
  es: { title: "Calculadora de Redondeo", short: "Redondea un número a cualquier decimal — al más cercano, arriba, abajo o truncado.", description: "Calculadora de redondeo gratuita. Introduce un número y los decimales para ver el valor redondeado al más cercano, hacia arriba, hacia abajo y truncado.", keywords: ["calculadora de redondeo", "redondear número", "redondear a decimales", "redondear arriba", "redondear abajo", "truncar"], ...io("Número", "Decimales", "Redondeado (más cercano)", "Redondeado arriba", "Redondeado abajo", "Truncado") },
  it: { title: "Calcolatore di Arrotondamento", short: "Arrotonda un numero a qualsiasi decimale — al più vicino, su, giù o troncato.", description: "Calcolatore di arrotondamento gratuito. Inserisci un numero e i decimali per vedere il valore arrotondato al più vicino, per eccesso, per difetto e troncato.", keywords: ["calcolatore arrotondamento", "arrotondare numero", "arrotondare ai decimali", "arrotondare per eccesso", "arrotondare per difetto", "troncare"], ...io("Numero", "Decimali", "Arrotondato (più vicino)", "Per eccesso", "Per difetto", "Troncato") },
  ar: { title: "حاسبة التقريب", short: "قرّب عددًا إلى أي عدد من المنازل العشرية — الأقرب أو لأعلى أو لأسفل أو بالقص.", description: "حاسبة تقريب مجانية. أدخل عددًا وعدد المنازل العشرية لرؤية القيمة المقرّبة للأقرب ولأعلى ولأسفل والمقصوصة.", keywords: ["حاسبة التقريب", "تقريب عدد", "تقريب إلى منازل عشرية", "تقريب لأعلى", "تقريب لأسفل", "قص العدد"], ...io("العدد", "المنازل العشرية", "مقرّب (الأقرب)", "مقرّب لأعلى", "مقرّب لأسفل", "مقصوص") },
  ru: { title: "Калькулятор Округления", short: "Округлите число до любого числа знаков — ближайшее, вверх, вниз или усечение.", description: "Бесплатный калькулятор округления. Введите число и число знаков после запятой, чтобы увидеть округление до ближайшего, вверх, вниз и усечение.", keywords: ["калькулятор округления", "округлить число", "округление до знаков", "округление вверх", "округление вниз", "усечение"], ...io("Число", "Знаков после запятой", "Округлено (ближайшее)", "Округлено вверх", "Округлено вниз", "Усечено") },
  zh: { title: "四舍五入计算器", short: "将数字四舍五入到任意小数位——最接近、向上、向下或截断。", description: "免费的四舍五入计算器。输入数字和小数位数，查看四舍五入到最接近值、向上取整、向下取整和截断的结果。适合数学、财务和报表。", keywords: ["四舍五入计算器", "数字取整", "保留小数位", "向上取整", "向下取整", "截断"], ...io("数字", "小数位数", "四舍五入（最接近）", "向上取整", "向下取整", "截断") },
  ja: { title: "四捨五入計算機", short: "数値を任意の小数位で丸めます — 最近接・切り上げ・切り捨て・切り捨て（トランケート）。", description: "無料の四捨五入計算機。数値と小数位を入力すると、最近接への丸め、切り上げ、切り捨て、トランケートの結果が得られます。", keywords: ["四捨五入 計算機", "数値 丸め", "小数位 丸め", "切り上げ", "切り捨て", "トランケート"], ...io("数値", "小数位", "丸め（最近接）", "切り上げ", "切り捨て", "トランケート") },
  ko: { title: "반올림 계산기", short: "숫자를 원하는 소수 자릿수로 반올림 — 가장 가까운 값, 올림, 내림, 버림.", description: "무료 반올림 계산기. 숫자와 소수 자릿수를 입력하면 가장 가까운 값으로 반올림, 올림, 내림, 버림한 결과를 볼 수 있습니다.", keywords: ["반올림 계산기", "숫자 반올림", "소수 자리 반올림", "올림", "내림", "버림"], ...io("숫자", "소수 자릿수", "반올림(가장 가까운)", "올림", "내림", "버림") },
  hi: { title: "राउंडिंग कैलकुलेटर", short: "किसी संख्या को किसी भी दशमलव तक राउंड करें — निकटतम, ऊपर, नीचे या ट्रंकेट।", description: "मुफ्त राउंडिंग कैलकुलेटर। एक संख्या और दशमलव स्थान दर्ज करें और निकटतम मान पर राउंड, ऊपर, नीचे तथा ट्रंकेट किया मान देखें।", keywords: ["राउंडिंग कैलकुलेटर", "संख्या राउंड", "दशमलव तक राउंड", "ऊपर राउंड", "नीचे राउंड", "ट्रंकेट"], ...io("संख्या", "दशमलव स्थान", "राउंडेड (निकटतम)", "ऊपर राउंडेड", "नीचे राउंडेड", "ट्रंकेटेड") },
};

export default i18n;
